import React from 'react';
import { useLoaderData } from 'react-router-dom';

//how to call API dynamickly

const UserDetails = () => {
  const friend = useLoaderData();
  return (
    <div>
      <h1>Every Thing You Need To Know About {friend.name} !</h1>
    </div>
  );
};

export default UserDetails;