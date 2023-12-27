import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterTeachers: [],
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter: (state, { payload }) => {
      state.filterTeachers = payload;
    },
    deleteFilter: state => {
      state.filterTeachers = [];
    },
  },
});

export const { addFilter, deleteFilter } = filterSlice.actions;
