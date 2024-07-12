import React, { useState } from "react";

import toast from "react-hot-toast";
import { postRequest } from "../axios/axiosSetup";

const Contact = () => {
  const [captcha, setCaptcha] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const [errors, setErrors] = useState({
    name: true,
    email: true,
    message: true,
    company_name: true,
    phone: true,
    allErrors: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  });

  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
    company_name: "",
    message: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [e.target.name]: e.target.value });

    // regex for checking if email is valid or not
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let phoneNumberRegex = /^[\d\s()+-]+$/;

    if (name === "name") {
      if (!value || value.trim() === "") {
        setErrorMessages({
          ...errorMessages,
          name: "Full name is required",
        });
        setErrors({ ...errors, name: true });
      } else {
        setErrorMessages({
          ...errorMessages,
          name: "",
        });
        setErrors({ ...errors, name: false });
      }
    }

    if (name === "company_name") {
      if (!value || value.trim() === "") {
        setErrorMessages({
          ...errorMessages,
          company_name: "Company name is required",
        });
        setErrors({ ...errors, company_name: true });
      } else {
        setErrorMessages({
          ...errorMessages,
          company_name: "",
        });
        setErrors({ ...errors, company_name: false });
      }
    }

    // Phone Name Validation
    if (name === "phone") {
      if (!value || value.trim() === "") {
        setErrorMessages({
          ...errorMessages,
          phone: "phone number is required",
        });
        setErrors({ ...errors, phone: true });
      } else if (!phoneNumberRegex.test(value) || value.length < 6) {
        setErrorMessages({
          ...errorMessages,
          phone: "Please enter a valid phone number",
        });
        setErrors({ ...errors, phone: true });
      } else {
        setErrorMessages({
          ...errorMessages,
          phone: "",
        });
        setErrors({ ...errors, phone: false });
      }
    }

    // email validation
    if (name === "email") {
      if (!value || value.trim() === "") {
        setErrorMessages({ ...errorMessages, email: "Email is required" });
        setErrors({ ...errors, email: true });
      } else if (!regEmail.test(value)) {
        setErrorMessages({
          ...errorMessages,
          email: "Please enter a valid email",
        });
        setErrors({ ...errors, email: true });
      } else {
        setErrorMessages({
          ...errorMessages,
          email: "",
        });
        setErrors({ ...errors, email: false });
      }
    }

    // messageValidation
    if (name === "message") {
      if (!value || value.trim() === "") {
        setErrorMessages({
          ...errorMessages,
          message: "Message is required",
        });
        setErrors({ ...errors, message: true });
      } else {
        setErrorMessages({
          ...errorMessages,
          message: "",
        });
        setErrors({ ...errors, message: false });
      }
    }
  };

  const handleSubmit = async () => {
    if (errors.name) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        name: errorMessages.name ? errorMessages.name : "Full name is required",
      }));
    }
    if (errors.phone) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        phone: errorMessages.phone
          ? errorMessages.phone
          : "Phone number is required",
      }));
    }

    if (errors.company_name) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        company_name: errorMessages.company_name
          ? errorMessages.company_name
          : "Company is required",
      }));
    }

    if (errors.email) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        email: errorMessages.email ? errorMessages.email : "Email is required",
      }));
    }

    if (errors.message) {
      setErrorMessages((prevErrors) => ({
        ...prevErrors,
        message: errorMessages.message
          ? errorMessages.message
          : "Message is required",
      }));
    }

    if (
      errors.name ||
      errors.phone ||
      errors.email ||
      errors.company_name ||
      errors.message
    ) {
      setErrors({ ...errors, allErrors: true });
      return;
    } else {
      setErrors({ ...errors, allErrors: false });
    }

    try {
      setButtonLoading(true);
      const response = await postRequest({
        route: "/contact",
        formValues,
      });

      setFormValues({
        name: "",
        phone: "",
        email: "",
        message: "",
        company_name: "",
      });

      toast.success("Message Submitted Successfully.", {
        style: {
          border: "1px solid #184798",
          padding: "16px",
          color: "#184798",
        },
        iconTheme: {
          primary: "#184798",
          secondary: "#FFFAEE",
        },
        position: "top-right",
      });

      setCaptcha(false);
      setButtonLoading(false);
      window.grecaptcha.reset();
    } catch (err) {
      console.log(err);
      setButtonLoading(false);
    }
  };

  return (
    <>
      <div className="pt-[120px]">
        <h1 className="font-semibold text-xl sm:text-3xl md:text-4xl lg:text-[40px] text-primary-blue uppercase">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-8">
          <div className="bg-gray-three lg:col-span-2 p-8 rounded-b-2xl md:rounded-l-2xl roboto-normal order-2 md:order-1 ">
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="roboto-medium inline-block mb-2"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="bg-light py-3 rounded-md outline-primary duration-300 w-full px-4"
                  placeholder="Enter your first name"
                  name="name"
                  value={formValues.name}
                  onChange={handleFormChange}
                />

                {errors.name && (
                  <p className="text-left pl-1 text-red-500 text-sm fira-font pt-2 ">
                    {errorMessages.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="roboto-medium inline-block mb-2"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="bg-light py-3 rounded-md outline-primary duration-300 w-full px-4"
                  placeholder="Enter your phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleFormChange}
                />
                {errors.phone && (
                  <p className="text-left pl-1 text-red-500 text-sm fira-font pt-2 ">
                    {errorMessages.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="roboto-medium inline-block mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="bg-light py-3 rounded-md outline-primary duration-300 w-full px-4"
                  placeholder="Enter your email"
                  name="email"
                  value={formValues.email}
                  onChange={handleFormChange}
                />

                {errors.email && (
                  <p className="text-left pl-1 text-red-500 text-sm fira-font pt-2 ">
                    {errorMessages.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="roboto-medium inline-block mb-2"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="company"
                  className="bg-light py-3 rounded-md outline-primary duration-300 w-full px-4"
                  placeholder="Enter your company"
                  name="company_name"
                  value={formValues.company_name}
                  onChange={handleFormChange}
                />

                {errors.company_name && (
                  <p className="text-left pl-1 text-red-500 text-sm fira-font pt-2 ">
                    {errorMessages.company_name}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-3">
              <label
                htmlFor="message"
                className="roboto-medium inline-block mb-2"
              >
                Message
              </label>
              <textarea
                className="bg-light py-3 rounded-md outline-primary duration-300 w-full px-4 resize-none"
                id="message"
                cols="30"
                rows="4"
                name="message"
                placeholder="Your Message"
                value={formValues.message}
                onChange={handleFormChange}
              ></textarea>

              {errors.message && (
                <p className="text-left pl-1 text-red-500 text-sm fira-font pt-2 ">
                  {errorMessages.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
