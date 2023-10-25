import { IAccountUseCases } from "@domain/accounts/models";

const dbContext = [
  {
    id: 1,
    name: "Tereza Alice Sophia Brito",
    email: "tereza_alice_brito@hotamail.com",
  },
  {
    id: 2,
    name: "Rita Emanuelly Simone Ribeiro",
    email: "rita_ribeiro@gerdau.com.br",
  },
];
export default class FakeAccountUseCases implements IAccountUseCases {
  get() {
    return dbContext;
  }

  // post({ account }: any) {
  //   // dbContext.push(account);
  //   // return dbContext;
  // }

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
    return dbContext.pop();
  }
}
