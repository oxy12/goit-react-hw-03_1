import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import { nanoid } from "nanoid";

import {Yup} from "yup";

import css from "./ContactForm.module.css";

const startingData = { id: "", name: "", number: "" };

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export default function ContactForm({ setUsers }) {
  const userInputId = useId();

  const handleSubmit = (event, actions) => {
    event.id = nanoid();
    setUsers(event);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={startingData}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.container}>
          <label htmlFor={`${userInputId}-username`}>Name</label>
          <Field id={`${userInputId}-username`} name="name" />
          <ErrorMessage component="span" className={css.error} name="name" />

          <label className={css.marginLabel} htmlFor={`${userInputId}-contact`}>
            Number
          </label>
          <Field id={`${userInputId}-contact`} name="number" />
          <ErrorMessage component="span" className={css.error} name="number" />

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
}