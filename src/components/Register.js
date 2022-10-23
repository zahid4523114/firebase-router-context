import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Register = () => {
  //get user sign up data
  const { google, signUpUser } = useContext(AuthContext);
  const [error, setError] = useState();

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //create user
    signUpUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        const message = error.message;
        setError(message);
      });
  };
  //
  const googleSignIn = () => {
    google()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleUserLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p className="text-red-400 mt-3 ">{error}</p>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already have an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">SIGN UP</button>
            </div>
          </form>
        </div>
        <div>
          <Link onClick={googleSignIn}>Sign Up with Google</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
