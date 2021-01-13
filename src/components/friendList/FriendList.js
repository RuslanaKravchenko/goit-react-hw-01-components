import React from 'react';
import PropTypes from 'prop-types';
import WrapperFriendList from './styledFriendList';
import FriendListItem from './friendItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <WrapperFriendList>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendListItem {...friend} key={friend.id} />
        ))}
      </ul>
    </WrapperFriendList>
  );
};
export default FriendList;

FriendList.propTypes = {
  friend: PropTypes.arrayOf(PropTypes.object),
};
