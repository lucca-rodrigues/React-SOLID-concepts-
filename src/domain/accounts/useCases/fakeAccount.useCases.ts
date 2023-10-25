import { IAccountUseCases } from "@domain/accounts/models";

export default class FakeAccountUseCases implements IAccountUseCases {
  private dbContext(account?: any) {
    const dbMemmory = [
      {
        id: 1,
        name: "Cristiane Juliana da Costa",
        email: "cristiane_juliana_dacosta@tintasvalecores.com.br",
      },
      {
        id: 4,
        name: "Thales Luís André Pinto",
        email: "tharles_luiz@lojapetline.com.br",
      },
    ];
    return dbMemmory;
  }

  async get() {
    return this.dbContext();
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
