import React, { useEffect, useState } from "react";
import { Flex } from "antd";
// 组件
import Title from './title'
import Basic from './basic'
import ArticleBody from './body'
import Comment from './comment'
// 公共管理store
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import articleReducer, { setArticle } from './store/articleSlice';

import store from "./store/store";
import './index.css'
// json格式
import JsonData from '../../assets/json/index'

const navArticle = JSON.parse(JSON.stringify(JsonData.navArticle))
const hotArticleList = JSON.parse(JSON.stringify(JsonData.hotArticleList))
const newArticleList = JSON.parse(JSON.stringify(JsonData.newArticleList))
const article = JSON.parse(JSON.stringify(JsonData.article))

const articleList = [...navArticle, ...hotArticleList, ...newArticleList, ...article];

interface ArticleId {
  id: string | undefined
}
interface filtered {
  id: number | string;
  title: string;
  content: string;
  img: string;
  author: string;
  time: string;
  [key: string]: any;
}

const avatar = "http://yu" // 用户的头像

const ArticleStyle: React.CSSProperties = {
  position: "relative",
  top: "-160px",
  width: "600px",
  minHeight: "800px",
  margin: "0 auto",
  padding: "30px",
  backgroundColor: "#fff"
};
const ArticleDetail: React.FC<ArticleId> = ({ id }) => {
  const [store, setStore] = useState<any | null>(null);

  useEffect(() => {
    const filteredArticle = articleList.find(article => article.id == id);
    if (filteredArticle) {
      const newStore = configureStore({
        reducer: {
          article: articleReducer,
        },
        preloadedState: {
          article: {
            article: filteredArticle,
          },
        },
      });
      setStore(newStore);
    }
  }, [id]);
  

  if (!store) {
    return <div>文章未找到或正在加载...</div>;
  }

  const filteredArticles = articleList.find(article => article.id == id);
  if (!filteredArticles) {
    return <div>文章未找到</div>;
  }

  return (
    <>
      <Provider store={store}>

        <div className="back">1</div>
        <Flex vertical={true} align="flex-start" style={ArticleStyle}>
          <Title title={filteredArticles.title} />
          <Basic avatar={avatar} author={filteredArticles.author} time={filteredArticles.time} />
          <ArticleBody content={filteredArticles.content} img={filteredArticles.img} commentCount={filteredArticles.commentCount} likeCount={filteredArticles.likeCount} />
          <Comment />
        </Flex>

      </Provider>
    </>
  );
};

export default ArticleDetail;
