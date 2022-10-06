import React from 'react';

// if user search for a page that not exist in thsih webside file than we can throw a <Error> masseage to the user by useing <Error> component

const Error = () => {
  return (
    <div>
      <h1>Sorry Page Not Found !</h1>
    </div>
  );
};

export default Error;