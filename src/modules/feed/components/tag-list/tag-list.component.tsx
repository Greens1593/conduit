import { FC, PropsWithChildren } from 'react'
import { TagItem } from './tag-item.component'

interface TagListProps{}

export const TagList: FC<PropsWithChildren <TagListProps>> = () => {
    return (<ul className='flex flex-wrap'>
        <TagItem tag='qwe' />
        <TagItem tag='efefef' />
        <TagItem tag='7892'/>
    </ul>)
}