import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"
import FooterLinks from './FooterLinks'

// Array 
export const firstSet = [
    {
        id: 1,
        title: " Get Help ",
        link: '#'
    },
    {
        id: 2,
        title: " Buy gift cards",
        link: '#'
    },
    {
        id: 3,
        title: " sign up to deliver  ",
        link: '#'
    },
    {
        id: 4,
        title: " Get Help ",
        link: '#'
    },
    {
        id: 5,
        title: " Create a business account ",
        link: '#'
    },
    {
        id: 6,
        title: "Promotions",
        link: '#'
    },
]
// Array 
export const SecondSet = [
    {
        id: 1,
        title: " Resturant near me ",
        link: '#'
    },
    {
        id: 2,
        title: " View all cities",
        link: '#'
    },
    {
        id: 3,
        title: " View all countrie  ",
        link: '#'
    },
    {
        id: 4,
        title: " Pickup near me  ",
        link: '#'
    },
    {
        id: 5,
        title: " About Uber Eats",
        link: '#'
    },
    {
        id: 6,
        title: "English",
        link: '#'
    },
]


const UberEat = <svg width="134" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_227_7066)" fill="#000"><path d="M70.629.334H85.72V3.98H74.705v5.215h10.722v3.537H74.705v5.288H85.72v3.647H70.629V.334Zm56.101 21.734c4.627 0 7.234-2.188 7.234-5.215 0-2.151-1.543-3.756-4.774-4.449l-3.415-.693c-1.983-.364-2.607-.729-2.607-1.458 0-.948.955-1.532 2.718-1.532 1.909 0 3.305.51 3.709 2.26h4.002c-.22-3.281-2.607-5.47-7.454-5.47-4.186 0-7.124 1.715-7.124 5.033 0 2.298 1.616 3.793 5.104 4.522l3.819.875c1.505.292 1.909.693 1.909 1.313 0 .985-1.138 1.605-2.974 1.605-2.313 0-3.635-.51-4.149-2.261h-4.04c.588 3.282 3.048 5.47 8.042 5.47Zm-9.124-3.975h-3.011c-.918 0-1.506-.401-1.506-1.24V9.487h4.517V5.913h-4.517V1.428h-4.039v4.485h-3.048v3.574h3.048v8.387c0 2.115 1.505 3.792 4.223 3.792h4.333v-3.573Zm-13.309-12.18v15.754h-4.002v-1.422a7.84 7.84 0 0 1-5.068 1.823c-4.737 0-8.445-3.683-8.445-8.278 0-4.595 3.709-8.278 8.445-8.278a7.84 7.84 0 0 1 5.068 1.824V5.914h4.002Zm-3.929 7.877a4.771 4.771 0 0 0-4.81-4.814 4.795 4.795 0 0 0-4.81 4.814 4.795 4.795 0 0 0 4.81 4.813c2.68 0 4.81-2.115 4.81-4.813ZM8.982 19.167c2.976 0 5.277-2.286 5.277-5.669V.333h3.223v21.332H14.29v-1.98c-1.442 1.492-3.437 2.346-5.677 2.346-4.602 0-8.132-3.322-8.132-8.35V.334h3.223v13.165c0 3.443 2.27 5.668 5.278 5.668Zm10.893 2.498h3.069v-1.95a7.836 7.836 0 0 0 5.584 2.317c4.603 0 8.224-3.627 8.224-8.107 0-4.51-3.62-8.136-8.224-8.136a7.764 7.764 0 0 0-5.554 2.316V.334h-3.1v21.332Zm8.439-2.346a5.377 5.377 0 0 1-5.401-5.394 5.377 5.377 0 0 1 5.4-5.394 5.37 5.37 0 0 1 5.37 5.394c0 2.987-2.423 5.394-5.37 5.394Zm17.705-13.5c-4.572 0-8.04 3.687-8.04 8.075 0 4.632 3.622 8.107 8.316 8.107 2.854 0 5.186-1.25 6.751-3.322l-2.24-1.646c-1.166 1.554-2.7 2.286-4.51 2.286-2.64 0-4.757-1.89-5.187-4.419h12.735v-1.006c0-4.632-3.314-8.075-7.825-8.075Zm-4.848 6.643c.553-2.377 2.486-3.961 4.787-3.961 2.302 0 4.235 1.584 4.757 3.961H41.17ZM63.45 8.866V6.002h-1.074c-1.718 0-2.976.792-3.743 2.042v-1.92h-3.069v15.542h3.1v-8.838c0-2.407 1.472-3.962 3.497-3.962h1.289Z" /></g><defs><clipPath id="clip0_227_7066"><path fill="#fff" transform="translate(.481 .333)" d="M0 0h133.494v27.429H0z" /></clipPath></defs></svg>
const IosLinkImage = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/783bb4a82e5be29e.svg'
const AndoidLinkImage = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/163bdc9b0f1e7c9e.png'

const fbIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1024 1024"><path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z" /></svg>
const twitIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M20 3.894a8.299 8.299 0 0 1-2.357.636a4.062 4.062 0 0 0 1.804-2.234a8.298 8.298 0 0 1-2.605.98A4.13 4.13 0 0 0 13.847 2c-2.266 0-4.103 1.808-4.103 4.04c0 .316.036.624.106.92a11.71 11.71 0 0 1-8.457-4.22a3.974 3.974 0 0 0-.556 2.03a4.02 4.02 0 0 0 1.826 3.362a4.143 4.143 0 0 1-1.859-.505v.05c0 1.957 1.414 3.59 3.29 3.961a4.189 4.189 0 0 1-1.852.07c.522 1.604 2.037 2.772 3.833 2.805a8.317 8.317 0 0 1-5.096 1.73A8.42 8.42 0 0 1 0 16.185A11.747 11.747 0 0 0 6.29 18c7.547 0 11.674-6.155 11.674-11.492c0-.175-.004-.35-.012-.523A8.249 8.249 0 0 0 20 3.895Z" /></svg>
const igIcon = <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 1 0 0 6a3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10a5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0a1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058c-.784.037-1.31.142-1.798.332a2.886 2.886 0 0 0-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029c.037.783.142 1.31.331 1.797c.17.435.37.748.702 1.08c.337.336.65.537 1.08.703c.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058c.782-.037 1.309-.142 1.797-.331a2.92 2.92 0 0 0 1.08-.702c.337-.337.538-.65.704-1.08c.19-.493.296-1.02.332-1.8c.052-1.104.058-1.49.058-4.029c0-2.474-.007-2.878-.058-4.029c-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08a2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06c1.065.05 1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.047 1.066.06 1.405.06 4.122c0 2.717-.01 3.056-.06 4.122c-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465c-1.066.047-1.405.06-4.122.06c-2.717 0-3.056-.01-4.122-.06c-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153a4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122c.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z" /></svg>

export default function Footer() {
    return (
        <div className='footer-Wrapper'>
            <div className="divider"></div>
            <div className="Container">
                <div className="top-footer">
                    <div className="fix">

                        <Link to="/" className='logo'>{UberEat}</Link>
                        <div className="download-link">
                            <a href="" className='imageLink'>
                                <img src={IosLinkImage} alt=" " />
                            </a>

                            <a href="" className='imageLink'>
                                <img src={AndoidLinkImage} alt=" " />
                            </a>
                        </div>
                    </div>

                    <div className="FooterLinks-wrapper">
                        <div className="top">
                            {firstSet.map((item, index) => (
                                <FooterLinks key={index} title={item.title} link={item.link} />
                            ))}
                        </div>
                        <div className="bottom">
                            {SecondSet.map((item, index) => (
                                <FooterLinks key={index} title={item.title} link={item.link} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bottom-footer">
                    <div className="icons">
                        <a href='#' className='a-icons'>{fbIcon}</a>
                        <a href='#' className='a-icons'>{twitIcon}</a>
                        <a href='#' className='a-icons'>{igIcon}</a>
                    </div>

                    <div className="others">
                        <a href="" className='c others-link'> Privacy Policy </a>
                        <a href="" className='c others-link'> Terms </a>
                        <a href="" className='c others-link'> Pricing </a>

                        <p className='c d'> Do not sell or share my personal information </p>
                        <p className='c d'> This site is protected by reCAPTCHA and the Google </p>

                        <div className="last c d">
                            ©
                            2023
                            Uber Technologies Inc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
