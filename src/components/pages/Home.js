import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../layout/Navbar";
const Home = () => {
  const isLoggedIn = false;
  const [users, setUser] = useState([]);
  useEffect(() => {
    // console.log("Hello");
    loadUsers();
  }, []);
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    // console.log(result);
    setUser(result.data.reverse());
  };
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };
  return (
    <div>
      {isLoggedIn ? <Navbar /> : null}

      <div className="container">
        <div className="py-4">
          <h1>Home Page</h1>
          <table class="table table-striped border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <NavLink
                      className="btn btn-primary mx-2"
                      to={`/users/${user.id}`}
                    >
                      View
                    </NavLink>
                    <NavLink
                      className="btn btn-outline-secondary mx-2"
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </NavLink>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
