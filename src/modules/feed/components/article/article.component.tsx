import { FC } from 'react'
import { Link } from 'react-router-dom'
import { FavoriteButton } from '../favorite-button/favorite-button.component'
import { TagList } from '../tag-list/tag-list.component'

interface ArticleProps{}

export const Article: FC<ArticleProps> = () => {
    return (
        <article>
            <div className='border-t border-black-10 py-6'>  
                <div className='mb-4 font-light flex justify-between'>
                    <div className='flex align-baseline gap-2'>
                        <Link to='/@Green'>
                            <img
                                src='https://api.realworld.io/images/demo-avatar.png'
                                alt='avatar'
                                className='inline-block h-8 w-8 rounded-full'
                            />
                        </Link>
                        <div className='ml-[0.3rem] inline-flex flex-col leading-4 '>
                            <Link className='text-conduit-green font-medium hover:text-conduit-darkGreen hover:underline' to='/@Green'>Micael Green</Link>
                            <span className='text-[#bbb] font-[0.8rem]'>December 9, 2022</span>
                        </div>
                    </div>
                    <FavoriteButton/>
                </div>
                <Link to='/article/qwery'>
                    <h1 className='mb-[3px] font-semibold text-2xl text-conduit-black'>Some title</h1>
                    <p className='text-conduit-darkGrey font-light mb-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo neque deleniti quisquam earum soluta perspiciatis, ipsum, blanditiis numquam animi facilis aliquam. Optio, ullam nesciunt dolorem magnam corporis commodi error, quia magni consectetur aperiam nobis. Eum quae maiores, inventore, debitis harum reiciendis similique magni, quos autem minus doloremque ullam saepe error minima mollitia. Odio similique tempore voluptate veniam animi unde saepe quisquam minima corporis libero aperiam sequi blanditiis, ipsum distinctio asperiores nobis repellendus quam necessitatibus repellat ipsam incidunt reprehenderit. Veniam, quis ducimus itaque eum soluta, mollitia culpa eligendi incidunt cumque sint pariatur atque, quos dolore ullam unde? Sunt, magnam dolor.</p>
                    <div className='flex justify-between'>
                        <span className='text-[0.8rem] text-conduit-darkGrey font-light'>Read more...</span>
                        <TagList/>
                    </div>
                </Link>
            </div>
        </article>
  )
}