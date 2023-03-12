import { FC } from 'react'
import { Article } from '../article/article.component'

interface ArticleListProps{}

export const ArticleList: FC<ArticleListProps> = () => { 
    return(
    <div className='tab:max-w-[75%]'>
        <Article />
        <Article />
        <Article />
    </div>)
}