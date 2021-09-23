import React from 'react';
import {ImageAvatar} from './styles';

interface AvatarProps {
  url: string;
}

const Avatar: React.FC<AvatarProps> = ({url}) => {
  return <ImageAvatar source={{uri: url}} />;
};

export default Avatar;
