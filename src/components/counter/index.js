import Taro, { useState, useMemo } from "@tarojs/taro";
import { View, Text, Button, Input } from "@tarojs/components";

function Counter() {
  // 返回一个值和一个设置值的函数
  // 每次设置值之后会重新渲染组件
  const [count, setCount] = useState(0);
  const [val, setValue] = useState("");

  function increment() {
    setCount(count + 1);
  }

  const expensive = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]); // ✅ 只有 count 变化时，回调函数才会执行

  return (
    <View>
      <Text>You clicked {expensive} times</Text>
      <Button onClick={increment}>Click me</Button>
      <Input value={val} onChange={event => setValue(event.detail.value)} />
    </View>
  );
}

export default Counter;
