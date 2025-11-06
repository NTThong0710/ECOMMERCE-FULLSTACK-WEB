import { Link } from 'react-router-dom'
import { MdNavigateNext } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";

const BlogItem = () => {
  return (
    <div className='blogItem group'>
        <div className='imageWrapper w-full overflow-hidden rounded-lg relative'>
            <img src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg" alt="" 
            className='w-full trasition-all group-hover:rotate-1 group-hover:scale-105'/>
            <span className='flex items-center text-white text-[11px] font-[500] bg-[#ff5252] absolute bottom-3 
            right-3 p-1 z-50 rounded-md overflow-hidden gap-1'><MdAccessTime />2025-03-12</span>
        </div>
        <div className='info py-4'>
                <h2 className='text-[15px] font-[600] text-black mb-2    lg:mb3'>
                    <Link to="/" className='hover:text-[#ff5252]'>
                        Sustainable living through cutting-edge prefabricated homes
                    </Link>
                </h2>
                <p className='mb-3 text-[14px] lg:text-[16px]'>Give2 lady of  they such they sure it. Me contained explained my education. Vulgar... </p>
                <Link to='' className='link font-[500] text-[14px] flex items-center gap-1'>
                    Read More <MdNavigateNext className='text-[18px]'/> 
                </Link>
            </div>
        
        
    </div>
  )
}

export default BlogItem