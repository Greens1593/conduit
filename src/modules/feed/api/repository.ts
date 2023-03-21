import { createApi } from '@reduxjs/toolkit/query/react'
import { FEED_PAGE_SIZE } from '../../../const';
import { axiosBaseQuery } from '../../../core/axios-base-query'
import { GlobalFeedInDTO } from './dto/global-feed.in';
import { PopularTagsInDto } from './dto/popular-tags.in';

interface GlobalFeedParams {
    page: number,
    tag: string | null,
}

export const feedApi = createApi({
    reducerPath: 'feedApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.realworld.io/api/'
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<GlobalFeedInDTO, GlobalFeedParams>({
            query: ({page, tag}) => ({
                url: 'articles',
                params: {
                    limit: FEED_PAGE_SIZE,
                    offset: page * FEED_PAGE_SIZE,
                    tag
                }
            }),
        }),
        getPopularTags: builder.query<PopularTagsInDto, any>({
                query: () => ({
                    url: '/tags'
                }),
        }),
    })
})

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;