import { FC } from 'react'

import { Container } from '../../../../common/components/conteiner/container.component'
import { ArticleList } from '../article-list/article-list.component'

interface FeedProps{ }

export const Feed: FC<FeedProps> = () => { 
    return <Container>
            <div className='flex gap-[30px]'>
                <ArticleList />
                <div className='max-w-[25%]'>tags</div>
            </div>
    </Container>
}