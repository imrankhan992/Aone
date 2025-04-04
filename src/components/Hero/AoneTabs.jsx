import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import "./tabs.css";

const categories = [
  {
    name: '代理',
    posts: [
      { id: 1, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_1.png", title: '高效系统', sub_title: '安全快速佣金提款系统' },
      { id: 2, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_2.png", title: '高效系统', sub_title: '安全快速佣金提款系统' },
      { id: 3, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_3.png", title: '三代玩家返水', sub_title: '高额玩家返利' },
      { id: 4, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_4.png", title: '高额代理佣金', sub_title: '高佣金率' },
    ],
  },
  {
    name: '玩家',
    posts: [
      { id: 5, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_5.png", title: '安全无忧交易', sub_title: '加密且安全的交易' },
      { id: 6, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_6.png", title: '多样化游戏', sub_title: '丰富游戏选择' },
      { id: 7, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_7.png", title: '24/7客服支持', sub_title: '24小时协助服务' },
      { id: 8, icon:"https://aone33agent.online/assets/img/landing_page/why_icon_8.png", title: '极速提款', sub_title: '极速提款系统' },
    ],
  },
];

export default function AoneTabs() {
  return (
    <div className="tab_container">
      <h2 className="main_heading">
      为什么选择<img height={50} width={100} src={"https://images-utils.filev33344411.xyz/websites/bossclub/new_logo.png"}  alt="logo" />?
      </h2>
      <TabGroup>
        <TabList className="tab_buttons">
          {categories.map(({ name }) => (
            <Tab key={name} className={({ selected }) => 
              ` ${selected ? 'active' : 'single_tab_button'}`
            }>
              {name}
            </Tab>
          ))}
        </TabList>
        <TabPanels className="mt-3">
          {categories.map(({ name, posts }) => (  // ✅ Extract posts here
            <TabPanel key={name} className="tab_panel">
              <div className="item_main">
                {posts.map((post) => (
                  <div key={post.id} className="single_item">
                    <img src={post.icon} height={91} width={91} alt={post.title} className="w-12 h-12" />
                    <div>
                      <h3 className="item_h3">{post.title}</h3>
                      <p className="item_para">{post.sub_title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
