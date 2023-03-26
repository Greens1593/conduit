import { FC } from 'react';
import { ProfileBanner } from '../components/profile-banner/profile-banner';

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => {
  return (
      <>
        <ProfileBanner/>       
      </>
  );
};