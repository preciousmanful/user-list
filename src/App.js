import React, { useState } from 'react';
import UsersList from './component/UsersList';





// App component
const App = () => {
  // State variable to hold the list of users
  const [users, setUsers] = useState([
    { id: 1, name: 'Precious Adwoa', email: 'adwoa@example.com' },
    { id: 2, name: 'Adwoa Precious', email: 'precious@example.com' },
  ]);

  // Function to add a new user
  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: `User ${users.length + 1}`,
      email: `user${users.length + 1}@example.com`,
    };

    // Update the state using setState
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <div>
      <h1>React User Management</h1>
      <UsersList users={users} />
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default App;
