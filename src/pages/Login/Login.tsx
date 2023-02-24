import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './Login.scss'

const logo = <svg xmlns="http://www.w3.org/2000/svg" width="121" height="21" fill="none"><path fill="#06C167" d="M63.5.3H77v3.3h-9.9v4.8h9.7v3.2H67v4.8h10v3.3H63.4V.3zM114 20c4.1 0 6.5-2 6.5-4.7 0-2-1.4-3.4-4.3-4l-3.1-.7c-1.8-.3-2.3-.6-2.3-1.3 0-.8.8-1.4 2.4-1.4 1.7 0 3 .5 3.3 2h3.6C120 7 117.8 5 113.4 5c-3.7 0-6.4 1.6-6.4 4.6 0 2 1.5 3.4 4.6 4l3.4.9c1.4.2 1.8.6 1.8 1.2 0 .9-1 1.4-2.7 1.4-2 0-3.3-.4-3.7-2h-3.7c.5 3 2.8 5 7.3 5zm-8.3-3.6H103c-.8 0-1.3-.3-1.3-1.1V8.6h4V5.4h-4v-4H98v4h-2.7v3.2H98v7.6c0 2 1.4 3.5 3.8 3.5h4v-3.3zm-12-11v14.3h-3.5v-1.3a7.5 7.5 0 110-11.7V5.4h3.6zm-3.5 7.1c0-2.4-1.9-4.3-4.3-4.3s-4.3 1.9-4.3 4.3a4.3 4.3 0 108.6 0z"></path><path fill="#FFF" d="M8 17.4c2.7 0 4.7-2 4.7-5.1V.3h3v19.4h-3v-1.8a7 7 0 01-5 2.1c-4.2 0-7.4-3-7.4-7.6V.4h3v11.9c0 3 2 5.1 4.7 5.1zm9.8 2.3h2.7v-1.8A7.3 7.3 0 0033 12.7c0-4.1-3.2-7.4-7.3-7.4a7 7 0 00-5 2v-7h-2.8v19.4zm7.6-2.2a4.9 4.9 0 01-4.9-4.9 4.9 4.9 0 119.7 0c0 2.8-2.2 5-4.8 5zm16-12.2a7.2 7.2 0 00-7.3 7.3c0 4.2 3.2 7.4 7.5 7.4 2.5 0 4.6-1.2 6-3l-2-1.5c-1 1.4-2.4 2-4 2a4.7 4.7 0 01-4.7-4h11.5v-.9c0-4.2-3-7.3-7-7.3zm-4.4 6a4.4 4.4 0 014.3-3.6c2 0 3.8 1.5 4.2 3.6H37zm20-3.2V5.5h-1c-1.5 0-2.6.7-3.3 1.8V5.6h-2.8v14h2.8v-8c0-2.1 1.3-3.5 3.1-3.5H57z"></path></svg>
const googleIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 262"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" /><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" /><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" /><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" /></svg>
const appleIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M17.05 20.28c-.98.95-2.05.8-3.08.35c-1.09-.46-2.09-.48-3.24 0c-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8c1.18-.24 2.31-.93 3.57-.84c1.51.12 2.65.72 3.4 1.8c-3.12 1.87-2.38 5.98.48 7.13c-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25c.29 2.58-2.34 4.5-3.74 4.25z" /></svg>
const fbIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="#1877F2" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445" /><path fill="#FFF" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825" /></svg>
export default function Login() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showSent, setShowSent] = useState(false)
  const form: string | any = useRef<HTMLFormElement | string>();

  const currentForm: string | any = form.current

  // EmailJs shit 
  const SendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm("service_u0ivftb", "template_6qfgyht", currentForm, 'z3FWViMOWQXLBzr18')
      .then((result) => {
        setShowSent(true)
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <>
      <div className="loginPage">

        <div className="header-section">
          <div className="Container">
            <a href="/" className='logo'>{logo}</a>
          </div>
        </div>

        {showSent ? (
          <div className="Container">
            <div className="message-sent bg-[#2C3CBF] py-3 px-4  flex justify-between absolute top-1 right-0 left-0   ">
              <h3 className=''> Thanks, Email Sent !!!</h3>
              <p className='cursor-pointer hover:scale-200' onClick={() => { setShowSent(false) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#f5f5f5" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z" /></svg>
              </p>
            </div>
          </div>
        ) : ' '}


        <div className="details-email">
          <div className="Container">
            <p className='note'> Whats's your phone number or email ?
            </p>
            <form ref={form} onSubmit={SendEmail} className='form' >
              <input type="email" name="user_email" placeholder='Email' id="" className='email-input' />
              <button type="submit" className='buttonSubmit'><p>Continue</p></button>
            </form>

            <div className="divider-wrapper">
              <div className="divider"></div>
              <span className='or'>or</span>
              <div className="divider"></div>
            </div>

            <div className="SocialSection">
              <a href="#" className='wth-ggle wth1'>
                <p>{googleIcon}</p>
                Continue with Google </a>
              <a href="#" className='wth-ggle wth1'>
                <p>{appleIcon}</p>
                Continue with Apple </a>
              <a href="#" className='wth-ggle wth1'>
                <p>{fbIcon}</p>
                Continue with Facebook </a>
            </div>

            <p className=' somehow-footer'>By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.</p>
          </div>
        </div>
      </div>
    </>
  )
}
