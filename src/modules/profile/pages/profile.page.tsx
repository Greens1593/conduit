import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Feed } from '../../feed/components/feed/feed.component';
import { usePageParams } from '../../feed/hooks/use-page-params.hook';
import { ProfileBanner } from '../components/profile-banner/profile-banner';

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => {
  const { page } = usePageParams();
  const params = useParams();
  
  console.log(params)
 
  return (
      <>
        <ProfileBanner />
        {/* <Feed
            error={error}
            isLoading={isLoading}
            isFetching={isFetching}
            data={data}/> */}
          </>
  );
};