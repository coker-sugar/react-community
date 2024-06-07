import React from 'react';
import { Carousel } from 'antd';
import a1 from '../../../assets/images/homepage/1.png'
import a2 from '../../../assets/images/homepage/2.png'
import a3 from '../../../assets/images/homepage/3.png'

const contentStyle: React.CSSProperties = {
  margin: 0,
  width:"540px",
  height: '320px',
  color: '#fff',
  lineHeight: '320px',
  textAlign: 'center',
  background: '#364d79',
};

const CarouselStyle: React.CSSProperties = {
  width:"540px"
};

const CarouselImage: React.FC = () => {
  return (
    <Carousel
    arrows
    autoplay={true}
    autoplaySpeed={5000}
    style={CarouselStyle}
    >
      <div>
        {/* <h3 >1</h3> */}
        <img src={a1} style={contentStyle}/>
      </div>
      <div>
      <img src={a2} style={contentStyle}/>
      </div>
      <div>
      <img src={a3} style={contentStyle}/>
      </div>
    </Carousel>
  ) 
};

export default CarouselImage;