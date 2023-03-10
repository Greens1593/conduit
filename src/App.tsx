import {FC} from 'react'
import {Baner} from './common/components/baner/baner.component'
import { Container } from './common/components/conteiner/container.component'
import { Header } from './common/components/header/header.component'
import { Article } from './modules/feed/components/article/article.component'

interface AppProps{}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <main>
        <Baner />
        <Container>
          <Article />
        </Container>
      </main>
    </div>
  )
}
