import { ADMIN_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const adminApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllAdmin: builder.query({
            query: () => ({
                url: ADMIN_URL,
            }),
        }),
    })
})

export const { useGetAllAdminQuery } = adminApiSlice;
