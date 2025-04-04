import React from 'react'
import "./Header.css"
import logo from "../../assets/icons/logo.webp"
const Header = () => {
  return (
    <section className='header_section'>
        <header className='header_container '>
           <img src={"https://images-utils.filev33344411.xyz/websites/bossclub/new_logo.png"} alt="" width={100} height={50} className='logo_image'/>
           <div className='header_buttons_group'>
            <button className='inverse_button'>登入</button>
            <button className='header_buttons'>注册</button>
           </div>
        </header>
    </section>
  )
}

export default Header