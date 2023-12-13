import React from 'react'
import {
    createApi,
    fetchBaseQuery,
  } from '@reduxjs/toolkit/query/react';

  export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'https://6578550ef08799dc8044f2a7.mockapi.io/api'}),
    tagTypes: [
      'Transfers',
      'Users'
    ],
    endpoints: builder => ({
        userLogin: builder.mutation({
            query : initialPost=>({
                url:'/users/',
                body:initialPost,

            }),
            providesTags: "Users",
        }),
        getUser: builder.query({
            query:userId=>({
                url:`/users/${userId}/`
            }),
            providesTags: "Users",
        }),
        addTransfer:builder.mutation({
   query:initialPost=>({
     url:'/Transfers/',
        method: 'POST',
    body:initialPost
   }),
  //  providesTags:"Transfers",
        }),
        getTransfer: builder.query({
            query:()=> '/Transfers/'
        }),
        getTransferbyId: builder.query({
            query:Id=>({
                url:`/Transfers/${Id}/`
            }),
            providesTags: "Transfers",
        }),
        deleteTransfer: builder.mutation({
            query: ({id}) => ({
              url: `/Transfers/${id}/`,
              method: 'DELETE',
              body: id,
            }),
            invalidatesTags: ['Transfers'],
          }),
          getTransferbyUserId: builder.query({
            query: (id) => `/Transfers/?user_id=${id}`,  
            
          }),
    })
  });

export const {
useAddTransferMutation,
useDeleteTransferMutation,
useGetTransferQuery,
useLazyGetTransferQuery,
useGetTransferbyIdQuery,
useGetTransferbyUserIdQuery,
useGetUserQuery,
useUserLoginMutation,
  } = apiSlice;
