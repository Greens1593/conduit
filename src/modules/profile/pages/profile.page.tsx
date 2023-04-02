import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '../../../common/components/conteiner/container.component';
import { useGetProfileFeedQuery } from '../../feed/api/repository';
import { FeedToggle } from '../../feed/components/feed-toggle/feed-toggle.component';
import { Feed } from '../../feed/components/feed/feed.component';
import { usePageParams } from '../../feed/hooks/use-page-params.hook';
import { ProfileBanner } from '../components/profile-banner/profile-banner';

interface ProfilePageProps { }

export const ProfilePage: FC<ProfilePageProps> = () => {
  const { page } = usePageParams();
  const {profile} = useParams();
  const author = profile?.substring(1)

  const {data, isLoading, isFetching, error} = useGetProfileFeedQuery({
    page,
    author
  })
 
  return (
      <>
        <ProfileBanner userName={author} />
        <Container>
        <FeedToggle/>
        <Feed
            error={error}
            isLoading={isLoading}
            isFetching={isFetching}
            data={data} />
        </Container>
        </>
  );
};