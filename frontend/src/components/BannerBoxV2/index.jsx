import { Link } from "react-router-dom"


const BannerBoxV2 = () => {
  return (
    <div className="bannerBoxV2 flex items-center justify-between flex-col gap-5 rounded-md overflow-hidden">
        <div className="banner1 relative">
            <img src="/bannerBox1.jpg" alt=""/>
            <div className="info absolute top-0 right-0 p-5 w-[50%] text-left">
                <p className="text-[14px] md:text-[18px] font-[600] mb-2">Buy Men's Footwear with low price</p>
                <span className="text-[20px] text-primary font-[600] w-full block mb-2">$100</span>
                <Link to='/' className="text-[16px] font-[600] link">
                    <p className="underline font-bold mb-2">SHOP NOW</p>
                </Link>
            </div>
        </div>
        
        <div className="banner2 relative">
            <img src="/bannerBox2.jpg" alt="" />
            <div className="info absolute p-5 top-0 left-0 w-[70%] h-[100%] z-50 flex justify-center flex-col gap-2">
                <p className="text-[14px] md:text-[18px] font-[600] mb-2">Buy Apple Iphone</p>
                <span className="text-[20px] text-primary font-[600] w-full block mb-2">$1199</span>
                <Link to='/' className="text-[16px] font-[600] link">
                    <p className="underline font-bold mb-2">SHOP NOW</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default BannerBoxV2