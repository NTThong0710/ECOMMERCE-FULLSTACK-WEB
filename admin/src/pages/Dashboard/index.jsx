import { useState } from 'react'
import { Button } from '@mui/material';
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Rating from '@mui/material/Rating';
import Bagde from '../../components/Bagde';
import Collapse from "react-collapse";
import DashboardBoxes from "../../components/DashboardBoxes";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import TableProduct from '../../components/TableProduct';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import SearchBox from '../../components/SearchBox';



const Dashboard = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [open, setOpen] = useState(null);
  const isOpen = (index) =>{
    if(open===index){
      setOpen(null)
    }
    else{
      setOpen(index)
    }
  }
  const [categoryFilterVal, setCategoryFilterVal] = useState('')
  const handleChangeCatFilter = (event) => {
    setCategoryFilterVal(event.target.value);
  };

  const [selectedChart, setSelectedChart] = useState("all");

  const data = [
  {
    name: 'JAN',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'MAR',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'APRIL',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'JUNE',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'JULY',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'AUG',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'SEP',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'OCT',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'NOV',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'DEC',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

  return (
    <div className="p-6 w-full">
      <DashboardBoxes/>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">Products</h2>
        <div className="col w-[75%] ml-auto flex items-center justify-end gap-3">
          <Button className="btn-green !bg-emerald-500">Export</Button>
          <Button className="btn-blue">Add Product</Button>
        </div>
      </div>

      <div className="card my-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className='w-[25%] flex items-center pl-5 pb-4'>
            <Select
              value={categoryFilterVal}
              onChange={handleChangeCatFilter}
              label="Category"
              className='w-full'
              size='small'
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Men</MenuItem>
              <MenuItem value={20}>Women</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <TableProduct/>
        </div>
      </div>

      <div className="card my-3 pt-6 pb-6">
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

      <div className='card my-3 p-6 bg-[white]'>
        <h3 className='ml-5 mb-5 font-semibold'>Total Users & Total Sales</h3>
        
        <div className="flex gap-6 mb-4 pl-5">
          <span
            className="flex items-center gap-2 cursor-pointer"
            onClick={() =>
              setSelectedChart(selectedChart === "uv" ? "all" : "uv")
            }
          >
            <span
              className="block w-[8px] h-[8px] rounded-full bg-[#82ca9d]"
            ></span>
            <span
              className={`${
                selectedChart === "uv" ? "font-bold text-green-700" : ""
              }`}
            >
              Total Users
            </span>
          </span>

          <span
            className="flex items-center gap-2 cursor-pointer"
            onClick={() =>
              setSelectedChart(selectedChart === "pv" ? "all" : "pv")
            }
          >
            <span
              className="block w-[8px] h-[8px] rounded-full bg-[#8884d8]"
            ></span>
            <span
              className={`${
                selectedChart === "pv" ? "font-bold text-indigo-700" : ""
              }`}
            >
              Total Sales
            </span>
          </span>
        </div>


      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="none" />
          <XAxis dataKey="name" interval={0} tick={{ fontSize: 12 }} padding={{ left: 20, right: 20 }} />
          <YAxis />
          <Tooltip />
          <Legend />

          {(selectedChart === "all" || selectedChart === "pv") && (
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
              name="Total Sales"
            />
          )}

          {(selectedChart === "all" || selectedChart === "uv") && (
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#82ca9d"
              name="Total Users"
            />
          )}
        </LineChart>
      </ResponsiveContainer>
      
      </div>
        


    </div>
  );
};

export default Dashboard;
