import React from "react";
import './index.css'

interface articleTitle {
  title:string 
}
const Title: React.FC<articleTitle> = ({title}) => {
  return (  
    <h1 className="articleTitle">{title}</h1>
  );
};

export default Title;
