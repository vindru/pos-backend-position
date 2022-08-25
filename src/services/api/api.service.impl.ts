import axios, {AxiosInstance, AxiosResponse, AxiosRequestConfig, AxiosError} from 'axios';
import * as _ from 'lodash';

import {APIService} from './api.service';

const BASE_PATH = 'http://localhost:5001/api/'

export class APIServiceImpl implements APIService {
  service: AxiosInstance
  constructor() {
    this.service = axios.create({
      baseURL: BASE_PATH,
    });
    this.service.interceptors.request.use((request): AxiosRequestConfig => {
      // can modify request here ex- send auth token
      return request;
    });

    this.service.interceptors.response.use(
      (response): AxiosResponse => {
        return response;
      },
      (error): Promise<AxiosError> => {
        return Promise.reject(error);
      },
    );
  }

  protected static parseError(response: AxiosResponse): string {
    return _.get(response, 'response.data.error', '');
  }

  protected async get(path: string): Promise<AxiosResponse> {
    return await this.service.get(path);
  }

  protected async patch(path: string, payload: any): Promise<AxiosResponse> {
    return await this.service.patch(path, payload);
  }

  protected async put(path: string, payload: any): Promise<AxiosResponse> {
    return await this.service.put(path, payload);
  }

  protected async post(path: string, payload: any): Promise<AxiosResponse> {
    return await this.service.post(path, null ,payload);
  }

  protected async delete(path: string, payload: any): Promise<AxiosResponse> {
    return await this.service.delete(path, payload);
  }
}
