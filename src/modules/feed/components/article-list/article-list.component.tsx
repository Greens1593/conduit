import { FC } from 'react'
import { FeedArticle } from '../../api/dto/global-feed.in'
import { Article } from '../article/article.component'

interface ArticleListProps{
    list: FeedArticle[] 
}

export const ArticleList: FC<ArticleListProps> = ({list}) => { 
    return(
    <div className='tab:max-w-[75%]'>
            {list.map((article) => <Article key={article.createdAt} author={article.author} />)}
    </div>)
}