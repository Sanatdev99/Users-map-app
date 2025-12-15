import Hero from '@/components/home/Hero'
import HowItWorks from '@/components/home/HowItWorks'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Services from '@/components/home/Services'

import FAQ from '@/components/home/FAQ'
import BlogPreview from '@/components/home/BlogPreview'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'


export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Services />
      <FAQ />
      <BlogPreview />
      <Footer/>
    </main>
  )
}