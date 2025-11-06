import {useState} from 'react'
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import Select from '@mui/material/Select';
import UpLoadBox from '../../components/UploadBox';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IoMdClose } from "react-icons/io";
import { Button } from '@mui/material';
import { FaCloudUploadAlt } from "react-icons/fa";

const AddHomeSlide = () => {
    
    const [productCat, setProductCat] = useState('');
    const [productSubCat, setProductSubCat] = useState('');
    const [product3Cat, setProduct3Cat] = useState('');
    const [productIsFeatured, setProductIsFeatured] = useState('');
    const [productRams, setProductRams] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productSize, setProductSize] = useState('');

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeProduct3Cat = (event) => {
    setProduct3Cat(event.target.value);
  };
  const handleChangeProductIsFeatured = (event) => {
    setProductIsFeatured(event.target.value);
  };
  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };
  return (
    <section className='py-3 px-10 w-full'>
        <div className='form grid grid-cols-1'>
            <div className='pr-4 pt-8 pb-8'>
                <div className='grid grid-cols-7 gap-3'>
                        <div className="uploadWrapperBox relative">
                            <span className="absolute top-[5px] right-[10px]
                                flex items-center justify-center 
                                w-6 h-6 rounded-full bg-red-600 cursor-pointer z-50">
                                <IoMdClose className="text-white text-sm" />
                            </span>

                            <div className="uploadBox rounded-md overflow-hidden border border-dashed border-gray-300 
                                h-[150px] w-[150px] bg-gray-100 flex items-center justify-center relative">
                                <LazyLoadImage
                                    effect="blur"
                                    wrapperProps={{
                                        // If you need to, you can tweak the effect transition using the wrapper style.
                                        style: {transitionDelay: "1s"},
                                    }}
                                    src='/test.webp' />
                            </div>
                        </div>

                        <UpLoadBox multiple={true}/>
                    </div>
                
            
            </div>
        </div>
        
        <br />
        <Button className='btn-blue !text-[16px] !font-bold gap-2'><FaCloudUploadAlt className='text-[25px]'/>PUBLISH AND VIEW</Button>
    </section>
  )
}

export default AddHomeSlide