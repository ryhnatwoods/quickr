// @ts-nocheck
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import NavigatorBtn from "../navigator-btn";
import "./index.scss";

function AddrBar(props) {
  return (
    <View key='addr_bar' className='uu-addrbar__container'>
      <View className={props.color + " icon"} />
      <Text>{props.title}</Text>
      <Text>1991991999</Text>
      <NavigatorBtn name='cityIndexes'>常用</NavigatorBtn>
    </View>
  );
}

export default AddrBar;
