import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import * as yup from "yup";

const Contact = () => {
  const formInitialSchema = {
    email: "",
    password: "",
  };
  const onSubmit = (event) => {
    console.log(event);
  };

  const formValidation = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });

  return (
    <div className="container">
      <div className="py-4">
        <h1>Contact Page</h1>
        <Formik
          initialValues={formInitialSchema}
          onSubmit={(event) => {
            onSubmit(event);
          }}
          validationSchema={formValidation}
        >
          <Form>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <Field
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />

              <small className="text-danger">
                <ErrorMessage name="email" component="div" />
              </small>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
              />
              <small className="text-danger">
                <ErrorMessage name="password" component="div" />
              </small>
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Contact;
