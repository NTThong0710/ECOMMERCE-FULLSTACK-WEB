import { useState } from "react";
import { LiaAngleUpSolid, LiaAngleDownSolid } from "react-icons/lia";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../Sidebar/index.css";
import { Button} from "@mui/material";
import Collapse from "react-collapse";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import Rating from '@mui/material/Rating';

const Sidebar = () => {
  const [open, setOpen] = useState(true); 

  return (
    <aside className="sidebar w-[260px]">
      <div className="box">
          <h3 className="mb-5 text-[18px] font-[600] flex items-center w-[230px]">Shop by Category
            <Button
              onClick={() => setOpen(!open)}
              className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto hover:!bg-gray-100 !transition"
            >
              {open ? <LiaAngleUpSolid size={20} /> : <LiaAngleDownSolid size={20} />}
            </Button>
            
          </h3>
          

        {
          <Collapse isOpened={open}>
            <div className="scroll px-2 relative !w-[250px]">
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Fashion" className="w-full" />
                <FormControlLabel control={<Checkbox />} label="Electronics" className="w-full" />
                <FormControlLabel control={<Checkbox />} label="Bags" className="w-full" />
                <FormControlLabel control={<Checkbox />} label="Footwear" className="w-full" />
                <FormControlLabel control={<Checkbox />} label="Groceries" className="w-full" />
                <FormControlLabel control={<Checkbox />} label="Beauty" className="w-full" />
                <FormControlLabel control={<Checkbox />} label="Wellness" className="w-full" />
                <FormControlLabel control={<Checkbox />} label="Jewellery" className="w-full" />
              </FormGroup>
            </div>
          </Collapse>
          
        }
      </div>
      <h3 className="mb-5 text-[16px] font-[600] flex items-center mt-4">Filter By Price</h3>
      <RangeSlider className=" mt-3 mb-2"/>
      <div className=" flex items-center justify-between pt-2 pb-2 priceRange">
        <span className="text-[13px]">
          From: <strong className="text-dark">Rs: {0}</strong>
        </span>
        <span className="ml-auto text-[13px]">
          From: <strong className="text-dark">Rs: {1000}</strong>
        </span>
      </div>
      <div className="filterRating">
        <h3 className="mb-5 text-[16px] font-[600] flex items-center mt-3">Filter By Rating</h3>
        <div className="rating flex flex-col">
          <FormGroup>
                <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />}/> <Rating name="read-only" value={5} readOnly /> 
                </div>
            <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />} /> <Rating name="read-only" value={4} readOnly /> 
                </div>
            <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />}/> <Rating name="read-only" value={3} readOnly /> 
                </div>
            <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />}/> <Rating name="read-only" value={2} readOnly /> 
                </div>
            <div className="flex items-center">
                  <FormControlLabel control={<Checkbox />}/> <Rating name="read-only" value={1} readOnly /> 
                </div>
                  
          </FormGroup>
        </div>
      </div>
      
      
      
    </aside>
  );
};

export default Sidebar;
