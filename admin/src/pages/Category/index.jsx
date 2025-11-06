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
import TableHomeSliderBanners from "../../components/TableHomeSilderBanners";
import TableCategory from "../../components/TableCategory";

const Category = () => {
    const [categoryFilterVal, setCategoryFilterVal] = useState('')
    const context  = useContext(MyContext)
    const handleChangeCatFilter = (event) => {
    setCategoryFilterVal(event.target.value);

    
  };
  return (
    <>
        <div className="card bg-white shadow-md rounded-md p-5 flex items-center justify-between">
            <h1 className="font-[700] text-[20px] text-gray-800">Category List</h1>
            <Button className="btn-blue ml-auto" onClick={()=>context.setIsOpenFullPanel({
              open:true,
              model:'Add Category'
            })}><IoMdAdd className="text-white text-[20px]"/>
            Add Category</Button>
        </div>



        <div className="card my-3">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <TableCategory/>
        </div>
      </div>


    </>
  )
}

export default Category