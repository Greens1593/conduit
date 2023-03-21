import { FC, PropsWithChildren } from 'react'
import { Container } from '../../../../common/components/conteiner/container.component'
import { useGetPopularTagsQuery } from '../../api/repository'
import { TagItem } from '../tag-list/tag-item.component'

interface TagBordProps{}

export const TagBord: FC<PropsWithChildren <TagBordProps>> = () => {
    const { data, error, isLoading, isFetching } = useGetPopularTagsQuery('')
    
    
    if (isLoading || isFetching) return <Container>Tags loading...</Container>
    if (error) return <Container>Error while loading tags</Container>

    return (<div className='p-3 pt-1.5 bg-[#f3f3f3] rounded-[4px] h-max tab:max-w-[25%]'>
        <p className='mb-1'>Popular Tags</p>
        <ul className='flex flex-wrap'>
            {data!.tags.map((tag: string, index: any) => <TagItem key={index} active={true} background='bg-conduit-brightGrey' color='text-[#fff]' hover='hover:bg-conduit-hoverGrey' tag={tag} />)}
        </ul>
    </div>)
}