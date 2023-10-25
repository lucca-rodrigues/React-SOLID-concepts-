import { IAccountUseCases } from "@domain/accounts/models";
import HttpClient from "@infra/httpRequest";

export default class FakeAccountUseCases implements IAccountUseCases {
  private baseUrl = process.env.FAKE_API_URL ?? "";

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
    throw new Error("Method not implemented.");
  }
}
