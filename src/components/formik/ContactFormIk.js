import { Formik, Form, Field } from "formik";
const ContactFormIk = () => {
  return (
    <Formik
      initialValues={{ name: "" }}
      onSubmit={(values) => {
        console.log("Form data", values);
      }}
    >
      <Form>
        <Field name="name" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactFormIk;
