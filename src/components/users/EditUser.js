import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";

const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  console.log(id);
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
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const { name, username, email, phone, website, address, company } = user;

  const onInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
      address : {
        ...user.address,
        [event.target.name]: event.target.value,
        geo : {
          ...user.address.geo,
          [event.target.name]: event.target.value,
        }
      },
      company : {
        ...user.company,
        [event.target.name]: event.target.value
      }
    });
   console.log(user);
  };


  // const onInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setUser((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //     address: {
  //       ...prevState.address,
  //       [name]: value,
  //       geo: {
  //         ...prevState.address.geo,
  //         [name]: value,
  //       },
  //     },
  //     company: {
  //       ...prevState.company,
  //       [name]: value,
  //     },
  //   }));
  // };

  useEffect(() => {
    loadUsers();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    // await axios.put(`http://localhost:3003/users/${id}`, user);
    history("/home");
  };

  const loadUsers = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(result.data);
    // console.log(result.data);
  };

  return (
    <>
      {" "}
      <Navbar />
      <div className="container my-5">
        <form
          className="border shadow px-5 py-3"
          style={{ margin: "0 auto", width: "60%" }}
          onSubmit={(event) => {
            onSubmit(event);
          }}
        >
          <h3 style={{ textAlign: "center" }} className="p-3">
            Edit User
          </h3>
          <label className="mx-1 mt-1">
            Name:
            <input
              type="text"
              name="name"
              className="form-control"
              onChange={(event) => {
                onInputChange(event);
              }}
              placeholder="Enter your name"
              value={name}
            />
          </label>
          <label className="mx-1 mt-1">
            Username:
            <input
              type="text"
              value={username}
              name="username"
              onChange={(event) => {
                onInputChange(event);
              }}
              placeholder="Enter your username"
              className="form-control"
            />
          </label>
          <label className="mx-1 mt-1">
            Email:
            <input type="text" value={email}
              name="email"
              onChange={(event) => {
                onInputChange(event);
              }}
              placeholder="Enter your E-mail address" className="form-control" />
          </label>
          <label className="mx-1 mt-1">
            Street:
            <input type="text" value={address.street}
              name="street"
              onChange={(event) => {
                onInputChange(event);
              }}
              placeholder="Enter your website" className="form-control" />
          </label>
          <label className="mx-1 mt-1">
            Suite:
            <input type="text" value={address.suite} name="suite"  onChange={(event) => {
                onInputChange(event);
              }} className="form-control" />
          </label>
          <label className="mx-1 mt-1">
            City:
            <input type="text" value={address.city} name="city" className="form-control "  onChange={(event) => {
                onInputChange(event);
              }}/>
          </label>
          <label className="mx-1 mt-1">
            Zipcode:
            <input type="text" value={address.zipcode} name="zipcode" className="form-control"  onChange={(event) => {
                onInputChange(event);
              }}/>
          </label>
          <label className="mx-1 mt-1">
            Latitude:
            <input type="text" value={address.geo.lat} name="lat" className="form-control"  onChange={(event) => {
                onInputChange(event);
              }}/>
          </label>
          <label className="mx-1 mt-1">
            Longitude:
            <input type="text" value={address.geo.lng} name="lng" className="form-control"  onChange={(event) => {
                onInputChange(event);
              }} />
          </label>
          <label className="mx-1 mt-1">
            Phone:
            <input type="text" name="phone"
              value={phone}
              onChange={(event) => {
                onInputChange(event);
              }}
              placeholder="Enter your phone number" className="form-control" />
          </label>
          <label className="mx-1 mt-1">
            Website:
            <input type="text" value={website}
              name="website"
              onChange={(event) => {
                onInputChange(event);
              }}
              placeholder="Enter your website" className="form-control" />
          </label>
          <label className="mx-1 mt-1">
            Company Name:
            <input type="text"  value={company.name} name="companyName" className="form-control"  onChange={(event) => {
                onInputChange(event);
              }}/>
          </label>
          <label className="mx-1 mt-1">
            Catch Phrase:
            <input type="text" value={company.catchPhrase} name="catchPhrase" className="form-control"  onChange={(event) => {
                onInputChange(event);
              }}/>
          </label>
          <label className="mx-1 mt-1">
            Business Slogan:
            <input type="text" value={company.bs} name="bs" className="form-control"  onChange={(event) => {
                onInputChange(event);
              }}/>
          </label>

          <div className="text-center mt-4">
            <button type="submit" class="btn btn-warning w-75 mb-5 mr-5">
              Update User
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditUser;
