import React, { useState } from 'react'
import { FaEnvelope, FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import './SignUpPage.css'

const SignUpPage = () => {

  const [active , setActive] = useState(false)

  const addActive = () => {
    setActive(true)
  }

  const removeActive = () => {
    setActive(false)
  }
  return (
    <div className='signup'>
      <div className={`wrapper ${active && 'active'}`}>
        <span className="rotate-bg"></span>
        <span className="rotate-bg2"></span>

        <div className="form-box login">
            <h2 className="title animation">Sign Up</h2>
            <form action="#">

                <div className="input-box animation">
                    <input type="text" required />
                    <label htmlFor="">Username</label>
                    <div className="icon">
                        <FaUser />
                    </div>
                </div>

                <div className="input-box animation">
                    <input type="email" name="" id="" required />
                    <label htmlFor="">Email</label>
                    <div className="icon">
                        <FaEnvelope />
                    </div>
                </div>

                <div className="input-box animation">
                    <input type="text" required />
                    <label htmlFor="">Password</label>
                    <div className="icon">
                        <RiLockPasswordFill />
                    </div>
                </div>
                <button type="submit" className="btn animation">Sign Up</button>
                <div className="linkTxt animation">
                    <p>Already have an account? <a href="#" className="register-link" onClick={addActive}>Login</a></p>
                </div>
            </form>
        </div>

        <div className="info-text login">
            <h2 className="animation">New Here! SignUp</h2>
            <p className="animation">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti,rem?</p>
        </div>
        <div className="form-box register">

            <h2 className="title animation">Login</h2>

            <form action="#">

                <div className="input-box animation">
                    <input type="text" required />
                    <label htmlFor="">Username</label>
                    <div className="icon">
                        <FaUser />
                    </div>
                </div>
                

                <div className="input-box animation">
                    <input type="password" required />
                    <label htmlFor="">Password</label>
                    <div className="icon">
                        <RiLockPasswordFill />
                    </div>
                </div>

                <button type="submit" className="btn animation" >Login</button>

                <div className="linkTxt animation">
                    <p>Don't have an account? <a href="#" className="login-link" onClick={removeActive}>Sign up</a></p>
                </div>

            </form>
        </div>

        <div className="info-text register">
            <h2 className="animation">Welcome Back!</h2>
            <p className="animation">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti,rem?</p>
        </div>

      </div>
    </div>
  )
}

export default SignUpPage