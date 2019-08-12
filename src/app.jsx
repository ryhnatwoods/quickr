import Taro, { Component } from "@tarojs/taro";
import "@tarojs/async-await";
import { Provider } from "@tarojs/redux";
import Index from "./pages/index";
import configStore from "./store";
import GlobalData from "./global_data";
import { checkSession, doLogin, getSession } from "./api/common";
// import "./assets/font-awesome/font-awesome.css";
import "./app.scss";

import "./assets/css/element.scss";
import Logo from "./assets/images/index.png";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }
const store = configStore();
class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/shop/index",
      "pages/shop/order/index",
      "pages/shop/orderList/index",
      "pages/shop/addAddress/index",
      "pages/shop/goods/index",
      "pages/shop/shopAdmin/index",
      "pages/rider/index",
      "pages/rider/deliverPath/index",
      "pages/rider/riderAdmin/index",
      "pages/user/index",
      "pages/user/userOrder/index",
      "pages/user/userOrder/order1/index",
      "pages/user/userAdmin/index",
      "pages/login/index",
      "pages/register/index",
      "pages/register/rider/index",
      "pages/register/shop/index",
      "pages/cityindexes/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    },
    permission: {
      "scope.userLocation": {
        desc: "你的位置信息将用于小程序位置接口的效果展示"
      }
    }
    // tabBar: {
    //   color: "#a09895",
    //   selectedColor: "#ff9a00",
    //   borderStyle: "white",
    //   backgroundColor: "#fff",
    //   list: [
    //     {
    //       pagePath: "pages/user/index",
    //       text: "首页",
    //       iconPath: "assets/images/index.png",
    //       selectedIconPath: "assets/images/index_active.png"
    //     },
    //     {
    //       pagePath: "pages/user/index",
    //       text: "通知",
    //       iconPath: "assets/images/msg.png",
    //       selectedIconPath: "assets/images/msg_active.png"
    //     },
    //     {
    //       pagePath: "pages/user/index",
    //       text: "我的",
    //       iconPath: "assets/images/mine.png",
    //       selectedIconPath: "assets/images/mine_active.png"
    //     }
    //   ]
    // }
  };

  loginHandler = result => {
    const { sessionId, userId, ...rest } = result,
      loginInfo = {
        rd_session: sessionId,
        userId,
        ...rest
      };

    //如果用户id是0，说明用户是新用户，跳转到注册页面
    if (!userId || userId === 0) {
      Taro.redirectTo({ url: "/pages/register/rider/index" });
      return;
    }
    Taro.setStorageSync("loginInfo", loginInfo);
    //否则说明此用户是注册用户，获取用户信息，并更新用户
    Taro.redirectTo({ url: "/pages/login/index" });
  };

  componentWillMount() {
    //页面加载时触发，一个页面一次，DOM还没有准备好，此时无法与视图层进行交互
    const self = this;
    checkSession().then(
      res => {
        //...
      },
      reason => {
        console.log(reason);
        doLogin()
          .then(res => {
            return getSession(res);
          })
          .then(res => {
            self.loginHandler(res);
          });
      }
    );
  }

  componentDidMount() {
    Taro.$store = store;
  }

  componentDidShow() {
    //this.checkSession();
  }

  componentDidHide() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
