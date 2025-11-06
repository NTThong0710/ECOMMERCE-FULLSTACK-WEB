import { Link } from 'react-router-dom'
import '../ProductItem/index.css'

import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { useContext } from 'react';
import { MyContext } from '../../App';


const ProductItem = () => {

  const context = useContext(MyContext)

  return (
    <div className='productItem rounded-md shadow-lg overflow-hidden border-1 border-[rgba(0,0,0,0.1)]'>
        <div className='group imgWrapper w-[100%] overflow-hidden rounded-md relative'>
            <Link to='/'>
              <div className='img h-[200px] overflow-hidden'>
                <img src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg" alt="" 
                className='w-full'/>
                <img src="https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg" alt="" 
                className='w-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-alll duration-700
                group-hover:scale-105'/>
              </div>
            </Link>
            
            <span className='discount flex items-center absolute top-[10px]
            left-[10px] z-50 bg-[#ff5252] text-white p-1 rounded-md text-[12px] font-[500]'>8%</span>
            <div className='actions absolute top-[-200px] right-[-10px] z-50 flex items-center
            gap-1 flex-col w-[80px] transition-all duration-300 group-hover:top-[10px]'>

              <Button className='btn !w-[40px] !h-[40px] !min-w-[40px]
              !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-[white]'><FaRegHeart /></Button>
              <Button className='btn !w-[40px] !h-[40px] !min-w-[40px]
              !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-[white]'
              onClick={()=>context.setOpenProductDetailsModel(true)}><MdZoomOutMap /></Button>
              <Button className='btn !w-[40px] !h-[40px] !min-w-[40px]
              !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-[white]'><IoGitCompareOutline /></Button>
            </div>
        </div>
            <div className='info p-3 py-5 shadow-md'>
                <h6 className='text-[14px]'><Link to='/' className='link transition-all'>
                  Flying Machine</Link> 
                </h6>
                <h3 className='text-[16px] title mt-2 mb-2 font-[500] link transition-all'>
                <Link to='/' className='link'>
                  Women Wide Leg High-Rise ...
                </Link>
                  
                </h3>
                <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                <div className='flex items-center justify-between'>
                  <span className='oldPrice line-through text-gray-500 font-[500]'>$58.00</span>
                  <span className='newPrice text-primary font-[600]'>$58.00</span>
                </div>
            </div>
    </div>
  )
}

export default ProductItem