import {FC} from 'react'
import { useSearchParams } from 'react-router-dom'
import { Baner } from '../../../common/components/baner/baner.component'
import { Container } from '../../../common/components/conteiner/container.component'
import { useGetGlobalFeedQuery } from '../api/repository'
import { FeedToggle } from '../components/feed-toggle/feed-toggle.component'
import { Feed } from '../components/feed/feed.component'
import { TagBord } from '../components/tag-bord/tag-bord.component'
import { usePageParams } from '../hooks/use-page-params.hook'

interface GlobalFeedPageProps{}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  
  const [searchParams] = useSearchParams()
  const {page} = usePageParams()
    
  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
        page,
        tag: searchParams.get('tag'),
    })
  
  return (
    <>
      <Baner />
      <Container>
        <FeedToggle />
        <div className='flex'>
          <div className='w-3/4'>
            <Feed
              error={error}
              isLoading={isLoading}
              isFetching={isFetching}
              data={data} />
          </div>
          <div className='w-1/4 pl-3'>
            <TagBord />
          </div>
        </div>
      </Container>
    </>
      
  )
}
