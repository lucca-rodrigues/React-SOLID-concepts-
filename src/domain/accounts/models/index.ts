export interface IAccountUseCases {
  get(): any;
  post(): any;
  patch(): any;
  update(): any;
  delete(): any;
}

export type TAccount = {
  id: number;
  name: string;
  email: string;
};
