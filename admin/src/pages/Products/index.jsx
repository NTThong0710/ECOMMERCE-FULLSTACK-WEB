import { Button } from "@mui/material"
import { IoMdAdd } from "react-icons/io";
import { useContext, useState } from 'react'

import { FaAngleDown } from "react-icons/fa6";

import Rating from '@mui/material/Rating';
import Bagde from '../../components/Bagde';
import Collapse from "react-collapse";
import DashboardBoxes from "../../components/DashboardBoxes";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import TableProduct from '../../components/TableProduct';
import SearchBox from "../../components/SearchBox";
import { MyContext } from "../../App";

const Products = () => {
    const [categoryFilterVal, setCategoryFilterVal] = useState('')
    const context  = useContext(MyContext)
    const handleChangeCatFilter = (event) => {
    setCategoryFilterVal(event.target.value);

    
  };
  return (
    <>
        <div className="card bg-white shadow-md rounded-md p-5 flex items-center justify-between">
            <h1 className="font-[700] text-[20px] text-gray-800">Products</h1>
            <Button className="btn-blue ml-auto" onClick={()=>context.setIsOpenFullPanel({
              open:true,
              model:'Add Product'
            })}><IoMdAdd className="text-white text-[20px]"/>
            Add Product</Button>
        </div>



        <div className="card my-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <div className="flex items-center">
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
            <div className="w-[25%] pl-5 pb-4 ">
                <SearchBox/>
            </div> 
          </div>
          <TableProduct/>
        </div>
      </div>


    </>
  )
}

export default Products