
import React from 'react';
import User from './User';

// UsersList component to display the list of users
  
  function UsersList({ users }) {
    return (
        <div>
           <h2>User List</h2>
            {users.map((user) => (
                <User key={user.id} user={user} />
              ))}
        </div>
    )
  }
  
  export default UsersList;