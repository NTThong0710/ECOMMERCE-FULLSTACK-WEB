import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";
import { useState } from "react";
const CategoryCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
    const openSubmenu=(index)=>{
    if(submenuIndex===index)
    {
      setSubmenuIndex(null)
    }
    else setSubmenuIndex(index);
  }
    const openInnerSubmenu=(index)=>{
    if(innerSubmenuIndex===index)
    {
      setInnerSubmenuIndex(null)
    }
    else setInnerSubmenuIndex(index);
  }
  return (
    <>
        <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !font-bold !text-black">
                Fashion
              </Button>
            </Link>
            {
              submenuIndex === 0 ? (
              <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" 
              onClick={()=>openSubmenu(0)}/> 
            ) : (
              <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" 
              onClick={()=>openSubmenu(0)}/> )
            }
            {
              submenuIndex===0 &&
              <ul className="submenu w-full pl-3">
                <li className="list-none flex items-center relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !font-bold !text-black">
                    Women
                    </Button>
                  </Link>
                  {
                    innerSubmenuIndex ===0 ?
                    (
                      <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" 
                      onClick={()=>openInnerSubmenu(0)} />
                    ):(
                      <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" 
                      onClick={()=>openInnerSubmenu(0)} />
                    )
                  }
                  {
                    innerSubmenuIndex === 0 &&
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] hover:text-[red]">
                        Sarees
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] hover:text-[red]">
                        Tops
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] hover:text-[red]">
                        Jeans
                        </Link>
                      </li>
                    </ul>
                  }
                </li>
                <li className="list-none flex items-center relative flex-col">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !font-bold !text-black">
                    Girls
                    </Button>
                  </Link>
                  {
                    innerSubmenuIndex ===1 ?
                    (
                      <FiMinusSquare className="absolute top-[10px] right-[15px] cursor-pointer" 
                      onClick={()=>openInnerSubmenu(1)} />
                    ):(
                      <FaRegPlusSquare className="absolute top-[10px] right-[15px] cursor-pointer" 
                      onClick={()=>openInnerSubmenu(1)} />
                    )
                  }
                  {
                    innerSubmenuIndex === 1 &&
                    <ul className="inner_submenu w-full pl-3">
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] hover:text-[red]">
                        Kurtas & Suit
                        </Link>
                      </li>
                      <li className="list-none relative mb-1">
                        <Link to="/" className="link w-full !text-left !justify-start !px-3 text-[14px] hover:text-[red]">
                        Tops
                        </Link>
                      </li>

                    </ul>
                  }
                </li>

              </ul>
            }
          </li>
          {/* electronics */}

        </ul>
      </div>
    </>
  )
}

export default CategoryCollapse