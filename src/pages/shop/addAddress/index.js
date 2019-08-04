import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon, AtInput } from "taro-ui";

import "./index.scss";

class AddAddress extends Component {
    config = {
        navigationBarTitleText: "添加地址"
      };
  constructor() {
    super(...arguments);
    this.state = {
      shopValue: ""
    };
  }
  handleShopNameChange() {}
  handleNameChange() {}
  handlePhoneChange() {}
  render() {
    return (
      <View className='uu-addaddress__container'>
        <View className='location'>
          <AtIcon prefixClass='fa' value='map-marker' size='20' />
          <Text>店铺所在城市</Text>
          <Text>上海市-普陀区</Text>
        </View>
        <View>
          <View>
            <AtIcon prefixClass='fa' value='map-marker' size='20' />
            <Text>店铺名称</Text>
          </View>
          <AtInput
            name='shopName'
            type='text'
            placeholder='请输入店铺名称'
            value={this.state.shopValue}
            onChange={this.handleShopNameChange.bind(this)}
          />
        </View>
        <View>
          <View>
            <AtIcon prefixClass='fa' value='map-marker' size='20' />
            <Text>地址位置</Text>
          </View>
          <AtInput
            name='shopName'
            type='text'
            placeholder='请输入地址信息'
            value={this.state.shopValue}
            onChange={this.handleShopNameChange.bind(this)}
          />
        </View>
        <View>
          <View>
            <AtIcon prefixClass='fa' value='map-marker' size='20' />
            <Text>地址联系人</Text>
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
      </View>
    );
  }
}

export default AddAddress;
