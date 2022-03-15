import { IAPIOptions } from '../../types/APIs';

export abstract class API {
  protected readonly _baseURL: string;

  constructor(APIOptions: IAPIOptions) {
    this._baseURL = APIOptions.baseURL;
  }

  protected _checkResponse(res: Response) {
    if (res.ok) return res.json();
    return Promise.reject(res);
  }
}
