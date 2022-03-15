import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { pagesReducer } from '../utils/slices/pages';
import { usersReducer } from '../utils/slices/users';
import { filtersReducer } from '../utils/slices/filters';

export const store = configureStore({
  reducer: {
    pages: pagesReducer,
    filters: filtersReducer,
    users: usersReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
