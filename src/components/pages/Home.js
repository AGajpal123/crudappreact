import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../layout/Navbar";
const Home = () => {
  const isLoggedIn = true;
  const [users, setUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // console.log("Hello");
    loadUsers();
  }, []);



  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    // console.log(result);
    setUser(result.data.reverse());
    setFilteredUsers(result.data.reverse());
  };




  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };



 const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filteredData = users.filter(
      (user) =>
        user.name.toLowerCase().includes(query) ||
        user.username.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query)
    );
    setFilteredUsers(filteredData);
    setSearchQuery(query);
  };
  

  
  return (
    <div>
      {isLoggedIn ? <Navbar /> : null}

      <div className="container">
        <div className="py-4">
        <input type="text" className="form-control w-25" value={searchQuery} onChange={handleSearch} />
          <h1></h1>
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
              {filteredUsers.map((user, index) => (
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
