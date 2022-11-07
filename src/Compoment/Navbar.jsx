import React from 'react'
import './Navbar.css'
const Navbar = ( { navbaropen } ) => {
  return (
    <div className={`ContainerNavbar ${navbaropen == true ? 'active' : ''} `}>
       
        <div className='navbar-name'>
            <h1>
                DENGEBET 
            </h1>
        </div>
        
        
        <li>
            <h3>
                ANA SAYFA
            </h3>
        </li>

        <li>
            <h3>
                CANLI BAHİS
            </h3>
        </li>

        <li>
            <h3>
                CANLI CASİNO
            </h3>
        </li>

        <li>
            <h3>
                SPOR BAHİSLERİ
            </h3>
        </li>

        <li>
            <h3>
                E-SPORT
            </h3>
        </li>

        <li>
            <h3>
                CASİNO
            </h3>
        </li>

        <li>
            <h3>
                SANAL BAHİS
            </h3>
        </li>

        <li>
            <h3>
                BAHİS BOZDUR
            </h3>
        </li>
    </div>
  )
}

export default Navbar
