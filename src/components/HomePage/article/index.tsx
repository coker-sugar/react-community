import React from "react";
import { Flex } from "antd";
import './index.css'
import { useNavigate  } from 'react-router-dom';

interface Article {
  id:number;
  title:string;
  content:string;
  time:string;
  author:string;
  img:string;
}
interface Id {
  articleList:Article[]
}
const ArticleList: React.FC<Id> = ({articleList}) => {
  
  const navigate = useNavigate ();
  const Toarticle = (idValue: string) => {
    navigate(`/article/${idValue}`);
  };
  return (
    <>
      {articleList.map((item:any) => (
        <Flex gap="large" justify="space-around" align="center" key={item.id} className="card" onClick={() => Toarticle(item.id)}>
          <img src={item.img} className="ig"></img>
          <Flex justify="space-around" vertical={true} className="article" >
            <h1 className="title">{item.title}</h1>
            <p className="content">{item.content}</p>
            <Flex className="authorTime" justify="space-around" >
              <div>作者：{item.author}</div>
              <div>{item.time}</div>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default ArticleList;
