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

const AddProduct = () => {
    
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
            <div className='scroll max-h-[72vh] overflow-y-scroll pr-4'>
                <div className='col'>
                    <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Name</h3>
                    <input type="text" className='h-[40px] border border-[rgba(0,0,0,0.2)] bg-[] w-full focus:outline-none 
                    focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm'/>
                </div>
                <div className='col'>
                    <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Description</h3>
                    <textarea type="text" className=' border border-[rgba(0,0,0,0.2)] bg-[] w-full h-[140px] focus:outline-none 
                    focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm'/>
                </div>
                <div className='grid grid-cols-4 mb-3 gap-4'>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Category</h3>
                        <Select
                        labelId="demo-simple-select-label"
                        id="productCatDrop"
                        size='small'
                        className='w-full'
                        value={productCat}
                        label='Category'
                        onChange={handleChangeProductCat}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>Fashion</MenuItem>
                            <MenuItem value={20}>Beauty</MenuItem>
                            <MenuItem value={30}>Wellness</MenuItem>
                        </Select>
                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Sub Category</h3>
                        <Select
                        labelId="demo-simple-select-label"
                        id="productSubCatDrop"
                        size='small'
                        className='w-full'
                        value={productSubCat}
                        label='SubCategory'
                        onChange={handleChangeProductSubCat}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>Men</MenuItem>
                            <MenuItem value={20}>Women</MenuItem>
                            <MenuItem value={30}>Kid</MenuItem>
                        </Select>
                    </div>
                    
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Third Level Category</h3>
                        <Select
                        labelId="demo-simple-select-label"
                        id="product3CatDrop"
                        size='small'
                        className='w-full'
                        value={product3Cat}
                        label='Product3Cat'
                        onChange={handleChangeProduct3Cat}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>Fashion</MenuItem>
                            <MenuItem value={20}>Beauty</MenuItem>
                            <MenuItem value={30}>Wellness</MenuItem>
                        </Select>
                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Price</h3>
                        <input type="number" min={1} className='h-[40px] border border-[rgba(0,0,0,0.2)] bg-[] w-full focus:outline-none 
                        focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm'/>
                    </div>
                    

                </div>
                <div className='grid grid-cols-4 mb-3 gap-4'>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Old Price</h3>
                        <input type="number" min={1} className='h-[40px] border border-[rgba(0,0,0,0.2)] bg-[] w-full focus:outline-none 
                        focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm'/>
                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Is Featured?</h3>
                        <Select
                        labelId="demo-simple-select-label"
                        id="productIsFeatured"
                        size='small'
                        className='w-full'
                        value={productIsFeatured}
                        label='SubCategory'
                        onChange={handleChangeProductIsFeatured}
                        >
                            <MenuItem value={10}>True</MenuItem>
                            <MenuItem value={20}>False</MenuItem>
                            
                        </Select>
                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Stock</h3>
                        <input type="number" min={1} className='h-[40px] border border-[rgba(0,0,0,0.2)] bg-[] w-full focus:outline-none 
                        focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm'/>
                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Brand</h3>
                        <input type="text" className='h-[40px] border border-[rgba(0,0,0,0.2)] bg-[] w-full focus:outline-none 
                        focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm'/>
                    </div>

                </div>
                <div className='grid grid-cols-4 mb-3 gap-4'>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Discount</h3>
                        <input type="number" min={1} className='h-[40px] border border-[rgba(0,0,0,0.2)] bg-[] w-full focus:outline-none 
                        focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm'/>
                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product RAMS</h3>
                        <Select
                        labelId="demo-simple-select-label"
                        id="productRamsDrop"
                        size='small'
                        className='w-full'
                        value={productRams}
                        label='ProductRams'
                        onChange={handleChangeProductRams}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>Men</MenuItem>
                            <MenuItem value={20}>Women</MenuItem>
                            <MenuItem value={30}>Kid</MenuItem>
                        </Select>
                    </div>

                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Weight</h3>
                        <Select
                        labelId="demo-simple-select-label"
                        id="productWeightDrop"
                        size='small'
                        className='w-full'
                        value={productWeight}
                        label='ProductWeight'
                        onChange={handleChangeProductWeight}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>Men</MenuItem>
                            <MenuItem value={20}>Women</MenuItem>
                            <MenuItem value={30}>Kid</MenuItem>
                        </Select>
                    </div>
                    <div className='col'>
                        <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Size</h3>
                        <Select
                        labelId="demo-simple-select-label"
                        id="productSizeDrop"
                        size='small'
                        className='w-full'
                        value={productSize}
                        label='ProductSize'
                        onChange={handleChangeProductSize}
                        >
                            <MenuItem value={''}>None</MenuItem>
                            <MenuItem value={10}>S</MenuItem>
                            <MenuItem value={20}>L</MenuItem>
                            <MenuItem value={30}>M</MenuItem>
                        </Select>
                    </div>

                </div>
                <div className='col'>
                    <h3 className='text-[14px] font-[500] mb-3 text-black'>Product Rating</h3>
                    <Rating name="half-rating" defaultValue={2} precision={1} />

                </div>
                
                <div className='col w-full py-5'>
                    <h3 className='font-[700] text-[18px] mb-3'>Media & Images</h3>
                    
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
        </div>
        <hr className="border-t border-gray-300" />
        <br />
        <Button className='btn-blue w-full !text-[16px] !font-bold gap-2'><FaCloudUploadAlt className='text-[25px]'/>PUBLISH AND VIEW</Button>
    </section>
  )
}

export default AddProduct