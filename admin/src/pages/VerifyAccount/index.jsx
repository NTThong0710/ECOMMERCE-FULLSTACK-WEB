import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";
import OtpInput from "../../components/OtpBox";

const VerifyAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [otp,setOtp] = useState("")
  const handleOtpChange = (value) =>{
    setOtp(value)
  }
  const verifyOTP = (e) => {
    e.preventDefault();
    alert(otp);
  }

  const [activeBtn, setActiveBtn] = useState(null);

  useEffect(() => {
    if (location.pathname === "/login") {
      setActiveBtn("login");
    } else if (location.pathname === "/signup") {
      setActiveBtn("signup");
    }
  }, [location.pathname]);

  return (
    <>
      {/* Background + header */}
      <div className="fixed flex items-center justify-between w-full">
        
          <img
            src="/patern.webp"
            className="w-full opacity-10 pointer-events-none"
          />
        
        
        <div className="img">
          <img
            src="/logo.jpg"
            className="fixed top-5 left-5 w-[200px] z-50"
          />
        </div>

        <div className="button fixed top-5 right-5 flex gap-2">
          <Button
            className={`!rounded-full ${activeBtn === "login" ? "btn-active" : "btn-blue"}`}
            onClick={() => navigate("/login")}
          >
            Login
          </Button>

          <Button
            className={`!rounded-full ${activeBtn === "signup" ? "btn-active" : "btn-blue"}`}
            onClick={() => navigate("/signup")}
          >
            Sign up
          </Button>
        </div>
      </div>

      {/* Main form */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{
          backgroundColor: "#fff",
        }}
      >
        <Box
          sx={{
            width: 440,
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <img src="/verify3.png" className="w-[100px]"/>
          </Box>

          <Typography variant="h4" fontWeight="bold">
            Welcome Back!
          </Typography>
          <Typography variant="h4" fontWeight="bold" sx={{ mt: 1, mb: 3 }}>
            Please Verify Your Email
          </Typography>
          
          <p className="text-center text-[15px]">OTP send to <span className="text-primary">thongnguyen07102004@gmail.com</span></p>

          <div className="text-center flex items-center justify-center flex-row">
            <OtpInput length={6} onChange={handleOtpChange}/>
          </div>

          
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 1,
              py: 1.2,
              fontWeight: 600,
              borderRadius: "8px",
            }}
          >
            Verify OTP
          </Button>

        </Box>
      </Box>
    </>
  );
};

export default VerifyAccount;
