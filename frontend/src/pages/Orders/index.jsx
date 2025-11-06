import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagCheckFill } from "react-icons/bs";
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import AccountSidebar from '../../components/AccountSidebar';
import Bagde from '../../components/Bagde';
import Collapse from "react-collapse";

const Orders = () => {
  const [open, setOpen] = useState(false);
  const isOpen = (index) =>{
    if(open===index){
      setOpen(null)
    }
    else{
      setOpen(index)
    }
  }
  return (
    <section className='py-10 w-full'> 
      <div className='container flex gap-5'>
        <div className='col1 w-[20%]'>
          <AccountSidebar/>
        </div>
        <div className="col2 w-[70%]">
          <div className='shadow-md rounded-md bg-white'>
            <div className='py-2 px-3 border-b border-black/10'>
              <h2 className='text-[20px] font-[600]'>My Orders</h2>
              <p className='mt-0'>
                There are <span className='font-bold text-primary'>2</span> orders
              </p>

              <div className="relative overflow-x-auto pt-2">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">
                              
                            </th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Order ID</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Payment ID</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Products</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Name</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Phone number</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Address</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Pincode</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Total Amount</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Email</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">User ID</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Order Status</th>
                            <th scope="col" className="px-6 py-3 whitespace-nowrap">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Order Row 1 */}
                    <tr className="bg-white border-b border-gray-200">
                      <td className='px-6 py-4'>
                        <Button 
                          onClick={() => isOpen(1)} 
                          className='!w-[45px] !h-[45px] !min-w-[45px] !rounded-full !bg-gray-500 flex items-center justify-center'
                        >
                          <FaAngleDown 
                            className={`text-[20px] text-white transition-transform duration-300 ${open === 1 ? "rotate-180" : ""}`} 
                          />
                        </Button>
                      </td>
                      <td className="px-6 py-4">
                        <span className='text-primary'>461374911052251</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className='text-primary'>pay_461371</span>
                      </td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 whitespace-nowrap">Tran Thong</td>
                      <td className="px-6 py-4">0848314369</td>
                      <td className="px-6 py-4 w-[200px]">Duc Long, Hoai An, Gia Lai</td>
                      <td className="px-6 py-4">fhgfas</td>
                      <td className="px-6 py-4">1800</td>
                      <td className="px-6 py-4">thongtran710@gmail.com</td>
                      <td className="px-6 py-4">thongtran0710</td>
                      <td className="px-6 py-4">
                        <Bagde status="Pending"/>
                      </td>
                      <td className="px-6 py-4">07-10-2004</td>
                    </tr>

                    {/* Collapse row 1 */}
                    {open === 1 && (
                      <tr>
                        <td className='px-0 py-0' colSpan="6">
                          <Collapse isOpened={open === 1}>
                            <div className="relative p-4 overflow-x-auto">
                              <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                  <tr>
                                    <th className="px-6 py-3 whitespace-nowrap">Product ID</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Product Title</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Image</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Quantity</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Price</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Subtotal</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="bg-white border-b border-gray-200">
                                    <td className="px-6 py-4 text-primary">123456</td>
                                    <td className="px-6 py-4">Sample Product</td>
                                    <td className="px-6 py-4">
                                      <img src="https://via.placeholder.com/50" alt="product" />
                                    </td>
                                    <td className="px-6 py-4">2</td>
                                    <td className="px-6 py-4">900</td>
                                    <td className="px-6 py-4">1800</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Collapse>
                        </td>
                      </tr>
                    )}
                  </tbody>

                  <tbody>
                    {/* Order Row 2 */}
                    <tr className="bg-white border-b border-gray-200">
                      <td className='px-6 py-4'>
                        <Button 
                          onClick={() => isOpen(2)} 
                          className='!w-[45px] !h-[45px] !min-w-[45px] !rounded-full !bg-gray-500 flex items-center justify-center'
                        >
                          <FaAngleDown 
                            className={`text-[20px] text-white transition-transform duration-300 ${open === 2 ? "rotate-180" : ""}`} 
                          />
                        </Button>
                      </td>
                      <td className="px-6 py-4">
                        <span className='text-primary'>461374911052252</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className='text-primary'>pay_461372</span>
                      </td>
                      <td className="px-6 py-4"></td>
                      <td className="px-6 py-4 whitespace-nowrap">Tran Thong</td>
                      <td className="px-6 py-4">0848314369</td>
                      <td className="px-6 py-4 w-[200px]">Duc Long, Hoai An, Gia Lai</td>
                      <td className="px-6 py-4">fhgfas</td>
                      <td className="px-6 py-4">2000</td>
                      <td className="px-6 py-4">thongtran710@gmail.com</td>
                      <td className="px-6 py-4">thongtran0710</td>
                      <td className="px-6 py-4">
                        <Bagde status="Pending"/>
                      </td>
                      <td className="px-6 py-4">07-10-2004</td>
                    </tr>

                    {/* Collapse row 2 */}
                    {open === 2 && (
                      <tr>
                        <td className='px-0 py-0' colSpan="6">
                          <Collapse isOpened={open === 2}>
                            <div className="relative overflow-x-auto p-4">
                              <table className="w-full text-sm text-left text-gray-500">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                  <tr>
                                    <th className="px-6 py-3 whitespace-nowrap">Product ID</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Product Title</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Image</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Quantity</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Price</th>
                                    <th className="px-6 py-3 whitespace-nowrap">Subtotal</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="bg-white border-b border-gray-200">
                                    <td className="px-6 py-4 text-primary">789012</td>
                                    <td className="px-6 py-4">Another Product</td>
                                    <td className="px-6 py-4">
                                      <img src="https://via.placeholder.com/50" alt="product" />
                                    </td>
                                    <td className="px-6 py-4">1</td>
                                    <td className="px-6 py-4">2000</td>
                                    <td className="px-6 py-4">2000</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Collapse>
                        </td>
                      </tr>
                    )}
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Orders
