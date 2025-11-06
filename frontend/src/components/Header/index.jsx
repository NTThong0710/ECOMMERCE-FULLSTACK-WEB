import {Link} from 'react-router-dom'
import Search from '../Search'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import Tooltip from '@mui/material/Tooltip';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';
import { FaRegUser } from "react-icons/fa";
import { Button } from '@mui/material';
import { useState } from 'react';
import { IoBagCheckOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";



import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { IoBagAddOutline } from 'react-icons/io5';


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Header = () => {
    const context = useContext(MyContext)

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className='bg-white'>
        <div className='top-strip py-2 border-t-[1px] border-gray-300 border-b-[1px]'>
            <div className='container'>
                <div className="flex items-center justify-between">
                    <div className="col1 w-[50%]">
                        <p className="text-[12px] font-[500]">Get up to 50% off new season styles, limited time only</p>
                    </div>
                    <div className="col2 flex items-center justify-end">
                        <ul className='flex items-center gap-4'>
                            <li className="list-none">
                                 <Link to="/help-center" className='text-[13px] font-[500]'>Help Center</Link>
                            </li>
                            <li className="list-none">
                                 <Link to="/order-tracking" className='text-[13px] font-[500]'>Order Tracking</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className='header py-4 border-b-[1px] border-gray-300'>
            <div className='container flex items-center justify-between'>
                <div className='col1 w-[25%]'>
                    <Link to={"/"}><img src="/logo.jpg"/></Link>
                </div>
                <div className='col2 w-[40%]'>
                    <Search/>
                </div>
                <div className='col3 w-[35%] flex items-center pl-7'>
                
                    <ul className='flex items-center justify-end gap-3 w-full'>
                    {
                        context.isLogin === false ? (
                        <>
                        <li className='list-none'>
                        <Link 
                            to='/login' 
                            className='transition text-[15px] font-[500] hover:text-red-500'
                        >
                            Login
                        </Link>
                        </li>
                        <li>|</li>

                        <li className='list-none'>
                        <Link 
                            to='/register' 
                            className='transition text-[15px] font-[500] hover:text-red-500'
                        >
                            Register
                        </Link>
                        </li>
                        </>
                        ):(
                            <>
                            <Button className='myAccountWrap flex items-center gap-3 cursor-pointer 'onClick={handleClick}>
                                <div className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full
                                !bg-[#f1f1f1] flex items-center justify-center' ><FaRegUser className='text-[16px]'/></div>
                                <div className='info flex flex-col'>
                                    <h4 className='leading-5 text-[14px] font-[500] capitalize text-left justify-start'>Tran Thong</h4>
                                    <span className='text-[13px] capitalize text-left justify-start'>thongtran710@gmail.com</span>
                                </div>
                            </Button>
                            <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Link to='/my-account' className='w-full block'>
          <MenuItem onClick={handleClose} className='flex gap-2'>
            <FaRegUser /> My Account
          </MenuItem>
        </Link>
        <Link to='/my-orders' className='w-full block'>
          <MenuItem onClick={handleClose} className='flex gap-2'>
            <IoBagCheckOutline /> My Orders
          </MenuItem>
        </Link>
        <Link to='/my-list' className='w-full block'>
          <MenuItem onClick={handleClose} className='flex gap-2'>
            <IoHeartOutline/>
            My List
          </MenuItem>
        </Link>
          
        <Link to='/' className='w-full block'>
          <MenuItem onClick={handleClose} className='flex gap-2'>
            <IoIosLogOut/>
            Log out
          </MenuItem>
        </Link>
        
      </Menu>
                            </>
                        )
                        
                    }
                        <li>
                            <Tooltip title="Wishlist">
                                <IconButton aria-label="cart">
                                <StyledBadge badgeContent={4} color="secondary">
                                <FaRegHeart />
                                </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>
                        <li>
                            <Tooltip title="Cart"> 
                                <IconButton aria-label="cart" onClick={()=>context.setOpenCartPanel(true)}>
                                <StyledBadge badgeContent={4} color="secondary">
                                <MdOutlineShoppingCart />
                                </StyledBadge>
                                </IconButton>
                            </Tooltip>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        <Navigation/>
    </header>
  )
}

export default Header