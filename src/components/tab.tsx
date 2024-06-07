// 首页和详情页的tab
import React from "react";
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';


const tabStyle: React.CSSProperties = {
  paddingLeft:"140px",
  paddingRight:"140px",
};

interface sendId {
  getTabId: (value:string) => void
}

interface ItemsProps {
  items: TabsProps['items']; // 这里的 any[] 应该是你的 categories 属性的实际类型
}

const Tab: React.FC<ItemsProps & sendId> = ({items,getTabId}) => {
  const onChange = (key: string) => {
    getTabId(key)
  };

  return (
      <Tabs
      style={tabStyle}
      defaultActiveKey="1" 
      items={items} 
      onChange={onChange}
      size="large"
      >
      </Tabs>
  );
};

export default Tab;