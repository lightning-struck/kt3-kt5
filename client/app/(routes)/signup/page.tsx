'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import Button from '@/app/shared/components/UIKIT/Button/Button';
import { AxiosInterceptor } from '@/app/shared/core/http';
import { useLocalStorage } from '@/app/shared/hooks/useLocalStorage';
import { useUserStore } from '@/app/shared/core/providers/userProvider';
import { SignupForm } from '@/components/sign-up-form';


export interface SignupFormProps extends React.ComponentPropsWithoutRef<'form'> {
  formData: {
    login: string;
    phone: string;
    email: string;
    password: string;
    repeatPassword: string;
  };
  errors: Record<string, string>;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Page() {
  const [value, setValue, removeValue] = useLocalStorage('token', '');
  const { setUser } = useUserStore(state => state);
  const [formData, setFormData] = useState({
    login: '',
    phone: '',
    email: '',
    password: '',
    repeatPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }));
    }
  };

  const validateForm = () => {
    const EMAIL_REGEXP =
		/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
    const newErrors: Record<string, string> = {};

    if (!formData.login || formData.login.length < 3) {
      newErrors.login = 'Имя пользователя должно быть не менее 3 символов';
    }

    if (!formData.phone || !/^[\d\+]{11,15}$/.test(formData.phone)) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }
    if (!formData.email){
      newErrors.email = 'Введите корректный адрес эл.почты';
    }

    if (formData.password !== formData.repeatPassword) {
      newErrors.repeatPassword = 'Пароли не совпадают';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const signinHandler = async (login: string, password: string) => {
    if (login && password.length > 5) {
     
      const data = await AxiosInterceptor.$post('/user/signin', { login, password });
      if (data.status === 200) {
        const { body } = data;
        setValue(body.token);
        AxiosInterceptor.setAuthToken(data.token)
        setUser(1, body.user.login);
        router.push('/');
      } else {
       alert('false')
        // console.log('Error:', data);
      }
    }
  };

  const signupHandler = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const data = await AxiosInterceptor.$post('/user/signup', {
        login: formData.login,
        password: formData.password,
        phone: formData.phone,
        email: formData.email
      });

      if (data.status === 200) {
         signinHandler(formData.login, formData.password)
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="grid min-h-svh lg:grid-cols-2 ">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignupForm
              formData={formData}
              errors={errors}
              onChange={handleChange}
              onSubmit={signupHandler}
            />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block flex justify-center">
        <div className="flex justify-center h-full items-center">
          <h2 className="text-2xl font-bold text-center">
            Екатерина Кузнецова <br />
            login-02 <br /> <br />
            переведено на русский <br />
            кнопка github авторизации выключена
          </h2>

          {/* <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            /> */}
        </div>
      </div>
    </div>
  );
}
