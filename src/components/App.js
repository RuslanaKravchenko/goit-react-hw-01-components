import React from 'react';

import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import TransactionHistory from './transactionHistory/TransactionHistory';

import data from '../data';

const App = () => {
  return (
    <>
      <Profile {...data.user} />
      <Statistics title="Upload stats" stats={data.statisticalData} />
      <Statistics stats={data.statisticalData} />
      <FriendList friends={data.friends} />
      <TransactionHistory items={data.transactions} />
    </>
  );
};

export default App;
