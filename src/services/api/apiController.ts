import { AxiosInstance } from 'axios';
import { ApiRequestConfig } from './api.types';
import { withAbort } from './utils/withAbort';
import { withLogger } from './utils/withLogger';

export default class ApiController {
  private readonly _axios: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this._axios = axiosInstance;
  }

  public get<T>(url: string, config: ApiRequestConfig = {}) {
    return withLogger<T>(withAbort<T>(this._axios.get)(url, config));
  }

  public delete<T>(url: string, config: ApiRequestConfig = {}) {
    return withLogger<T>(withAbort<T>(this._axios.delete)(url, config));
  }

  public post<T>(url: string, body: unknown, config: ApiRequestConfig = {}) {
    return withLogger<T>(withAbort<T>(this._axios.post)(url, body, config));
  }

  public patch<T>(url: string, body: unknown, config: ApiRequestConfig = {}) {
    return withLogger<T>(withAbort<T>(this._axios.patch)(url, body, config));
  }

  public put<T>(url: string, body: unknown, config: ApiRequestConfig = {}) {
    return withLogger<T>(withAbort<T>(this._axios.put)(url, body, config));
  }
}
