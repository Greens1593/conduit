import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'

interface HeaderProps{}

export const Header: FC<HeaderProps> = () => {
  const navLinkClasses = ({ isActive }: { isActive: boolean }) => isActive ? 'py-navItems text-black/80' : 'text-black/30';

  return (
      <header>
          <nav className='px-4 py-4'>
              <div className='max-w-screen-xl mx-auto flex justify-between items-center'>
                <Link to="/" className='font-titillium text-2xl mr-8 text-conduit-green'>conduit</Link>
                <ul className='flex pt-0 mb-0 list-none gap-4 text-base'>
                  <li>
                    <NavLink to='/' className={navLinkClasses}>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/sign-in' className={navLinkClasses}>Sign in</NavLink>
                  </li>
                  <li>
                    <NavLink to='/sign-up' className={navLinkClasses}>Sign up</NavLink>
                  </li>
                </ul>
            </div>
          </nav>
      </header>
  )
}
