import { useEffect } from 'react'
import { SectionIntro } from '../../Components/Section-Header/Section-Header'
import './About.css'
import { goalCardsData } from '../../util/GoalCard'

interface GoalCardProps {
  icon: string
  header: string
  text: string
}

interface AboutRefProps {
  aboutRef: React.RefObject<HTMLDivElement>
  videoRef: React.RefObject<HTMLVideoElement>
  serviceRef: React.RefObject<HTMLDivElement>
}

function About ({ aboutRef, videoRef, serviceRef }: AboutRefProps) {
  const togglePlayPause = () => {
    if (videoRef.current) {
      const videoElement = videoRef.current

      if (videoElement.paused) {
        videoElement.play()
        const playButton = document.querySelector('.play-button') as HTMLElement
        if (playButton) {
          playButton.style.display = 'none'
        }
      } else {
        videoElement.pause()
        const playButton = document.querySelector('.play-button') as HTMLElement
        if (playButton) {
          playButton.style.display = 'flex'
        }
      }
    }
  }

  useEffect(() => {
    if (videoRef.current) {
      const videoElement = videoRef.current

      if (videoRef.current && !videoRef.current.paused) {
        const playButton = document.querySelector('.play-button') as HTMLElement
        playButton.style.display = 'none'
      }

      const handleVideoEnd = () => {
        const playButton = document.querySelector('.play-button') as HTMLElement
        if (playButton) {
          playButton.style.display = 'flex'
        }
      }

      videoElement.addEventListener('ended', handleVideoEnd)

      return () => {
        videoElement.removeEventListener('ended', handleVideoEnd)
      }
    }
  }, [videoRef])

  function GoalCards ({ icon, header, text }: GoalCardProps) {
    return (
      <div className='goals-card'>
        <div>
          <img src={icon} alt={header} />
          <h2>{header}</h2>
        </div>
        <p>{text}</p>
      </div>
    )
  }

  return (
    <div className='about-us-container' id='about' ref={aboutRef}>
      <div>
        <SectionIntro intro='' text='Our Services' />
        <div className='goal-container'>
          {goalCardsData.map((card, index) => (
            <>
              <GoalCards
                key={index}
                icon={card.icon}
                header={card.header}
                text={card.text}
              />
            </>
          ))}
        </div>
      </div>
      <div className='services-container' id='services' ref={serviceRef}>
        <div className='services-text-container'>
          <h5>What is Ystreams?</h5>
          <p className='services-text'>
            Ystreams is a professional services firm that specializes in
            providing comprehensive accounting, tax, and advisory solutions to
            help businesses operate more efficiently and grow sustainably. We
            offer a wide range of services, including bookkeeping, payroll
            management, tax compliance, financial planning, and business
            advisory. Our team of experts is committed to delivering accurate,
            reliable, and strategic support tailored to each client’s unique
            needs, allowing them to focus on their core operations while we
            handle the complexities of finance and regulation.
          </p>
        </div>
        <div className='video-container' onClick={togglePlayPause}>
          <div className='play-button'></div>
          <video ref={videoRef} controls={false} >
            <source src='/Videos/ystream-website-video.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default About
