export interface IAccountUseCases {
  get(): any;
  post(account: TAccount): TAccount[];
  patch(): any;
  update(accountId: number, account: TAccount): any;
  delete(accountId: number): any;
}

export type TAccount = {
  id: number;
  name: string;
  email: string;
};
