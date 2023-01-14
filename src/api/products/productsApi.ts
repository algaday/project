import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Response } from './types'

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spoonacular.com/',
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<Response, string>({
      query: (number) =>
        `recipes/random?number=${number}&apiKey=dfdc7580ac914dc4b14bce6a17acb762`,
    }),
  }),
})

export const { useGetAllProductsQuery } = productsApi
