import { Button } from '@mui/material';
import { Collapse } from 'react-collapse';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';

import { RxDashboard } from "react-icons/rx";
import { FaAngleDown, FaRegImage } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { LiaProductHunt } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { IoBagCheckOutline } from "react-icons/io5";
import { PiFlagBanner } from "react-icons/pi";
import { SiBloglovin } from "react-icons/si";
import { AiOutlineLogout } from "react-icons/ai";
import { MyContext } from '../../App';

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const context =useContext(MyContext)

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? "" : menu);
  };

  const submenuClass =
    "flex items-center !justify-start !py-2 w-full !capitalize !text-[13px] !text-[rgba(0,0,0,0.7)] gap-2 !pl-10 relative hover:!bg-[#f9f9f9]";

  const SubBullet = () => (
    <span className="w-[6px] h-[6px] bg-black/30 rounded-full absolute left-4 right-8"></span>
  );

  return (
    <div className='sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r border-black/10 py-2 px-2 overflow-y-auto'>
      <div className='py-2 px-2 w-full'>
        <Link to='/'>
          <img src="/logo.jpg"/>
        </Link>
      </div>
      <ul className='list-none mt-4'>

        {/* Dashboard */}
        <li>
          <Link to="/">
            <Button className='flex items-center !justify-start !font-bold !py-2 hover:!bg-[#f1f1f1] w-full !capitalize
            !text-[14px] !text-[rgba(0,0,0,0.8)] gap-3'>
              <RxDashboard className='text-[18px]'/>
              <span>Dashboard</span>
            </Button>
          </Link>
        </li>

        {/* Home Slides */}
        <li>
          <Button onClick={() => toggleMenu("homeSlides")}
            className='flex items-center !justify-start !font-bold !py-2 hover:!bg-[#f1f1f1] w-full !capitalize
            !text-[14px] !text-[rgba(0,0,0,0.8)] gap-3'>
            <FaRegImage className='text-[18px]'/>
            <span>Home Slides</span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
              <FaAngleDown />
            </span>
          </Button>
          <Collapse isOpened={openMenu === "homeSlides"} duration={300}>
            <ul>
              <li>
                <Link to="/homeSlider/list">
                  <Button className={submenuClass}><SubBullet/>Home Banner List</Button>
                </Link>
              </li>
              <li>
                
                  <Button className={submenuClass} onClick={() => context.setIsOpenFullPanel({
    open: true,
    model: 'Add Home Slide'
  })}><SubBullet/>Add Home Banner Slide</Button>
                
              </li>
            </ul>
          </Collapse>
        </li>

        {/* Category */}
        <li>
          <Button onClick={() => toggleMenu("category")}
            className='flex items-center !justify-start !font-bold !py-2 hover:!bg-[#f1f1f1] w-full !capitalize
            !text-[14px] !text-[rgba(0,0,0,0.8)] gap-3'>
            <BiCategory className='text-[18px]'/>
            <span>Category</span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
              <FaAngleDown />
            </span>
          </Button>
          <Collapse isOpened={openMenu === "category"} duration={300}>
            <ul>
              <li>
                <Link to="/category/list">
                  <Button className={submenuClass}><SubBullet/>Category List</Button>
                </Link>
              </li>
              <li>
                
                  <Button className={submenuClass} onClick={()=> context.setIsOpenFullPanel(
                    {
    open: true,
    model: 'Add Category'
  }
                  )}><SubBullet/>Add A Category</Button>
                
              </li>
              <li>
                <Link to="/subCategory/list">
                  <Button className={submenuClass}><SubBullet/>Sub Category List</Button>
                </Link>
              </li>
              <li>
                
                  <Button className={submenuClass} onClick={()=> context.setIsOpenFullPanel(
                    {
    open: true,
    model: 'Add New Sub Category'
  }
                  )}><SubBullet/>Add A Sub Category</Button>
                
              </li>
            </ul>
          </Collapse>
        </li>

        {/* Products */}
        <li>
          <Button onClick={() => toggleMenu("products")}
            className='flex items-center !justify-start !font-bold !py-2 hover:!bg-[#f1f1f1] w-full !capitalize
            !text-[14px] !text-[rgba(0,0,0,0.8)] gap-3'>
            <LiaProductHunt className='text-[18px]'/>
            <span>Products</span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
              <FaAngleDown />
            </span>
          </Button>
          <Collapse isOpened={openMenu === "products"} duration={300}>
            <ul>
              <li>
                <Link to="/products">
                  <Button className={submenuClass}><SubBullet/>Product List</Button>
                </Link>
              </li>
              <li>
                
                  <Button className={submenuClass} onClick={()=>context.setIsOpenFullPanel({
                    open:true,
                    model:'Add Product'
                  })}><SubBullet/>Add Product</Button>
                
              </li>
            </ul>
          </Collapse>
        </li>

        {/* Users */}
        <li>
          <Link to="/users">
            <Button className='flex items-center !justify-start !font-bold !py-2 hover:!bg-[#f1f1f1] w-full !capitalize
            !text-[14px] !text-[rgba(0,0,0,0.8)] gap-3'>
              <FiUsers className='text-[18px]'/>
              <span>Users</span>
            </Button>
          </Link>
        </li>

        {/* Orders */}
        <li>
          <Link to="/orders">
            <Button className='flex items-center !justify-start !font-bold !py-2 hover:!bg-[#f1f1f1] w-full !capitalize
            !text-[14px] !text-[rgba(0,0,0,0.8)] gap-3'>
              <IoBagCheckOutline className='text-[18px]'/>
              <span>Orders</span>
            </Button>
          </Link>
        </li>

        {/* Banners */}
        <li>
          <Button onClick={() => toggleMenu("banners")}
            className='flex items-center !justify-start !font-bold !py-2 hover:!bg-[#f1f1f1] w-full !capitalize
            !text-[14px] !text-[rgba(0,0,0,0.8)] gap-3'>
            <PiFlagBanner className='text-[18px]'/>
            <span>Banners</span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
              <FaAngleDown />
            </span>
          </Button>
          <Collapse isOpened={openMenu === "banners"} duration={300}>
            <ul>
              <li>
                <Link to="/banners/list">
                  <Button className={submenuClass}><SubBullet/>Banner List</Button>
                </Link>
              </li>
              <li>
                <Link to="/banners/add">
                  <Button className={submenuClass}><SubBullet/>Add Banner</Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>

        {/* Blogs */}
        <li>
          <Button onClick={() => toggleMenu("blogs")}
            className='flex items-center !justify-start !font-bold !py-2 hover:!bg-[#f1f1f1] w-full !capitalize
            !text-[14px] !text-[rgba(0,0,0,0.8)] gap-3'>
            <SiBloglovin className='text-[18px]'/>
            <span>Blogs</span>
            <span className='ml-auto w-[30px] h-[30px] flex items-center justify-center'>
              <FaAngleDown />
            </span>
          </Button>
          <Collapse isOpened={openMenu === "blogs"} duration={300}>
            <ul>
              <li>
                <Link to="/blogs/list">
                  <Button className={submenuClass}><SubBullet/>Blog List</Button>
                </Link>
              </li>
              <li>
                <Link to="/blogs/add">
                  <Button className={submenuClass}><SubBullet/>Add Blog</Button>
                </Link>
              </li>
            </ul>
          </Collapse>
        </li>

        {/* Logout */}
        <li>
          <Link to="/logout">
            <Button className='flex items-center !justify-start !font-bold !py-2 hover:!bg-[#f1f1f1] w-full !capitalize
            !text-[14px] !text-[rgba(0,0,0,0.8)] gap-3'>
              <AiOutlineLogout className='text-[18px]'/>
              <span>Logout</span>
            </Button>
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
