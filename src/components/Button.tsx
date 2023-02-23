import React from 'react'
import { Outlet, Link } from "react-router-dom";

const profilePic = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4Z" /></svg>

// Button JSXComponent
type ButtonProps = {
    link: string,
    title: string
    style: string
    profile: boolean
}



export const Button = ({ link, title, style, profile }: ButtonProps) => {

    return (<div className='a-style'>
        <Link to="/Login" className='link'>
            {profile ? (
                <div className="Withprofile ">
                    <p className="profilePic">
                        {profilePic}
                    </p>
                    <p className="title">
                        {title}
                    </p>
                </div>
            ) : (
                <p className="title">
                    {title}
                </p>)}
        </Link>
    </div>
    )
}

