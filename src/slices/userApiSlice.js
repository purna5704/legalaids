import { USER_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postUser: builder.mutation({
            query: (data) => ({
                url: USER_URL,
                method: 'POST',
                body: data
            }),
        }),
        getAllUser: builder.query({
            query: () => ({
                url: USER_URL,
            }),
        }),
    })
})

export const { usePostUserMutation, useGetAllUserQuery } = adminApiSlice;