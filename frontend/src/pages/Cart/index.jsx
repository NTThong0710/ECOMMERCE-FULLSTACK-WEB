import { Link } from 'react-router-dom'
import { BsFillBagCheckFill } from "react-icons/bs";
import { Button } from '@mui/material';
import CartItems from './cartitems';

const CartPage = () => {
  
  return (
    <section className='section py-10 pb-10'>
        <div className='container flex w-[80%] max-w-[80%] gap-5'>
            <div className='leftPart w-[70%]'>
                <div className='shadow-md rounded-md bg-white'>
                    <div className='py-2 px-3  border-b border-black/10'>
                        <h2 className='text-[20px] font-[600]'>Your Cart</h2>
                        <p className='mt-0'>There are <span className='font-bold text-primary'>2</span> products in your cart</p>
                    </div>

                    <CartItems size='S' qty={1}/>
                    <CartItems size='S' qty={1}/>
                </div>
            </div>
            <div className='rightPart w-[30%]'>
                <div className='shadow-md rounded-md bg-white p-5'>
                    <h3 className='pb-3 font-[600]'>CART TOTALS</h3>
                    <hr className='pb-3' />
                    <p className='flex items-center justify-between pb-3'> 
                        <span className='text-[14px] font-[500]'>Subtotal</span>
                        <span className='text-primary font-bold'>$1.300</span>
                    </p>

                    <p className='flex items-center justify-between pb-3'> 
                        <span className='text-[14px] font-[500]'>Shipping</span>
                        <span className='text-primary font-bold'>Free</span>
                    </p>

                    <p className='flex items-center justify-between pb-3'> 
                        <span className='text-[14px] font-[500]'>Estimate for</span>
                        <span className='text-primary font-bold'>United Kingdom</span>
                    </p>

                    <p className='flex items-center justify-between pb-3'> 
                        <span className='text-[14px] font-[500]'>Total</span>
                        <span className='text-primary font-bold'>$1.300</span>
                    </p>

                    <Link to='/'>
                        <Button className='btn-org btn-lg w-full !text-white flex items-center gap-2'>
                            <BsFillBagCheckFill className='text-[20px]'/>Checkout
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CartPage