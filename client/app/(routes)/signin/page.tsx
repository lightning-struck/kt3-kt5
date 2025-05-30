'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import Button from '@/app/shared/components/UIKIT/Button/Button';
import { AxiosInterceptor } from '@/app/shared/core/http';
import { useLocalStorage } from '@/app/shared/hooks/useLocalStorage';
import { useUserStore } from '@/app/shared/core/providers/userProvider';
import { toast } from 'sonner';
import { LoginForm } from '@/components/login-form';
export default function Page() {
  const [value, setValue, removeValue] = useLocalStorage('token', '');
  const { setUser } = useUserStore(state => state);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const signinHandler = async () => {
    if (login && password.length > 5) {
     
      const data = await AxiosInterceptor.$post('/user/signin', { login, password });
      if (data.status === 200) {
        const { body } = data;
        setValue(body.token);
        AxiosInterceptor.setAuthToken(body.token);
        setUser(1, body.user.login, body.user.email, body.user.phone);
        router.push('/');
      } else {
       alert('false')
        // console.log('Error:', data);
      }
    }
  };
  return (
    <div className="grid min-h-svh lg:grid-cols-2 ">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start"></div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm onSubmitHandler={signinHandler} setLogin={setLogin} setPassword={setPassword} />
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
