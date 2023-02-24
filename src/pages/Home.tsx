import { useState } from 'react'
import { Button } from '../components/Button'
// import SideBar from '../components/SideBar'


// for Banner
import { Link } from 'react-router-dom'
import { InputSearch } from '../components/InputSearch'
import Card from '../components/Card/Card'
const searcLocation = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 12q.825 0 1.413-.588Q14 10.825 14 10t-.587-1.413Q12.825 8 12 8q-.825 0-1.412.587Q10 9.175 10 10q0 .825.588 1.412Q11.175 12 12 12Zm0 9.625q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.363Q4 12.6 4 10.2q0-3.75 2.413-5.975Q8.825 2 12 2t5.587 2.225Q20 6.45 20 10.2q0 2.4-1.8 5.163q-1.8 2.762-5.45 5.987q-.15.125-.35.2q-.2.075-.4.075Z" /></svg>
const time = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="black" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71l-1.42 1.41z" /></svg>
const CloseIcon = <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6Z" /></svg>
const AppImage = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.382 3.968A8.962 8.962 0 0 1 12 2c2.125 0 4.078.736 5.618 1.968l1.453-1.453l1.414 1.414l-1.453 1.453A8.962 8.962 0 0 1 21 11v1H3v-1c0-2.125.736-4.078 1.968-5.618L3.515 3.93l1.414-1.414l1.453 1.453zM3 14h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-7zm6-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" /></svg>

// MyMap
import MyMap from '../components/Map/Map'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'


type HomeProps = {
    show: boolean
}


export default function Home({ show }: HomeProps) {

    const [showSide, setShowSide] = useState(true)
    const [showSideBar, setShowSideBar] = useState(true)
    const [openDelivery, setOpenDelivery] = useState(true)

    return (
        <div className='Home'>
            <Header />
            {/*============================= Banner ==========================*/}
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

                            <select className=' selectOption' name="" id="" onClick={() => { setOpenDelivery(!openDelivery) }}>
                                <option value="" className='inputStyle'>Deliver Now</option>
                                <option value="" className='inputStyle'>Schedule Later</option>
                            </select>
                        </div>
                        <Button link='#' title="Find Food" style='a-style' profile={false} />
                    </div>

                    <p className='signin'>
                        <a href="/login">Sign In </a>
                        for your recent addresses
                    </p>
                </div>
            </div>

            {/* You can put this on another component file . i like it like this  */}
            <div className={!openDelivery ? 'Opened-delivery' : 'closed-delivery '}>
                <div className="container">
                    <div className="top">
                        <p onClick={() => { setOpenDelivery(!openDelivery) }}>{CloseIcon}</p>
                        <h1 > Pick a time </h1>
                        <div className="inputWrap">
                            <input type="date" name="" id="" className='PickDate' />
                            <input type="time" name="" id="" className='PickTime' />
                        </div>
                    </div>

                    <div className="bottom">
                        <Button style='a-style' link='#' profile={false} title="Schedule" />
                        <Button style='a-style last' link='#' profile={false} title="Deliver now" />
                    </div>
                </div>
            </div>

            {/* You can also put this on another component file . i like it like this  */}
            <div className="SideBar">
                <div className={!showSideBar ? ' SideBar' : ' sideBar-close'}>
                    <h1> Side bar</h1>
                </div>
            </div>
            {/* Dark overlay  */}
            <div className={!showSide ? 'blackWrapper' : ' blackWrapper-hidden'} onClick={() => { setShowSide(!showSide) }}></div>

            {/* Bellow Banner */}
            <div className="moreOnAndroid">
                <div className="container">
                    <div className="top">
                        <img className="logo-image-a" src='https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg' alt="icon" />
                        <h2> There’s more to love in the Android app. </h2>
                    </div>
                    <a className='App-image' href="https://www.ubereats.com/home-landing?%243p=a_custom_47734&~campaign=ubereatscom_cta_feed&~tune_publisher_sub1=02fd9d3b-3ee5-46cf-866e-c64fd42a7d03&_branch_match_id=1135086014925721350&utm_source=web&utm_campaign=ubereatscom_cta_feed&utm_medium=paid%20advertising&_branch_referrer=H4sIAAAAAAAAAzXLsQ7CIBRA0a%2BpG20FCmpCXDS66KwTecDDElskBQb%2FXh2c77ljKSnvuq4aXBBKbiGldgrx2d3u18O5ni7vYd9QzpICbWsur1lzKRlfNfJoYU4QHlH9b%2FuttoD2iO4HSo2oUzVTyCMuOlezVj31buuYIQxxIFxYTzZCILGCe8cpSNezDxCe27aWAAAA">
                        <p className='android'>{AppImage}</p>
                        Get the app
                    </a>
                </div>
            </div>


            {/* display cards with few details  */}
            <div className="HomeCard">
                <Card imgUrl="./assets/employee.jpg" link='#' style='Card-Style' title='Feed your employees' desc='Create a business account' />
                <Card imgUrl="./assets/employee.jpg" link='#' style='Card-Style' title='Your restaurant, delivered' desc='Add to your resturant ' />
                <Card imgUrl="./assets/employee.jpg" link='#' style='Card-Style' title='Deliver with Uber Eats' desc='Sign up to deliver ' />
            </div>

            {/* GoogleMap  */}
            <MyMap />

            {/* Footer */}

            <Footer />
        </div>
    )
}
