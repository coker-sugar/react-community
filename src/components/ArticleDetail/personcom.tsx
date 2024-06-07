import React,{useState} from "react";
import { Flex, Button, Input} from "antd";
import './index.css'
import likeIcon from '../../assets/images/icons/like.png'
import UnLikeIcon from '../../assets/images/icons/unlike.png'
import pinglun from '../../assets/images/icons/pinglun.png'

import { useDispatch } from 'react-redux';
import { addChildComment,changeCommentShow,changeCommentLike} from './store/articleSlice';

const { TextArea } = Input;
interface commentsArray {
    commentContent: string,
    commentators: string,
    commentTime: string,
    likeComment: string
}
interface commentsList {
    comments: commentsArray[]
}


const Personcom: React.FC<commentsList> = ({ comments }) => {
    const dispatch = useDispatch();
    const [newComment, setNewComment] = useState<string>('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewComment( e.target.value)
    };
    const handleComment = (targetId:string) => {
        if (newComment.trim() === '') return;
        const comment = {
          id:Date.now(),
          commentContent: newComment,
          commentators: "新用户",
          commentTime: new Date().toISOString().split('T')[0],
          likeComment: 0,
          children: []
        };
        const action = {comment,targetId}
        dispatch(addChildComment(action));
        setNewComment('');
      };

      const changeShow = (targetId:string) => {
        dispatch(changeCommentShow(targetId))
      };

      const changeLike = (targetId:string) => {
        dispatch(changeCommentLike(targetId))
      }
    return (
        <>
            {comments && comments.map((item: any) => (
                <Flex gap="middle" align="flex-start" className="comList" key={item.commentContent}>
                    <img className="comList-avator" src="https://seatmeat.oss-cn-shanghai.aliyuncs.com/Friend/%E6%98%A5%E4%BF%A1.jpg"></img>
                    <Flex gap="small" vertical={true}>
                        <div className="comList-ators">{item.commentators}</div>
                        <p className="comList-Content">{item.commentContent}</p>
                        <Flex gap="large" className="comList-bot">
                            <div>{item.commentTime}</div>
                            <Flex gap="small">
                                <img onClick={() => changeLike(item.id)} className="comList-ig" src={item.commentLike == "false" ? UnLikeIcon : likeIcon} alt="" />
                                <div>{item.likeComment}</div>
                            </Flex>
                            {item.commentNum  &&
                            <Flex gap="small">
                                <img className="comList-ig" src={pinglun} onClick={() => changeShow(item.id)}/>
                                 <div>{item.commentNum}</div>
                            </Flex>}
                        </Flex>
                       

                        {/* 是否回复评论 */}
                        {item.commentShow =="true" && <Flex  gap="small" align="center">
                            <TextArea
                                showCount
                                maxLength={100}
                                onChange={onChange}
                                value={newComment}
                                placeholder={`回复${item.commentators}...`}
                                style={{ height: 40,resize: 'none' }}
                                className="comList-txt"
                            />
                            <Button type="primary" onClick={() => handleComment(item.id)}>发送</Button>
                        </Flex>}

                        {/* 子评论 */}
                        {item.children && <Personcom comments={item.children} />}
                    </Flex>
                </Flex>
            )
            )}
        </>
    );
};

export default Personcom;
