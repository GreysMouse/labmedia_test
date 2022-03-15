import { API_OPTIONS } from '../config';

export type IAPIOptions = typeof API_OPTIONS;

export interface IAPIUser {
  readonly id: string;
  readonly username: string;
  readonly email: string,
  readonly registration_date: string,
  readonly rating: number;
}
