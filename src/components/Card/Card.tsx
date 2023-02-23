import React from 'react'
import './Card.scss'


type CardProps = {
    imgUrl: string
    title: string
    desc: string
    link: string
    style: string
}
export default function Card({ imgUrl, title, style, desc, link }: CardProps) {
    return (
        <>
            {/* // Card style should be .Card-sTyle */}
            <div className={style}>
                <div className="Container">
                    <div className="imgWrapper">
                        <img src={imgUrl} alt="" height="auto" width="100%" object-fit="fit" />
                    </div>
                    <h2> {title}</h2>
                    <a href={link}> {desc}</a>
                </div>
            </div>
        </>
    )
}
