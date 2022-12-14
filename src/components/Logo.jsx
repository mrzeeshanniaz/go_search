import React from 'react';
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
          <p className="text-2xl flex justify-center items-center font=bold py-1 px-2 rounded">
            Go Search{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 t text-primary"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2h-1.528A6 6 0 004 9.528V4z" />
              <path
                fillRule="evenodd"
                d="M8 10a4 4 0 00-3.446 6.032l-1.261 1.26a1 1 0 101.414 1.415l1.261-1.261A4 4 0 108 10zm-2 4a2 2 0 114 0 2 2 0 01-4 0z"
                clipRule="evenodd"
              />
            </svg>
          </p>
        </Link>
  )
}

export default Logo