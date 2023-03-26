import { FC } from 'react';
import { FollowButton } from '../../../../common/components/buttons/follow-button/follow-button';
import { Container } from '../../../../common/components/conteiner/container.component';

interface ProfileBannerProps {}

export const ProfileBanner: FC<ProfileBannerProps> = () => {

  return (
      <div className='bg-[#f3f3f3] pt-8 pb-4'>
          <Container>
              <img
                  className='w-24 h-24 rounded-full mb-4 mx-auto'
                  src='https://api.realworld.io/images/demo-avatar.png'
                  alt='user-avatar'
              />
              <h4 className='text-center font-bold text-2xl mb-2'>User Name</h4>              
              <div className='flex justify-end'>
                <FollowButton
                  text='Follow user'
                  icon={<i className='ion-plus'></i>}
                  isActive={false}          
                  />
               </div>
          </Container>        
      </div>
  );
};