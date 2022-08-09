import React from 'react'

export const Footer = () => {
  let currentYear = new Date().getFullYear();
  
  return (
    <div
    className="text-center p-10 mt-10 border-t text-primary border-black dark:border-white"
    >
    <h1>{`${currentYear} Go Search, Inc`}</h1>
    </div>
  )
}
