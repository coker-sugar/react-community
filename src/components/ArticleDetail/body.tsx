import React from "react";
import { Flex  } from "antd";
import commentIcon from '../../assets/images/icons/comment.png'
import forwardIcon from '../../assets/images/icons/forward.png'
import likeIcon from '../../assets/images/icons/like.png'
import markIcon from '../../assets/images/icons/mark.png'
import './index.css'

interface articleBody {
  content: string,
  img: string,
  likeCount:string,
  commentCount:string
}

const ArticleBody: React.FC<articleBody> = ({ content, img,commentCount,likeCount }) => {

  return (
    <>
      <Flex gap="middle" vertical={true} className="icons">
        <Flex gap="small" className="icon-box" vertical={false}>
          <img className="icon" src={likeIcon} alt="" />
          <div className="icon-num">{likeCount}</div>
        </Flex>
        <Flex gap="small" className="icon-box">
          <img className="icon" src={commentIcon} alt="" />
          <div className="icon-num ">{commentCount}</div>
        </Flex>
        <img className="icon-mark" src={markIcon} alt="" />
        <img className="icon" src={forwardIcon} alt="" />
      </Flex>
      
      <Flex className="bodyStyle" vertical={true} align="flex-start">
        <h1 className="articleTitle">1.内容</h1>
        <div className="article-content">{content}</div>
        <h1 className="articleTitle">2.最终效果</h1>
        {/* <div className="article-img">{img}</div> */}
        <img src={img} className="comment-IG" alt="" />
      </Flex>
    </>
  );
};

export default ArticleBody;
