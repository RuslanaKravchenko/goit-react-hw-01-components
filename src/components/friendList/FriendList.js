import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styledFriendList';
import FriendListItem from './friendItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <Wrapper>
      <ul className="friend-list">
        {friends.map(friend => (
          <FriendListItem {...friend} key={friend.id} />
        ))}
      </ul>
    </Wrapper>
  );
};
export default FriendList;

FriendList.propTypes = {
  friend: PropTypes.arrayOf(PropTypes.object),
};
