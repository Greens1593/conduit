import { FC, PropsWithChildren } from 'react'
import { TagItem } from './tag-item.component'

interface TagListProps{}

export const TagList: FC<PropsWithChildren <TagListProps>> = () => {
    return (<ul className='flex flex-wrap'>
        <TagItem background='' color='text-[#aaa]' hover='' tag='qwe' />
        <TagItem background='' color='text-[#aaa]' hover='' tag='efefef' />
        <TagItem background='' color='text-[#aaa]' hover='' tag='7892'/>
    </ul>)
}