import { FC } from 'react'
import { FeedArticle } from '../../api/dto/global-feed.in'
import { Article } from '../article/article.component'

interface ArticleListProps{
    list: FeedArticle[],
}

export const ArticleList: FC<ArticleListProps> = ({list}) => { 
    return(
    <div className='tab:max-w-[75%]'>
            {list.map((article) => <Article
                key={article.createdAt}
                author={article.author}
                title={article.title}
                description={article.description}
                body={article.body}
                tagList={article.tagList}
                slug={article.slug}
                createdAt={article.createdAt}
                updatedAt={article.updatedAt}
                favorited={article.favorited}
                favoritesCount={article.favoritesCount}
            />)}
    </div>)
}