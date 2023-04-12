import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import CustomInput from "./Custominput";
import BasicSchema from "./BasicSchema";
import CustomSelect from "./Customselect";

function Contact() {

  return (
    <div className='h-screen bg-purple-700 pt-10'>
         <h1 className='text-3xl  text-white'>Contact me</h1>
      <p className="pb-10 text-white">by Formik</p>
      <Formik
        initialValues={{
          name: "",
          email: "",
          typeofEnquiry: "",
          message: "",
        }}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            actions.resetForm();
          }, 1000);
        }}
        validationSchema={BasicSchema}
      >
        {(props) => (
          <Form className='flex flex-col w-3/5 text-left mx-auto'>
            <CustomInput
              label='Name'
              name='name'
              type='text'
              placehoder='Enter your username'
            />
            <CustomInput
              label='Email'
              name='email'
              type='email'
              placehoder='Enter your email'
            />
            <CustomSelect label='Type of Enquiry' name='typeofEnquiry'>
              <option value='select'>Select type of enquiry</option>
              <option value='openSource'>
                Open source consultancy session
              </option>
              <option value='freelance'>Freelance project proposal</option>
              <option value='other'>Other</option>
            </CustomSelect>
            <label>Message</label>
            <Field
              name='message'
              type='text'
              label='Message'
              placeholder='Enter your message2'
              as='textarea'
              rows={4}
              className={
                props.errors.message && props.touched.message
                  ? "border-2 border-red-500 rounded mt-3"
                  : "border-2 rounded mt-3"
              }
            />
            {props.errors.message && props.touched.message && (
              <p className='text-red-500'>{props.errors.message}</p>
            )}

            <button
              type='submit'
              disabled={!props.isValid}
              className='bg-blue-900 w-full rounded text-white mt-3 disabled:bg-gray-500'
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Contact;
