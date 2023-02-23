import React from 'react'

type FooterLinksProps = {
    title: string
    link: string
    key: number
}

export default function FooterLinks({ title, link, key }: FooterLinksProps) {
    return (
        <div className="FooterLinks" key={key}>
            <div className="mapped-wrapper">
                <a className="mapped-item" href={link}>{title}</a>
            </div>
        </div >
    )
}
