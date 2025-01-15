import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const EditUser = () => {
  const { id } = useParams(); // Get the user ID from the URL
  const navigate = useNavigate();
  const { authorizationToken, API } = useAuth();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  // Fetch user data by ID
  const getUserById = async () => {
    try {
      const response = await fetch(`${API}/api/admin/users/${id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUserData({
        username: data.username,
        email: data.email,
        phone: data.phone,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update user data
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API}/api/admin/users/update/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        toast.success("User updated successfully!");
        navigate("/admin/users"); // Navigate back to the users list
      } else {
        toast.error("Failed to update user.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch user data when the component loads
  useEffect(() => {
    getUserById();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="edit-user-form">
      <h2>Edit User</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};
