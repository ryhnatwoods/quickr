import Taro, { Component } from "@tarojs/taro";
import { View, RadioGroup, Radio } from "@tarojs/components";
import { AtForm, AtInput, AtButton } from "taro-ui";
import UUMap from "../../platform/weapp/map";
import "./index.scss";

class Login extends Component {
  config = {
    navigationBarTitleText: "登录"
  };

  handleChange = e => {
    console.log(e);
  };

  gotoPanel = e => {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/shop/index`
    });
  };
  render() {
    return (
      // <AtForm>
      //   <AtButton formType='submit' onClick={this.gotoPanel}>
      //     登陆
      //   </AtButton>
      // </AtForm>
      <View className='uu-map__container'>
        <UUMap />
      </View>
    );
  }
}

export default Login;
