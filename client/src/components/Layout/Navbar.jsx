import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";

import logo from "../../assets/small-logo.png";

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  // Used to handle the logout
  const handleLogout = async () => {
    try {
      await logout();
      // Optionally, redirect user to homepage or show a notification
      console.log("Successfully Logged Out!");
    } catch (error) {
      console.error("Failed to logout: ", error);
    }
  };

  // Used for the light/dark mode
  // use theme from local storage if available or set light theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in localstorage on mount & also update localstorage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to html tag required to update theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="sticky top-0 z-[1] bg-base-200 py-2">
      <div className="max-w-7xl mx-auto navbar">
        {/* Small Screen Menu-Logo Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {currentUser && (
                <>
                  <li className="menu-title">
                    <span className="text-yellow-500">
                      Welcome, {currentUser.displayName}!
                    </span>
                  </li>
                  <dic className="divider"></dic>
                  <li>
                    <Link to="/analysis">Analysis</Link>
                  </li>
                  <li>
                    <Link to="/reports">Reports</Link>
                  </li>
                  <div className="divider"></div> {/* Styled as a divider */}
                </>
              )}
              {currentUser ? (
                <>
                  {/* Adjust CSS for -mt-0.5 effect if needed */}
                  <li className="negative-margin">
                    {/* Use class to adjust margins */}
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Log in</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-2xl">
            <div className="w-10 rounded-full">
              <img src={logo} alt="Logo" />
            </div>
            InsightHub
          </Link>
        </div>

        {currentUser && (
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li className="text-xl">
                <Link to="/analysis">Analysis</Link>
              </li>
              <li className="text-xl">
                <Link to="/reports">Reports</Link>
              </li>
            </ul>
          </div>
        )}

        {/*User Section */}
        <div className="navbar-end hidden lg:flex ">
          {/* User */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <path d="M16 7 A4 4 0 0 1 12 11 A4 4 0 0 1 8 7 A4 4 0 0 1 16 7 z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {currentUser ? ( // Conditional rendering based on currentUser
                <>
                  <li className="menu-title">
                    <span className="text-yellow-500">
                      Welcome, {currentUser.displayName}!
                    </span>
                  </li>

                  <div className="divider -mt-0.5"></div>
                  {/* - before mt is for forcing the button to go up */}
                  <li className="-mt-5">
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Log in</Link>
                  </li>
                  <li>
                    <Link to="/signup">Sign up</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        {/* Light/Dark Mode Section */}
        <div className="flex justify-end flex-1 px-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                // show toggle image based on localstorage theme
                checked={theme === "light" ? false : true}
              />
              {/* this hidden checkbox controls the state */}
              <input type="checkbox" />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
