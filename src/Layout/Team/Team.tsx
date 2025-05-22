import React from 'react'
import { SectionIntro } from '../../Components/Section-Header/Section-Header'
import { teamInfo } from './TeamInfo'
import './Team.css'

interface TeamProps {
  teamRef: React.RefObject<HTMLDivElement>
}
function Team ({ teamRef }: TeamProps) {
  return (
    <>
      <div className='team-container' id='team' ref={teamRef}>
        <SectionIntro intro='OUR TEAM' text='Meet The Team' />

        <div className='team'>
          {teamInfo.map((team, i) => {
            return (
              <>
                <div className='team-card' key={i}>
                  <div>
                    <div>
                      <img src={team.image} alt='' />
                    </div>

                    <p>{team.name}</p>
                    <p>{team.role}</p>
                  </div>
                  <div className='team-socials'>
                    <div>
                      <a href={'mailto:' + team.email} target='_blank'>
                        <img
                          src='/Images/Icons/Socials/Gmail_Logo_Black.svg'
                          alt=''
                        />
                      </a>

                      <a href={team.whatsapp}>
                        <img src='/Images/Icons/Socials/whatsapp.svg' alt='' />
                      </a>
                    </div>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Team
