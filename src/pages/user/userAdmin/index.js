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
import { AtForm, AtButton, AtAccordion, AtList, AtListItem, AtAvatar,AtTag } from "taro-ui";

class UserAdmin extends Component {
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
      registeredRole: "user",
      open: true
    };
  }
  handleChange = e => {
    console.log(e);
  };

  roleHandler = e => {
    console.log(e);
    //e.detail.value 获取radio选中的值
    const _tmp_role = e.detail.value;
    this.setState({
      registeredRole: _tmp_role
    });
  };

  handleClick (value) {
    this.setState({
      open: value
    })
  };

  handleClickOrder = e => {
    e.stopPropagation();
    const _role = this.state.registeredRole;
    switch (_role) {
      case "shop":
        Taro.navigateTo({
          url: `/pages/register/shop/index`
        });
        break;
      case "rider":
        Taro.navigateTo({
          url: `/pages/register/rider/index`
        });
        break;
      case "user":
        Taro.navigateTo({
          url: `/pages/login/index`
        });
        break;
      default:
        break;
    }
  };
  render() {
    return (
      <View className='uu_page'>
        <View className='uu_user_header'> 
          <AtAvatar circle image='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'></AtAvatar>
          
          <AtButton circle type='primary' size='small'>178***4758</AtButton>
        </View>
        <View className='uu_user_header'> 
          <View className='at-row'>
            <View className='at-col at-col-8'>
              <View className='at-row'>余额（元）</View>
              <View className='at-row'>0.00</View>
            </View>
            <View className='at-col at-col-4'>
            <AtButton circle size='normal'>立即充值</AtButton>
            </View>
          </View>
        </View>
        <AtAccordion
          open={this.state.open}
          onClick={this.handleClick.bind(this)}
          title='我的订单'
        >
          <AtList hasBorder={false}>
            <AtListItem
              title='待支付'
              arrow='right'
              thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
            />
            <AtListItem
              title='待接单'
              arrow='right'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
            />
            <AtListItem
              title='进行中'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
            <AtListItem
              title='已完成'
              arrow='right'
              thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
            />
          </AtList>
        </AtAccordion>
        <AtList>
          <AtListItem
            title='用户指南'
            thumb='https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png'
          />
          <AtListItem
            title='退出账户'
            thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
          />
        </AtList>
      </View>
    );
  }
}

export default UserAdmin;
