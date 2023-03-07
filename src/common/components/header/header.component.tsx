import { FC } from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps{}

export const Header: FC<HeaderProps> = () => {
  return (
      <header>
          <nav className='px-2 py-4'>
              <div className='max-w-screen-xl'>
                  <Link to="/">conduit</Link>
            </div>
          </nav>
      </header>
  )
}
