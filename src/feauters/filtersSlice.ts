// import { createSlice } from '@reduxjs/toolkit';
// import { IPosts } from '../api/museumApi';
// import { museumApi } from '../api/museumApi';
// import type { RootState } from '../store';

// const initialState: IPosts[] = [];

// export const filterSlice = createSlice({
//   name: 'filters',
//   initialState,
//   reducers: {
//     moreThanThree: (state) => {
//       return state.filter((post) => post.width > 3000);
//     },
//     lessThanThree: (state) => {
//       return state.filter((post) => post.width < 3000);
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       museumApi.endpoints.getPosts.matchFulfilled,
//       (state, action) => {
//         return action.payload; // Update the state with the fetched data
//       }
//     );
//   },
// });

// export const { moreThanThree, lessThanThree } = filterSlice.actions;

// // Selector to get the filtered posts
// export const selectPosts = (state: RootState) => state.filters;

// export default filterSlice.reducer;