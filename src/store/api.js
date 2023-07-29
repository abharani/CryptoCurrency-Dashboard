import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
   reducerPath: "api", // The slice name for the API state
   baseQuery: fetchBaseQuery({ baseUrl: "https://api.coingecko.com/api/v3" }), // The base query function with the base URL
   tagTypes: ["PieChartData", "ExchangeData", "Sidebar"], // The custom tag types for the endpoints
   endpoints: (builder) => ({
      getPieChartData: builder.query({
         query: (url) => `${url}`, // The query function to append the specified URL
         providesTags: ["PieChartData"], // The tags associated with this endpoint
      }),
      getExchange: builder.query({
         query: (url) => `${url}`, // The query function to append the specified URL
         providesTags: ["ExchangeData"], // The tags associated with this endpoint
      }),
      getSidebar: builder.query({
         query: (url) => `${url}`, // The query function to append the specified URL
         providesTags: ["Sidebar"], // The tags associated with this endpoint
      })
   }),
});

// Export the query hooks for getPieChartData and getExchange endpoints
export const { useGetPieChartDataQuery, useGetExchangeQuery, useGetSidebarQuery } = api;