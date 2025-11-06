import { useState } from "react"
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import QtyBox from '../../components/QtyBox';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";

const ProductDetailsComponent = () => {
    const [productActionIndex, setProductActionIndex] = useState(null)
  return (
    <>
        <h1 className='text-[22px] font-[600] mb-3'>Men Opaque Casual Shirt</h1>
            <div className='flex items-center gap-9'>
              <span className='text-gray-400 text-[13px] flex gap-3'>
                Brands: <span className='text-black font-[500] opacity-75'> 
                  CLAFOUTIS </span>
                <Rating name="size-small" defaultValue={5} size="small" readOnly/>
                <span className='text-[13px] cursor-pointer'>Review (17)</span>
              </span>
            </div>

            <div className='flex items-center gap-5 text-[20px] mt-4'>
              <span className='oldPrice line-through text-gray-500 font-[500]'>$58.00</span>
              <span className='newPrice text-primary font-[600]'>$58.00</span>
              <span className='text-[14px]'>Available In Stock:
                <span className='text-green-600 text-[14px] font-bold'> 4651 Items</span>
              </span>
            </div>
            <br />
            <p className='text-[14px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p><br />
            <div className='size mb-5'>
              <span className='text-[16px] flex items-center gap-3'>
                SIZE: 
                <div className='actions flex items-center gap-2'>
                  <Button className={`!min-w-[40px] !h-[30px] !border !border-black/10
                  ${productActionIndex === 0 && '!bg-[#ff5252] !text-white'}`}
                  onClick={()=>setProductActionIndex(0)}>
                    S
                  </Button>
                  <Button className={`!min-w-[40px] !h-[30px] !border !border-black/10
                  ${productActionIndex === 1 && '!bg-[#ff5252] !text-white'}`}
                  onClick={()=>setProductActionIndex(1)}>
                    M
                  </Button >
                  <Button className={`!min-w-[40px] !h-[30px] !border !border-black/10
                  ${productActionIndex === 2 && '!bg-[#ff5252] !text-white'}`}
                  onClick={()=>setProductActionIndex(2)}>
                    L
                  </Button>
                  <Button className={`!min-w-[40px] !h-[30px] !border !border-black/10
                  ${productActionIndex === 3 && '!bg-[#ff5252] !text-white'}`}
                  onClick={()=>setProductActionIndex(3)}>
                    XL
                  </Button>
                </div>
              </span>
            </div>
            <p className='mb-5'>Free Shipping (Est. Delivery Time 2-3 Days)</p>
            <div className='flex items-center gap-4'>
              <div className='qtyBoxWrapper w-[80px]'>
                <QtyBox/>
              </div>
              <Button className='btn-org !text-white flex gap-2 !p-3'><MdOutlineShoppingCart className='text-[22px]'/>
                    Add to Cart
                  </Button>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <span className='flex items-center gap-2 cursor-pointer link'><FaRegHeart className='text-[16px]'/>Add to WishList</span>
              <span className='flex items-center gap-2 cursor-pointer link'><IoGitCompareOutline className='text-[18px]'/>Add to Compare</span>
            </div> 
    </>
  )
}

export default ProductDetailsComponent