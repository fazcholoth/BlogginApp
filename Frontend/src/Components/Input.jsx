import React from 'react'

function Input() {
  return (
    <div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heading</label>
            <input type="text" name="mainHeading" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Main Heading" required />
        </div>
        <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Heading</label>
            <input type="text" name="creatername" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Name" required />
        </div>
        </div>
  )
}

export default Input