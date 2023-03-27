import { FC } from 'react';
import { ProfileBanner } from '../components/profile-banner/profile-banner';
import { ProfileFeed } from '../components/profile-feed/profile-feed';

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => {
  return (
      <>
        <ProfileBanner />
        <ProfileFeed />
      </>
  );
};