import MobileNav from './MobileNav/MobileNav'
import Navbar from './Navbar'
import { NavRefProps } from '../../util/NavbarType'

function RenderNav ({
  aboutRef,
  testimonialRef,
  teamRef,
  contactUsRef,
  heroRef,
  serviceRef
}: NavRefProps) {
  return (
    <>
      <MobileNav
        aboutRef={aboutRef}
        testimonialRef={testimonialRef}
        teamRef={teamRef}
        contactUsRef={contactUsRef}
        heroRef={heroRef}
        serviceRef={serviceRef}
      />
      <Navbar
        aboutRef={aboutRef}
        testimonialRef={testimonialRef}
        teamRef={teamRef}
        contactUsRef={contactUsRef}
        heroRef={heroRef}
        serviceRef={serviceRef}
      />
    </>
  )
}

export default RenderNav
