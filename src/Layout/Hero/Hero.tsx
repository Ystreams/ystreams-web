import { companies } from '../../util/companies'
import './Hero.css'

interface HeroProps {
  heroRef: React.RefObject<HTMLDivElement>
  contactUsRef: React.RefObject<HTMLDivElement>
  serviceRef: React.RefObject<HTMLDivElement>
  videoPlay: () => void
}

function Hero ({ heroRef, contactUsRef, videoPlay, serviceRef }: HeroProps) {
  function handleScrollToVideo () {
    serviceRef.current?.scrollIntoView({ behavior: 'smooth' })
    videoPlay()
  }

  return (
    <>
      <main className='hero-main'>
        <div className='hero-container' id='hero' ref={heroRef}>
          <div className='hero-intro'>
            <h1>We boost growth for your business</h1>
            <p>
              Our mission is to be at the forefront of accounting services,
              delivering precision, trust, and innovation that drive financial
              clarity and business success.
            </p>
            <div className='hero-action-btn-container'>
              <button
                onClick={() =>
                  contactUsRef.current?.scrollIntoView({
                    behavior: 'smooth'
                  })
                }
              >
                Get Started
              </button>
              <div onClick={handleScrollToVideo}>
                <img src='/Images/Icons/Hero/Learn More icon.svg' alt='' />
                <p>Learn More</p>
              </div>
            </div>
          </div>
          <div className='hero-intro-img'>
            <div className='hero-img-container'>
              <img
                src='/Images/Images/Hero-Imgs/Light-bulb.png'
                alt='light-bulb'
              />
              <div>
                <img
                  src='/Images/Images/Hero-Imgs/Hero-img.png'
                  alt='hero image'
                />
              </div>
              <img src='/Images/Images/Hero-Imgs/Arrow.png' alt='arrow' />
            </div>
          </div>
        </div>
        <div className='companies-worked'>
          <p>Some companies we have worked with</p>
          <div className='company-images'>
            {companies.map((company: string, i) => (
              <>
                <div key={company + i} className='company-image'>
                  <img src={company} alt='' />
                </div>
              </>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
