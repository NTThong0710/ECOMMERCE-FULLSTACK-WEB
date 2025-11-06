import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchBox = () => {
  return (
    <div className='w-full h-auto bg-[#f1f1f1] relative overflow-hidden'>
        <CiSearch className='absolute top-[13px] left-[10px] z-50 pointer-events-none opacity-80'/>
        <input type="text" placeholder='Search here...'
        className='w-full h-[40px] border border-[rgba(0,0,0,0.1)] bg-[#f1f1f1] p-2 pl-8 focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-md text-[13px]'/>
    </div>
  )
}

export default SearchBox