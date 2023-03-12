import { FC, PropsWithChildren } from 'react'
import { TagItem } from '../tag-list/tag-item.component'

interface TagBordProps{}

export const TagBord: FC<PropsWithChildren <TagBordProps>> = () => {
    return (<div className='pt-[5px] pr-2.5 pb-2.5 pl-2.5 bg-[#f3f3f3] rounded-[4px] h-max tab:max-w-[25%] '>
        <p className='mb-1'>Popular Tags</p>
        <ul className='flex flex-wrap gap-x-[3px] gap-y-[0.2rem]'>
            <TagItem background='bg-conduit-brightGrey' color='text-[#fff]' hover='hover:bg-conduit-hoverGrey' tag='qwe' />
            <TagItem background='bg-conduit-brightGrey' color='text-[#fff]' hover='hover:bg-conduit-hoverGrey' tag='efefef' />
            <TagItem background='bg-conduit-brightGrey' color='text-[#fff]' hover='hover:bg-conduit-hoverGrey' tag='sefegrgrhrh' />
            <TagItem background='bg-conduit-brightGrey' color='text-[#fff]' hover='hover:bg-conduit-hoverGrey' tag='sffege' />
            <TagItem background='bg-conduit-brightGrey' color='text-[#fff]' hover='hover:bg-conduit-hoverGrey' tag='tyukhbn' />
            <TagItem background='bg-conduit-brightGrey' color='text-[#fff]' hover='hover:bg-conduit-hoverGrey' tag='dgrrhyjty'/>
        </ul>
    </div>)
}