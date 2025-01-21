import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaAddressCard, FaEnvelope, FaEyeSlash, FaPhone, FaUser } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./SignUpPage.css";
import { FaCircleUser } from "react-icons/fa6";
import { login, signup } from "../Services/userServices";

export const schema = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    // confirmPassword: z.string(),
    deliveryAddress: z.string()
  })
  // .refine((data) => data.password === data.confirmPassword, {
  //   message: "Passwords does not match.",
  //   path: ["confirmPassword"],
  // });


const SignUpPage = () => {
    // Login user state
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // Signup user image
  const [profilePic, setProfilePic] = useState()
  // form error state
  const [formError, setFormError] = useState("")

  // Handling signup form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });


  const onSignUp = async (formData) => {
    try {
      await signup(formData, profilePic)
      window.location = "/"
      
    } catch (err) {
      if(err.response && err.response.status === 400) {
         setFormError(err.response.data.message)
      }
    }
  }

  // handling login form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  
  const onLogin = async (e) => {
      e.preventDefault()
      try {
        await login(user)

        
        window.location = "/"
          
      } catch (err) {
          if(err.response && err.response.status === 400) {
              setFormError(err.response.data.message)
           }
      }
    }

    // Handling animation state
  const [active, setActive] = useState(false);
  const addActive = () => {
    setActive(true);
  };

  const removeActive = () => {
    setActive(false);
  };

  // Show and hide password logic
  const [showPassword, setShowPassword] = useState(false)
    const [passwordIcon, setPasswordIcon] = useState(<FaEyeSlash />)
    const [inputType, setInputType] = useState("password")
  
    const handleShow = () => {
      if(showPassword === false) {
          setPasswordIcon(<IoEyeSharp />)
          setInputType('text')
          setShowPassword(prev => !prev)
      } else {
          setInputType("password")
          setPasswordIcon(<FaEyeSlash/>)
          setShowPassword(prev => !prev)
      }
    }


  return (
    <div className="signup">
        {formError && <em className="error-msg">{formError}<TiWarning/></em>}
        <div className={`wrapper ${active && "active"}`}>
            <span className="rotate-bg"></span>
            <span className="rotate-bg2"></span>

            <div className="form-box login">
                <h2 className="title animation">Sign Up</h2>
                <form onSubmit={handleSubmit(onSignUp)}>
                    <div className="input-box animation">
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            {...register("name")}
                            required
                        />
                        <label htmlFor="name">Username</label>
                        <div className="icon">
                            <FaUser />
                        </div>
                    </div>

                    <div className="input-box animation">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            {...register("email")}
                            required
                        />
                        <label htmlFor="email">Email</label>
                        <div className="icon">
                            <FaEnvelope />
                        </div>
                    </div>

                    <div className="input-box animation">
                        <input
                            type={inputType}
                            name="password"
                            id="password"
                            {...register("password")}
                            required
                        />
                        <label htmlFor="password">Password</label>
                        <div className="icon" onClick={handleShow}>
                            {passwordIcon}
                        </div>
                    </div>
                    {/* <div className="input-box animation">
                    <input
                        type="password"
                        name="confirmPassword"
                        id="cpassword"
                        {...register("confirmPassword")}
                        required
                    />
                    {errors.confirmPassword && (
                        <em className="error-msg">
                        {errors.confirmPassword.message}
                        <TiWarning />
                        </em>
                    )}
                    <label htmlFor="cpassword">Confirm Password</label>
                    <div className="icon" onClick={handleShow}>
                        {showPassoword === "password" ? <FaEyeSlash /> : <IoEyeSharp />}
                    </div>
                    </div> */}

                    <div className="input-box animation">
                        <input
                            type="deliveryAddress"
                            name="deliveryAddress"
                            id="deliveryAddress"
                            {...register("deliveryAddress")}
                            required
                        />
                        <label htmlFor="deliveryAddress">Delivery Address</label>
                        <div className="icon">
                            <FaAddressCard />
                        </div>
                    </div>
                    <div className='image_input_section animation'>
                        <div className='image_preview'>
                            { profilePic === undefined ? <FaCircleUser /> 
                            : <img src={URL.createObjectURL(profilePic)} id='file-ip-1-preview' />}
                        </div>
                        <label htmlFor='file-ip-1' className='image_label'>
                            Upload Image
                        </label>
                        <input type='file' onChange={e => setProfilePic(e.target.files[0])} id='file-ip-1' className='image_input' />
                    </div>
                    <button type="submit" className="btn animation">
                    Sign Up
                    </button>
                    <div className="linkTxt animation">
                    <p>
                        Already have an account?{" "}
                        <a href="#" className="register-link" onClick={addActive}>
                        Login
                        </a>
                    </p>
                    </div>
                </form>
            </div>

            <div className="info-text login">
                <h2 className="animation">New Here! SignUp</h2>
                <p className="animation">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti,rem?
                </p>
            </div>
            <div className="form-box register">
                <h2 className="title animation">Login</h2>

                <form onSubmit={onLogin}>
                    <div className="input-box animation">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={user.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email</label>
                    <div className="icon">
                        <FaEnvelope />
                    </div>
                    </div>

                    <div className="input-box animation">
                    <input
                        type={inputType}
                        name="password"
                        id="password"
                        value={user.password}
                        onChange={handleChange}
                        ref={passowrdRef}
                        minLength={8}
                        required
                    />
                    <label htmlFor="password">Password</label>
                    <div className="icon" onClick={handleShow}>
                        {passwordIcon}
                    </div>
                    </div>

                    <button type="submit" className="btn animation">
                    Login
                    </button>

                    <div className="linkTxt animation">
                    <p>
                        Don't have an account?{" "}
                        <a href="#" className="login-link" onClick={removeActive}>
                        Sign up
                        </a>
                    </p>
                    </div>
                </form>
            </div>

            <div className="info-text register">
                <h2 className="animation">Welcome Back!</h2>
                <p className="animation">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti,rem?
                </p>
            </div>
        </div>
    </div>
  );
};

export default SignUpPage;
