import React from 'react';

const Users = (props) => {
  const { greetingMessage } = props;
  const { id } = props.match.params;
  return (
    <div>
      <h2> {id} </h2>
      <p>{greetingMessage}, this is my awesome.</p>
    </div>
  );
};

export default Users;
