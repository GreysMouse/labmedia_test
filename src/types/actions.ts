import { IPageNumber, ISorting } from './state';

export interface ISetOnPageUsersActionPayload {
  pageNumber: IPageNumber,
  sorting: ISorting;
  searchQuery: string;
};
