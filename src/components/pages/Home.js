import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../layout/Navbar";

const Home = () => {
  const isLoggedIn = true;
  const [users, setUser] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [recordsPerPage, setRecordsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);


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

  const handleSelectChange = (event) => {
    setRecordsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };



  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredUsers.slice(indexOfFirstRecord, indexOfLastRecord);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / recordsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {isLoggedIn ? <Navbar /> : null}

      <div className="container">
        <div className="py-4">
          <div style={{'display':'flex', 'justifyContent':'space-between'}}>
          <div style={{'display':'flex'}}>
            <input type="text" className="form-control" value={searchQuery} onChange={handleSearch} 
            placeholder="Search" />
            <button class="btn btn-outline-secondary"  type="button" id="button-addon2">Search</button>
          </div>
          </div>
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
              {filteredUsers.slice(0,recordsPerPage).map((user, index) => (
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
          <div style={{'display':'flex'}}>
            <label className="fw-bold mt-2">Select Record Count: </label>
             <select
                id="recordsPerPage"
                className="form-select mx-3"
                style={{width:'80px'}}
                value={recordsPerPage}
                onChange={handleSelectChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
