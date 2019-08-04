import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtIcon, AtButton, AtTag, AtInput, AtTabBar } from "taro-ui";

import "./index.scss";

class Order extends Component {
  config = {
    navigationBarTitleText: "商家订单"
  };
  constructor() {
    super(...arguments);
    this.state = {
      cmtValue: ""
    };
  }

  handleChange() {}
  clickHandler() {}
  clickSendHandler(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/shop/orderList/index`
    });
  }
  clickGoodsHandler(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/shop/goods/index`
    });
  }
  handleClick() {}
  render() {
    return (
      <View className='uu-shoporder__container'>
        <View className='uu-shoporder__card'>
          <View key='uu-shoporder' className='uu-shoporder__row'>
            <View className='icon'>发货</View>
            <View className='desc__container'>
              <Text>189-8888-8888</Text>
              <Text>世纪大道</Text>
            </View>
            <AtButton size='small' onClick={this.clickSendHandler}>
              <AtIcon
                prefixClass='fa'
                value='search-plus'
                size='15'
                color='#ccc'
              />
            </AtButton>
          </View>
          <View key='uu-shoporder' className='uu-shoporder__row'>
            <View className='icon'>收货</View>
            <View className='desc__container'>
              <Text>189-8888-8888</Text>
              <Text>新南威尔士州坎珀当</Text>
            </View>
            <AtButton size='small' onClick={this.clickHandler}>
              常用
            </AtButton>
          </View>
        </View>
        <View className='uu-shoporder__card'>
          <View key='uu-shoporder' className='uu-shoporder__row'>
            <View className='icon'>来源：</View>
            <View className='desc__inline'>
              <AtTag>饿E</AtTag>
              <AtTag>美M</AtTag>
              <AtTag>微信</AtTag>
              <AtTag>其他</AtTag>
            </View>
          </View>
          <View key='uu-shoporder' className='uu-shoporder__row'>
            <View className='icon'>物品：</View>
            <AtButton size='small' onClick={this.clickGoodsHandler}>
              其他
              <AtIcon
                prefixClass='fa'
                value='arrow-right'
                size='15'
                color='#ccc'
              />
            </AtButton>
          </View>
          <View key='uu-shoporder' className='uu-shoporder__row'>
            <AtInput
              name='cmtValue'
              title='备注'
              type='text'
              placeholder='留下客户备注或告知师傅的注意事项吧'
              value={this.state.cmtValue}
              onChange={this.handleChange.bind(this)}
            />
          </View>
        </View>

        <View className='uu-shoporder__card'>
          <View key='uu-shoporder' className='uu-shoporder__row'>
            <View className='icon'>优惠：</View>
            <AtButton size='small' onClick={this.clickHandler}>
              请完善订单信息
              <AtIcon
                prefixClass='fa'
                value='arrow-right'
                size='15'
                color='#ccc'
              />
            </AtButton>
          </View>
        </View>
        <View className='uu-shoporder__card'>
          <View key='uu-shoporder' className='uu-shoporder__row'>
            <View className='icon'>取货时间：</View>
            <AtButton size='small' onClick={this.clickHandler}>
              立即上门取货
              <AtIcon
                prefixClass='fa'
                value='arrow-right'
                size='15'
                color='#ccc'
              />
            </AtButton>
          </View>
        </View>
        <View className='uu-shoporder__card'>
          <View key='uu-shoporder' className='uu-shoporder__row'>
            <View className='icon'>更多服务：</View>
            <View className='desc__inline'>
              <AtTag type='primary'>需要确认码</AtTag>
              <AtTag type='primary'>普通推送</AtTag>
            </View>
          </View>
        </View>
        <AtTabBar
          fixed
          tabList={[{ title: "去支付" }]}
          onClick={this.handleClick}
          current={this.state.current}
        />
      </View>
    );
  }
}

export default Order;
