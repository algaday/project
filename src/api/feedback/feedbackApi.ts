import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserData } from './types'
export const feedbackApi = createApi({
  reducerPath: 'feedbackApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://randomuser.me/api/',
  }),
  endpoints: (builder) => ({
    getFeedbackApi: builder.query<UserData, number>({
      query: (number) => `?results=${number}`,
    }),
  }),
})

export const { useGetFeedbackApiQuery } = feedbackApi
