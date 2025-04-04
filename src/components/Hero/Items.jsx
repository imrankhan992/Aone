import React from 'react'
import "./items.css"
const Items = () => {
    const categories = [
        {
          name: 'Acting',
          posts: [
            { id: 1, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_1.png", title: '高效系统', sub_title: '安全快速佣金提款系统' },
            { id: 2, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_2.png", title: '高效系统', sub_title: '安全快速佣金提款系统' },
            { id: 3, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_3.png", title: '三代玩家返水', sub_title: '高额玩家返利' },
            { id: 4, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_4.png", title: '高额代理佣金', sub_title: '高佣金率' },
          ],
        },
        
    ];

    const categories2 = [
       
        {
          name: 'Player',
          posts: [
            { id: 5, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_5.png", title: '安全无忧交易', sub_title: '加密且安全的交易' },
            { id: 6, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_6.png", title: '多样化游戏', sub_title: '丰富游戏选择' },
            { id: 7, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_7.png", title: '24/7客服支持', sub_title: '24小时协助服务' },
            { id: 8, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_8.png", title: '极速提款', sub_title: '极速提款系统' },
          ],
        },
    ];
  return (
    <div className='item_container'>
        <h1 className='head_items'>为什么选择<img src="https://aone33agent.online/assets/img/landing_page/logo.png" alt="logo one" width={160} height={38} srcset="" /></h1>
       <div className='container_container'>
       <div >
            <button className='items_button'>代理</button>
          <div className='items_main_container'>
          <div className='single_item_box'>
                   {
                    categories.map(({ name, posts }) => (  // ✅ Extract posts here
                        <>
                                {posts.map((post) => (
                                    <div key={post.id} className="single_item">
                                       <div className='item_icon_container'>
                                       <img src={post.icon} width={44.27} height={44.27} alt={post.title} className="w-12 h-12" />
                                       </div>
                                        <div className='item_text_container'>
                                            <h3 className="item_h3">{post.title}</h3>
                                            <p className="item_para">{post.sub_title}</p>
                                        </div>
                                    </div>
                                ))}
                         </>
                    ))}
                    
                   
            </div>
            
            
          </div>
        </div>

        {/* second */}
        <div className='main-right-container'>
            <button className='items_button'>玩家</button>
          <div className='items_main_container'>
          <div className='single_item_box'>
                   {
                    categories.map(({ name, posts }) => (  // ✅ Extract posts here
                        <>
                                {posts.map((post) => (
                                    <div key={post.id} className="single_item">
                                       <div className='item_icon_container'>
                                       <img src={post.icon} width={44.27} height={44.27} alt={post.title} className="w-12 h-12" />
                                       </div>
                                        <div className='item_text_container'>
                                            <h3 className="item_h3">{post.title}</h3>
                                            <p className="item_para">{post.sub_title}</p>
                                        </div>
                                    </div>
                                ))}
                         </>
                    ))}
                    
                   
            </div>
            {/* second */}
            
          </div>
        </div>
       </div>
    </div>
  )
}

export default Items