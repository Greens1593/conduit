import { FC } from 'react'

interface TagItemProps{
    tag: string,
    background: string,
    color: string,
    hover: string
}

export const TagItem: FC<TagItemProps> = ({tag, background, color, hover}) => {
    return (<li className={`${color} ${background} ${hover} font-light text-[0.8rem] border-conduit-lightGrey border-[1px] mr-1 mb-[0.2rem] px-[0.6rem] rounded-[10rem] cursor-pointer`}>{tag}</li>)
}