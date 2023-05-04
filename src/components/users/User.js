import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from '../layout/Navbar';
const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }

  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    console.log(res);
    setUser(res.data);
  };
  return (
    <>
    <Navbar/>
    <div className="container py-4">
      <Link className="btn btn-primary" to="/home" style={{'float':'right'}}>
        Back to Home
      </Link>
      <h1 className="display-6 mt-2">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item"><span className="fw-bold">Name: </span> {user.name}</li>
        <li className="list-group-item"><span className="fw-bold">Username: </span> {user.username}</li>
        <li className="list-group-item"><span className="fw-bold">Email: </span> {user.email}</li>
        <li className="list-group-item"><span className="fw-bold">Phone: </span>{user.phone}</li>
        <li className="list-group-item"><span className="fw-bold">Website: </span>{user.website}</li>
        <li className="list-group-item"><span className="fw-bold">Address: </span>
          <ul>
            <li><span className="fw-bold">Street: </span> : {user.address.street}</li>
            <li><span className="fw-bold">Suite: </span> : {user.address.suite}</li>
            <li><span className="fw-bold">City: </span> : {user.address.city}</li>
            <li><span className="fw-bold">Zipcode: </span> : {user.address.zipcode}</li>
            <li><span className="fw-bold">Geo: </span>
              <ul>
                <li><span className="fw-bold">Latitude : </span>{user.address.geo.lat}</li>
                <li><span className="fw-bold">Longitude : </span>{user.address.geo.lng}</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="list-group-item"><span className="fw-bold">Company: </span>
          <ul>
            <li><span className="fw-bold">Name: </span>  {user.company.name}</li>
            <li><span className="fw-bold">Catch-Phrase: </span>  {user.company.catchPhrase}</li>
            <li><span className="fw-bold">Business Slogan: </span>  {user.company.bs}</li>
          </ul>
        </li>
      </ul>
    </div>
    </>
  );
};

export default User;