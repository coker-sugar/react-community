import React from "react";
import { Flex,Button } from "antd";
import './index.css'

const ImgStyle: React.CSSProperties = {
  width:"540px",
  height:"300px",
  backgroundColor:"pink",
  marginTop:"40px"
};

const marginStyle: React.CSSProperties = {
  marginBottom:"20px"
};



const Card: React.FC = () => {

  return (
    <Flex justify="center">
      {/* <img src="" alt="" style={ImgStyle} /> */}
      <img src="https://seatmeat.oss-cn-shanghai.aliyuncs.com/Tech/img/d.png" style={ImgStyle} />
      <Flex gap="middle" vertical={true} className="card-top" justify="center">
        <h1 className="card-h ">Unite Shanghai </h1>
        <h1 className="card-h" style={marginStyle}>2024</h1>
        <p className="card-p">2024年7月23日-25日</p>
        <div className="card-div">门票限时优惠中</div>
        <Button className="card-btn" type="primary">立即购票</Button>
      </Flex>
    </Flex>
  );
};

export default Card;
