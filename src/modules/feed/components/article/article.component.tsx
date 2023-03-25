import { DateTime } from 'luxon'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FeedArticle } from '../../api/dto/global-feed.in'
import { FavoriteButton } from '../favorite-button/favorite-button.component'
import { TagList } from '../tag-list/tag-list.component'

interface ArticleProps extends FeedArticle{
}

export const Article: FC<ArticleProps> = ({
    author,
    createdAt,
    favorited,
    favoritesCount,
    tagList,
    title,
    description }) => {
    
    
    return (
        <article>
            <div className='border-t border-black-10 py-6'>  
                <div className='mb-4 font-light flex justify-between'>
                    <div className='flex align-baseline gap-2'>
                        <Link to={`/@${author.username}`}>
                            <img
                                src={author.image}
                                alt={author.username}
                                className='inline-block h-8 w-8 rounded-full'
                            />
                        </Link>
                        <div className='ml-[0.3rem] inline-flex flex-col leading-4 '>
                            <Link 
                                className='text-conduit-green font-medium hover:text-conduit-darkGreen hover:underline' 
                                to={`/@${author.username}`}
                            >
                                    {author.username}
                            </Link>
                            <span className='text-[#bbb] font-[0.8rem]'>{DateTime.fromISO(createdAt).toLocaleString(DateTime.DATETIME_MED)}</span>
                        </div>
                    </div>
                    <FavoriteButton
                        favorited={favorited}
                        favoritesCount={favoritesCount}
                    />
                </div>
                <Link to='/article/qwery'>
                    <h1 className='mb-[3px] font-semibold text-2xl text-conduit-black'>{title}</h1>
                    <p className='text-conduit-darkGrey font-light mb-4 '>{description}</p>
                    <div className='flex justify-between'>
                        <span className='text-[0.8rem] text-conduit-darkGrey font-light'>Read more...</span>
                        <TagList
                            tagList={tagList}
                        />
                    </div>
                </Link>
            </div>
        </article>
  )
}