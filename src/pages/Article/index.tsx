import React from "react";
import { useParams } from 'react-router-dom';
import ArticleDetail from '../../components/ArticleDetail/index'
import ArticleColumn from '../../components/ArticleColumn/index'

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  if(id == "10001") {
    return (
      <ArticleColumn></ArticleColumn>
    )
    
  }
  return (
    <ArticleDetail id={id}/>
  );
};


export default Article;
