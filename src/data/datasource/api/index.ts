import axios, {AxiosInstance} from 'axios';

export default class Api {
  private static apiInstance: AxiosInstance;
  public static getApiInstance(baseUrl: string): AxiosInstance {
    const api = axios.create({
      baseURL: baseUrl,
      timeout: 1200,
      //headers: {Authorization: 'Bearer ' + token},,
    });
    this.apiInstance = api;
    return this.apiInstance;
  }
}
