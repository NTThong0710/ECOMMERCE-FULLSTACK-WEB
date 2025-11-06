import { useState } from 'react'
import ProductZoom from '../../components/ProductZoom'
import ProductDetailsComponent from '../../components/ProductDetails';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';

import TextField from '@mui/material/TextField';

const ProductDetails = () => {

  const [activeTabIndex, setActiveTab] = useState(0)

  return (
    <section className='py-5 bg-white'>
      <div className='container flex gap-4 items-center'>
        <div className='productZoomContainer w-[40%]'>
            <ProductZoom/>
        </div>
        <div className='productContent w-[60%] ml-10'>
            <ProductDetailsComponent/>
        </div>       
      </div>
      <div className='container pt-10'>
        <div className='flex items-center gap-8'>
          <span className={`link text-[17px] cursor-pointer font-[500] ${activeTabIndex===0 && 'text-[#ff5252]'}`}
          onClick={()=>setActiveTab(0)}>Description</span>
          <span className={`link text-[17px] cursor-pointer font-[500] ${activeTabIndex===1 && 'text-[#ff5252]'}`}
          onClick={()=>setActiveTab(1)}>Details</span>
          <span className={`link text-[17px] cursor-pointer font-[500] ${activeTabIndex===2 && 'text-[#ff5252]'}`}
          onClick={()=>setActiveTab(2)}>Reviews (5)</span>
        </div>
        {
          activeTabIndex === 0 &&
          <div className='shadow-md w-full mt-5 p-8 rounded-md'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          </div>
        }

        {
          activeTabIndex === 1 &&
          <div class="relative overflow-x-auto pt-10">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                          <th scope="col" class="px-6 py-3">
                              Product name
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Color
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Category
                          </th>
                          <th scope="col" class="px-6 py-3">
                              Price
                          </th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Apple MacBook Pro 17"
                          </th>
                          <td class="px-6 py-4">
                              Silver
                          </td>
                          <td class="px-6 py-4">
                              Laptop
                          </td>
                          <td class="px-6 py-4">
                              $2999
                          </td>
                      </tr>
                      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Microsoft Surface Pro
                          </th>
                          <td class="px-6 py-4">
                              White
                          </td>
                          <td class="px-6 py-4">
                              Laptop PC
                          </td>
                          <td class="px-6 py-4">
                              $1999
                          </td>
                      </tr>
                      <tr class="bg-white dark:bg-gray-800">
                          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              Magic Mouse 2
                          </th>
                          <td class="px-6 py-4">
                              Black
                          </td>
                          <td class="px-6 py-4">
                              Accessories
                          </td>
                          <td class="px-6 py-4">
                              $99
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
        }
        {
          activeTabIndex === 2 &&
          <div className='w-[80%] shadow-md py-5 px-8 productReviewContainer'>
              <h2 className='text-[18px] font-[500] mb-5'>Customer questions & answers</h2>
              <div className='reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden pr-5'>
                <div className='review pt-2 pb-5 border-b border-black/10 w-full flex items-center justify-between'>
                  <div className='info w-[80%] flex items-center gap-2 mt-5'>
                    <div className='img w-[60px] h-[60px] min-w-[60px] mr-2 overflow-hidden rounded-full'>
                      <img src="https://lh3.googleusercontent.com/a/ACg8ocIn_LoS9kElXenJngX2f44SowFB8XTCKs9DOMuoB5L6iVOfRA=s96-c" alt="" />         
                    </div>
                    <div className='w-[80%]'>
                      <h4 className='text-[16px] font-[500]'>Nguyen Tran Thong</h4>
                      <h5  className='text-[13px] font-[500]'>2025-28-08</h5>
                      <p className='mt-0 mb-0 text-[13px]'>Nice product</p>
                    </div>
                    
                  </div>
                  <Rating name="size-small" defaultValue={5} readOnly className='mr-3'/>  
                </div>

                <div className='review pt-2 pb-5 border-b border-black/10 w-full flex items-center justify-between'>
                  <div className='info w-[80%] flex items-center gap-2 mt-5'>
                    <div className='img w-[60px] h-[60px] min-w-[60px] mr-2 overflow-hidden rounded-full'>
                      <img src="https://lh3.googleusercontent.com/a/ACg8ocIn_LoS9kElXenJngX2f44SowFB8XTCKs9DOMuoB5L6iVOfRA=s96-c" alt="" />         
                    </div>
                    <div className='w-[80%]'>
                      <h4 className='text-[16px] font-[500]'>Nguyen Tran Thong</h4>
                      <h5  className='text-[13px] font-[500]'>2025-28-08</h5>
                      <p className='mt-0 mb-0 text-[13px]'>Nice product</p>
                    </div>
                    
                  </div>
                  <Rating name="size-small" defaultValue={5} readOnly className='mr-3'/>  
                </div>

                <div className='review pt-2 pb-5 border-b border-black/10 w-full flex items-center justify-between'>
                  <div className='info w-[80%] flex items-center gap-2 mt-5'>
                    <div className='img w-[60px] h-[60px] min-w-[60px] mr-2 overflow-hidden rounded-full'>
                      <img src="https://lh3.googleusercontent.com/a/ACg8ocIn_LoS9kElXenJngX2f44SowFB8XTCKs9DOMuoB5L6iVOfRA=s96-c" alt="" />         
                    </div>
                    <div className='w-[80%]'>
                      <h4 className='text-[16px] font-[500]'>Nguyen Tran Thong</h4>
                      <h5  className='text-[13px] font-[500]'>2025-28-08</h5>
                      <p className='mt-0 mb-0 text-[13px]'>Nice product</p>
                    </div>
                    
                  </div>
                  <Rating name="size-small" defaultValue={5} readOnly className='mr-3'/>  
                </div>
                
              </div>
              <br/>
              <div className='reviewForm bg-[#f1f1f1] p-4 rounded-sm'>
                <h2 className='text-[18px] font-[500]'>Add a review</h2>
                <form className='mt-5'>
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Write a review..."
                    multiline
                    rows={4}
                    className='w-full'
                  />
                </form>
                <Rating name="size-small" defaultValue={5} className='mt-5 mb-5'/><br />  
                <Button className='btn-org !text-white flex gap-2 !p-3'>
                    Submit Review
                </Button> 
              </div>
              

          </div>
        }
        
      </div>
    </section>
    
  )
}

export default ProductDetails