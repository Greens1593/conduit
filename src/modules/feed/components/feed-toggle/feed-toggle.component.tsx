import { FC } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

interface FeedToggleProps{ }

export const FeedToggle: FC<FeedToggleProps> = () => {
    const [searchParams] = useSearchParams()
    const tag = searchParams.get('tag')
    return(
        <ul className='flex'>
            <li className={`inline-block text-conduit-green bg-white border-b-2 border-b-conduit-green ${tag && 'text-conduit-gray-600 hover:text-[#555] border-none'} py-2 px-4`}>
                <NavLink
                    to='/'
                    >
                        Global Feed
                </NavLink>
            </li>
            <li className='inline-block text-conduit-green bg-white border-b-2 border-b-conduit-green py-2 px-4'>
                {tag && <p className='flex gap-1'>
                   <b className='text-xl'>#</b> {`${tag}`}
                </p>}
            </li>
        </ul>
    )
}