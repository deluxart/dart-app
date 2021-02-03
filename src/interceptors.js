import axios from 'axios';

export const JWT_TOKEN = 'accessToken';

const addHeader = (config) => {
  return new Promise((resolve) => {
    const jwtCookie = localStorage.getItem(JWT_TOKEN); // eslint-disable-line
    return jwtCookie?.length > 2
      ? resolve({
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${jwtCookie}`,
            'Access-Control-Allow-Origin': '*',
          },
        })
      : resolve({ ...config, 'Access-Control-Allow-Origin': '*' });
  });
};

const useInterceptors = () => {
  axios.defaults.baseURL = process.env.REACT_APP_MAIN_API_URL || '';

  axios.interceptors.request.use(
    (config) => {
      return addHeader(config).catch((_) => _);
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );
};

export default useInterceptors;
