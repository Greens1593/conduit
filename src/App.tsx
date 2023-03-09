import {FC} from 'react'
import Baner from './common/components/baner/baner.component'
import { Header } from './common/components/header/header.component'

interface AppProps{}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <main>
        <Baner />
      </main>
    </div>
  )
}
