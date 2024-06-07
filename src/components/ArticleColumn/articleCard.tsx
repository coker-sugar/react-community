import React  from "react";
import { Button, Flex } from "antd";
import { useNavigate  } from 'react-router-dom';
import qqq from '../../assets/images/qqq.png'
import LazyImage from './lazyImg'

const MarginStyle: React.CSSProperties = {
    // backgroundColor:"blue",
    marginLeft:"140px",
    marginRight:"140px"
  };


  interface Article {
    id:string;
    img:string;
    startTime:string;
    endTime:string;
    content:string;
    author:string;
    attribute:string;
  }
interface List{
    articleList:Article[]
}


const ArticleCard: React.FC<List> = ({articleList}) => {
  const navigate = useNavigate ();
  const Toarticle = (idValue: string) => {
    navigate(`/article/${idValue}`);
  };

  return (
    <>
     <Flex gap="large" wrap={true} style={MarginStyle} justify="space-between">
      {articleList.map((item) => (
        <Flex gap="small" vertical={true} className="card-skeleton" key={item.id}>
          <LazyImage placeholder="qqq" src={item.img} alt="Article Image" />
          <div className="common">{item.startTime} - {item.endTime}</div>
          <h1 className="content-skeleton">{item.content}</h1>
          <div className="common">{item.author}</div>
          <Button size="small" className="btn-skeleton" onClick={() => Toarticle(item.id)}>了解详情</Button>
        </Flex>
      ))}
    </Flex>
    </>
  )
};

export default ArticleCard;
