import React from 'react'


type SideBarProps = {
    showSideBar: boolean
}


export default function SideBar({ showSideBar }: SideBarProps) {
    return (
        <div className={showSideBar ? ' SideBar' : ' sideBar-close'}>
            <h1> Side bar</h1>
        </div>
    )
}
