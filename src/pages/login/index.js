import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Button, Checkbox } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "./index.scss";
import Logo from "../../assets/images/paotui_logo.jpg";

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
      <View className='uu-login__container'>
        <View className='head'>
          <Button>取消</Button>
        </View>
        <View className='logo_container'>
          <Image src={Logo} className='logo_item' />
        </View>
        <View className='content'>
          <View className='login_info'>
            <Text>登录后该应用将获得以下权限</Text>
          </View>
          <View className='login_info_chkbox'>
            <Checkbox value='选中' checked>
              获得你的公开信息（昵称，头像等）
            </Checkbox>
          </View>
          <View className='login-btn'>
            <AtButton formType='submit'>登录</AtButton>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
