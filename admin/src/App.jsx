import React, { createContext, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Products from './pages/Products'
import AddProduct from './pages/Products/addProduct'
import HomeSliderBanners from './pages/HomeSliderBanners'
import AddHomeSlide from './pages/HomeSliderBanners/addHomeSlide'
import AddCategory from './pages/Category/addCategory'
import Category from './pages/Category'

import Dialog from '@mui/material/Dialog'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Slide from '@mui/material/Slide'
import { IoMdClose } from "react-icons/io";
import SubCatList from './pages/Category/subCatList'
import AddSubCat from './pages/Category/addSubCat'
import Users from './pages/Users'
import Orders from './pages/Orders'
import ForgotPassword from './pages/ForgotPassword'
import VerifyAccount from './pages/VerifyAccount'
import ChangePassWord from './pages/ChangePassword'

export const MyContext = createContext()

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isOpenFullPanel, setIsOpenFullPanel] = useState({
    open: false,
    model: ''
  })
  const [isLogin, setIsLogin] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev)

  // định nghĩa router
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <section className="main bg-[#f1f1f1]">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper bg-white h-screen transition-all duration-500 ease-in-out 
              ${isSidebarOpen ? 'w-[18%] opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none'}`}>
              <Sidebar />
            </div>
            <div className={`dashboardWrapper transition-all duration-500 ease-in-out ${
              isSidebarOpen ? 'w-[82%]' : 'w-full'
            } py-3 px-3`}>
              <Dashboard />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword/>
    },
    {
      path: '/verify-account',
      element: <VerifyAccount/>
    },
    {
      path: '/change-password',
      element: <ChangePassWord/>
    },
    {
      path: '/products',
      element: (
        <section className="main bg-[#f1f1f1]">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper bg-white h-screen transition-all duration-500 ease-in-out 
              ${isSidebarOpen ? 'w-[18%] opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none'}`}>
              <Sidebar />
            </div>
            <div className={`dashboardWrapper transition-all duration-500 ease-in-out ${
              isSidebarOpen ? 'w-[82%]' : 'w-full'
            } py-3 px-3`}>
              <Products />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/homeSlider/list',
      element: (
        <section className="main bg-[#f1f1f1]">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper bg-white h-screen transition-all duration-500 ease-in-out 
              ${isSidebarOpen ? 'w-[18%] opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none'}`}>
              <Sidebar />
            </div>
            <div className={`dashboardWrapper transition-all duration-500 ease-in-out ${
              isSidebarOpen ? 'w-[82%]' : 'w-full'
            } py-3 px-3`}>
              <HomeSliderBanners />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/category/list',
      element: (
        <section className="main bg-[#f1f1f1]">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper bg-white h-screen transition-all duration-500 ease-in-out 
              ${isSidebarOpen ? 'w-[18%] opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none'}`}>
              <Sidebar />
            </div>
            <div className={`dashboardWrapper transition-all duration-500 ease-in-out ${
              isSidebarOpen ? 'w-[82%]' : 'w-full'
            } py-3 px-3`}>
              <Category />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/subCategory/list',
      element: (
        <section className="main bg-[#f1f1f1]">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper bg-white h-screen transition-all duration-500 ease-in-out 
              ${isSidebarOpen ? 'w-[18%] opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none'}`}>
              <Sidebar />
            </div>
            <div className={`dashboardWrapper transition-all duration-500 ease-in-out ${
              isSidebarOpen ? 'w-[82%]' : 'w-full'
            } py-3 px-3`}>
              <SubCatList />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/users',
      element: (
        <section className="main bg-[#f1f1f1]">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper bg-white h-screen transition-all duration-500 ease-in-out 
              ${isSidebarOpen ? 'w-[18%] opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none'}`}>
              <Sidebar />
            </div>
            <div className={`dashboardWrapper transition-all duration-500 ease-in-out ${
              isSidebarOpen ? 'w-[82%]' : 'w-full'
            } py-3 px-3`}>
              <Users />
            </div>
          </div>
        </section>
      ),
    },
    {
      path: '/orders',
      element: (
        <section className="main bg-[#f1f1f1]">
          <Header />
          <div className="contentMain flex">
            <div className={`sidebarWrapper bg-white h-screen transition-all duration-500 ease-in-out 
              ${isSidebarOpen ? 'w-[18%] opacity-100' : 'w-0 opacity-0 overflow-hidden pointer-events-none'}`}>
              <Sidebar />
            </div>
            <div className={`dashboardWrapper transition-all duration-500 ease-in-out ${
              isSidebarOpen ? 'w-[82%]' : 'w-full'
            } py-3 px-3`}>
              <Orders />
            </div>
          </div>
        </section>
      ),
    },
  ])

  return (
    <MyContext.Provider value={{ 
      isSidebarOpen, toggleSidebar, 
      isLogin, setIsLogin, 
      isOpenFullPanel, setIsOpenFullPanel 
    }}>
      <RouterProvider router={router} />

      {/* Dialog dùng chung */}
      <Dialog
        fullScreen
        open={isOpenFullPanel.open}
        onClose={() => setIsOpenFullPanel({ open:false, model:'' })}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={() => setIsOpenFullPanel({ open:false, model:'' })}
              aria-label="close"
            >
              <IoMdClose className='!text-black'/>
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              <span className='text-gray-800 font-[600]'>{isOpenFullPanel?.model}</span>
            </Typography>
          </Toolbar>
        </AppBar>

        {/* render component theo model */}
        {isOpenFullPanel?.model === 'Add Product' && <AddProduct />}
        {isOpenFullPanel?.model === 'Add Home Slide' && <AddHomeSlide />}
        {isOpenFullPanel?.model === 'Add Category' && <AddCategory />}
        {isOpenFullPanel?.model === 'Add New Sub Category' && <AddSubCat/>}
      </Dialog>
    </MyContext.Provider>
  )
}

export default App
