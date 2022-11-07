import React from 'react'
import './Header.css'
import { FaTwitter, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa'
import { BsThreeDotsVertical } from 'react-icons/bs'
const Header = ( { navbaropen, setNavbaropen } ) => {
  return (
    <div className='HeaderContainer'>
         <div className='HeaderContainerLogo'>
            <img src="data:image/png;base64,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" alt="" />
            <h1>
                DENGEBET
            </h1>
         </div>

         <div className='HeaderContainerLogin'>
            <h3>
                GİRİŞ YAP
            </h3>
            <h3>
                KAYIT OL
            </h3>
         </div>

         <div className='HeaderContainerSocialMedia'>
             <span>
                <FaTwitter className='icon' />
             </span>

             <span>
                <FaInstagram className='icon'/>
             </span>

             <span>
                <FaWhatsapp className='icon' />
             </span>

             <span>
                <FaTelegram className='icon' />
             </span>

             <span className='icon-navbar-container' onClick={(() => setNavbaropen(!navbaropen))}>
                <BsThreeDotsVertical className={`icon-navbar ${navbaropen == true ? 'active' : ''} `} />
             </span>
         </div>
    </div>
  )
}

export default Header
