import { FC } from 'react'

import { Container } from '../../../../common/components/conteiner/container.component'
import { useGetGlobalFeedQuery } from '../../api/repository'
import { ArticleList } from '../article-list/article-list.component'
import { FeedToggle } from '../feed-toggle/feed-toggle.component'
import { TagBord } from '../tag-bord/tag-bord.component'

interface FeedProps{ }

export const Feed: FC<FeedProps> = () => { 
    const { data, error, isLoading } = useGetGlobalFeedQuery('')

    if (isLoading) return <Container>Feed loading...</Container>
    if (error) return <Container>Error while loading feed</Container>

    return <Container>
            <FeedToggle/>
            <div className='flex flex-col tab:flex-row gap-[30px]'>
                <ArticleList list={data?.articles || []}/>
                <TagBord/>
            </div>
    </Container>
}