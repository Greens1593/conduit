import { FC } from 'react';
import { useLocation, useParams } from 'react-router-dom';
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
  const location = useLocation()

  const {data, isLoading, isFetching, error} = useGetProfileFeedQuery({
    page,
    author
  })

  const feedToggleItems = [{text: 'Favorited articles', link: `${location.pathname}/favorites`}]
 
  return (
      <>
        <ProfileBanner userName={author} />
        <Container>
        <FeedToggle
          defaultText='My articles'
          defaultLink={location.pathname}
          items={feedToggleItems}
        />
        <Feed
            error={error}
            isLoading={isLoading}
            isFetching={isFetching}
            data={data} />
        </Container>
        </>
  );
};