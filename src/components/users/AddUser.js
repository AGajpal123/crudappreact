import axios from "axios";
import { Field, Form, Formik, ErrorMessage } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const AddUser = () => {
  let history = useNavigate();
  // const [user, setUser] = useState({
  //   name: "",
  //   username: "",
  //   email: "",
  //   phone: "",
  //   website: "",
  // });

  // const { name, username, email, phone, website } = user;

  // const onInputChange = (event) => {
  //   setUser({
  //     ...user,
  //     [event.target.name]: event.target.value,
  //   });
  //   // console.log(event.target.value);
  // };

  // const onSubmit = async (event) => {
  //   event.preventDefault();
  //   await axios.post("http://localhost:3003/users", user);
  //   history("/");
  // };

  const userValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  };

  const onSubmit = async (event) => {
    // event.preventDefault();
    await axios.post("http://localhost:3003/users", event);
    history("/");
  };

  const userValidation = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().required().email(),
    phone: yup.string().required(),
    website: yup.string().required().url(),
  });

  return (
    <div className="container my-5">
      <Formik
        initialValues={userValues}
        onSubmit={(event) => {
          onSubmit(event);
        }}
        validationSchema={userValidation}
      >
        <Form className="w-50 border shadow" style={{ margin: "0 auto" }}>
          <div class="mb-3">
            <h2 style={{ textAlign: "center" }} className="p-3">
              Add User
            </h2>

            <Field
              type="text"
              class="form-control w-75"
              aria-describedby="emailHelp"
              placeholder="Enter your name"
              name="name"
              style={{ margin: "0 auto" }}
            />
            <small className="text-danger text-center">
              <ErrorMessage name="name" component="div"/>
            </small>
          </div>
          <div class="mb-3">
            <label></label>
            <Field
              type="text"
              class="form-control w-75"
              name="username"
              placeholder="Enter your username"
              style={{ margin: "0 auto" }}
            />
            <small className="text-danger text-center">
              <ErrorMessage name="username" component="div" />
            </small>
          </div>
          <div class="mb-3">
            <Field
              type="email"
              class="form-control w-75"
              name="email"
              placeholder="Enter your E-mail address"
              style={{ margin: "0 auto" }}
            />
             <small className="text-danger text-center">
            <ErrorMessage name="email" component="div"/>
            </small>
          </div>
          <div class="mb-3">
            <Field
              type="text"
              class="form-control w-75"
              name="phone"
              placeholder="Enter your phone number"
              style={{ margin: "0 auto" }}
            />
             <small className="text-danger text-center">
            <ErrorMessage name="phone" component="div" />
            </small>
          </div>
          <div class="mb-3">
            <Field
              type="text"
              class="form-control w-75"
              name="website"
              placeholder="Enter your website"
              style={{ margin: "0 auto" }}
            />
             <small className="text-danger text-center">
            <ErrorMessage name="website" component="div"/>
            </small>
          </div>
          <div className="text-center">
            <button type="submit" class="btn btn-primary w-75 mb-5 mr-5">
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default AddUser;
