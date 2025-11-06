import { Button, Divider, IconButton } from '@mui/material'
import { RiMenu2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { useState, useContext } from 'react';
import { MyContext } from '../../App';

const Header = () => {

  const  {toggleSidebar}  = useContext(MyContext)
  const { isLogin } =useContext(MyContext)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: '0 4px',
    },
  }));

  return (
    <>
      <header className='w-full pl-4 pt-10 pb-10 pr-10 h-[50px] bg-white flex items-center justify-between shadow-md'>
        <div className='part1 flex items-center justify-center gap-3'>
          <div className='img'>
            <img src="/logo.jpg" className='cursor-pointer w-[90%]' />
          </div>
          <Button 
             onClick={toggleSidebar}
            className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[rgba(0,0,0,0.8)]'>
            <RiMenu2Line className='text-[22px] text-[rgba(0,0,0,0.8)]'/>
          </Button>
        </div>

        <div className='part2 flex items-center justify-end gap-4'>
          <IconButton>
            <StyledBadge badgeContent={4} color="secondary">
              <FaRegBell />
            </StyledBadge>
          </IconButton>
          {isLogin === true ?
          <div className='relative'>
            <div className='img rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuvr0Qx7UlGx5-rOR2nN2XO1JwBFk6gc2fA&s"
              className='w-full h-full object-cover' onClick={handleClick}/>
            </div>

            

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: { 'aria-labelledby': 'basic-button' },
                }}
              >
                <MenuItem onClick={handleClose} className='!bg-white'>
                  <div className='flex items-center gap-3'>
                    <div className='img rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer'>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTuvr0Qx7UlGx5-rOR2nN2XO1JwBFk6gc2fA&s"
                      className='w-full h-full object-cover'/>
                    </div>
                    <div className='info'>
                      <h3 className='text-[15px] font-[600] leading-5'>Thong Tran</h3>
                      <p className='text-[12px] font-[400] opacity-70'>thongtran7102004@gmail.com</p>
                    </div>
                  </div>
                </MenuItem>
                <Divider/>
                <MenuItem onClick={handleClose} className='flex items-center gap-3'>
                  <FaUser/> <span className='text-[14px]'>Profile</span>
                </MenuItem>
                <MenuItem onClick={handleClose} className='flex items-center gap-3'>
                  <IoLogOut/> <span className='text-[14px]'>Logout</span>
                </MenuItem>
              </Menu>
          </div> 
          
          :

          <Button className='btn-blue !rounded-full'>Sign in</Button>

          }    
          
        </div>
      </header>      
    </>
  )
}

export default Header
