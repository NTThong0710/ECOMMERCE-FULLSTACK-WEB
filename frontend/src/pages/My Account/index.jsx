import { Button } from "@mui/material";

import TextField from '@mui/material/TextField';
import AccountSidebar from "../../components/AccountSidebar";
const MyAccount = () => {
  return (
    <section className='py-10 w-full'> 
        <div className='container flex gap-5'>
            <div className='col1 w-[20%]'>
                <AccountSidebar/>
            </div>
            <div className="col2 w-[70%]">
                <div className="card bg-white p-5 shadow-md rounded-md">
                    <h2 className="pb-3 text-[22px] font-[600]">My Profile</h2>
                    <hr />
                    <form className="mt-5">
                        <div className="flex items-center gap-5 ">
                            <div className="w-[50%]">
                                <TextField id="outlined-basic" label="Full name" variant="outlined" className="w-full"/>
                            </div>
                            <div className="w-[50%]">
                                <TextField id="outlined-basic" label="Email" variant="outlined" className="w-full"/>
                            </div>
                            
                        </div>
                        <div className="flex items-center gap-5 mt-4">
                            <div className="w-[100%]">
                                <TextField id="outlined-basic" label="Phone number" variant="outlined" className="w-full"/>
                            </div>
                        </div>
                        <br />
                        <div className="flex items-center gap-4">
                            <Button className="btn-lg btn-org !text-white w-[100px]">
                                Save
                            </Button>
                            <Button className=" btn-org !text-[#ff5252] w-[100px] btn-border hover:!text-white">
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MyAccount