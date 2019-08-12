import Taro, { Component } from "@tarojs/taro";
import {
  View
} from "@tarojs/components";
import "./index.scss";
import {
  AtButton,
  AtList,
  AtListItem,
  AtAvatar
} from "taro-ui";

import order_location from "../../../assets/images/order.png";
import setting_location from "../../../assets/images/setting.png";
import feedback_location from "../../../assets/images/feedback.png";

class RiderAdmin extends Component {
  config = {
    navigationBarTitleText: "个人中心"
  };
  initPageConst() {
  }
  constructor() {
    super(...arguments);
    this.initPageConst();
    this.state = {
      open: true
    };
  }
  handleChange = e => {
    console.log(e);
  };

  handleClick(value) {
    this.setState({
      open: value
    });
  }

  render() {
    return (
      <View className='uu_page'>
        <View className='uu_user_header'>
          <AtAvatar
            circle
            image='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'
          />

          <AtButton circle type='primary' size='small'>
            178***4758
          </AtButton>
        </View>
        <View className='uu_user_header'>
          <View className='at-row'>
            <View className='at-col at-col-4'>
              <View className='at-row uu_user_field_row1'>￥ 0.00</View>
              <View className='at-row uu_user_field_row2'>账户余额</View>
            </View>
            <View className='at-col at-col-4'>
              <View className='at-row uu_user_field_row1'>1200</View>
              <View className='at-row uu_user_field_row2'>信用分</View>
            </View>
            <View className='at-col at-col-4'>
              
              <View className='at-row uu_user_field_row1'>待认证</View>
              <View className='at-row uu_user_field_row2'>签约状态</View>
            </View>
          </View>
        </View>
        <View className='uu_user_body'>
          <View className='at-row' style='justify-content: center; padding-bottom: 10px;'>
            <span>----------今日成就----------</span>
          </View>
          <View className='at-row at-row__justify--around' >
            <View className='at-col at-col-4'>
              <View className='at-row' style='justify-content: center;'>0笔</View>
              <View className='at-row' style='justify-content: center;'>完成订单</View>
            </View>
            <View className='at-col at-col-4'>
              <View className='at-row' style='justify-content: center;'>0.00公里</View>
              <View className='at-row' style='justify-content: center;'>奔驰里程</View>
            </View>
            <View className='at-col at-col-4'>
              <View className='at-row' style='justify-content: center;'>0.00元</View>
              <View className='at-row' style='justify-content: center;'>获得收益</View>
            </View>
          </View>
        </View>
        <AtList>
          <AtListItem
            title='我的订单'
            thumb={order_location}
          />
          <AtListItem
            title='设置'
            thumb={setting_location}
          />
          <AtListItem
            title='意见反馈'
            thumb={feedback_location}
          />
        </AtList>
      </View>
    );
  }
}

export default RiderAdmin;
