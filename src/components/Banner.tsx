import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'
import { InputSearch } from './InputSearch'

const searcLocation = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075Z" /></svg>
const time = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z" /></svg>

export default function Banner() {
    return (
        <div className='Banner'>
            <div className="Container">

                <h1>
                    Order food to your door
                </h1>

                <div className="searchAddress">
                    <div className="inputWrapper">
                        <p>{searcLocation}</p>
                        <InputSearch type='text' name='address' style='inputStyle' />
                    </div>
                    <div className="select">

                        <p>{time}</p>

                        <select className=' selectOption' name="" id="">
                            <option value="" className='inputStyle'>Deliver Now</option>
                            <option value="" className='inputStyle'>Schedule Later</option>
                        </select>
                    </div>
                    <Link to="/Login">Go to Login</Link>
                    {/* <Button link='#' title="Find Food" style='a-style' profile={false} /> */}
                </div>

                <p className='signin'>
                    <a href="#">Sign In </a>
                    for your recent addresses
                </p>
            </div>
        </div>
    )
}
