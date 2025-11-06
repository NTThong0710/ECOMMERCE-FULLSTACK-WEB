import { useState } from 'react'
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Rating from '@mui/material/Rating';
import Bagde from '../../components/Bagde';
import Collapse from "react-collapse";
import DashboardBoxes from "../../components/DashboardBoxes";


import TableProduct from '../../components/TableProduct';
import SearchBox from '../../components/SearchBox';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


const Orders = () => {
    const [open, setOpen] = useState(null);
  const isOpen = (index) =>{
    if(open===index){
      setOpen(null)
    }
    else{
      setOpen(index)
    }
  }
  const [orders, setOrders] = useState([
  { 
    id: 1, 
    orderId: "461374911052251", 
    status: "Pending", 
    paymentId: "pay_461371", 
    name: "Tran Thong", 
    phone: "0848314369", 
    address: "Duc Long, Hoai An, Gia Lai", 
    pincode: "fhgfas", 
    total: 1800, 
    email: "thongtran710@gmail.com", 
    userId: "thongtran0710", 
    date: "07-10-2004" 
  },
  { 
    id: 2, 
    orderId: "461374911052252", 
    status: "Confirm", 
    paymentId: "pay_461372", 
    name: "Tran Thong", 
    phone: "0848314369", 
    address: "Duc Long, Hoai An, Gia Lai", 
    pincode: "fhgfas", 
    total: 2000, 
    email: "thongtran710@gmail.com", 
    userId: "thongtran0710", 
    date: "07-10-2004" 
  }
]);


  
  return (
    <div className="card my-3 p-6 bg-[white] rounded-md">
        <div className="flex items-center justify-between px-2 py-0 mt-3">
          <h2 className="text-[18px] font-[600]">Recent Orders</h2>
          <div className="ml-auto w-[50%]">
            <SearchBox/>
          </div>
        </div>
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
                      <th scope="col" className="px-6 py-3 whitespace-nowrap">Action</th>
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
<Select
  value={orders.status}
  onChange={(e) => {
    const newOrders = [...orders];
    newOrders[index].status = e.target.value;
    setOrders(newOrders);
  }}
  size="small"
>
  <MenuItem value="Confirm">Confirm</MenuItem>
  <MenuItem value="Pending">Pending</MenuItem>
  <MenuItem value="Delivered">Delivered</MenuItem>
</Select>


                <td className="px-6 py-4">07-10-2004</td>
                <td className="px-6 py-4">
  <Button 
    variant="outlined" 
    color="error" 
    className="!text-red-500 !border-red-500 hover:!bg-red-100"
  >
    DELETE
  </Button>
</td>
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
<Select
  value={orders.status}
  onChange={(e) => {
    const newOrders = [...orders];
    newOrders[index].status = e.target.value;
    setOrders(newOrders);
  }}
  size="small"
>
  <MenuItem value="Confirm">Confirm</MenuItem>
  <MenuItem value="Pending">Pending</MenuItem>
  <MenuItem value="Delivered">Delivered</MenuItem>
</Select>


                <td className="px-6 py-4">07-10-2004</td>
                <td className="px-6 py-4">
  <Button 
    variant="outlined" 
    color="error" 
    className="!text-red-500 !border-red-500 hover:!bg-red-100"
  >
    DELETE
  </Button>
</td>
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
  )
}

export default Orders