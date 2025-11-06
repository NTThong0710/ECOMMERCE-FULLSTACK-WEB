
import { useState, useRef } from "react";

const OtpInput = ({length,onChange}) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]); // store references of inputs

  // Handle input change
  const handleChange = (element, index) => {
    if (isNaN(element.value)) return; // only numbers

    // Update state
    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);
    onChange(newOtp.join(""))

    // Move focus to next input automatically
    if (element.value !== "" && index < length -1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (event, index) => {
    if (event.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Collect OTP as string
  const handleSubmit = () => {
    alert("Entered OTP: " + otp.join(""));
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 z-1000">
      <div className="grid grid-cols-6 gap-3 w-full mb-6">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={otp[index]}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="w-full h-10 text-center border border-gray-400 rounded-md text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      
    </div>
  );
};

export default OtpInput;
