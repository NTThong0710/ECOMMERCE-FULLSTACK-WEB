import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import { GoTriangleDown } from "react-icons/go";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from "@mui/material";

const MyListItems = (props) => {
  return (
    <div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-black/10'>
                        <div className='img w-[15%] rounded-md overflow-hidden'>
                            <Link to='/product/121312' className='group'>
                                <img src="https://serviceapi.spicezgold.com/download/1742446102500_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-0-202402141853.jpg" 
                                className='w-full h-full group-hover:scale-105 transition-all'/>
                            </Link>
                        </div>
                        <div className='info w-[85%] relative'>
                            <IoCloseSharp className='absolute cursor-pointer top-0 right-0 text-[22px]
                            link transition-all'/>
                            <span className='text-[13px]'>Levis</span>
                            <h3 className='text-[16px] font-[600]'><Link to='/' className='link'>Men Opaque Casual Shirt</Link></h3>
                            <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                            

                            <div className='flex items-center gap-5 mt-2'>
                                <span className='oldPrice line-through text-gray-500 font-[500]'>$58.00</span>
                                <span className='newPrice text-primary font-[600]'>$58.00</span>
                                <span className='Price text-primary font-[600]'>50% OFF</span>
                            </div>
                            <br />
                            <Button className="btn-org !text-white">Add to Cart</Button>
                        </div>
                    </div>
  )
}

export default MyListItems