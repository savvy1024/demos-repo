import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BasicSchema from "./BasicSchema";

function ContactformThree() {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm({
    resolver: yupResolver(BasicSchema),
    mode: "onBlur",
  });

  console.log(errors);
  console.log(touchedFields);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='h-screen bg-purple-900 pt-10'>
        <h1 className='text-3xl  text-white'>Contact me</h1>
      <p className="pb-10 text-white">by React-Hook-Form</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-3/5 flex flex-col mx-auto text-left'
      >
        <div className='mb-3'>
          <input
            className='rounded w-full'
            type='text'
            name='name'
            {...register("name")}
            placeholder='Name'
          />
          {errors.name && touchedFields.name && (
            <p className='text-md text-red-500  mb-3'> {errors.name.message}</p>
          )}
        </div>

        <div className='mb-3 '>
          <input
            className='rounded w-full'
            type='email'
            name='email'
            {...register("email")}
            placeholder='Email'
          />
          {errors.email && touchedFields.email && (
            <p className='text-md text-red-500  mb-3'>
              {" "}
              {errors.email.message}
            </p>
          )}
        </div>

        <div className='mb-3 '>
          <select
            className='rounded mb-3 w-full'
            name='typeofEnquiry'
            {...register("typeofEnquiry")}
            placeholder='Type of Enquiry'
          >
            <option value='select'>Select type of enquiry</option>
            <option value='openSource'>Open source consultancy session</option>
            <option value='freelance'>Freelance project proposal</option>
            <option value='other'>Other</option>
          </select>
          {errors.typeofEnquiry && touchedFields.typeofEnquiry && (
            <p className='text-md text-red-500  mb-3'>
              {" "}
              {errors.typeofEnquiry.message}
            </p>
          )}
        </div>

        <div className='mb-3 '>
          <textarea
            className='rounded mb-3 w-full '
            rows='5'
            {...register("message")}
            placeholder='Message'
          ></textarea>
          {errors.message && touchedFields.message && (
            <p className='text-md text-red-500  mb-3'>
              {errors.message.message}
            </p>
          )}
        </div>
        <button className='w-full rounded bg-blue-900 text-white disabled:bg-gray-500' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default ContactformThree;
