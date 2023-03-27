import { FC } from 'react';

interface FollowButtonProps {
    isActive: boolean,
    text: string,
    icon: React.ReactNode,
    
}

export const FollowButton: FC<FollowButtonProps> = ({isActive, icon, text}) => {
    const buttonClasses = isActive
    ? 'bg-green-500 hover:bg-green-600 text-white'
    : 'bg-transparent hover:bg-conduit-gray-400 text-conduit-gray-700 border border-conduit-gray-700';

  return (
    <button
      className={`inline-flex items-center px-2 py-1 rounded text-sm focus:outline-none ${buttonClasses}`}
    >
      <span className='mr-1'>{icon}</span>
      <span>{text}</span>
    </button>
  );
      //'py-1 px-2 text-sm rounded'>
        
};