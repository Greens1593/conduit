import { FC } from 'react'

interface TagItemProps{
    tag: string
}

export const TagItem: FC<TagItemProps> = ({tag}) => {
    return (<li className='font-light text-[0.8rem] text-[#aaa] border-conduit-lightGrey border-[1px] mr-1 mb-[0.2rem] px-[0.6rem] rounded-[10rem]'>{tag}</li>)
}