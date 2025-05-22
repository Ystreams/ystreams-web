import './Navbar.css'
import { NavRefProps } from '../../util/NavbarType'

function Navbar ({
  aboutRef,
  testimonialRef,
  teamRef,
  contactUsRef,
  heroRef
}: NavRefProps) {
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
  }
  return (
    <>
      <nav className='nav-container'>
        <img src='/Images/Logos/Ystreams_symbol_logo.svg' alt='company-logo' />
        <ul>
          <li onClick={() => handleNavBtn(heroRef)}>Home</li>

          <li onClick={() => handleNavBtn(aboutRef)}>About Us</li>

          <li onClick={() => handleNavBtn(aboutRef)}>Our Service</li>
          <li onClick={() => handleNavBtn(testimonialRef)}>Testimonials</li>
          <li onClick={() => handleNavBtn(teamRef)}>Team</li>
        </ul>
        <button
          onClick={() =>
            contactUsRef.current?.scrollIntoView({
              behavior: 'smooth'
            })
          }
        >
          Contact Us
        </button>
      </nav>
    </>
  )
}

export default Navbar
