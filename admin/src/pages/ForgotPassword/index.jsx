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

const ForgotPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

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
            <img
              src="/icon.svg"
              alt="Logo"
              style={{ width: 60, height: 60 }}
            />
          </Box>

          <Typography variant="h4" fontWeight="bold">
            Having trouble in sign in?
          </Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3 }}>
            Reset your password
          </Typography>

          {/* Email */}
          <TextField fullWidth label="Email" variant="outlined" margin="normal" />          

          {/* Sign In */}
          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              fontWeight: 600,
              borderRadius: "8px",
            }}
          >
            Reset Password
          </Button>

          <div className="mt-5 mb-5 relative z-[1000] flex items-center justify-between">
            Don’t have an account?{" "}
            <Link
              to="/login"
              className="text-[#1976d2] font-medium hover:underline cursor-pointer"
            >
              Login
            </Link>
          </div>

        </Box>
      </Box>
    </>
  );
};

export default ForgotPassword;
