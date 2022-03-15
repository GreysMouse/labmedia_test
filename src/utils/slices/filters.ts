import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISorting } from '../../types/state';

const initialState = {
  sorting: {
    type: 'none',
    direction: 'asc'
  } as ISorting,
  searchQuery: '' as string
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<ISorting>) => {
      state.sorting = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload.trim().toLowerCase();
    }
  }
});

export const { setSorting, setSearchQuery } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
