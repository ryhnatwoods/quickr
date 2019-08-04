// @ts-nocheck
import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon, AtButton } from "taro-ui";
import "./index.scss";

function AddrBar(props) {
  return (
    <View key='addr_bar' className='uu-addrbar__container'>
      <View className='icon'>
        <AtIcon prefixClass='fa' value='circle' size='15' color={props.color} />
      </View>
      <View className='desc__container'>
        <Text>{props.title}</Text>
        <Text>{props.message}</Text>
      </View>
      <AtButton size='small' onClick={props.clickHandler}>
        常用
      </AtButton>
    </View>
  );
}

export default AddrBar;
