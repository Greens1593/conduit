import { FC } from 'react';
import { useParams } from 'react-router-dom';

interface ProfilePageProps {}

export const ProfilePage: FC<ProfilePageProps> = () => {
  const { username } = useParams<{ username: string }>();

  return (
      <div>
        This is profile for {username}
      </div>
  );
};