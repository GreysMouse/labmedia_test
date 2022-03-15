import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USERS_PAGINATION_STEP } from '../../config';
import { ERROR_MESSAGES } from '../../constants';
import { ISetOnPageUsersActionPayload } from '../../types/actions';
import { IAPIUser } from '../../types/APIs';
import { ISorting, IUser } from '../../types/state';
import { usersAPI } from '../APIs/usersAPI';
import { compareObjectsByISODate } from '../methods/compareObjectsByISODate';
import { compareObjectsByNumber } from '../methods/compareObjectsByNumber';

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  return await usersAPI.getUsers();
});

const initialState = {
  uploadedUsers: [] as IUser[],
  onPageUsers: [] as IUser[],
  foundUsers: [] as IUser[]
};

const getSortedUsers = (users: IUser[], sorting: ISorting): IUser[] => {
  switch (sorting.type) {
    case 'none': return users;
    case 'registrationDate': return users.sort((a, b) => {
      return compareObjectsByISODate(a, b, sorting.type, sorting.direction);
    });
    case 'rating': return users.sort((a, b) => {
      return compareObjectsByNumber(a, b, sorting.type, sorting.direction);
    });
    default: return users;
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setOnPageUsers: (state, action: PayloadAction<ISetOnPageUsersActionPayload>) => {
      const searchQuery = action.payload.searchQuery.toLowerCase();
      const sorting = action.payload.sorting;
      const pageNumber = action.payload.pageNumber;

      state.foundUsers = searchQuery ? state.uploadedUsers.filter(user => {
        const name = user.name.toLowerCase();
        const email = user.email.toLowerCase();

        return name.match(searchQuery) || email.match(searchQuery);
      }) : state.uploadedUsers;

      const sortedUsers = getSortedUsers(state.foundUsers, sorting);

      const sliceStart = (pageNumber - 1) * USERS_PAGINATION_STEP;
      const sliceEnd = sliceStart + USERS_PAGINATION_STEP;

      state.onPageUsers = sortedUsers.slice(sliceStart, sliceEnd);
    },
    deleteUser: (state, action: PayloadAction<IUser[ 'id' ]>) => {
      state.uploadedUsers = state.uploadedUsers.filter(user => user.id !== action.payload);
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<IAPIUser[]>) => {
        const users = action.payload.map(user => {
          return {
            id: user.id,
            name: user.username,
            email: user.email,
            registrationDate: user.registration_date,
            rating: user.rating
          } as IUser;
        });

        state.uploadedUsers = users;
      })
      .addCase(getUsers.rejected, () => {
        console.log(ERROR_MESSAGES.GET_USERS);
      });
  }
});

export const { setOnPageUsers, deleteUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
