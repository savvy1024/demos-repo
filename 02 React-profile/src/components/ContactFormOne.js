import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const basicSchema = yup.object().shape({
  name: yup.string().max(10).required("Name is required"),
  email: yup.string().email().required("Email is required"),
  typeofEnquiry: yup
    .string()
    .oneOf(["openSource", "freelance", "other"])
    .label("select")
    .required("Type of enquiry is required"),
  message: yup.string().min(25).required("Message is required"),
});

function ContactSection() {
  const {
    handleBlur,
    handleChange,
    handleSubmit,
    touched,
    errors,
    isValid,
    values,
    resetForm,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      typeofEnquiry: "",
      message: "",
    },
    async onSubmit(value) {
      console.log(values);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      resetForm();
    },
    validationSchema: basicSchema,
  });

  console.log(isValid);

  return (
    <div className='h-screen flex flex-col bg-purple-700 pt-10'>
      <h1 className='text-3xl  text-white'>Contact me</h1>
      <p className="pb-10 text-white">by useFormik</p>
      <form
        onSubmit={handleSubmit}
        className='w-3/5 flex flex-col mx-auto text-left'
      >
        <label className='text-white' htmlFor='email'>
          Name
        </label>
        <input
          className={
            errors.name && touched.name
              ? "border-red-400 border-2 rounded "
              : "rounded mb-3"
          }
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type='text'
          name='name'
          id='name'
          placeholder='Enter your name'
        />
        {errors.name && touched.name && (
          <p className='text-red-500 mb-3'>{errors.name}</p>
        )}

        {/* Email*/}
        <label className='text-white' htmlFor='email'>
          Email
        </label>
        <input
          className={
            errors.email && touched.email
              ? "border-red-400 border-2 rounded"
              : "rounded mb-3"
          }
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type='email'
          name='email'
          id='email'
          placeholder='Enter your email'
        />
        {errors.email && touched.email && (
          <p className='text-red-500 mb-3'>{errors.email}</p>
        )}

        {/* Type*/}
        <label className='text-white' htmlFor='typeofEnquiry'>
          Type of enquiry
        </label>
        <select
          className={
            errors.typeofEnquiry && touched.typeofEnquiry
              ? "border-red-400 border-2 rounded"
              : "rounded mb-3"
          }
          value={values.typeofEnquiry}
          onChange={handleChange}
          onBlur={handleBlur}
          type='text'
          name='typeofEnquiry'
          id='typeofEnquiry'
          placeholder='Select type of enquiry'
        >
          <option value='select'>Select type of enquiry</option>
          <option value='openSource'>Open source consultancy session</option>
          <option value='freelance'>Freelance project proposal</option>
          <option value='other'>Other</option>
        </select>
        {errors.typeofEnquiry && touched.typeofEnquiry && (
          <p className='text-red-500 mb-3'>{errors.typeofEnquiry}</p>
        )}

        {/* message*/}
        <label className='text-white' htmlFor='message'>
          Message
        </label>
        <textarea
          className={
            errors.message && touched.message
              ? "border-red-400 border-2 rounded"
              : "rounded mb-3"
          }
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          type='text'
          rows='5'
          name='message'
          id='message'
          placeholder='Enter your message'
        />
        {errors.message && touched.message && (
          <p className='text-red-500 mb-3'>{errors.message}</p>
        )}

        <button
          type='submit'
          disabled={!isValid}
          className='w-full rounded bg-blue-900 text-white disabled:bg-gray-500  '
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactSection;
