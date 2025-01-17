import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEnvelope, FaEyeSlash, FaPhone, FaUser } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { TiWarning } from "react-icons/ti";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import "./SignUpPage.css";

export const schema = z
  .object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords does not match.",
    path: ["confirmPassword"],
  });
const SignUpPage = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const onSignUp = (formData) => console.log(formData);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const onLogin = (e) => {
    e.preventDefault();
    console.log(user);
  };

  const [active, setActive] = useState(false);
  const [showPassoword, setShowPassword] = useState("password");
  const passowrdRef = useRef(null);

  const handleShow = () => {
    setShowPassword(showPassoword === "password" ? "text" : "password");

    if (showPassoword === "password") {
      passowrdRef.current.type = "password";
    } else {
      passowrdRef.current.type = "text";
    }

    // console.log(showPassoword);
  };

  const addActive = () => {
    setActive(true);
  };

  const removeActive = () => {
    setActive(false);
  };
  return (
    <div className="signup">
      <div className={`wrapper ${active && "active"}`}>
        <span className="rotate-bg"></span>
        <span className="rotate-bg2"></span>

        <div className="form-box login">
          <h2 className="title animation">Sign Up</h2>
          <form onSubmit={handleSubmit(onSignUp)}>
            <div className="input-box animation">
              <input type="text" name="name" id="name" {...register("name")} />
              <label htmlFor="">Username</label>
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
              <label htmlFor="">Email</label>
              <div className="icon">
                <FaEnvelope />
              </div>
            </div>

            <div className="input-box animation">
              <input
                type="password"
                name="password"
                id="password"
                {...register("password")}
                required
              />
              <label htmlFor="">Password</label>
              <div className="icon" onClick={handleShow}>
                {showPassoword === "password" ? <FaEyeSlash /> : <IoEyeSharp />}
              </div>
            </div>
            <div className="input-box animation">
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
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={handleChange}
                required
                minLength={3}
                maxLength={8}
              />
              <label htmlFor="name">Username</label>
              <div className="icon">
                <FaUser />
              </div>
            </div>

            <div className="input-box animation">
              <input
                type="password"
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
                {showPassoword === "password" ? <FaEyeSlash /> : <IoEyeSharp />}
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
