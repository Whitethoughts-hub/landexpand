import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <section
      id="enquiry-form"
      className="w-full flex justify-center bg-gray-50 pt-[100px] pb-[40px] px-[20px] md:px-[40px]"
    >
      <div className="w-full max-w-[1300px] flex flex-col items-center">
        {/* FORM CONTAINER */}
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] bg-white shadow-md rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Contact Us
          </h2>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                className="border rounded-lg px-4 py-2"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                className="border rounded-lg px-4 py-2"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            {/* Mobile */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Mobile</label>
              <input
                type="tel"
                name="mobile"
                className="border rounded-lg px-4 py-2"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
                required
              />
              <p className="text-sm leading-tight">
                I agree to the terms, conditions and privacy policies of this
                website.
              </p>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg text-lg hover:bg-gray-800 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* FOOTER SECTION */}
        <div className="w-full mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p className="text-center md:text-left">
            © 2025 All rights reserved. <br />
            Designed & Developed by{" "}
            <a
              href="https://whitethoughts.in"
              className="underline hover:text-black"
            >
              White Thoughts & Branding
            </a>
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-700 hover:text-black text-lg">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-700 hover:text-black text-lg">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-700 hover:text-black text-lg">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 duration-500">
        <div class="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
          Hover me
        </div>
        <div class="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
          >
            <path
              d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </section>
  );
};

export default ContactFormSection;
