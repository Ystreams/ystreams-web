import { useRef } from 'react'
import './App.css'
import About from './Layout/About/About'
import Hero from './Layout/Hero/Hero'

import Team from './Layout/Team/Team'
import Testimonials from './Layout/Testimonials/Testimonials'
import Contact from './Layout/ContactUs/Contact'
import Footer from './Components/Footer/Footer'
import RenderNav from './Components/Navbar/RenderNav'
import { Helmet } from 'react-helmet-async'

function App () {
  const aboutRef = useRef<HTMLDivElement | null>(null)
  const serviceRef = useRef<HTMLDivElement | null>(null)
  const testimonyRef = useRef<HTMLDivElement | null>(null)
  const teamRef = useRef<HTMLDivElement | null>(null)
  const contactUsRef = useRef<HTMLDivElement | null>(null)
  const heroRef = useRef<HTMLDivElement | null>(null)

  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play()
    }
    if (videoRef.current && !videoRef.current.paused) {
      const playButton = document.querySelector('.play-button') as HTMLElement
      playButton.style.display = 'none'
    }
  }

  return (
    <>
      <Helmet>
        <title>Ystreams | Accounting, Tax & Advisory Services</title>
        <meta
          name='description'
          content='Ystreams is a professional services firm offering expert accounting, tax, payroll, and business advisory solutions to help businesses grow sustainably.'
        />
        <meta
          name='keywords'
          content='accounting, tax, bookkeeping, payroll, business advisory'
        />
        <link rel='canonical' href='https://ystreams.co/' />
      </Helmet>

      <div className='home-container'>
        <div className='home-content'>
          <RenderNav
            heroRef={heroRef}
            aboutRef={aboutRef}
            teamRef={teamRef}
            serviceRef={serviceRef}
            testimonialRef={testimonyRef}
            contactUsRef={contactUsRef}
          />
          <Hero
            heroRef={heroRef}
            contactUsRef={contactUsRef}
            videoPlay={handlePlayVideo}
            serviceRef={serviceRef}
          />
          <About
            aboutRef={aboutRef}
            videoRef={videoRef}
            serviceRef={serviceRef}
          />

          <Testimonials testimonyRef={testimonyRef} />
          <Team teamRef={teamRef} />
          <Contact contactUsRef={contactUsRef} />

          <Footer
            heroRef={heroRef}
            aboutRef={aboutRef}
            teamRef={teamRef}
            portfolioRef={testimonyRef}
          />
        </div>
      </div>
    </>
  )
}

export default App
