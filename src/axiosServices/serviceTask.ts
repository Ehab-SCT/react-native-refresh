// import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";


export const baseURL = (): string => "https://api-example.com"

axios.defaults.baseURL = baseURL();

const axiosNetwork = axios.create({
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

let token: string | undefined;

axiosNetwork.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  try {
    // const storedToken = await AsyncStorage.getItem("token") || token;
    const storedToken = "token from your async storage / state management" || token;

    config.params = {
      ...config.params,
    };
    if (
      storedToken
    ) {
      if (!config.headers.Authorization) {

        config.headers.Authorization = `Bearer ${storedToken}`;
      }
    }
  } finally {
    return config;
  }
});

axiosNetwork.interceptors.response.use(
  async (response: AxiosResponse) => {
    try {
      const { config, request, status, data, headers } = response;
      if (data?.token) {
        token = data?.token;
      } else if (headers?.token) {
        token = headers.token;
      }
    } finally {
      return response;
    }
  },
  async (error) => {
    try {
      const { config, request, status, data, headers } = error?.response;
      if (status === 401) {

      }

      if (status === 400) {

      }
    } finally {
      return Promise.reject({ error: error.response });
    }
  }
);

const APIGet = async (
  url: string,
  config?: AxiosRequestConfig
): Promise<any> => {
  return axiosNetwork
    .get(url, config)
    .then((response: AxiosResponse) => Object.hasOwn(response, 'data') ? response.data : response)
    .catch((error) => error);
};

const APIPost = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<any> => {
  return axiosNetwork
    .post(url, data, config)
    .then((response: AxiosResponse) => Object.hasOwn(response, 'data') ? response.data : response)
    .catch((error) => error);
};

const APIDelete = async ({
  path,
  config,
}: {
  path: string;
  config?: AxiosRequestConfig;
}): Promise<any> => {
  return axiosNetwork
    .delete(path, config)
    .then((response: AxiosResponse) => Object.hasOwn(response, 'data') ? response.data : response)
    .catch((error) => error);
};

const APIPut = async (
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<any> => {
  return axiosNetwork
    .put(url, data, config)
    .then((response: AxiosResponse) => Object.hasOwn(response, 'data') ? response.data : response)
    .catch((error) => error);
};

export { APIGet, APIPost, APIDelete, APIPut };