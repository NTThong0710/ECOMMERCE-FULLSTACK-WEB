import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { Button } from '@mui/material';
import { useState } from "react";

const QtyBox = () => {
  const [qtyVal, setQtyVal] = useState(1)
  const plusQty=()=>{
    setQtyVal(qtyVal+1)
  }
  const minusQty=()=>{
    if(qtyVal===1) setQtyVal(1)
    else setQtyVal(qtyVal-1)
  }
  return (
    <div className="qtyBox flex items-center relative">
      <input type='number' className='w-full h-[45px] p-2 pl-5 text-[15px] border border-[rgba(0,0,0,0.2)] focus:outline-none rounded-md'
      value={qtyVal}>
      </input>
      <div className="flex items-center flex-col justify-between h-[45px] absolute top-0 right-0 z-50">
        <Button className="!min-w-[25px] !w-[25px] !text-[12px] !h-[20px] !text-gray-500"
        onClick={plusQty}><FaAngleUp/></Button>
        <Button className="!min-w-[25px] !w-[25px] !text-[12px] !h-[20px] !text-gray-500"
        onClick={minusQty}><FaAngleDown/></Button>
      </div>

    </div>
    
    
    
    
  )
}

export default QtyBox