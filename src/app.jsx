import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";
import Index from "./pages/index";
import configStore from "./store";
import GlobalData from "./global_data";
import "./assets/font-awesome/font-awesome.css";
import "./app.scss";
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
      "pages/rider/index",
      "pages/rider/deliverPath/index",
      "pages/user/index",
      "pages/user/userOrder/index",
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

  componentWillMount() {
    //页面加载时触发，一个页面一次，DOM还没有准备好，此时无法与视图层进行交互
    console.log("App Launch");
    //this.checkSession();
  }

  checkSession() {
    const loginInfo = Taro.getStorageSync("loginInfo");
    const rd_session = loginInfo.rd_session;
    const self = this;
    if (rd_session) {
      Taro.checkSession({
        success: function() {
          console.log("login successfully");
        },
        fail: function() {
          self.doLogin();
        }
      });
    } else {
      console.log("rd_session", rd_session);
      self.doLogin();
    }
  }

  doLogin() {
    const rootUrl = GlobalData.rootUrl;
    const self = this;
    Taro.login({
      success: function(res) {
        if (!res.code) {
          //如果用户登录凭证不存在，直接返回
          return;
        }

        console.log("wx.login", res);
        Taro.request({
          url: rootUrl + "service/session/get",
          data: {
            code: res.code
          },
          success: function(result) {
            console.log("setUserSessionKey", result);
            console.info(result);
            var rd_session = result.data.sessionId;
            var userId = result.data.userId;
            var userName = result.data.userName;
            var orgName = result.data.orgName;
            var inner = result.data.inner;
            var questionnaire = result.data.questionnaire;
            var loginInfo = {
              rd_session: rd_session,
              userId: userId,
              userName: userName,
              orgName: orgName,
              inner: inner,
              questionnaire: questionnaire,
              usrMobil: result.data.usrMobil,
              usrCard: result.data.usrCard,
              usrDuty: result.data.usrDuty
            };

            Taro.setStorageSync("loginInfo", loginInfo);
            self.getUserInfo(userId);
          }
        });
      }
    });
  }
  getUserInfo(userId) {
    const self = this;
    const rootUrl = GlobalData.rootUrl;
    Taro.getUserInfo({
      success: function(res) {
        console.log("getUserInfo", res);
        GlobalData.userInfo = res.userInfo;
        if (userId > 0) {
          // update uerInfo
          Taro.request({
            url: rootUrl + "service/session/updateUserInfo",
            data: {
              userId: userId,
              nickName: res.userInfo.nickName,
              province: res.userInfo.province,
              city: res.userInfo.city,
              sex: res.userInfo.gender,
              language: res.userInfo.language,
              avatarUrl: res.userInfo.avatarUrl
            },
            success: function(result) {
              console.info(result.data.success);
            }
          });
        }
      }
    });
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
