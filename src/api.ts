import { GetTokenSilentlyOptions, IdToken } from '@auth0/auth0-react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/';

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

export async function getMe(claims: IdToken) {
  const res = await axios.post('/users/me', claims);
  return res.data;
}
