import axios from "axios";

import { HttpRequestParams } from "./contracts";

export default class HttpClient {
  constructor(private readonly baseUrl: string) {}
  // async get(params?: HttpRequestParams): Promise<any> {
  api() {
    return axios.create({
      baseURL: this.baseUrl,
    });
  }

  async get(path: string) {
    try {
      const response = await this.api().get(`${path}`);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }

  // async post(params: HttpRequestParams): Promise<any> {
  //   // const response = await backendURL.request(params);
  //   const response = await api.post(`${baseUrl}/${params.path}`);

  //   console.log("response", response);
  //   // return response ?? null;
  // }

  // async put(params: HttpRequestParams): Promise<any> {
  //   // const response = await backendURL.request(params);
  //   const response = await api.put(`${baseUrl}/${params.path}`);

  //   console.log("response", response);
  //   // return response ?? null;
  // }

  // async patch(params: HttpRequestParams): Promise<any> {
  //   // const response = await backendURL.request(params);
  //   const response = await api.patch(`${baseUrl}/${params.path}`);

  //   console.log("response", response);
  //   // return response ?? null;
  // }

  // async delete(params: HttpRequestParams): Promise<any> {
  //   // const response = await backendURL.request(params);
  //   const response = await api.delete(`${baseUrl}/${params.path}`);

  //   console.log("response", response);
  //   // return response ?? null;
  // }
}
