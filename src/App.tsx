import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './common/components/header/header.component'
import { GlobalFeedPage } from './modules/feed/pages/global-feed.page'
import { ProfilePage } from './modules/profile/pages/profile.page'
interface AppProps{}

export const App: FC<AppProps> = () => {
  return (
    <div className='pb-16'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<GlobalFeedPage />} />
          <Route path=":profile" element={<ProfilePage />}>
            <Route path='favorites' element={<ProfilePage />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}
