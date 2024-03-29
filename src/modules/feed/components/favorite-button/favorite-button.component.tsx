import { FC } from 'react'

interface FavoriteButtonProps{
    favorited: boolean,
    favoritesCount: number
}

export const FavoriteButton: FC<FavoriteButtonProps> = ({favoritesCount}) => { 
    return <button className='text-conduit-green align-middle cursor-pointer select-none border-conduit-green text-center py-1 px-2 text-sm rounded-[0.2rem] border-[1px] hover:text-white hover:bg-conduit-green focus:bg-conduit-darkGreen focus:text-white'>
        <i className='ion-heart'></i>
        <span className='ml-1 font-normal'>{favoritesCount}</span>
    </button>
}