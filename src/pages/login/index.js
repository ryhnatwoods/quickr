import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image, Button, Checkbox } from "@tarojs/components";
import "./index.scss";
import GlobalData from "../../global_data";
import Logo from "../../assets/images/paotui_logo.jpg";

class Login extends Component {
  config = {
    navigationBarTitleText: "登录"
  };

  onGotUserInfo = res => {
    const detailInfo = res.detail;
    if (!detailInfo || !detailInfo.userInfo) {
      return;
    }
    // 声明一个变量接收用户授权信息
    var userinfos = res.detail.userInfo;
    GlobalData.userInfo = userinfos;
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
            <Checkbox value='selected' checked disabled>
              获得你的公开信息（昵称，头像等）
            </Checkbox>
          </View>
          <View className='login-btn'>
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
        </View>
      </View>
    );
  }
}

export default Login;
