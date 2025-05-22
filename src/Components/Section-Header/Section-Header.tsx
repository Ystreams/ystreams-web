import './Section-Header.css'

interface SectionIntroProps {
  intro: string
  text: string
}

export function SectionIntro ({ intro, text }: SectionIntroProps) {
  return (
    <div className='section-text'>
      <p>{intro}</p>
      <h1>{text}</h1>
    </div>
  )
}
