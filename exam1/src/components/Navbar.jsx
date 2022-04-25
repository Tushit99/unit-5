import { useState } from "react";
import { Link } from "react-router-dom"
export const Navbar = () => {
  const [login , setlogin]= useState(false)
  return (
    <div className="navbar ">
      <Link className="nav-home nav" to="/">
        Home
      </Link>
      <Link className="nav-list nav" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin nav" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */
      login ? <Link className="nav-logout nav" to="/logout">
          Logout
         </Link> : <Link className="nav-login nav" to="/login">
        Login
      </Link>
      }

    </div>
  );
};