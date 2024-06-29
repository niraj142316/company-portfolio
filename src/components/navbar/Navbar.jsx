import './navbar.css'
import { Link } from 'react-router-dom'
import whatsappIcon from '../../assets/icons/whatsapp-icn.png'
import { useState } from 'react'

const Navbar = () => {

  const [menu, setMenu]=useState('nav-home')

  return (
    <div className='navbar'>
      <div className='navbar-main'>
        <div className='nav-logo'>
          <img
            className='nav-logo-img'
            src='https://glazingstar.com/wp-content/uploads/2024/05/gla-2-300x231.jpg'
            alt='logo'
          />
        </div>
        <div className='nav-menu'>
          <Link onClick={()=>setMenu('nav-home')} className={menu==="nav-home"? "nav-link nav-home":"nav-link"} to='/'>
            HOME
          </Link>
          <Link onClick={()=>setMenu('nav-project')} className={menu==="nav-project"? "nav-link nav-project":"nav-link"}  to='/project'>
            PROJECTS
          </Link>
          <Link onClick={()=>setMenu('nav-about')} className={menu==="nav-about"? "nav-link nav-about":"nav-link"}  to='/about'>
            ABOUT
          </Link>
        <div className='nav-contact'>
          <img className='nav-contact-icon' src={whatsappIcon} alt='whatsapp_logo' />
          <Link className='nav-contact-link' to='/whatsapp'>
            Let's Chat
          </Link>
        </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Navbar
