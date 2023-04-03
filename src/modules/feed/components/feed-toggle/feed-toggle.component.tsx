import { FC } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

interface FeedToggleItem{
    text: string,
    link: string
}

interface FeedToggleProps{ 
    defaultText?: string,
    defaultLink?: string,
    items?: FeedToggleItem[]
}

export const FeedToggle: FC<FeedToggleProps> = ({defaultText = 'Global Feed', defaultLink = '/', items=[]}) => {
    const [searchParams] = useSearchParams()
    const tag = searchParams.get('tag')
    const globalFeedClasses = `inline-block text-conduit-green bg-white border-b-2 border-b-conduit-green py-2 px-4`
    
    return(
        <ul className='flex'>
            <li className={`${globalFeedClasses} ${tag && 'text-conduit-gray-600 hover:text-[#555] border-none'} `}>
                <NavLink
                    to={defaultLink}
                    >
                        {defaultText}
                </NavLink>
            </li>
            {items.map((item) => (
                <li className={`${globalFeedClasses} ${!item.link  && 'hidden'}`}>
                    <NavLink to={item.link}>{item.text}</NavLink>    
                </li>  
            ))}
            <li className={`${globalFeedClasses} ${!tag  && 'hidden'}`}>
                {tag && <p className='flex gap-1'>
                   <b className='text-xl'>#</b> {`${tag}`}
                </p>}
            </li>
        </ul>
    )
}