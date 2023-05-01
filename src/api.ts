import { GetTokenSilentlyOptions } from '@auth0/auth0-react';
import axios from 'axios';
import { User } from './types/models';

axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export const configureInterceptors = (
  getToken: (options?: GetTokenSilentlyOptions) => Promise<string>
) => {
  axios.interceptors.request.use(
    async function (config) {
      const accessToken = await getToken();

      if (!accessToken) {
        return config;
      }
      config.headers.set('Authorization', `Bearer ${accessToken}`, true);

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export async function getUsers() {
  const res = await axios.get<User[]>('/users');
  return res.data;
}
