import { createApi } from '@reduxjs/toolkit/query/react'
import { FEED_PAGE_SIZE } from '../../../const';
import { axiosBaseQuery } from '../../../core/axios-base-query'
import { FeedArticle, GlobalFeedInDTO } from './dto/global-feed.in';
import { PopularTagsInDto } from './dto/popular-tags.in';
import { transformResponse } from './utils';

interface BaseFeedParams {
     page: number,
}
interface GlobalFeedParams extends BaseFeedParams{
    tag: string | null,
}

export interface FeedData {
    articles: FeedArticle[];
    articlesCount: number;
}

interface ProfileFeedParams extends BaseFeedParams{
    author: string,
    isFavorite?: boolean
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
            transformResponse
        }),
        getProfileFeed: builder.query<FeedData, ProfileFeedParams>({
            query: ({page, author, isFavorite = false }) => ({
                url: 'articles',
                params: {
                    limit: FEED_PAGE_SIZE,
                    offset: page * FEED_PAGE_SIZE,
                    author: isFavorite ? undefined : author,
                    favorited: !isFavorite ? undefined : author
                }
            }),
            transformResponse
        }),
        getPopularTags: builder.query<PopularTagsInDto, any>({
                query: () => ({
                    url: '/tags'
                }),
        }),
    })
})

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery, useGetProfileFeedQuery } = feedApi;