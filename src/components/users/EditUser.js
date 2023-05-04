import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate();
  const {id} = useParams();
  console.log(id);
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value);
  };

  useEffect(()=>{
    loadUsers();
  },[])

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.put(`http://localhost:3003/users/${id}`,user);
    history("/");
    
  };

    const loadUsers = async () =>{
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
    // console.log(result.data);
  }

  return (
    <div className="container my-5">
      <form
        className="w-50 border shadow"
        style={{ margin: "0 auto" }}
        onSubmit={(event) => {
          onSubmit(event);
        }}
      >
        <div class="mb-3">
          <h2 style={{ textAlign: "center" }} className="p-3">
           Edit User
          </h2>

          <input
            type="text"
            class="form-control w-75"
            aria-describedby="emailHelp"
            placeholder="Enter your name"
            name="name"
            onChange={(event) => {
              onInputChange(event);
            }}
            value={name}
            style={{ margin: "0 auto" }}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control w-75"
            value={username}
            name="username"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Enter your username"
            style={{ margin: "0 auto" }}
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control w-75"
            value={email}
            name="email"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Enter your E-mail address"
            style={{ margin: "0 auto" }}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control w-75"
            name="phone"
            value={phone}
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Enter your phone number"
            style={{ margin: "0 auto" }}
          />
        </div>
        <div class="mb-3">
          <input
            type="text"
            class="form-control w-75"
            value={website}
            name="website"
            onChange={(event) => {
              onInputChange(event);
            }}
            placeholder="Enter your website"
            style={{ margin: "0 auto" }}
          />
        </div>
        <div className="text-center">
          <button type="submit" class="btn btn-warning w-75 mb-5 mr-5">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
