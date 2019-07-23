import React from "react";
import { Link } from "react-router-dom";

function StyledNavLink({ children, ...rest }) {
  return (
    <Link
      className="text-xl font-bold uppercase text-blue-600 hover:text-blue-800"
      {...rest}
    >
      {children}
    </Link>
  );
}

export default function Navigation() {
  return (
    <nav className="py-2">
      <ul className="flex bg-white w-1/2 mx-auto justify-around items-center h-10 rounded-lg shadow-md">
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/new">New</StyledNavLink>
        </li>
      </ul>
    </nav>
  );
}
