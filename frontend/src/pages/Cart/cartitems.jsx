import { useState } from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Rating from '@mui/material/Rating';
import { GoTriangleDown } from "react-icons/go";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const CartItems = (props) => {
    const [sizeanchorEl, setSizeAnchorEl] = useState(null);
    const [selectSize, setSelectSize] = useState(props.size)
  const openSize = Boolean(sizeanchorEl);

  const [qtyanchorEl, setQtyAnchorEl] = useState(null);
    const [selectQty, setSelectQty] = useState(props.qty)
  const openQty = Boolean(qtyanchorEl);

  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    if (value !== null){
        setSelectSize(value);
    }
    setSizeAnchorEl(null);
  };

    const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    if (value !== null){
        setSelectQty(value);
    }
    setQtyAnchorEl(null);
  };

  return (
    <div className='cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-black/10'>
                        <div className='img w-[15%] rounded-md overflow-hidden'>
                            <Link to='/product/121312' className='group'>
                                <img src="https://serviceapi.spicezgold.com/download/1742446102500_fytona-medium-laptop-backpack-light-weight-for-school-collage-office-tuition-and-picnic-waterproof-backpack-grey-25-l-product-images-rvyoumccae-0-202402141853.jpg" 
                                className='w-full group-hover:scale-105 transition-all'/>
                            </Link>
                        </div>
                        <div className='info w-[85%] relative'>
                            <IoCloseSharp className='absolute cursor-pointer top-0 right-0 text-[22px]
                            link transition-all'/>
                            <span className='text-[13px]'>Levis</span>
                            <h3 className='text-[16px] font-[600]'><Link to='/' className='link'>Men Opaque Casual Shirt</Link></h3>
                            <Rating name="size-small" defaultValue={4} size="small" readOnly/>
                            <div className='flex items-center gap-4 mt-2'>
                                
                                <div className='relative'>
                                    <span className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600]
                                    py-1 px-2 rounded-md cursor-pointer'
                                    onClick={handleClickSize}>Size {selectSize} <GoTriangleDown />
                                    </span>
                                    <Menu
                                        id="size-menu"
                                        anchorEl={sizeanchorEl}
                                        open={openSize}
                                        onClose={()=>handleCloseSize(null)}
                                        slotProps={{
                                        list: {
                                            'aria-labelledby': 'basic-button',
                                        },
                                        }}
                                    >
                                        <MenuItem onClick={()=>handleCloseSize('S')}>S</MenuItem>
                                        <MenuItem onClick={()=>handleCloseSize('M')}>M</MenuItem>
                                        <MenuItem onClick={()=>handleCloseSize('L')}>L</MenuItem>
                                        <MenuItem onClick={()=>handleCloseSize('XL')}>XL</MenuItem>
                                    </Menu>
                                </div>

                                <div className='relative'>
                                    <span className='flex items-center justify-center bg-[#f1f1f1] text-[12px] font-[600]
                                    py-1 px-2 rounded-md cursor-pointer'
                                    onClick={handleClickQty}>Qty: {selectQty} <GoTriangleDown />
                                    </span>
                                    <Menu
                                        id="size-menu"
                                        anchorEl={qtyanchorEl}
                                        open={openQty}
                                        onClose={()=>handleCloseQty(null)}
                                        slotProps={{
                                        list: {
                                            'aria-labelledby': 'basic-button',
                                        },
                                        }}
                                    >
                                        <MenuItem onClick={()=>handleCloseQty(1)}>1</MenuItem>
                                        <MenuItem onClick={()=>handleCloseQty(2)}>2</MenuItem>
                                        <MenuItem onClick={()=>handleCloseQty(3)}>3</MenuItem>
                                        <MenuItem onClick={()=>handleCloseQty(4)}>4</MenuItem>
                                        <MenuItem onClick={()=>handleCloseQty(5)}>5</MenuItem>
                                        <MenuItem onClick={()=>handleCloseQty(6)}>6</MenuItem>
                                        <MenuItem onClick={()=>handleCloseQty(7)}>7</MenuItem>
                                        <MenuItem onClick={()=>handleCloseQty(8)}>8</MenuItem>
                                        <MenuItem onClick={()=>handleCloseQty(9)}>9</MenuItem>
                                        <MenuItem onClick={()=>handleCloseQty(10)}>10</MenuItem>
                                        
                                    </Menu>
                                </div>
                            </div>

                            <div className='flex items-center gap-5 mt-3'>
                                <span className='oldPrice line-through text-gray-500 font-[500]'>$58.00</span>
                                <span className='newPrice text-primary font-[600]'>$58.00</span>
                                <span className='Price text-primary font-[600]'>50% OFF</span>
                            </div>
                        </div>
                    </div>
  )
}

export default CartItems