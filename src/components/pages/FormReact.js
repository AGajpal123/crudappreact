import { Formik, Form, Field } from "formik";
const FormReact = () => {
  return (
    <div className="container my-5">
      <Formik
        initialValues={{ name: "", phone: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <label>Name : </label>
          <Field name="name" type="text" />
          <br />
          <br />
          <label>Phone : </label>
          <Field name="phone" type="text" />
          <br />
          <br />
          <label>Password : </label>
          <Field name="password" type="password" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
export default FormReact;
