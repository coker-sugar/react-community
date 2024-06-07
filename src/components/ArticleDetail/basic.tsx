import React from "react";
import { Flex,Button } from "antd";
import './index.css'

interface articleBasic {
  time: string,
  author: string,
  avatar: string
}

const Basic: React.FC<articleBasic> = ({avatar,author,time}) => {

  return (
    <Flex className="basic" justify="space-between">
      <Flex className="basic-left" align="center" gap="small">
        <img className="basic-ig" src="https://seatmeat.oss-cn-shanghai.aliyuncs.com/Friend/%E9%A3%8E%E6%98%AF%E9%80%8F%E6%98%8E%E7%9A%84%E6%B2%B3%E6%B5%81.jpg" alt="" />
        {author}
        <Button>关注</Button>
      </Flex>
      <div>更新于：{time}</div>
    </Flex>
  );
};

export default Basic;
