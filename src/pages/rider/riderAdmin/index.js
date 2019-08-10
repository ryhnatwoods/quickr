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

class RiderAdmin extends Component {
  config = {
    navigationBarTitleText: "个人中心"
  };
  initPageConst() {
    this.INPUT_CELLPHONE_PLACEHOLDER = "请输入手机号";
    this.INPUT_RANDOM_CODE_PLACEHOLDER = "填写验证码";
    this.BTN_RANDOM_CODE_PLACEHOLDER = "获取验证码";
    this.RADIO_SHOP_PLACEHOLDER = "商家";
    this.RADIO_RIDER_PLACEHOLDER = "骑手";
    this.RADIO_USER_PLACEHOLDER = "用户";
    this.roles = [
      {
        value: "shop",
        text: this.RADIO_SHOP_PLACEHOLDER,
        checked: false
      },
      {
        value: "rider",
        text: this.RADIO_RIDER_PLACEHOLDER,
        checked: false
      },
      {
        value: "user",
        text: this.RADIO_USER_PLACEHOLDER,
        checked: true
      }
    ];
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
          icon={{ value: 'menu', size: '16' }}
        >
          <AtList hasBorder={false}>
            <AtListItem
              title='待支付'
              arrow='right'
              iconInfo={{ size: 16, prefixClass:'fa', value: 'credit-card'}}
            />
            <AtListItem
              title='待接单'
              arrow='right'
              iconInfo={{ size: 16, prefixClass:'fa', value: 'clipboard-list'}}
            />
            <AtListItem
              title='进行中'
              arrow='right'
              iconInfo={{ size: 16, prefixClass:'fa', value: 'car'}}
            />
            <AtListItem
              title='已完成'
              arrow='right'
              iconInfo={{ size: 16, prefixClass:'fa', value: 'clipboard-check'}}
            />
          </AtList>
        </AtAccordion>
        <AtList>
          <AtListItem
            title='用户指南'
            iconInfo={{ size: 16, prefixClass:'fa', value: 'question-circle'}}
          />
          <AtListItem
            title='退出账户'
            iconInfo={{ size: 16, prefixClass:'fa', value: 'sign-out-alt'}}
          />
        </AtList>
      </View>
    );
  }
}

export default RiderAdmin;
