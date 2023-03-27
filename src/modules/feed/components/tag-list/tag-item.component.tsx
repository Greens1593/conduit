import { FC } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface TagItemProps{
    tag: string,
    background: string,
    color: string,
    hover: string,
    active: boolean
}

export const TagItem: FC<TagItemProps> = ({tag, background, color, hover, active}) => {
    const [searchParams] = useSearchParams()
    const activeTag = searchParams.get('tag')

    return (<li className={`${color} ${background} ${hover} ${activeTag === tag && active && 'bg-conduit-gray-900 underline'} font-light text-[0.8rem] border-conduit-gray-300 border-[1px] mr-1 mb-[0.2rem] px-[0.6rem] rounded-[10rem] cursor-pointer`}>
        {active && <Link to={`/?tag=${tag}`}>{tag}</Link>}
        {!active && tag}
    </li>)
}