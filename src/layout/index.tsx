/**
 * TODO: 布局
 */
import React from "react";
import { Flex, Layout } from "antd";
import {  Outlet } from 'react-router-dom';

import Nav from '../components/HomePage/nav/index'

import "./index.css";

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  // paddingInline: 48,
  // lineHeight: "64px",
  borderBottom:"1px solid #fff",
  backgroundColor: "#000000",
  display:"flex",
  alignItems:"center"
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#000",
  backgroundColor: "#f4f4f4",
};

const layoutStyle = {
  overflow: "hidden",
  minWidth: "calc(50% - 8px)",
};

const LayoutPage: React.FC = () => {
  return (
    <Flex gap="middle" wrap className={"layoutPage"}>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>
          <Nav />
        </Header>
        
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Flex>
  );
};

export default LayoutPage;
