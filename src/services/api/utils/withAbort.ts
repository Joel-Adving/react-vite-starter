import axios, { Cancel } from 'axios';
import { ApiError, ApiExecutor, ApiExecutorArgs, ApiRequestConfig, WithAbortFn } from '../api.types';

export const didAbort = (error: unknown): error is Cancel & { aborted: boolean } => axios.isCancel(error);

export const isApiError = (error: unknown): error is ApiError => {
  return axios.isAxiosError(error);
};

export function withAbort<T>(fn: WithAbortFn) {
  const executor: ApiExecutor<T> = async (...args: ApiExecutorArgs) => {
    const originalConfig = args[args.length - 1] as ApiRequestConfig;

    const getCancelSource = () => axios.CancelToken.source();

    // Extract abort property from the config
    const { abort, ...config } = originalConfig;

    // Create cancel token and abort method only if abort
    // function was passed
    if (typeof abort === 'function') {
      const { cancel, token } = getCancelSource();
      config.cancelToken = token;
      abort(cancel);
    }

    try {
      if (args.length > 2) {
        const [url, body] = args;
        return await fn<T>(url, body, config);
      } else {
        const [url] = args;
        return await fn<T>(url, config);
      }
    } catch (error) {
      console.log('api error', error);

      // Add "aborted" property to the error if the request was cancelled
      if (didAbort(error)) {
        error.aborted = true;
      }
      throw error;
    }
  };
  return executor;
}
