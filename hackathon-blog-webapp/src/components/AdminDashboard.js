import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const DB_URL = process.env.REACT_APP_DB_URL

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          `${DB_URL}/users`,
        );
        setUsers(response.data);
      } catch (error) {
        alert("An error occurred while fetching the users ", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `${DB_URL}/users/${userId}`,
      );
    } catch (error) {
      alert("An error occurred while deleting the user ", error);
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.email}
            <button onClick={() => handleDeleteUser(user.id)}>
              Delete User
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
