import React from 'react'


import './HeroSection.css'
import { Link } from 'react-router-dom'

const HeroSection = ({ link, title, subtitle, image }) => {
  return (
    <section className='hero-section'>
        <div className="hero-heading">
            <h2 className='hero-title'>{title}</h2>
            <p className="hero-subtitle">{subtitle}</p>
            <Link to={link} className='hero-link'>Buy Now</Link>
        </div>
        <div className="hero-screen">
            <img src={image} alt="Iphone 16 pro max" className='hero-image' />
        </div>
    </section>
  )
}

export default HeroSection