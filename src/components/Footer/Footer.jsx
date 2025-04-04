import React from 'react'
import "./footer.css"
const Footer = () => {
  return (
    <footer className='footer_section '>

        <div className='footer_section_container'>
            <div>
                <img width={200} height={100} src={"https://images-utils.filev33344411.xyz/websites/bossclub/new_logo.png"} alt="" />
            </div>
            <div>
               <div>
                 <h3 className="heading_footer" >博彩牌照</h3>
               <div className='footer_icons_container'>
               <img src="https://aone33agent.online/assets/img/footer/img_1.png" alt="" srcset="" />
               <img src="https://aone33agent.online/assets/img/footer/img_2.png" alt="" srcset="" />
               </div>
               </div>
               {/* second */}
               <div>
                 <h3 className="heading_footer">证书</h3>
               <div className='second_div'>
               <img width={60}  src="https://aone33agent.online/assets/img/footer/img_3.png" alt="" srcset="" />
               <img width={60} src="https://aone33agent.online/assets/img/footer/img_4.png" alt="" srcset="" />
               <img width={60} src="https://aone33agent.online/assets/img/footer/img_5.png" alt="" srcset="" />
               <img width={100} src="https://aone33agent.online/assets/img/footer/img_6.png" alt="" srcset="" />
               <img width={200} src="https://aone33agent.online/assets/img/footer/img_7.png" alt="" srcset="" />
               <img width={120} src="https://aone33agent.online/assets/img/footer/img_8.png" alt="" srcset="" />
               </div>
               </div>
            {/* third */}
         

        
            
            </div>

            <div>
            <div>
                 <h3 className="heading_footer">付款方式</h3>
               <div className='third_Div'>
               <img  width={60} src="https://aone33agent.online/assets/img/footer/img_9.png" alt="" srcset="" />
               <img  width={60} src="https://aone33agent.online/assets/img/footer/img_10.png" alt="" srcset="" />
               <img  width={60} src="https://aone33agent.online/assets/img/footer/img_11.png" alt="" srcset="" />
               <img  width={60} src="https://aone33agent.online/assets/img/footer/img_12.png" alt="" srcset="" />
               </div>
               </div>
               <div>
                 <h3 className="heading_footer">关注我们</h3>
               <div className='third_Div'>
               <img  width={60} src="https://aone33agent.online/assets/img/footer/img_14.png" alt="" srcset="" />
               <img  width={60} src="https://aone33agent.online/assets/img/footer/img_13.png" alt="" srcset="" />
              
               </div>
               </div>
            </div>
        </div>
       <div className='copy_right'> <p >Copyright Aone @ 2025. All rights reserved</p></div>
    </footer>
  )
}

export default Footer