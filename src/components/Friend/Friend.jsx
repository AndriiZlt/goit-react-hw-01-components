import { FriendCard, Avatar, Status, Name } from './Friend.styled';
import PropTypes from 'prop-types';

export const Friend = ({ isOnline, avatar, name }) => {
  return (
    <FriendCard>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{name}</Name>
    </FriendCard>
  );
};

Friend.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
