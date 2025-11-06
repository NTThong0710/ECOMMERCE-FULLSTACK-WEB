import { FaCloudUploadAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const AccountSidebar = () => {
  return (
    <div className='card bg-white shadow-md rounded-md sticky top-[10px]'>
                    <div className='w-full p-5 flex items-center justify-center flex-col'>
                        <div className='w-[110px] h-[110px] rounded-full overflow-hidden relative group'>
                            <img src="https://media.istockphoto.com/id/1135381173/photo/portrait-of-a-young-man-outdoors-smiling.jpg?s=612x612&w=0&k=20&c=J8DKGHI8o-oj8cY1CCNpFY2V9OmVVbJuKSO2DdbMvRg=" 
                            className='w-full h-full object-cover' />
                            <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.7)]
                            flex items-center justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100">
                                <FaCloudUploadAlt className="text-[#fff] text-[25px]"/>
                                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0"/>
                            </div>
                        </div>
                        <h3 className="pt-3 !font-[700]">Thong Tran</h3>
                        <h6 className="text-[14px] font-[500]">thongtran7102004@gmail.com</h6>
                    </div>

                    <ul className="list-none pb-5 bg-[#f1f1f1] myAccountTabs">
                        <li className="w-full">
                            <NavLink to='/my-account' className={({ isActive }) =>
      `relative block ${isActive ? "active isActive" : ""}`
    }>
                                <Button className="!capitalize !py-2 !font-[600] !px-5 !justify-start flex items-center gap-2 w-full !rounded-none"><FaRegUser className="text-[17px]"/>User Profile</Button>
                            </NavLink>
                        </li>
                        <li className="w-full">
                            <NavLink to='/my-orders' className={({ isActive }) =>
      `relative block ${isActive ? "active isActive" : ""}`
    } >
                                <Button className="!capitalize !py-2 !font-[600] !px-5 !justify-start flex items-center gap-2 w-full !rounded-none"><IoBagCheckOutline className="text-[17px]"/>My Orders</Button>
                            </NavLink>
                        </li>    
                        <li className="w-full">
                            <NavLink to='/my-list' className={({ isActive }) =>
      `relative block ${isActive ? "active isActive" : ""}`
    }>
                                <Button className="!capitalize !py-2 !font-[600] !px-5 !justify-start flex items-center gap-2 w-full !rounded-none"><IoHeartOutline className="text-[17px]"/>My List</Button>
                            </NavLink>
                            
                        </li>
                        <li className="w-full">
                            <NavLink to='/my-orders' className={({ isActive }) =>
      `relative block ${isActive ? "active isActive" : ""}`
    }></NavLink>
                            <Button className="!capitalize !py-2 !font-[600] !px-5 !justify-start flex items-center gap-2 w-full !rounded-none"><IoIosLogOut className="text-[17px]"/>Log Out</Button>
                        </li>
                        
                    </ul>
                </div>
  )
}

export default AccountSidebar