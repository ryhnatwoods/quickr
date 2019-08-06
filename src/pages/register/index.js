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
import { AtForm, AtButton } from "taro-ui";

import "./index.scss";
import Logo from "../../assets/images/paotui_logo.jpg";

class Register extends Component {
  config = {
    navigationBarTitleText: "注册"
  };
  initPageConst() {
    this.INPUT_CELLPHONE_PLACEHOLDER = "请输入手机号";
    this.INPUT_RANDOM_CODE_PLACEHOLDER = "填写验证码";
    this.BTN_RANDOM_CODE_PLACEHOLDER = "获取验证码";
    this.BTN_RANDOM_CODE_AGAIN_PLACEHOLDER = "s后重新获取";
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
      btn_name: "getcodebtn",
      countDown: 120,
      mobile: "",
      code: ""
    };
  }
  handleChange = e => {
    console.log(e);
  };

  gotoPanel = e => {
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

  roleHandler = e => {
    console.log(e);
    //e.detail.value 获取radio选中的值
    const _tmp_role = e.detail.value;
    this.setState({
      registeredRole: _tmp_role
    });
  };

  sendRandomCode = e => {
    console.log(e);
    this.doCountDown();
    Taro.showModal({
      title: "",
      content: "短信已发送",
      showCancel: false
    }).then(res => console.log(res.confirm, res.cancel));
  };

  doCountDown = () => {
    var _count_point = this.state.countDown;
    console.info("====>countDown11111");
    console.info(_count_point);
    console.info("====>countDown11111");
    if (--_count_point > 0) {
      this.setState({
        countDown: _count_point,
        btn_name: "waitcountdown"
      });
      setTimeout(
        function() {
          this.doCountDown();
        }.bind(this),
        1000
      );
    } else {
      //倒计时重置
      this.setState({
        btn_name: "getcodebtn",
        countDown: 120
      });
    }
  };

  render() {
    return (
      <View className='uu-register__container'>
        <Image src={Logo} className='logo_item' />
        <AtForm className='uu-register-form__container'>
          <Input
            className='full_input_item'
            placeholder={this.INPUT_CELLPHONE_PLACEHOLDER}
            maxLength='60'
            focus
          />
          <View className='randomcode__container'>
            <Input
              className='input_item'
              placeholder={this.INPUT_RANDOM_CODE_PLACEHOLDER}
              maxLength='4'
              focus
            />
            <Button className='btn_item' onClick={this.sendRandomCode}>
              {this.state.btn_name === "getcodebtn"
                ? this.BTN_RANDOM_CODE_PLACEHOLDER
                : this.state.countDown + this.BTN_RANDOM_CODE_AGAIN_PLACEHOLDER}
            </Button>
          </View>
          <RadioGroup className='radio-rolegroup' onChange={this.roleHandler}>
            {this.roles.map((role, index) => {
              const key = role.value + "_" + index;
              return (
                <Label className='radio-list__label' for={key} key={key}>
                  <Radio
                    className='radio-list__radio'
                    value={role.value}
                    checked={role.checked}
                  >
                    {role.text}
                  </Radio>
                </Label>
              );
            })}
          </RadioGroup>

          <View className='register-btn'>
            <AtButton formType='submit' onClick={this.gotoPanel}>
              注册
            </AtButton>
          </View>
        </AtForm>
      </View>
    );
  }
}

export default Register;
