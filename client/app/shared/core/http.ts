import axios from 'axios';
import axiosInstance from './axiosInstance';

export class AxiosInterceptor {
  //  @ts-expect-error environment variable may be missing
  private static readonly baseURL: string = process.env.NEXT_PUBLIC_BACKEND_URL;

  static setAuthToken(token: string) {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  static removeAuthToken() {
    delete axiosInstance.defaults.headers.common['Authorization'];
  }
  
  public static $get = async (endpoint: string) => {
    const { data } = await axios.get(AxiosInterceptor.baseURL + endpoint);
    return data;
  };

  public static $post = async (endpoint: string, data: any) => {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    console.log(AxiosInterceptor.baseURL);
    console.log(data);

    const { data: body } = await axios.post(AxiosInterceptor.baseURL + endpoint, data, { headers });
    return body;
  };

  constructor() {
    console.log('baseurl:', AxiosInterceptor.baseURL);
  }
}

new AxiosInterceptor();
