import React from 'react'

const Bagde = (props) => {
  return (
    <span className={`inline-block py-1 px-4 rounded-full capitalize 
        ${ props.status === "Pending" && 'bg-[#ff5252] text-white' }
        ${ props.status === "Confirm" && 'bg-green-500 text-white' }
        ${ props.status === "Delivered" && 'bg-green-700 text-white' }`
    }
    >{props.status}</span>
  )
}

export default Bagde