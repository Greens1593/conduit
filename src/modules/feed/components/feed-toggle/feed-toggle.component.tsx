import { FC } from 'react'
import { NavLink, useLocation, useSearchParams } from 'react-router-dom'

interface FeedToggleItem {
  text: string
  link: string
}

interface FeedToggleProps { 
  defaultText?: string
  defaultLink?: string
  items?: FeedToggleItem[]
}

export const FeedToggle: FC<FeedToggleProps> = ({ defaultText = 'Global Feed', defaultLink = '/', items = [] }) => {
  const [searchParams] = useSearchParams()
  const tag = searchParams.get('tag')
  const isActive = useLocation().pathname.includes('favorites')
  const globalFeedClasses = 'inline-block bg-white border-b-2 border-b-conduit-green py-2 px-4'
  
  return (
    <ul className="flex">
      <li className={`${globalFeedClasses} ${tag || isActive ? 'text-conduit-gray-600 hover:text-[#555] border-none' : 'text-conduit-green'}`}>
        <NavLink to={defaultLink}>{defaultText}</NavLink>
      </li>
      {items.map((item, index) => (
        <li key={index} className={`${globalFeedClasses} ${isActive ? 'text-conduit-green' : 'text-conduit-gray-600 hover:text-[#555] border-none'} ${!item.link && 'hidden'}`}>
          <NavLink to={item.link}>{item.text}</NavLink>
        </li>  
      ))}
      <li className={` bg-white border-b-2 border-conduit-green py-2 px-4 text-conduit-green ${!tag && 'hidden'}`}>
        {tag && (
          <p className="flex gap-1">
            <b className="text-xl">#</b> {tag}
          </p>
        )}
      </li>
    </ul>
  )
}