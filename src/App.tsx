import {FC} from 'react'
import {Baner} from './common/components/baner/baner.component'
import { Header } from './common/components/header/header.component'
import { Feed } from './modules/feed/components/feed/feed.component'

interface AppProps{}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <main>
        <Baner />
        <Feed/>
      </main>
    </div>
  )
}
