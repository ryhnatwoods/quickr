import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon, AtTag, AtInput, AtButton } from "taro-ui";

import "./index.scss";

class OrderList extends Component {
  config = {
    navigationBarTitleText: "地址列表"
  };
  handleNameChange() {}
  handlePhoneChange() {}
  addAddrHandler(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/shop/addAddress/index`
    });
  }
  render() {
    return (
      <View className='uu-orderlist-container'>
        <View>
          <View className='at-row'>
            <View className='at-col at-col-2'>
              <AtIcon prefixClass='fa' value='houzz' size='20' />
            </View>
            <View className='at-col at-col-10'>
              <Text>【上海市-浦东新区】</Text>
              <View>
                xxxxx{" "}
                <AtTag type='primary' active>
                  注册地址
                </AtTag>
              </View>
              <Text>xxxxx花园</Text>
            </View>
          </View>
          <View className='at-row'>
            <View className='at-col at-col-4'>
              <AtInput
                name='nameValue'
                type='text'
                placeholder='姓名'
                value={this.state.nameValue}
                onChange={this.handleNameChange.bind(this)}
              />
            </View>
            <View className='at-col at-col-8'>
              <AtInput
                name='cellValue'
                type='text'
                placeholder='移动电话'
                value={this.state.cellValue}
                onChange={this.handlePhoneChange.bind(this)}
              />
            </View>
          </View>
        </View>
        <View className='add_btn'>
          <AtButton type='primary' onClick={this.addAddrHandler}>
            添加地址
            <AtIcon prefixClass='fa' value='plus-circle' />
          </AtButton>
        </View>
      </View>
    );
  }
}

export default OrderList;
