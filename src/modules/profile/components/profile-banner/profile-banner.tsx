import { FC } from 'react';
import { FollowButton } from '../../../../common/components/buttons/follow-button/follow-button';
import { Container } from '../../../../common/components/conteiner/container.component';

interface ProfileBannerProps {
  userName?: string,
}

export const ProfileBanner: FC<ProfileBannerProps> = ({userName}) => {

  return (
      <div className='bg-conduit-gray-100 pt-8 pb-4 mb-8'>
          <Container>
              <img
                  className='w-24 h-24 rounded-full mb-4 mx-auto'
                  src='https://api.realworld.io/images/demo-avatar.png'
                  alt='user-avatar'
              />
              <h4 className='text-center font-bold text-2xl mb-2'>{userName}</h4>              
              <div className='flex justify-end'>
                <FollowButton
                  text={`Follow ${userName}`}
                  icon={<i className='ion-plus-round' />}
                  isActive={false}          
                  />
               </div>
          </Container>        
      </div>
  );
};