import React from 'react'
import { Input } from 'antd';

const Form = () => {
  return (
    <div className='border-0 lg:rounded-full rounded-lg p-2 w-auto flex shadow-lg '>
        <form className="flex flex-col lg:flex-row w-[100%] h-auto ">
        <div className="relative w-[100%] lg:w-[30%] lg:mx-4 my-2 lg:my-0 py-2 lg:py-0 ">
          <div className='ant-picker css-fpg3f5 block bg-white px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 lg:border-r-2 rounded-none lg:border-b-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#479ED5] peer ant-picker-focused '>
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#479ED5] peer-focus:dark:text-[#479ED5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" htmlFor="startDate">
              Rental Start Date
            </label>
              <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startDate"
                type="date"
                placeholder="Rental Start Date"
          />
          </div>
        </div>
        <div className="relative w-[100%] lg:w-[30%] lg:mx-4 my-2 lg:my-0 py-2 lg:py-0 ">
          <div className='ant-picker css-fpg3f5 block bg-white px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 lg:border-r-2 rounded-none lg:border-b-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#479ED5] peer'>
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#479ED5] peer-focus:dark:text-[#479ED5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" htmlFor="startDate">
              Rental End Date
            </label>
              <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startDate"
                type="date"
                placeholder="Rental Start Date"
          />
          </div>
        </div>
        <div className="relative w-[100%] lg:w-[30%] lg:mx-4 my-2 lg:my-0 py-2 lg:py-0 ">
          <div className='ant-picker css-fpg3f5 block bg-white px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 lg:border-r-2 rounded-none lg:border-b-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#479ED5] peer'>
            <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-[#479ED5] peer-focus:dark:text-[#479ED5] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4" htmlFor="startDate">
              Location
            </label>
              <input
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          </div>
        </div>
          <button
            className="w-28 p-3 m-1 mt-3 lg:mt-0 bg-white text-[#479ED5] rounded-full hover:shadow-lg shadow-sm lg:ml-12"
            type="button"
          >
            Submit
          </button>
        
      </form>
        </div>
  )
}

export default Form