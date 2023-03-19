import { createApi } from '@reduxjs/toolkit/query/react'
import { FEED_PAGE_SIZE } from '../../../const';
import { axiosBaseQuery } from '../../../core/axios-base-query'
import { GlobalFeedIn } from './dto/global-feed.in';

interface GlobalFeedParams {
    page: number
}

export const feedApi = createApi({
    reducerPath: 'feedApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.realworld.io/api/'
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedParams>({
            query: ({page}) => ({
                url: 'articles',
                params: {
                    limit: FEED_PAGE_SIZE,
                    offset: page * FEED_PAGE_SIZE
                }
            }),
        }),
        getPopularTags: builder.query({
                query: () => ({
                    url: '/tags'
                }),
        }),
    })
})

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;