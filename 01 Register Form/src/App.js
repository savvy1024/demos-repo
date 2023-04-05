import React from "react";
import { useState } from "react";
import validateEmail from "./utils.js";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("role");

  const ButtonCheck = () => {


    if (
      firstName !== "" &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role" &&
      confirmPassword === password.value
    ) {
      return true;
    }
  };

  const clearForm = () => {
    setFirstName("")
    setLastName("")
    setPassword({
    value: "",
    isTouched: false,
    })
    setRole("role")
    setEmail("")
    setConfirmPassword("")

    

  }
  const handleSubmit = (e) => {
      e.preventDefault();
      alert("Form Submitted");
      clearForm();

  }

  const checkConfirmPassword = () => {
    if (password.value === confirmPassword) {
      return true;
    } else {
      return false;
    }
      

  }
  return (
    <div className='sign-up'>
      <form onSubmit={handleSubmit}>
        <fieldset className='form'>
          <h2>Sign Up</h2>
          <div className='labels'>
            <label htmlFor='firstName'>
              First Name:<sup>*</sup>
            </label>
            <input
              placeholder='First Name'
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='labels'>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              placeholder='Last Name'
              type='text'
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className='labels'>
            <label>
              Email:<sup>*</sup>
            </label>
            <input
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required 
            />
          </div>
          <div className='labels'>
            <label htmlFor='password'>
              Password:<sup>*</sup>
            </label>
            <input
              placeholder='Password'
              type='password'
              id='password'
              name='password'
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              onBlur={(e) => setPassword({ ...password, isTouched: true })}
            />
            {password.isTouched && password.value.length < 8 ? (
              <div className='error'>
                Password must be at least 8 characters long
              </div>
            ) : (
              ""
            )}
          </div>
          <div className='labels'>
            <label htmlFor='confirmPassword'>
              Confirm Password:<sup>*</sup>
            </label>
            <input
              placeholder='Confirm Password'
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {!checkConfirmPassword() ? (
              <div className='error'>Please enter the same password</div>
            ):""}
          </div>
          <div className='labels'>
            <label htmlFor=''>
              Role:<sup>*</sup>
            </label>
            <select name='role' id='role' onChange={e=>setRole(e.target.value)} value={role}>
              <option value='role'>Role</option>
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
            </select>
          </div>
          
          <button type='submit' disabled={!ButtonCheck()}>
            Create Account
          </button>
        </fieldset>
      </form>
      
    </div>
  );
}

export default Form;
