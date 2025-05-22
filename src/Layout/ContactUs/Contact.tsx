import { useForm, ValidationError } from '@formspree/react'
import { CSSProperties, useEffect, useState } from 'react'
import { SectionIntro } from '../../Components/Section-Header/Section-Header'
import './Contact.css'
import ClipLoader from 'react-spinners/ClipLoader'

interface ContactUsProps {
  contactUsRef: React.RefObject<HTMLDivElement>
}

function Contact({ contactUsRef }: ContactUsProps) {

  const [formState, handleSubmit, reset] = useForm(import.meta.env.VITE_FORM_ID)
  const [isSubmitted, setIsSubmitted] = useState(formState.succeeded)

  useEffect(() => {
    if (formState.succeeded) {
      setIsSubmitted(true)
      reset()
    }
  }, [formState, reset])

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    borderColor: '#c9b34b'
  }



  return (
    <div className='contact-container' id='contact-us' ref={contactUsRef}>
      <SectionIntro intro='GET IN TOUCH' text='Contact Us' />
      <div className='contact'>
        <div>
          <img src='/Images/Icons/Contact-us.svg' alt='Contact Us' />
        </div>
        {isSubmitted === false ? (
          <div className='contact-form'>
            {formState.submitting ? (
              <ClipLoader
                color={'#c9b34b'}
                loading={formState.submitting}
                cssOverride={override}
                size={50}
                aria-label='Loading Spinner'
                data-testid='loader'
              />
            ) : (
              <form
                onSubmit={handleSubmit}
                action={import.meta.env.VITE_FORM_URL}
                method='POST'
              >
                <div>
                  <div className='contact-header'>
                    <h1>Need to Get Started or Have General Inquiries?</h1>
                    <p>
                      We're here to help. Reach out with any questions or
                      concerns, and we'll get back to you as soon as possible.
                    </p>
                  </div>
                  <input
                    id='name'
                    type='text'
                    name='Name'
                    placeholder='Your Full name'
                    required
                  />
                  <ValidationError
                    prefix='name'
                    field='Name'
                    errors={formState.errors}
                  />
                  <input
                    id='email'
                    type='email'
                    name='Email'
                    placeholder='Your Email'
                    required
                  />
                  <ValidationError
                    prefix='email'
                    field='Email'
                    errors={formState.errors}
                  />
                  <input
                    type='tel'
                    id='phone'
                    name='Phone'
                    placeholder='Phone Number'
                    required
                  />
                  <ValidationError
                    prefix='phone'
                    field='Phone'
                    errors={formState.errors}
                  />
                  <textarea
                    id='message'
                    name='message'
                    placeholder='Tell us what you have in mind'
                    required={true}
                  />
                  <ValidationError
                    prefix='Message'
                    field='message'
                    errors={formState.errors}
                  />
                  <button type='submit' disabled={formState.submitting}>
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className='submitted-form'>
            <p>
              Thanks for your response! We have received your message and we
              will get back to you soon.
            </p>
            <button onClick={() => setIsSubmitted(false)}>
              Submit another response
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
