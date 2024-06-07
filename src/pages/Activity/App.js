import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { Flex,Button } from 'antd';
const App = () => {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            
            <h1>使用redux实现公共数据管理，计数器: {count}</h1>
           <Flex gap="large" justify='center'>
           <Button type="primary" onClick={() => dispatch(increment())}>增加</Button>
            <Button type="primary" onClick={() => dispatch(decrement())}>减少</Button>
           </Flex>
        </div>
    );
};

export default App;
