import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
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
import { Link, useLocation, useNavigate } from "react-router-dom";

const SignUp = () => {
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
      {/* Header */}
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
            width: 420,
            textAlign: "center",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <img src="/icon.svg" alt="Logo" style={{ width: 60, height: 60 }} />
          </Box>

          {/* Title */}
          <Typography variant="h4" fontWeight="bold">
            Create Account
          </Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3 }}>
            Sign up to get started.
          </Typography>

          {/* Google Sign up */}
          <Button
            variant="outlined"
            fullWidth
            startIcon={<FcGoogle />}
            sx={{
              textTransform: "none",
              borderRadius: "8px",
              py: 1.2,
              fontWeight: 500,
            }}
          >
            Sign up with Google
          </Button>

          <Divider sx={{ my: 3 }}>Or, Sign up with your email</Divider>

          {/* Email */}
          <TextField fullWidth label="Email" variant="outlined" margin="normal" />

          {/* Password */}
          <Box sx={{ position: "relative" }}>
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
            />
            <IconButton
              onClick={handleTogglePassword}
              sx={{ position: "absolute", right: 10, top: "30%" }}
            >
              {showPassword ? <FaEyeSlash /> : <FaRegEye />}
            </IconButton>
          </Box>

          {/* Confirm Password */}
          <TextField
            fullWidth
            label="Confirm Password"
            type={showPassword ? "text" : "password"}
            variant="outlined"
            margin="normal"
          />

          {/* Agree Terms */}
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the Terms & Conditions"
            sx={{ mt: 1 }}
          />

          {/* Sign Up */}
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
            SIGN UP
          </Button>

          <div className="mt-3 mb-5 relative z-[1000]">
            Already have account?{" "}
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

export default SignUp;
