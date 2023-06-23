import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/mine.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h1>STEVE'S PORTFOLIO DESIGN</h1>
                
                <h5 className="text-light">Computer Engineering Student</h5>
                <CTA />
                <HeaderSocial />
                <div className="me">
                    <img src={ME} alt ="me"/>
                </div>
                <div>
                    <a href="#contact" className='scroll_down'>SCROLL DOWN</a>
                </div>
            </div>
        </header>
    )
}
export default Header;