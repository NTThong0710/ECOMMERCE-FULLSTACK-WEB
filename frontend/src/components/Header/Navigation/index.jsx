import { Button } from "@mui/material"
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";
import '../Navigation/style.css'

const Navigation = () => {

    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);
    const openCatPanel = ()=> setIsOpenCatPanel(true);
    const closeCatPanel = ()=> setIsOpenCatPanel(false);
  return (
    <>
        <nav className="py-2">
            <div className="container flex items-center justify-end gap-8">
                <div className="col_1 w-[20%]">
                    <Button className="!text-black gap-2 w-full" onClick={openCatPanel}>
                        <RiMenu2Fill className="text-[18px]" />
                        SHOP BY CATEGORIES 
                        <LiaAngleDownSolid className="text-[13px] ml-auto font-bold "/>
                    </Button>
                </div>
                <div className="col_2 w-[60%]">
                    <ul className="flex items-center gap-3 nav">
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[black] hover:!text-[red] !bg-none">
                                    Home
                                </Button>
                            </Link>
                        </li>
                        <li className="list-none relative">
                            <Link to="/productListing" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[black] hover:!text-[red] !bg-none">
                                    Fashion
                                </Button>
                            </Link>
                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white 
                            shadow-md opacity-0 transition-all">
                                <ul>
                                    <li className="list-none">
                                        <Link to="/">
                                            <Button className="!text-black w-full !text-left 
                                            !justify-start hover:!text-[red] !rounded-none "> Women
                                            </Button>

                                            <div className="submenu absolute top-[0%] left-[100%] 
                                            min-w-[150px] bg-white 
                                            shadow-md  transition-all">
                                                <ul>
                                                    <li className="list-none">
                                                        <Link to="/">
                                                            <Button className="!text-black w-full !text-left 
                                                            !justify-start hover:!text-[red] !rounded-none"> Sareers</Button>
                                                        </Link>
                                                    </li>
                                                    
                                                    <li className="list-none">
                                                        <Link to="/">
                                                            <Button className="!text-black w-full !text-left 
                                                            !justify-start hover:!text-[red] !rounded-none"> Tops</Button>
                                                        </Link>
                                                    </li>


                                                    <li className="list-none">
                                                        <Link to="/">
                                                            <Button className="!text-black w-full !text-left 
                                                            !justify-start hover:!text-[red] !rounded-none"> Jeans</Button>
                                                        </Link>
                                                    </li>

                                                </ul>
                                            </div>
                                        </Link>
                                    </li>
                                    
                                    <li className="list-none">
                                        <Link to="/">
                                            <Button className="!text-black w-full !text-left 
                                            !justify-start hover:!text-[red] !rounded-none"> Girls</Button>
                                        </Link>
                                    </li>


                                    <li className="list-none">
                                        <Link to="/">
                                            <Button className="!text-black w-full !text-left 
                                            !justify-start hover:!text-[red] !rounded-none"> Men</Button>
                                        </Link>
                                    </li>

                                </ul>
                            </div>
                        </li>



                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !font-[500] !text-[black] hover:!text-[red] !bg-none">Electronics</Button></Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !font-[500] !text-[black] hover:!text-[red] !bg-none">Bags</Button></Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !font-[500] !text-[black] hover:!text-[red] !bg-none">Footwear</Button></Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !font-[500] !text-[black] hover:!text-[red] !bg-none">Groceries</Button></Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !font-[500] !text-[black] hover:!text-[red] !bg-none">Beauty</Button></Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !font-[500] !text-[black] hover:!text-[red] !bg-none">Wellness</Button></Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                            <Button className="link transition !font-[500] !text-[black] hover:!text-[red] !bg-none">Jewellery</Button></Link>
                        </li>
                    </ul>
                </div>
                <div className="col_3 w-[20%]">
                    <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
                        <GoRocket className="text-[18px]" />
                        Free International Delivery
                    </p>
                </div>
            </div>
        </nav>
        
        {/* category panel component */}
        <CategoryPanel isOpenCatPanel={isOpenCatPanel} closeCatPanel={closeCatPanel}/>
    </>

  )
}

export default Navigation