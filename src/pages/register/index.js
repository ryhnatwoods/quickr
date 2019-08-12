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
import * as CONST from "../../constants/register";
import { connect } from "@tarojs/redux";
import GlobalData from "../../global_data";
import "./index.scss";
import Logo from "../../assets/images/paotui_logo.jpg";

import {
  updateMobile,
  updateRandomCode,
  updateUserType,
  updateCountDown,
  sendRandomCode,
  registerUser,
  doCountDown
} from "../../actions/register";
import { doLogin } from "../../actions/app";
//当前的状态保存在register下面，具体可以查看reducers/register
@connect(
  state => ({
    mobile: state.register.mobile,
    code: state.register.code,
    btnName: state.register.btnName,
    countDown: state.register.countDown,
    userType: state.register.userType
  }),
  {
    updateMobile,
    updateRandomCode,
    updateUserType,
    updateCountDown,
    sendRandomCode,
    registerUser,
    doCountDown
  }
)
class Register extends Component {
  config = {
    navigationBarTitleText: "注册"
  };

  sendRandomCode = e => {
    e.stopPropagation();
    let { dispatch, mobile } = this.props;
    if (mobile == "" || mobile.length < 11) {
      Taro.showModal({
        title: "提示",
        content: "请填写手机号码且长度不小于11位",
        showCancel: false
      });
      return;
    }
    if (this.props.countDown === 120) {
      // doCountDown(120);
      sendRandomCode(mobile);
    }
  };

  onSave = e => {
    e.stopPropagation();
    const { mobile, code, dispatch } = this.props;
    if (mobile == "") {
      Taro.showModal({
        title: "提示",
        content: "请填写手机号码",
        showCancel: false
      });
      return;
    }
    if (code == "") {
      Taro.showModal({
        title: "提示",
        content: "请等待验证码",
        showCancel: false
      });
      return;
    }
    const userInfo = GlobalData.userInfo;
    if (userInfo == null) {
      Taro.showModal({
        title: "提示",
        content: "请点击获取微信授权",
        showCancel: false
      });
      return;
    }
    doLogin().then(result => {
      const nickeName = userInfo.nickName;
      const userType = this.props.userType;
      const rd_session = result.data.sessionId;

      Taro.setStorageSync("rd_session", rd_session);
      dispatch(registerUser(rd_session, nickeName, code, mobile, userType));
    });
  };

  onGotUserInfo = res => {
    // 声明一个变量接收用户授权信息
    var userinfos = res.detail.userInfo;
    GlobalData.userInfo = userinfos;
  };
  render() {
    const { mobile, code, btnName, countDown } = this.props;
    return (
      <View className='uu-register__container'>
        <Image src={Logo} className='logo_item' />
        <AtForm className='uu-register-form__container' onSubmit={this.onSave}>
          <Input
            className='full_input_item'
            placeholder={CONST.INPUT_CELLPHONE_PLACEHOLDER}
            maxLength={11}
            value={mobile}
            onChange={this.props.updateMobile}
            focus
          />
          <View className='randomcode__container'>
            <Input
              className='input_item'
              placeholder={CONST.INPUT_RANDOM_CODE_PLACEHOLDER}
              maxLength={4}
              value={code}
              onChange={this.props.updateRandomCode}
              focus
            />
            <Button className='btn_item' onClick={this.sendRandomCode}>
              {btnName === "getcodebtn"
                ? CONST.BTN_RANDOM_CODE_PLACEHOLDER
                : countDown + CONST.BTN_RANDOM_CODE_AGAIN_PLACEHOLDER}
            </Button>
          </View>
          <RadioGroup
            className='radio-rolegroup'
            onChange={this.props.updateUserType}
          >
            {CONST.roles.map((role, index) => {
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
            <AtButton formType='submit'>注册</AtButton>
            <Button
              id='login-btn'
              openType='getUserInfo'
              lang='zh_CN'
              onGetUserInfo={this.onGotUserInfo}
              type='primary'
            >
              微信用户快速登录
            </Button>
          </View>
        </AtForm>
      </View>
    );
  }
}

export default Register;
