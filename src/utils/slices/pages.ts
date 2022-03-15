import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPageNumber } from '../../types/state';

const initialState = {
  currentPage: 1 as IPageNumber
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<IPageNumber>) => {
      state.currentPage = action.payload;
    }
  }
});

export const { setCurrentPage } = pagesSlice.actions;
export const pagesReducer = pagesSlice.reducer;
