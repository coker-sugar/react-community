import React from "react";
import PublicArticle from './articles'
import CarouselImage from './carousel'
import { Flex } from 'antd';

const FlexStyle: React.CSSProperties = {
    backgroundColor: "#000000",
    height:"340px"
  };

const Carousel: React.FC = () => {
    return (
        <Flex style={FlexStyle} justify="center" gap="middle" align="center">
            <CarouselImage />
            <PublicArticle />
        </Flex>
    );
};

export default Carousel;
