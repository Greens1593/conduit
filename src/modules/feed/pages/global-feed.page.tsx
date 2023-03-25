import {FC} from 'react'
import { Baner } from '../../../common/components/baner/baner.component'
import { Feed } from '../components/feed/feed.component'

interface GlobalFeedPageProps{}

export const GlobalFeedPage: FC<GlobalFeedPageProps> = () => {
  return (
      <>
          <Baner />
          <Feed />
      </>
  )
}
