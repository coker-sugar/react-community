import React from "react";
import { Flex, Popover } from 'antd';
import "./index.css";
import JsonData from '../../../assets/json/index'
import { useNavigate  } from 'react-router-dom';
import a1 from '../../../assets/images/homepage/1.png'
import a2 from '../../../assets/images/homepage/2.png'
import a3 from '../../../assets/images/homepage/3.png'


const article = JSON.parse(JSON.stringify(JsonData.article))

const CardStyle: React.CSSProperties = {
  backgroundColor: "#fff",
  width: "280px",
  height: "100px",
  textAlign: "left",
  lineHeight: "100px",
  paddingRight:"10px"
}
const TextStyle: React.CSSProperties = {
  height: "100px",
}

const contentStyle: React.CSSProperties = {
  width:"160px",
  // height: '320px',
};

const PublicArticle: React.FC = () => {
  const navigate = useNavigate ();
  const Toarticle = (idValue: string) => {
    navigate(`/article/${idValue}`);
  };
  return (
    <Flex gap="small" vertical={true} justify="space-around">
      {article.map((item: any) => (
        <Popover placement="right" content={"Title：" + item.title} key={item.id}>
          <Flex style={CardStyle} justify="space-between" onClick={() => Toarticle(item.id)}>
            <img src={item.id == "1001" ? a1 :item.id == "1002" ? a2 : a3} style={contentStyle}/>
            <Flex gap="small" justify="center" vertical={true} style={TextStyle}>
              <div className="textHidden">{item.title}</div>
              <div className="textHidden">{item.content}</div>
            </Flex>
          </Flex>
        </Popover>
      ))}
    </Flex>
  );
};

export default PublicArticle;
