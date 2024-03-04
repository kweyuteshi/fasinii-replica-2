import React from 'react'

const Form = () => {
  return (
    <div className='border-0 lg:rounded-full rounded-lg p-2 w-auto flex shadow-lg '>
        <form className="flex flex-col lg:flex-row w-[100%] h-auto ">
        <div className="relative w-[100%] lg:w-[30%] lg:mx-4 my-2 lg:my-0 py-2 lg:py-0 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
            Rental Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startDate"
            type="date"
            placeholder="Rental Start Date"
          />
        </div>
        <div className="relative w-[100%] lg:w-[30%] lg:mx-4 my-2 lg:my-0 py-2 lg:py-0 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
            Rental End Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="endDate"
            type="date"
            placeholder="Rental End Date"
          />
        </div>
        <div className="relative w-[100%] lg:w-[30%] lg:mx-4 my-2 lg:my-0 py-2 lg:py-0 ">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
          />
        </div>
        <div className="md:w-full">
          <button
            className="w-28 p-3 m-1 mt-3 lg:mt-0 bg-white text-[#479ED5] rounded-full hover:shadow-lg shadow-sm lg:ml-12"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
        </div>
  )
}

export default Form