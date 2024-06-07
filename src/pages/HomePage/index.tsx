import React, { useState  } from "react";
import './index.css'
import Carousel from '../../components/HomePage/carousel'
import Tab from '../../components/tab'
import ArticleList from "../../components/HomePage/article/index";
import type { TabsProps } from 'antd';
import JsonData from '../../assets/json/index'

const items: TabsProps['items'] = JSON.parse(JSON.stringify(JsonData.homeTab))
const hotArticleList = JSON.parse(JSON.stringify(JsonData.hotArticleList))
const newArticleList = JSON.parse(JSON.stringify(JsonData.newArticleList))

const HomePage: React.FC = () => {
  const [tabId, setTabId] = useState('123');
  const [articleList,setArticleList] = useState(hotArticleList)
  function getTabId(id: string) {
    console.log("子组件传递来的：" + id); // 监听到id发生变化，文章组件就会变化
    setTabId(id)
    if(tabId == "2") {
      setArticleList(hotArticleList)
    } else {
      setArticleList(newArticleList)
    }
  }

  return (
    <div className="box">
      <Carousel />
      <Tab items={items} getTabId={getTabId} />
      <ArticleList articleList={articleList} />
    </div>
  )
};

export default HomePage;
