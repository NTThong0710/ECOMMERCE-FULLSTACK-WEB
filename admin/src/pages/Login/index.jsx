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

const Login = () => {
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
            width: 420,
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
            Welcome Back!
          </Typography>
          <Typography variant="h6" sx={{ mt: 1, mb: 3 }}>
            Sign in with your credentials.
          </Typography>

          {/* Google Sign in */}
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
            Sign in with Google
          </Button>

          <Divider sx={{ my: 3 }}>Or, Sign in with your email</Divider>

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

          {/* Remember me + Forgot Password */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mt: 1 }}
          >
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember Me"
            />
            <Link to='/forgot-password' className="z-1000 text-primary">Forgot Password</Link>
          </Box>

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
            SIGN IN
          </Button>

          <div className="mt-3 mb-5 relative z-[1000] flex items-center justify-between">
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-[#1976d2] font-medium hover:underline cursor-pointer"
            >
              Sign Up
            </Link>
          </div>

        </Box>
      </Box>
    </>
  );
};

export default Login;
