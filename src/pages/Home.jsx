import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import CategorySection from '../components/Home/CategorySection'
import TrendingSection from '../components/Home/TrendingSection'
import SubscribeSection from '../components/Home/SubscribeSection'
import FooterSection from '../components/Home/FooterSection'
function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <TrendingSection />
      <SubscribeSection />
      <FooterSection />
    </div>
  )
}

export default Home
