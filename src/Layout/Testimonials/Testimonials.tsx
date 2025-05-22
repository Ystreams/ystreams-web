import { SectionIntro } from '../../Components/Section-Header/Section-Header'
import { ClientTestimonies } from './ClientTestimonies'
import './Testimony.css'

interface TestimonialsProps {
  testimonyRef: React.RefObject<HTMLDivElement>
}

function Testimonials ({ testimonyRef }: TestimonialsProps) {
  return (
    <>
      <div className='testimony-container' id='testimony' ref={testimonyRef}>
        <SectionIntro intro='TESTIMONIALS' text='What Clients say about us' />
        <div className='testimonies'>
          {ClientTestimonies.map(({ image, testimony, name }, index) => (
            <div className='testimony-card' key={index}>
              <div>
                <div>
                  <img src={image} alt={name} className='profile-pic' />
                </div>
              </div>
              <div className='testimony-content'>
                <h2 className='testimony-text'>{testimony}</h2>
                <p className='testimony-name'>{name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Testimonials
