import React from "react";
import { Flex } from 'antd';
import "./index.css";
import {  Link,useLocation  } from 'react-router-dom';

interface NavBarProps {
  categories: any[]; // 这里的 any[] 应该是你的 categories 属性的实际类型
}

const NavBar: React.FC<NavBarProps> = ({categories}) => {
  const location = useLocation();
  console.log(location.pathname);
  
  return (
      <Flex style={{width:"40vw",justifyContent:"space-around",marginLeft:"10vw"}}>
        {categories.map((item:any) => (
          <div key={item.id} className="marginRight">
            <Link className={`navlink ${location.pathname === item.path ? 'linkNow' : ''}`} to={item.path}> {item.name}</Link>
          </div>
        ))}
      </Flex>
  );
};

export default NavBar;
