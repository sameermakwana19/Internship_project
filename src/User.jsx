import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../src/assets/logo.svg";
import * as Yup from "yup"

export const User = ({ name, age }) => {

  const [details, setDetails] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e, property) => {
    setDetails({
      ...details,
      [property]: e.target.value
    })
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is not valid"),
    password: Yup.string().required("Password is required").min(8, "Password must be more than 8 charectors").max(10, "max 10 charactors")
  })



  return (
    <>
      <Formik initialValues={{
        email: "",
        password: ""
      }} validationSchema={validationSchema} onSubmit={(data) => alert(JSON.stringify(data))}>
        {
          ({
            values, errors, handleChange, handleSubmit
          }) => {
            return (
              <form onSubmit={handleSubmit}>
                <input name="email" onChange={handleChange} />
                <br />
                {errors.email ? errors.email : ""}
                <br />
                <input name="password" type="password" onChange={handleChange} />
                <br />
                {errors.password ? errors.password : ""}

                <button type="submit">Submit</button>
              </form>
            )
          }
        }
      </Formik>


    </>
  );
};

export const Home = () => {
  return (
    <h1>
      Home Compoennt <NavLink to="/user">User</NavLink>{" "}
      <NavLink to="/profile">Profile</NavLink>
    </h1>
  );
};
