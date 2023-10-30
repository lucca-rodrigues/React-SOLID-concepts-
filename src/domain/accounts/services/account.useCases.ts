import HttpClient from "@infra/httpRequest";
import { IAccountServices } from "@domain/accounts/models";

export default class AccountServices implements IAccountServices {
  private baseUrl = process.env.API_URL ?? "http://localhost:3333/api";

  async get() {
    const service = new HttpClient(this.baseUrl);
    const response = await service.get("/");

    return response?.data?.accounts ?? [];
  }

  post() {
    throw new Error("Method not implemented.");
  }
  patch() {
    throw new Error("Method not implemented.");
  }
  update() {
    throw new Error("Method not implemented.");
  }
  delete() {
    // throw new Error("Method not implemented.");
  }
}
