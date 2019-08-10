import Taro, { Component } from "@tarojs/taro";
import {
  RadioGroup,
  Radio,
  Label,
  View,
  Input,
  Button,
  Image
} from "@tarojs/components";
import "./index.scss";
import {
  AtForm,
  AtButton,
  AtAccordion,
  AtList,
  AtListItem,
  AtAvatar,
  AtTag
} from "taro-ui";

import pay_location from "../../../assets/images/pay.png";
import wait_order from "../../../assets/images/wait_order.png";
import complete from "../../../assets/images/ordered.png";
import running from "../../../assets/images/running.png";
import log_off from "../../../assets/images/log_off.png";
import question from "../../../assets/images/question.png";

class UserAdmin extends Component {
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
            <View className='at-col at-col-8'>
              <View className='at-row' style='font-size: 0.85rem'>余额（元）</View>
              <View className='at-row' style='font-size: 1.7rem'>0.00</View>
            </View>
            <View className='at-col at-col-4'>
              <AtButton circle size='normal'>
                立即充值
              </AtButton>
            </View>
          </View>
        </View>
        <AtAccordion
          open={this.state.open}
          onClick={this.handleClick.bind(this)}
          title='我的订单'
          icon={{ value: 'menu', size: '25' }}
        >
          <AtList hasBorder={false}>
            <AtListItem
              title='待支付'
              arrow='right'
              thumb={pay_location}
            />
            <AtListItem
              title='待接单'
              arrow='right'
              thumb={wait_order}
            />
            <AtListItem
              title='进行中'
              arrow='right'
              thumb={running}
            />
            <AtListItem
              title='已完成'
              arrow='right'
              thumb={complete}
            />
          </AtList>
        </AtAccordion>
        <AtList>
          <AtListItem
            title='用户指南'
            thumb={question}
          />
          <AtListItem
            title='退出账户'
            thumb={log_off}
          />
        </AtList>
      </View>
    );
  }
}

export default UserAdmin;
