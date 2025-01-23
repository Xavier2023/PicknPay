import React from 'react'
import HeroSection from './HeroSection'
import iphone16 from '../../assets/Iphone16propromax.jpg'
import macBook from '../../assets/MacBook.jpg'
import FlashSales from './FlashSales'

const HomePage = () => {
  return (
    <div>
        <HeroSection 
         title='Buy iPhone 14 pro'
         link='/products/678a974e4ffa8dc0fba022d7'
         image={iphone16}
         subtitle='The iPhone 14 Pro is a marvel of engineering, combining cutting-edge technology with an elegant design.' />
        <FlashSales />
        <HeroSection 
         title="M4, M4 Pro, and M4 Max.Ready for whatever’s impossible."
         link='/products/678a974e4ffa8dc0fba022df'
         image={macBook}
         subtitle=' Built for Apple Intelligence. Up to 24 hours of battery life. Liquid Retina XDR display' />
    </div>
  )
}

export default HomePage