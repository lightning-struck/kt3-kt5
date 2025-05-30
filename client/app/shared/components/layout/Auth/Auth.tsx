'use client'
import { AxiosInterceptor } from '@/app/shared/core/http';
import { useUserStore } from '@/app/shared/core/providers/userProvider';
import { useLocalStorage } from '@/app/shared/hooks/useLocalStorage';
import axios from 'axios';
import React from 'react'

export const Auth = () => {
  const [loading, setLoading] = React.useState(true);
  const [token, setToken, removeToken] = useLocalStorage('token', '');
  const { setUser } = useUserStore(state => state);

  React.useEffect(() => {
    setLoading(true)
    const checkAuth = async () => {
      try {
        if (token) {
          const instance = axios.create({
            baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
            headers: {
              Authorization: `Bearer ${token}`
            }
          });

          const { data } = await instance.get('/user/me');
          setUser(data.id, data.login,  data.email, data.phone);
          
          AxiosInterceptor.setAuthToken(token);
        }
      }
       finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [token, setUser, removeToken]);

  return null;
}