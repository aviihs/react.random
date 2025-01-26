import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Hello. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a
            href="#"
            className="hover:text-gray-300"
            aria-label="Facebook"
          >
            Facebook
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            aria-label="Twitter"
          >
            Twitter
          </a>
          <a
            href="#"
            className="hover:text-gray-300"
            aria-label="Instagram"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer