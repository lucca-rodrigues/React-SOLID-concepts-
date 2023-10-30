export interface IAccountServices {
  get(): any;
  post(account: TAccount): TAccount[];
  // patch(): any;
  update(accountId: number, account: TAccount): Promise<TAccount | string>;
  delete(accountId: number): any;
}

export type TAccount = {
  id?: number;
  name: string;
  email: string;
};
