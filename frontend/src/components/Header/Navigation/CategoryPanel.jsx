
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import {Link} from 'react-router-dom'
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";
import '../Navigation/style.css'
import { useState } from "react";
import CategoryCollapse from "../../CategoryCollapse";

const CategoryPanel = ({isOpenCatPanel, closeCatPanel }) => {
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
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="CategoryPanel">
        <h3 className="p-3 text-[18px] font-[500] flex items-center justify-between">
          Shop By Categories 
          <IoCloseSharp onClick={closeCatPanel} className="cursor-pointer text-[20px]"/>
        </h3>
      <CategoryCollapse/>

    </Box>
  );

  return (
    <Drawer open={isOpenCatPanel} onClose={closeCatPanel}>
      {DrawerList}
    </Drawer>
  );
};

export default CategoryPanel;
