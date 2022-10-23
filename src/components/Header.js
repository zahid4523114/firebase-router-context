import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const handleSignOut = () => {
    signOutUser();
  };
  return (
    <div className="navbar bg-neutral text-neutral-content d-flex justify-between p-3">
      <div className="">
        <Link className="btn btn-ghost normal-case text-xl" to="/home">
          Home
        </Link>

        {user?.uid ? (
          <Link
            onClick={handleSignOut}
            className="btn btn-ghost normal-case text-xl"
          >
            Log Out
          </Link>
        ) : (
          <>
            <Link className="btn btn-ghost normal-case text-xl" to="/login">
              Login
            </Link>
            <Link className="btn btn-ghost normal-case text-xl" to="/register">
              Register
            </Link>
          </>
        )}
      </div>
      <div className="">
        {user?.displayName ? (
          <>
            <h3>{user?.displayName}</h3>
            <img className="ml-3 rounded-full" src={user?.photoURL} alt="" />
          </>
        ) : (
          <h3>{user?.email}</h3>
        )}
      </div>
    </div>
  );
};

export default Header;
