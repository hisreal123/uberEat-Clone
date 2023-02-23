import React, { useState, useEffect } from 'react'
import { InputSearch } from '../InputSearch'
import { Outlet, Link } from "react-router-dom";
import { Button } from '../Button';
import "./Header.scss";

const menuOpen = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z" /></svg>
const UberEat = <svg width="134" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_227_7066)" fill="#000"><path d="M70.629.334H85.72V3.98H74.705v5.215h10.722v3.537H74.705v5.288H85.72v3.647H70.629V.334Zm56.101 21.734c4.627 0 7.234-2.188 7.234-5.215 0-2.151-1.543-3.756-4.774-4.449l-3.415-.693c-1.983-.364-2.607-.729-2.607-1.458 0-.948.955-1.532 2.718-1.532 1.909 0 3.305.51 3.709 2.26h4.002c-.22-3.281-2.607-5.47-7.454-5.47-4.186 0-7.124 1.715-7.124 5.033 0 2.298 1.616 3.793 5.104 4.522l3.819.875c1.505.292 1.909.693 1.909 1.313 0 .985-1.138 1.605-2.974 1.605-2.313 0-3.635-.51-4.149-2.261h-4.04c.588 3.282 3.048 5.47 8.042 5.47Zm-9.124-3.975h-3.011c-.918 0-1.506-.401-1.506-1.24V9.487h4.517V5.913h-4.517V1.428h-4.039v4.485h-3.048v3.574h3.048v8.387c0 2.115 1.505 3.792 4.223 3.792h4.333v-3.573Zm-13.309-12.18v15.754h-4.002v-1.422a7.84 7.84 0 0 1-5.068 1.823c-4.737 0-8.445-3.683-8.445-8.278 0-4.595 3.709-8.278 8.445-8.278a7.84 7.84 0 0 1 5.068 1.824V5.914h4.002Zm-3.929 7.877a4.771 4.771 0 0 0-4.81-4.814 4.795 4.795 0 0 0-4.81 4.814 4.795 4.795 0 0 0 4.81 4.813c2.68 0 4.81-2.115 4.81-4.813ZM8.982 19.167c2.976 0 5.277-2.286 5.277-5.669V.333h3.223v21.332H14.29v-1.98c-1.442 1.492-3.437 2.346-5.677 2.346-4.602 0-8.132-3.322-8.132-8.35V.334h3.223v13.165c0 3.443 2.27 5.668 5.278 5.668Zm10.893 2.498h3.069v-1.95a7.836 7.836 0 0 0 5.584 2.317c4.603 0 8.224-3.627 8.224-8.107 0-4.51-3.62-8.136-8.224-8.136a7.764 7.764 0 0 0-5.554 2.316V.334h-3.1v21.332Zm8.439-2.346a5.377 5.377 0 0 1-5.401-5.394 5.377 5.377 0 0 1 5.4-5.394 5.37 5.37 0 0 1 5.37 5.394c0 2.987-2.423 5.394-5.37 5.394Zm17.705-13.5c-4.572 0-8.04 3.687-8.04 8.075 0 4.632 3.622 8.107 8.316 8.107 2.854 0 5.186-1.25 6.751-3.322l-2.24-1.646c-1.166 1.554-2.7 2.286-4.51 2.286-2.64 0-4.757-1.89-5.187-4.419h12.735v-1.006c0-4.632-3.314-8.075-7.825-8.075Zm-4.848 6.643c.553-2.377 2.486-3.961 4.787-3.961 2.302 0 4.235 1.584 4.757 3.961H41.17ZM63.45 8.866V6.002h-1.074c-1.718 0-2.976.792-3.743 2.042v-1.92h-3.069v15.542h3.1v-8.838c0-2.407 1.472-3.962 3.497-3.962h1.289Z" /></g><defs><clipPath id="clip0_227_7066"><path fill="#fff" transform="translate(.481 .333)" d="M0 0h133.494v27.429H0z" /></clipPath></defs></svg>
const searcLocation = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075Z" /></svg>

// Header JSXComponent
export default function Header() {
    const [show, setShow] = useState(true)
    const [showSideBar, setShowSideBar] = useState(false)

    const DisplayHeader = () => {
        window.scrollY >= 50 ? setShow(true) : setShow(false);
    }


    useEffect(() => {
        // You can add this out of useEffect Hook 
        // Want it to be here for now asn as long it doesn't break 
        // Tell me more better way to do it .
        window.addEventListener('scroll', DisplayHeader)

        DisplayHeader()
    }, [])
    return (
        <>
            <header className={show ? 'active' : 'not-active'}>
                <div className=' container-wrapper' >
                    <div className="left">
                        <p className='menu' onClick={() => { setShowSideBar(!showSideBar) }}>{menuOpen}</p>
                        <Link to="/" className='logo'>{UberEat}</Link>
                    </div>

                    <div className={show ? ' middle inputWrapper-hidden' : 'middle inputWrapper'}>
                        <p>{searcLocation}</p>
                        <InputSearch type='text' name='address' style='inputStyle' />
                        <p className='clear'>clear</p>
                    </div>

                    <div className="right">
                        <Button link='/login' title='Login' style='a-style' profile={true} />
                        <Button link='/' title='Sign in' style='a-style' profile={false} />
                    </div>
                </div>
            </header>
        </>
    )
}
