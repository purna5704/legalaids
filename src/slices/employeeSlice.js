import { EMPLOYEE_URL} from "../constants";
import { apiSlice } from "./apiSlice";

export const employeeApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAllEmployee: builder.query({
            query: () => ({
                url: EMPLOYEE_URL,
            }),
        }),
    })
})

export const { useGetAllEmployeeQuery } = employeeApiSlice;
