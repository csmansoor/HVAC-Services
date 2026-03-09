import React from 'react'
import HeroSection from '../components/sections/HeroSection'
import StarryNightSection from '../components/sections/StarryNightSection'
import ServicesGrid from '../components/sections/ServicesGrid'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import Testimonials from '../components/sections/Testimonials'
import BrandsSection from '../components/sections/BrandsSection'
import CTASection from '../components/sections/CTASection'

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <StarryNightSection />
      <ServicesGrid />
      <WhyChooseUs />
      <Testimonials />
      <BrandsSection />
      <CTASection />
    </div>
  )
}

export default HomePage