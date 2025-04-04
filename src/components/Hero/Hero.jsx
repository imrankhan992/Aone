import React from 'react'
import "./hero.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import heroImage from "../../assets/Images/modal_cover.webp"
import AoneTabs from './AoneTabs';
import Items from './Items';
const Hero = () => {
  return (
    <section className='hero_section '>
        <div className='hero_section_container'>
            <div className='left_side'>
                <div className='emptydev'><div className='img_container'>
                <img src={heroImage} width={900} alt="" />
                </div> </div>
                
                <div className='hero_content'>
                    <div className='first_dev bgblue card'>
                        <h1 className='register_account_h1'>注册代理账号</h1>
                        <div className='hero_content_buttons'>
                            <button className='whats_app'> <FontAwesomeIcon icon={faWhatsapp} size="1x" color="white" /> Whatsap</button>
                            <button className='telegram_button'><FontAwesomeIcon icon={faWhatsapp} size="1x" color="white" /> Telegram</button>
                        </div>
                    </div>
                    {/* second dev */}
                    
                    
                       <Items/>
                   
                     </div>
            </div>
           
            <AoneTabs/>
                
          
        </div>
    </section>
  )
}

export default Hero