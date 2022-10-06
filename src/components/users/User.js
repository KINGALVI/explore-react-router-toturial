import React from 'react';
import { Link } from 'react-router-dom';

//how can we call a API in react router .

const User = ({ friend }) => {
  const { id, name, phone, username, website } = friend;
  return (
    <div>
      <hr />
      <h3>Name : {name}</h3>
      <p>Phone : {phone}</p>
      <p>Nick Name : {username}</p>
      <p>Website : <Link to={`/friend/${id}`}>{website}</Link></p>
      <hr />
    </div>
  );
};

export default User;