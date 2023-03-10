import { FC } from 'react'
import { Container } from '../conteiner/container.component'

interface BanerProps{}

export const Baner: FC<BanerProps> = () => {
  return (
    <div className='bg-conduit-green shadow-baner w-full text-white p-8 mb-8'>
        <Container>
            <h1 className='text-center text-logo drop-shadow-logo font-titillium pb-2'>conduit</h1> 
            <p className='text-center text-2xl font-light'>A plase to share your knowlege.</p>  
        </Container>      
    </div>
  )
}