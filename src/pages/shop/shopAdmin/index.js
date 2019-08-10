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
  AtAvatar
} from "taro-ui";

//import img
import pay_location from "../../../assets/images/pay.png";
import wait_order from "../../../assets/images/wait_order.png";
import complete from "../../../assets/images/ordered.png";
import running from "../../../assets/images/running.png";
import address from "../../../assets/images/address.png";
import runner from "../../../assets/images/runner.png";

class ShopAdmin extends Component {
  config = {
    navigationBarTitleText: "个人中心"
  };
  initPageConst() {
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
      open: false
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
            <View className='at-col at-col-12'>
              <View className='at-row' style='font-size: 0.85rem'>我的钱包</View>
              <View className='at-row'>
                <View className='at-col at-col-8'>
                <span style='font-size: 1.7rem'>0.00</span>
                <span style='font-size: 0.85rem'>余额（元）</span>
                </View>
                <View className='at-col at-col-4' style='text-align: center;'>
                  <AtButton circle size='small'>
                    立即充值
                  </AtButton>
                </View>
            </View>
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
            title='我的地址'
            thumb={address}
          />
          <AtListItem
            title='我的跑男'
            thumb={runner}
          />
        </AtList>
      </View>
    );
  }
}

export default ShopAdmin;
