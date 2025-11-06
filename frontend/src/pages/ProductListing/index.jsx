
import Sidebar from '../../components/Sidebar'
import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductItem from '../../components/ProductItem';
import ProductItemListView from '../../components/ProductItemListView';
import { Button } from '@mui/material';
import { IoGridSharp } from "react-icons/io5";
import { CgMenu } from "react-icons/cg";
import { useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const ProductListing = () => {
    const [itemView, setItemView] = useState('grid')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
  return (
    <section>
        <div className='bg-white p-2'>
            <div className='flex gap-10 '>
                <div className='sidebarWrapper w-[20%] h-full bg-white p-5'>
                    <Sidebar/>
                </div>
                <div className='rightContent w-[80%]'>
                    <div className='bg-[#f1f1f1] w-full rounded-md overflow-hidden mb-3 p-2 flex
                    items-center justify-between'>  
                        <div className='col1 flex items-center itemViewActions'>
                            <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full
                            ${itemView === "list" && 'active'}`}
                            onClick={()=>setItemView('list')}><CgMenu 
                            className='text-[rgba(0,0,0,0.7)]'/></Button>
                            <Button className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full
                            ${itemView === "grid" && 'active'}`}
                            onClick={()=>setItemView('grid')}><IoGridSharp
                            className='text-[rgba(0,0,0,0.7)]' /></Button>
                            <span className='text-[14px] text-[rgba(0,0,0,0.7)] pl-3 font-[500]'>There are 27 products</span>
                        </div>

                        <div className='col2 ml-auto flex items-center justify-end pr-8'>
                            <span className='text-[14px] text-[rgba(0,0,0,0.7)] pr-2 font-[500]'>Sort By</span>
                            <div>
                                <Button
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                    className='!bg-white !text-[12px] !capitalize !text-[#000]'
                                >
                                    Name, A to Z
                                </Button>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    slotProps={{
                                    list: {
                                        'aria-labelledby': 'basic-button',
                                    },
                                    }}
                                >
                                    <MenuItem onClick={handleClose} className='!bg-white !text-[12px] !capitalize !text-[#000]'>Name, A to Z</MenuItem>
                                    <MenuItem onClick={handleClose} className='!bg-white !text-[12px] !capitalize !text-[#000]'>Name, Z to A</MenuItem>
                                    <MenuItem onClick={handleClose} className='!bg-white !text-[12px] !capitalize !text-[#000]'>Price, Low to High</MenuItem>
                                    <MenuItem onClick={handleClose} className='!bg-white !text-[12px] !capitalize !text-[#000]'>Price, High to Low</MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </div>
                    <div className={`grid ${itemView==='grid' ? 'grid-cols-4 md:grid-cols-4' :
                        'grid-cols-1 md:grid-cols-1'} gap-3`}>
                    {
                        itemView === 'grid' ?
                        <>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                            <ProductItem/>
                        </>

                        :
                        <>
                            <ProductItemListView/>
                            <ProductItemListView/>
                            <ProductItemListView/>
                            <ProductItemListView/>
                            <ProductItemListView/>
                            <ProductItemListView/>
                            
                        </>
                        
                    }
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductListing