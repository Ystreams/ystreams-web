import './MobileNav.css'
import { useRef, useState } from 'react'
import { useClickAway } from 'react-use'
import Hamburger from 'hamburger-react'
import { AnimatePresence } from 'framer-motion'
import { NavRefProps } from '../../../util/NavbarType'

function MobileNav ({
  aboutRef,
  testimonialRef,
  teamRef,
  contactUsRef,
  heroRef,
  serviceRef
}: NavRefProps) {
  const [isOpen, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useClickAway(ref, () => setOpen(false))

  function handleNavBtn (ref: React.RefObject<HTMLDivElement>) {
    if (ref.current) {
      const navbarHeight =
        document.querySelector('.mobile-nav-container')?.clientHeight || 0
      const elementPosition =
        ref.current.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementPosition - navbarHeight

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setOpen(false)
  }

  return (
    <>
      <div className='mobile-nav-container'>
        <img src='/Images/Logos/Ystreams_symbol_logo.svg' alt='company-logo' />
        <div ref={ref}>
          <Hamburger
            toggled={isOpen}
            size={30}
            toggle={setOpen}
            color='#1E0E62'
          />
          <AnimatePresence>
            {isOpen && (
              <>
                <ul>
                  <li onClick={() => handleNavBtn(heroRef)}>Home</li>

                  <li onClick={() => handleNavBtn(aboutRef)}>About Us</li>

                  <li onClick={() => handleNavBtn(serviceRef)}>Our Service</li>
                  <li onClick={() => handleNavBtn(testimonialRef)}>
                    Testimonials
                  </li>
                  <li onClick={() => handleNavBtn(teamRef)}>Team</li>
                  <button onClick={() => handleNavBtn(contactUsRef)}>
                    Contact Us
                  </button>
                </ul>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}

export default MobileNav
