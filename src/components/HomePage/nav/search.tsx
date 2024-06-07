import React from "react";
import { useState } from "react";
import { SearchOutlined  } from '@ant-design/icons';
import { Flex ,Input,Button,message} from 'antd';
import "./index.css";
import { debounce } from '../../../utils/commonFun/index'

interface SearchProps {
  search: (value:string) => void;
}

const Search: React.FC<SearchProps> = ({search}) => {
  let [value,setValue] = useState('')

  // 创建防抖版本的搜索处理函数
  const debouncedSearch = debounce((searchText: string) => {
    search(searchText)
  }, 1000); 

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  function handleClick() {
    if (value === "") return
    debouncedSearch(value); // 调用防抖搜索处理函数

    messageApi.open({ // 搜索等待
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Searched!',
        duration: 2,
      });
    }, 900);
    setValue("")
  }


  return (
     <Flex className="search" align="middle">
       {contextHolder}
        <Input value={value} placeholder="serach" prefix={<SearchOutlined />} onChange={e => setValue(e.target.value)}   />
        <Button onClick={handleClick} style={{marginLeft:"20px"}}>搜索</Button>
    </Flex>
  );
};

export default Search;
