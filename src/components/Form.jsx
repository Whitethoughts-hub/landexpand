import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // VALIDATION RULES
  const nameRegex = /^[A-Za-z.\s]*$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const phoneRegex = /^[6-9][0-9]{9}$/;

  // VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    if (!formData.name || !nameRegex.test(formData.name)) {
      newErrors.name = "Enter valid name.";
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Enter valid email.";
    }

    if (!formData.mobile || !phoneRegex.test(formData.mobile)) {
      newErrors.mobile = "Enter valid 10-digit number.";
    }

    if (!formData.agree) {
      newErrors.agree = "Required *";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // SUBMIT
  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Log the filled form data to console
    console.log("Form Data Submitted:", formData);

    // Reset form if needed
    setFormData({
      name: "",
      email: "",
      mobile: "",
      agree: false,
    });

    setErrors({});
  };

  return (
    <>
      <div
        className="w-full flex flex-col items-center pb-[50px] px-[20px]"
        id="enquiry-form"
      >
        {/* FORM CARD */}
        <div className="w-full sm:w-[90%] md:w-[40%] tablet-w-70 bg-white shadow-four-sides rounded-xl p-[40px] relative z-10">
          <h2 className="text-[32px] mb-[30px] text-center">Contact Us</h2>

          <form
            className="flex flex-col gap-[11px] items-start justify-baseline"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="flex flex-col w-[100%]">
              <label className=" mb-1 text-[16px]">Name</label>
              <input
                type="text"
                name="name"
                className="border rounded-lg px-4 py-2 text-sm "
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
              <p className="h-[10px] text-red-500  error-text mt-[5px] leading-none">
                {errors.name}
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col  w-[100%]">
              <label className="mb-1 text-[16px]">Email</label>
              <input
                type="email"
                name="email"
                className="border rounded-lg px-4 py-2 text-sm"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
              <p className="h-[10px] text-red-500  error-text mt-[5px] leading-none">
                {errors.email}
              </p>
            </div>

            {/* Mobile */}
            <div className="flex flex-col  w-[100%]">
              <label className="mb-1 text-[16px]">Mobile</label>
              <input
                type="tel"
                name="mobile"
                maxLength={10}
                className="border rounded-lg px-4 py-2 text-sm"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
              />
              <p className="h-[10px] text-red-500 error-text mt-[5px] leading-none">
                {errors.mobile}
              </p>
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-[3px]"
              />
              <p className=" checkbox-text leading-tight checkbox-text">
                I agree to the terms, conditions and privacy policies of this
                website.
              </p>
            </div>

            <p className="h-[14px] text-red-500 error-text leading-none">
              {errors.agree}
            </p>

            {/* Button */}
            <div className="w-full items-center flex justify-center">
              <button
                type="submit"
                className="
      inline-flex  items-center justify-center
      rounded-md bg-[#F1701E]
      px-8 py-2 font-medium text-neutral-50 
      shadow-lg shadow-neutral-500/20 
      transition active:scale-95
          "
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* FOOTER */}
      </div>
      <footer className="w-full bg-[#F1701E] text-white ">
        <div className="max-w-[1300px] pt-[10px] pb-[10px] px-[20px] md:px-[40px]  flex flex-col md:flex-row justify-between items-center">
          <p className="text-center md:text-left footer-text">
            © 2025 All rights reserved | Privacy Policy
            <br />
            Designed & Developed by{" "}
            <a
              href="https://whitethoughts.in"
              target="_blank"
              className="footer-text"
            >
              White Thoughts & Branding
            </a>
          </p>

          <div className="flex gap-4">
            <a href="#" className="text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-lg">
              <FaInstagram />
            </a>
            <a href="#" className=" text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFormSection;
