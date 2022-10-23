import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Login = () => {
  //get user login data
  const { logInUser, resetUser } = useContext(AuthContext);
  const [email, setEmail] = useState();
  //show error
  const [error, setError] = useState();
  //navigate page
  const navigate = useNavigate();
  //navigate to right page
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    //set mail
    setEmail(email);
    const password = form.password.value;
    //login user
    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        const message = error.message;
        setError(message);
      });
    console.log(email, password);
  };
  //reset password
  const resetPassword = () => {
    resetUser(email).then(() => {
      console.log("clicked");
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
                <Link
                  onClick={resetPassword}
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
