import React, { useRef } from 'react'
import './Header.css'
// icon
import { CiMenuFries } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";



const Header:React.FC = () => {
  const curtainMenuReference = useRef<HTMLDivElement>(null)

const openMenu = () => {
  if(curtainMenuReference.current) {
    curtainMenuReference.current.classList.add("aktiv")
  }
}
const closeMenu = () => {
  if(curtainMenuReference.current) {
    curtainMenuReference.current.classList.remove("aktiv")
  }
}


  return (
    <>
    <div className="curtain-menu" ref={curtainMenuReference}>
    <div className="mobile-links">
    <img src="/images/header/logo.svg" className='mx-3' alt="" />
    <a href="" className='link-1'>Menu</a>
    <a href="" className='link-2'>Recipes</a>
    <a href="" className='link-3'>Chefs</a>
    <a href="" className='link-4'>Contacts</a>
</div>
<IoIosCloseCircleOutline className='closed-icon' onClick={closeMenu}/>

    </div>
    <nav>
        <div className="container">
     <div className="nav-logo">
     <img src="/images/header/logo.svg" className='mx-3' alt="" />
     <h6>HEALTHY SWITCHER</h6>
     </div>
<div className="nav-links">
    <a href="">Menu</a>
    <a href="">Recipes</a>
    <a href="">Chefs</a>
    <a href="">Contacts</a>
</div>
<CiMenuFries className='menu-icon' onClick={openMenu}/>

        </div>
    </nav>
    </>
  )
}

export default Header