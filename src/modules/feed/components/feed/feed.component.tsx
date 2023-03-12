import { FC } from 'react'

import { Container } from '../../../../common/components/conteiner/container.component'
import { ArticleList } from '../article-list/article-list.component'
import { TagBord } from '../tag-bord/tag-bord.component'

interface FeedProps{ }

export const Feed: FC<FeedProps> = () => { 
    return <Container>
            <div className='flex flex-col tab:flex-row gap-[30px]'>
                <ArticleList />
                <TagBord/>
            </div>
    </Container>
}