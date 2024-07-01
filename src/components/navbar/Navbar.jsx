// import './navbar.css'
// import { Link } from 'react-router-dom'
// import whatsappIcon from '../../assets/icons/whatsapp-icn.png'
// import { useState } from 'react'
// import { FaBars, FaTimes } from 'react-icons/fa'

// const Navbar = () => {
//   const [menu, setMenu] = useState('nav-home')
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen)
//   }

//   return (
//     <div className='navbar'>
//       <div className='navbar-main'>
//         <div className='nav-logo'>
//           <img
//             className='nav-logo-img'
//             src='https://glazingstar.com/wp-content/uploads/2024/05/gla-2-300x231.jpg'
//             alt='logo'
//           />
//         </div>
//         <div className='hamburger' onClick={toggleMenu}>
//           {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//         </div>
//         <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
//           <Link
//             onClick={() => {setMenu('nav-home'); toggleMenu()}}
//             className={menu === 'nav-home' ? 'nav-link nav-home' : 'nav-link'}
//             to='/'
//           >
//             HOME
//           </Link>
//           <Link
//             onClick={() => {setMenu('nav-project'); toggleMenu()}}
//             className={menu === 'nav-project' ? 'nav-link nav-project' : 'nav-link'}
//             to='/project'
//           >
//             PROJECTS
//           </Link>
//           <Link
//             onClick={() => {setMenu('nav-about'); toggleMenu()}}
//             className={menu === 'nav-about' ? 'nav-link nav-about' : 'nav-link'}
//             to='/about'
//           >
//             ABOUT
//           </Link>
//           <div className='nav-contact'>
//             <img className='nav-contact-icon' src={whatsappIcon} alt='whatsapp_logo' />
//             <Link className='nav-contact-link' to='https://wa.me/+919817460139'>
//               Let's Chat
//             </Link>
//           </div>
//         </div>
//       </div>
//       <hr />
//     </div>
//   )
// }

// export default Navbar;


import './navbar.css'
import { Link } from 'react-router-dom';
import whatsappIcon from '../../assets/icons/whatsapp-icn.png'
import { useState } from 'react'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)
  const [menu, setMenu] = useState('home')

  return (
    <div id='nav' className={clicked ? '#nav active' : '#nav'}>
      <div className='nav-left'>
        <img
          className='nav-left-img'
          src='https://glazingstar.com/wp-content/uploads/2024/05/gla-2-300x231.jpg'
          alt='logo'
        />
      </div>
      <div className='nav-right'>
        <div className='menu'>
          <ul className='nav-ul'>
            <li onClick={()=>setMenu("home")} className={menu === 'home' ? 'nav-li nav-home' : 'nav-li'}>
              <Link
                className='nav-link'
                onClick={() => setClicked(false)}
                style={{ textDecoration: 'none' }}
                to='/'
              >
                HOME
              </Link>
            </li>
            <li onClick={()=>setMenu("project")} className={menu === 'project' ? 'nav-li nav-project' : 'nav-li'}>
              <Link
                className='nav-link'
                onClick={() => setClicked(false)}
                style={{ textDecoration: 'none' }}
                to='/project'
              >
                PROJECTS
              </Link>
            </li>
            <li onClick={()=>setMenu("about")} className={menu === 'about' ? 'nav-li nav-about' : 'nav-li'}>
              <Link
                className='nav-link'
                onClick={() => setClicked(false)}
                style={{ textDecoration: 'none' }}
                to='/about'
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
        <div className='nav-chat-mobile'>
          <div className='nav-chat'>
            <img src={whatsappIcon} alt='' />
            <a href='https://wa.me/+919817460139'>Let's Chat</a>
          </div>
          <div id='mobile' onClick={() => setClicked(!clicked)}>
            <i
              id='bar'
              className={clicked ? 'fas fa-times' : 'fas fa-bars'}
            ></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
