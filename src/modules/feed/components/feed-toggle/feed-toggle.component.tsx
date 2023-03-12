import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface FeedToggleProps{ }

export const FeedToggle: FC<FeedToggleProps> = () => { 
    return(
        <ul>
            <li className='inline-block text-conduit-green bg-white border-b-2 border-b-conduit-green py-2 px-4'>
                <NavLink
                    to='/'
                    >
                        Global Feed
                    </NavLink>
            </li>       
        </ul>
    )
}