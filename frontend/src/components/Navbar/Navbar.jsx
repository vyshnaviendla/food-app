import React from 'react'
import { assets } from '../../assets/assets'
import './Navbar.css'

export const Navbar = () => {
  
  const [menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
      <img src={assets.logo} alt=""  className="logo"/>
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot">
            <button>Sign in</button>
          </div>
        </div>

      </div>
      
      
    </div>
  )
}
