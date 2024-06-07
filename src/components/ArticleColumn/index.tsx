import React, { useState,useEffect  } from "react";
import { Flex } from "antd";
import Card from "./card";
import Tab from '../tab'
import ArticleCard from './articleCard'
import type { TabsProps } from 'antd';
import JsonData from '../../assets/json/index'

const PadStyle: React.CSSProperties = {
  marginLeft: "200px",
  marginRight: "200px"
};

const items: TabsProps['items'] = JSON.parse(JSON.stringify(JsonData.navColumn))
const articleColumn = JSON.parse(JSON.stringify(JsonData.articleColumn))

const ArticleColumn: React.FC = () => {
  const [tabId, setTabId] = useState('1');
  const [articleList, setArticleList] = useState(articleColumn.filter((item: any) => item.attribute == "activity"))
  function getTabId(id: string) {
    // console.log(id);
    setTabId(id)
  }
  useEffect(() => {
    if(tabId == "1") {
      setArticleList(articleColumn.filter((item: any) => item.attribute == "activity"));
    } else if(tabId == "2") {
      setArticleList(articleColumn.filter((item: any) => item.attribute == "broadcast"));
    } else if(tabId == "3") {
      setArticleList(articleColumn.filter((item: any) => item.attribute == "technology"));
    } else if(tabId == "4") {
      setArticleList(articleColumn.filter((item: any) => item.attribute == "community"));
    } else if(tabId == "5") {
      setArticleList(articleColumn.filter((item: any) => item.attribute == "game"));
    } else if(tabId == "6") {
      setArticleList(articleColumn.filter((item: any) => item.attribute == "unite"));
    } 
    // 用switch为什么不行呢？——>开发人员不能直接在 JSX 中编写 switch 语句
    // switch (tabId) {
    //   case "1":
    //     setArticleList(articleColumn.filter((item: any) => item.attribute == "activity"));
    //     break;
    //   case "2":
    //     setArticleList(articleColumn.filter((item: any) => item.attribute == "broadcast"));
    //     break;
    //   case "3":
    //     setArticleList(articleColumn.filter((item: any) => item.attribute == "technology"));
    //     break;
    //   case "4":
    //     setArticleList(articleColumn.filter((item: any) => item.attribute == "community"));
    //     break;
    //   case "5":
    //     setArticleList(articleColumn.filter((item: any) => item.attribute == "game"));
    //     break;
    //   case "6":
    //     setArticleList(articleColumn.filter((item: any) => item.attribute == "unite"));
    //     break;
    //   default:
    //     setArticleList([]);
    // }
  }, [tabId])

  return (
    <>
      <Flex vertical={true} style={PadStyle}>
        <Card />
        <Tab items={items} getTabId={getTabId} />
        <ArticleCard articleList={articleList} />
      </Flex>
    </>
  )
};

export default ArticleColumn;
