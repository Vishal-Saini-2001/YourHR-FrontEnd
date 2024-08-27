import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../css/users.css'

const Users = () => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div id='users-page'>
      <h2>Users with Resumes</h2>

      <div id='showusers'>
        {users.map(user => (
          <div id='users' key={user._id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <div style={{ width: '100%', height: '300px', overflow: 'auto' }}>
              <iframe
                src={`http://localhost:8080/${user.pdfFilePath}`}
                width="100%"
                height="100%"
                style={{ border: 'none' }}
                title="PDF Viewer"
              />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Users