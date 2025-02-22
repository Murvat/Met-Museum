import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface IPosts {
  id: number | string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export const museumApi = createApi({
  reducerPath: 'museumApi', // Unique name for the API slice
  baseQuery: fetchBaseQuery({ baseUrl: 'https://picsum.photos/v2' }), // Base URL
  tagTypes: ['Posts'], // Tag types for caching
  endpoints: (builder) => ({
    getPosts: builder.query<IPosts[], void>({
      query: () => '/list?page=2&limit=20', // Specific endpoint
      // Uncomment and use this for caching/invalidation
      // providesTags: (result) =>
      //   result
      //     ? [...result.map(({ id }) => ({ type: 'Posts', id })), { type: 'Posts', id: 'LIST' }]
      //     : [{ type: 'Posts', id: 'LIST' }],
    }),
  }),
});

export const { useGetPostsQuery } = museumApi;