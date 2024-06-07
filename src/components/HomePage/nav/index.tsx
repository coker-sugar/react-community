import React from "react";
import Search from "./search";
import NavBar from "./navbar";
import "./index.css";
import { Flex } from 'antd';
import searchData from '../../../assets/json/index'

const List = JSON.parse(JSON.stringify(searchData.searchList))
const categories = JSON.parse(JSON.stringify(searchData.categories.categories))



function search(value: string) {
  console.log(`正在搜索：${value}`);
  const mockSearchResult = List.filter((item: { name: string }) => item.name.includes(value));

  const alertContent = mockSearchResult.map((item: any) => item.name+" ")
  alert(alertContent.length>0 ? "搜索结果为："+ alertContent : "没有搜索到结果" );
}

const Nav: React.FC = () => {
  return (
    <Flex align="center">
      <NavBar categories={categories} />
      <Search search={search} />
    </Flex>
  );
};

export default Nav;
