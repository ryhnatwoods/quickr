import Taro, { Component } from "@tarojs/taro";
import { RadioGroup, Radio, Label, View } from "@tarojs/components";
import { AtForm, AtButton } from "taro-ui";

import "./index.scss";

class Register extends Component {
  config = {
    navigationBarTitleText: "注册"
  };
  initPageConst() {
    this.roles = [
      {
        value: "shop",
        text: "商家",
        checked: true
      },
      {
        value: "rider",
        text: "骑手",
        checked: false
      },
      {
        value: "user",
        text: "用户",
        checked: false
      }
    ];
  }
  constructor() {
    super(...arguments);
    this.state = {
      registeredRole: ""
    };
  }
  handleChange = e => {
    console.log(e);
  };

  gotoPanel = e => {
    e.stopPropagation();
    console.log(this.state.registeredRole);
    Taro.navigateTo({
      url: `/pages/login/index`
    });
  };

  roleHandler = e => {
    console.log(e);
    //e.detail.value 获取radio选中的值
    const _tmp_role = e.detail.value;
    this.setState({
      registeredRole: _tmp_role
    });
  };
  render() {
    return (
      <AtForm className='uu-register__container'>
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
    );
  }
}

export default Register;
