import React from 'react'
import { useState } from 'react'
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import {Links} from "./data.js"
 import './navbar.css'
import Top from "./Top.js"
function Navbar() {
   const [sidebar, setSidebar] = useState(false)

   const showSidebar = () => setSidebar(!sidebar)

   return (
      <nav className="navbar ">
            <div className='logoIcon'>

  <Top/>
            <div className={sidebar ? 'nav-icon3 open' : 'nav-icon3'} onClick={showSidebar}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
{/*     </div>
 */}
 </div>
         </div>
         <ul className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className={styles.list} onClick={showSidebar}>
            <li className="nav-item "> 
            <Link className="nav-link link" to="/">
                <div className={styles.brand}>
            <img src="../../chata.svg" alt="logo" className={styles.logo} />
                  
         </div></Link>
         </li> 
         {Links.map((links,index)=>{
          return <li className="nav-item" key={index}>
          <Link className="nav-link link" to={links.to}>
             {links.form}
          </Link>
       </li>
         })}
                <li className="nav-item">

                  <a className="nav-link link" href="/#kontakt">
                     KONTAKT
                  </a>
                </li>
            </ul>
         </ul>
      </nav>
   )
}

export default Navbar
