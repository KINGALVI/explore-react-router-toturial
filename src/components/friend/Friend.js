import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../users/User';

//how can we call a API in react router .

const Friend = () => {
  const Friend = useLoaderData()
  console.log(Friend)
  return (
    <div>
      <h1>They Are All My Friends :{Friend.length}</h1>
      {
        Friend.map(friend => <User
          key={friend.id}
          friend={friend}
        ></User>)
      }
    </div>
  );
};

export default Friend;