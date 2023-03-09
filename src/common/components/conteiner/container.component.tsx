import { FC, PropsWithChildren } from 'react'
import { Link, NavLink } from 'react-router-dom'

interface ContainerProps{
}

export const Container: FC<PropsWithChildren <ContainerProps>> = ({children}) => {
  return (
    <div className='max:w-[1140px] desc:w-[940px] tab:w-[720px] mob:w-[576px] mx-auto '>{children}</div>
  )
}
