import React from 'react'

const Main = () => {
  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center">
      <div className="text-center p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Hello's Website</h1>
        <p className="text-lg mb-6">
          Discover amazing content and learn more about our services.
        </p>
        <a
          href="#"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </main>
  )
}

export default Main