import { API_OPTIONS } from '../../config';
import { IAPIUser } from '../../types/APIs';
import { API } from './API';

class UsersAPI extends API {
  public async getUsers(): Promise<IAPIUser[]> {
    const res = await fetch(`${ this._baseURL }/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return this._checkResponse(res);
  }
}

export const usersAPI = new UsersAPI(API_OPTIONS);
