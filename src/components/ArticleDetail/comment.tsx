import React, { useState} from "react";
import './index.css'
import { Flex, Input, Button } from "antd";
import Personcom from './personcom'
import likeIcon from '../../assets/images/icons/like.png'

import { useDispatch, useSelector } from 'react-redux';
import { addComment } from './store/articleSlice';

const { TextArea } = Input;
// interface commentsArray {
//     commentContent: string,
//     commentators: string,
//     commentTime: string,
//     likeComment: string
// }
// interface articleTitle {
//     comments: commentsArray[]
// }
const ContentStyle: React.CSSProperties = {
    marginTop: "20px",
    paddingBottom:"20px",
    backgroundColor: "snow",
    width: "100%",
    minHeight: "100px",
    textAlign: "left",
}

const Comment: React.FC = () => {
    const dispatch = useDispatch();
    const article = useSelector((state:any) => state.article.article);
    const [newComment, setNewComment] = useState<string>('');
  
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setNewComment(e.target.value);
    };
  
    const handleComment = () => {
      if (newComment.trim() === '') return;
  
      const comment = {
        commentContent: newComment,
        commentators: "新用户",
        commentTime: new Date().toISOString().split('T')[0],
        likeComment: 0,
        children: []
      };
      dispatch(addComment(comment));
      setNewComment('');
    };
  
    if (!article) {
      return <div>加载中...</div>;
    }
  
    return (
      <Flex vertical={true} style={ContentStyle} gap="middle">
        <h1 className="comment-length">评论 {article.comments && article.comments.length}</h1>
        <Flex gap="small" align="center" className="comment-send" justify="center">
          <img className="comment-ig" src={likeIcon} alt="" />
          <TextArea
            showCount
            maxLength={100}
            onChange={onChange}
            value={newComment}
            placeholder="🔥 平等表达，友善交流"
            style={{ width: 400, height: 80, resize: 'none' }}
          />
          <Button type="primary" onClick={handleComment}>发送</Button>
        </Flex>
        <Personcom comments={article.comments} />
      </Flex>
    );
  };
  
  export default Comment;

