import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://8080-ffccfffadcaefbecfbaffffddddabcdbfbebdb.premiumproject.examly.io/users",
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
        `https://8080-ffccfffadcaefbecfbaffffddddabcdbfbebdb.premiumproject.examly.io/users/${userId}`,
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
