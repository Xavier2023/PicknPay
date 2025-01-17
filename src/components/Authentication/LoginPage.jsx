import React, { useRef, useState } from 'react'
import { FaEnvelope, FaUser, FaEyeSlash, FaPhone } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TiWarning } from 'react-icons/ti';
import './SignUpPage.css'

const schema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords does not match.",
    path: ["confirmPassword"]
})



const LoginPage = () => {

 const [user, setUser] = useState({
    name: '',
    password: ''
 })

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: zodResolver(schema)})

  const handleChange = (e) => {
        const {name, value} = e.target
        setUser({
            ...user,
            [name]: value
        })
  }
  const onLogin = () => {
    console.log(user)
  }
  const onSignUp = (formData) => console.log(formData)
  

  const [active , setActive] = useState(false)
  const [showPassoword, setShowPassword] = useState('password')
  const passowrdRef = useRef(null)


  const addActive = () => {
    setActive(true)
  }

  const handleShow = () => {
    setShowPassword(showPassoword === 'password' ? 'text' : 'password')

    if(showPassoword === 'password') {
        passowrdRef.current.type = 'password'
    } else {
        passowrdRef.current.type = 'text'
    }
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
            <h2 className="title animation">Login</h2>
            <form onSubmit={handleSubmit(onLogin)}>

                <div className="input-box animation">
                    <input 
                        type="text"
                        name='name'
                        id='name'
                        value={user.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="name">Username</label>
                    <div className="icon">
                        <FaUser />
                    </div>
                </div>

                <div className="input-box animation">
                    <input 
                        type="password"
                        name='password'
                        id='password'
                        value={user.password}
                        onChange={handleChange}
                        required 
                         />
                    <label htmlFor="">Password</label>
                    <div className="icon" onClick={handleShow}>
                        {
                            showPassoword === 'password' ? (
                                <IoEyeSharp />
                            )  : (
                                <FaEyeSlash />
                            )
                        
                        }
                    </div>
                </div>
                <button type="submit" className="btn animation">Login</button>
                <div className="linkTxt animation">
                    <p>Don't have an account? <a href="#" className="register-link" onClick={addActive}>Sign Up</a></p>
                </div>
            </form>
        </div>

        <div className="info-text login">
            <h2 className="animation">Welcome Back!</h2>
            <p className="animation">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti,rem?</p>
        </div>
        <div className="form-box register">

            <h2 className="title animation">Sign Up</h2>

            <form onSubmit={handleSubmit(onSignUp)}>

                <div className="input-box animation">
                    <input 
                        type="text" 
                        name='name'
                        id='name'
                        {...register('name')}
                        required />
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
                        {...register('email')}
                        required />
                    <label htmlFor="email">Email</label>
                    <div className="icon">
                        <FaEnvelope />
                    </div>
                </div>

                <div className="input-box animation">
                    <input 
                        type="password"
                        name='password'
                        id='password'
                        {...register('password')}
                        required  />
                    <label htmlFor="">Password</label>
                    <div className="icon" onClick={handleShow}>
                        {
                            showPassoword === 'password' ? (
                                <IoEyeSharp />
                            )  : (
                                <FaEyeSlash />
                            )
                        
                        }
                    </div>
                </div>

                <div className="input-box animation">
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="cpassword"
                        {...register('confirmPassword')}
                        required 
                    />
                    {errors.confirmPassword && <em className='error-msg'>{errors.confirmPassword.message}<TiWarning /></em>}
                    <label htmlFor="cpassword">Confirm Password</label>
                    <div className="icon" onClick={handleShow}>
                        {
                            showPassoword === 'password' ? (
                                <FaEyeSlash />
                            )  : (
                                <IoEyeSharp />
                            )
                        
                        }
                    </div>
                </div>

                <button type="submit" className="btn animation" >Sign Up</button>

                <div className="linkTxt animation">
                    <p>Already have an account? <a href="#" className="login-link" onClick={removeActive}>Login</a></p>
                </div>

            </form>
        </div>

        <div className="info-text register">
            <h2 className="animation">New Here! SignUp</h2>
            <p className="animation">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti,rem?</p>
        </div>

    </div>
    </div>
  )
}

export default LoginPage