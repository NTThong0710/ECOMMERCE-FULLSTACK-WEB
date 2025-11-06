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

const ChangePassWord = () => {
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
            You can change password from here
          </Typography>

          {/* Email */}
          <Box sx={{ position: "relative" }}>
            <TextField
              fullWidth
              label="New Password"
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

          {/* Password */}
          <Box sx={{ position: "relative" }}>
            <TextField
              fullWidth
              label="Confirm Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              margin="normal"
            />
          </Box>

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
            CHANGE PASSWORD
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ChangePassWord;
