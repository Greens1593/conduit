import { FC, PropsWithChildren } from 'react'
import { TagItem } from './tag-item.component'

interface TagListProps{
    tagList: string[]
}

export const TagList: FC<PropsWithChildren <TagListProps>> = ({tagList}) => {
    return (<ul className='flex flex-wrap'>
        {tagList.map((tag, index) => (<TagItem key={index} active={false} tag={tag} background='' color='text-[#aaa]' hover=''/>))}
    </ul>)
}