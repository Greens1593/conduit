import { FC, PropsWithChildren } from 'react'
import { Container } from '../../../../common/components/conteiner/container.component'
import { useGetPopularTagsQuery } from '../../api/repository'
import { TagItem } from '../tag-list/tag-item.component'

interface TagBordProps{}

export const TagBord: FC<PropsWithChildren <TagBordProps>> = () => {
    const { data, error, isLoading, isFetching } = useGetPopularTagsQuery('')
    
    
    if (isLoading || isFetching) return <Container>Tags loading...</Container>
    if (error) return <Container>Error while loading tags</Container>

    return (<div className='p-3 pt-1.5 bg-conduit-gray-100 rounded-[4px] h-max'>
        <p className='mb-1'>Popular Tags</p>
        <ul className='flex flex-wrap'>
            {data!.tags.map((tag: string, index: any) => <TagItem key={index} active={true} background='bg-conduit-gray-800' color='text-[#fff]' hover='hover:bg-conduit-gray-900' tag={tag} />)}
        </ul>
    </div>)
}