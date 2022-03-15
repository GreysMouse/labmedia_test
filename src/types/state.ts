import { ICompareDirection } from './methods';

export interface IUser {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly registrationDate: string;
  readonly rating: number;
}

export type IPageNumber = number;

export interface ISorting {
  type: 'none' | keyof IUser;
  direction: ICompareDirection;
}
