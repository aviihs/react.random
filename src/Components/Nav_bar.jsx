import React from 'react'

const Nav_bar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">
          Hello
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-200">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav_bar