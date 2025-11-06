import {Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Header from './components/Header'
import './index.css'
import Home from './pages/home';
import Footer from './components/Footer';
import ProductListing from './pages/ProductListing';
import ProductDetails from './pages/ProductDetails';
import { createContext } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { IoCloseSharp } from "react-icons/io5";

import { useState } from 'react';
import ProductZoom from './components/ProductZoom';
import ProductDetailsComponent from './components/ProductDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/Cart';
import Verify from './pages/Verify';

import toast, { Toaster } from 'react-hot-toast';
import ForgotPassWord from './pages/ForgotPassword';
import Checkout from './pages/Checkout';
import MyAccount from './pages/My Account';
import MyList from './pages/MyList';
import Orders from './pages/Orders';

const MyContext = createContext()

const App = () => {

  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
    const [maxWidth, setMaxWidth] = useState('lg');
    const [fullWidth, setFullWidth] = useState(true);
    const [isLogin, setIsLogin] = useState(true)

  const [openCartPanel, setOpenCartPanel] = useState(false);
  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleCloseOpenProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const openAlertBox=(status, msg)=>{
    if (status === 'success'){
      toast.success(msg);
    }
    if (status === 'error'){
      toast.error(msg);
    }
  }

  const values={
    openProductDetailsModel,
    setOpenProductDetailsModel,
    handleCloseOpenProductDetailsModel,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    openAlertBox,
    isLogin,
    setIsLogin
  }
  return (
    <>
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header/>
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/productListing" exact={true} element={<ProductListing />} />
            <Route path="/product/:id" exact={true} element={<ProductDetails/>} />
            <Route path="/login" exact={true} element={<Login/>} />
            <Route path="/register" exact={true} element={<Register/>} />
            <Route path="/cart" exact={true} element={<CartPage/>} />
            <Route path="/verify" exact={true} element={<Verify/>} />
            <Route path="/forgot-password" exact={true} element={<ForgotPassWord/>} />
            <Route path="/checkout" exact={true} element={<Checkout/>} />
            <Route path="/my-account" exact={true} element={<MyAccount/>} />
            <Route path="/my-list" exact={true} element={<MyList/>} />
            <Route path="/my-orders" exact={true} element={<Orders/>} />
          </Routes>
        <Footer/>
      </MyContext.Provider>
    </BrowserRouter>
    <Toaster/>
    <Dialog
        open={openProductDetailsModel}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleCloseOpenProductDetailsModel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='productDetailsModel'
      >
        
        <DialogContent>
          <div className='flex items-center w-full productDetailsModelContainer relative'>
            <Button className='!w-[40px] !h-[40px] !min-w-[40px] !rounded-full 
            !absolute !top-[15px] !right-[15px] !text-[#000] !bg-[#f1f1f1]'
            onClick={handleCloseOpenProductDetailsModel}>
              <IoCloseSharp className='text-[20px]'/>
            </Button>
            <div className='col1 w-[40%]'>
              <ProductZoom/>  
            </div>
            <div className='col2 w-[60%] py-10 px-10 pr-16 productContent'>
              <ProductDetailsComponent/>
            </div>
          </div>
        </DialogContent>
        
      </Dialog>

    </>
  )
}

export default App

export {MyContext}