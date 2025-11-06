import '../Footer/index.css'

import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { LiaGiftSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import Drawer from '@mui/material/Drawer';
import CartPanel from '../CartPanel';
import { useContext} from 'react';
import { MyContext } from '../../App';
import { IoCloseSharp } from "react-icons/io5";


const Footer = () => {
    const context = useContext(MyContext)
    
  return (
    <footer className='bg-[#fafafa]'>
        <div className='container'>
            <div className='flex items-center justify-center gap-2 p-15'>
                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <LiaShippingFastSolid className="text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1"/>
                    <h3 className="text-[16px] font-[600] mt-3 ">Free Shipping</h3>
                    <p className="text-[12px] mt-3">For all Orders Over $100</p>
                </div>
                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <PiKeyReturnLight  className="text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1"/>
                    <h3 className=" text-[16px] font-[600] mt-3">30 Days Returns</h3>
                    <p className="text-[12px] mt-3">For an Exchange Product</p>
                </div>
                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <BsWallet2  className="text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1"/>
                    <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
                    <p className="text-[12px] mt-3">Payment Cards Accepted</p>
                </div>
                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <LiaGiftSolid className="text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1"/>
                    <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
                    <p className="text-[12px] mt-3">Our First Product Order</p>
                </div>
                <div className='col flex items-center justify-center flex-col group w-[15%]'>
                    <BiSupport className="text-[40px] group-hover:text-[#ff5252] group-hover:-translate-y-1"/>
                    <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
                    <p className="text-[12px] mt-3">Contact us Anytime</p>
                </div>
            </div>
            <br />
            <hr className="text-gray-300 pb-7"/>
            <div className="footer flex px-3 lg:px-0 flex-col lg:flex-row py-2">
                <div className="part1 w-full lg:w-[25%] border-r border-[rgba(0,0,0,0.1)]">
                    <h2 className="py-3 mb-4 font-bold text-[20px]">Contact Us</h2>
                    <p className="text-[13px] font-[400] pb-4">Classyshop - Mega Super Store<br/>
                        123-Manchester United FC Centre</p>
                    <Link to='/' className="link py-3" >sales@yourcompany.com</Link>
                    <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary">(+84) 848-314-369</span>
                </div>
                <div className="part2 w-full lg:w-[40%] flex pl-5">
                    <div className="part2_1 w-full lg:w-[50%]">
                        <h2 className="py-3 mb-1 font-bold text-[20px]">Products</h2>
                        <ul>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Prices drop</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">New products</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Best sales</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Contact us</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Sitemap</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Stores</Link></li>
                            
                        </ul>
                    </div>
                    <div className="part2_2 w-full lg:w-[50%]">
                        <h2 className="py-3 mb-1 font-bold text-[20px]">Our Company</h2>
                        <ul>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Delivery</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Legal notice</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Terms and conditions of use</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">About us</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Secure payment</Link></li>
                            <li><Link to='/' className="link w-full text-[14px] mb-2">Login</Link></li>
                            
                        </ul>
                    </div>                    
                </div>
                <div className="part2  w-full lg:w-[35%] flex pl-0 lg:pl-8 flex-col pr-8 mt-5 lg:mt-0">
                    <h2 className="py-3 mb-4 font-bold text-[20px] ">Subscribe to newsletter</h2>
                    <p className="text-[13px] font-[400] pb-4">Subscribe to our latest newsletter to get news about 
                        special discounts.</p>
                    <form className="mt-5">
                        <input placeholder="Your Email Address" className="p-3 text-[14px] border rounded-md border-gray-300 w-full mb-5"/>
                        <Button className="w-full bg-org !text-white hover:!bg-black">Subcribe</Button><br/>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to the terms and conditions and the privacy policy"
                        className='py-3 lg:mt-0 block w-full' />
                    </form>
                </div>    
            </div> 
        </div>
        <br />
        <div className='bottomStrip border-t-1 border-gray-300 py-3'>
                <div className='container flex items-center justify-between'>
                    <ul className='flex gap-2'>
                        <li className='list-none'>
                            <Link to="https://www.facebook.com/thongtran.0710" target="_blank"
                            className='w-[35px] h-[35px] rounded-full border border-gray-300 flex items-center justify-center group hover:bg-[#ff5252]'>
                                <FaFacebookF className='group-hover:text-white'/>
                            </Link>
                        </li>
                        <li className='list-none'>
                            <Link to="https://www.facebook.com/thongtran.0710" target="_blank"
                            className='w-[35px] h-[35px] rounded-full border border-gray-300 flex items-center justify-center group hover:bg-[#ff5252]'>
                                <AiOutlineYoutube className='group-hover:text-white' />
                            </Link>
                        </li>
                            
                        <li className='list-none'>
                            <Link to="https://www.facebook.com/thongtran.0710" target="_blank"
                            className='w-[35px] h-[35px] rounded-full border border-gray-300 flex items-center justify-center group hover:bg-[#ff5252]'>
                                <FaPinterestP className='group-hover:text-white'/>
                            </Link>
                        </li>
                        
                        <li className='list-none'>
                            <Link to="https://www.instagram.com/thongtran.0710" target="_blank"
                            className='w-[35px] h-[35px] rounded-full border border-gray-300 flex items-center justify-center group hover:bg-[#ff5252]'>
                                <FaInstagram  className='group-hover:text-white'/>
                            </Link>
                        </li>   
                        
                    </ul>
                    <p className='text-[13px] text-center mb-0'>© 2024 - Ecommerce Template</p>
                    <div className='flex gap-1'>
                        <img src="/carte_bleue.png" alt="" />
                        <img src="/visa.png" alt="" />
                        <img src="/master_card.png" alt="" />
                        <img src="/american_express.png" alt="" />
                        <img src="/paypal.png" alt="" />
                    </div>
                </div>
            </div>
            {/*Cart Panel*/}
            <Drawer open={context.openCartPanel} anchor={'right'} onClose={context.toggleCartPanel(false)}
            className='cartPanel'>
                <div className='flex items-center justify-between py-3 px-4 gap-3
                border-b border-black/10'>
                <h4 className='font-[600]'>Shopping Cart (1)</h4>
                <IoCloseSharp className='text-[20px] cursor-pointer'onClick={context.toggleCartPanel(false)}/>
                </div>
                <CartPanel/>
            </Drawer> 
    </footer>
  )
}

export default Footer