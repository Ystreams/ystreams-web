import "./Footer.css";

interface NavRefProps {
     aboutRef: React.RefObject<HTMLDivElement>;
     portfolioRef: React.RefObject<HTMLDivElement>;
     teamRef: React.RefObject<HTMLDivElement>;
     heroRef: React.RefObject<HTMLDivElement>;
}

function Footer({ aboutRef, portfolioRef, teamRef, heroRef }: NavRefProps) {
     const currentYear = new Date().getFullYear();
     return (
          <>
               <footer className="footer-container">
                    <div>
                         <div>
                              <img
                                   src="/Images/Logos/Ystream_complete_Logo.svg"
                                   alt=""
                              />
                              <p>
                                   © {currentYear} Ystreams. All rights
                                   reserved.
                              </p>
                         </div>

                         <div>
                              <ul>
                                   <li
                                        onClick={() =>
                                             heroRef.current?.scrollIntoView({
                                                  behavior: "smooth",
                                             })
                                        }
                                   >
                                        Home
                                   </li>

                                   <li
                                        onClick={() =>
                                             aboutRef.current?.scrollIntoView({
                                                  behavior: "smooth",
                                             })
                                        }
                                   >
                                        About Us
                                   </li>

                                   <li
                                        onClick={() =>
                                             aboutRef.current?.scrollIntoView({
                                                  behavior: "smooth",
                                             })
                                        }
                                   >
                                        Our Service
                                   </li>
                                   <li
                                        onClick={() =>
                                             portfolioRef.current?.scrollIntoView(
                                                  {
                                                       behavior: "smooth",
                                                  }
                                             )
                                        }
                                   >
                                        Testimonials
                                   </li>
                                   <li
                                        onClick={() =>
                                             teamRef.current?.scrollIntoView({
                                                  behavior: "smooth",
                                             })
                                        }
                                   >
                                        Team
                                   </li>
                              </ul>
                         </div>
                    </div>
               </footer>
          </>
     );
}

export default Footer;
