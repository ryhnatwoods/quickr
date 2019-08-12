import Taro from "@tarojs/taro";
import request from "../utils/request";
import GlobalData from "../global_data";

//微信用户接口
// eslint-disable-next-line import/prefer-default-export
export const getUserInfo = userId => {
  return Taro.getUserInfo({
    success: function(res) {
      console.log("getUserInfo", res);
      GlobalData.userInfo = res.userInfo;
      if (userId > 0) {
        const data = {
          userId: userId,
          nickName: res.userInfo.nickName,
          province: res.userInfo.province,
          city: res.userInfo.city,
          sex: res.userInfo.gender,
          language: res.userInfo.language,
          avatarUrl: res.userInfo.avatarUrl
        };

        // update uerInfo
        return request("session/updateUserInfo", data, "GET");
      }
    }
  });
};

export const checkSession = () => {
  return new Promise(function(resolve, reject) {
    const loginInfo = Taro.getStorageSync("loginInfo");
    const { rd_session } = loginInfo;

    if (rd_session) {
      Taro.checkSession({
        success: function() {
          getUserInfo(loginInfo.userId);
          resolve("login successfully");
        },
        fail: function() {
          reject("login failed");
        }
      });
    } else {
      reject("login failed");
    }
  });
};

// 登录
export const doLogin = () => {
  return Taro.login({
    success: function(res) {
      if (!res.code) {
        //如果用户登录凭证不存在，直接返回
        Promise.reject("user code not existed!");
        return;
      }
      Promise.resolve(res);
    },
    fail: reason => {
      Promise.reject(reason);
    }
  });
};

export const getSession = res => {
  return request(
    "session/get",
    {
      code: res.code
    },
    {
      "content-type": "application/json;charset=UTF-8"
    },
    "GET"
  );
};

export const getOpenId = code => {
  return request(
    "pay/getOpenId.action",
    {
      code: code
    },
    {
      "content-type": "application/json;charset=UTF-8"
    },
    "GET"
  );
};

//生成商户订单
export const generateOrder = openid => {
  var orderNo = "ord" + new Date().getTime();
  var money = 1;

  //支付采用商店和消费金额，保证使用同样的订单号可以重复支付
  var detail = "shop1";
  var body = "shop1消费合计" + money;
  const data = {
    body: body,
    detail: detail,
    money: money,
    openId: openid,
    orderNo: orderNo
  };
  //统一支付
  request(
    "pay/getPrepareKey.action",
    data,
    {
      "content-type": "application/json;charset=UTF-8"
    },
    "GET"
  );
};

export const pay = param => {
  return new Promise(function(resolve, reject) {
    return Taro.requestPayment({
      timeStamp: param.timeStamp,
      nonceStr: param.nonceStr,
      package: param.package,
      signType: param.signType,
      paySign: param.paySign,
      success: function(res) {
        Taro.showToast({
          title: "支付成功",
          icon: "success",
          duration: 2000
        });
        resolve(res);
      },
      fail: function(reason) {
        // fail
        reject(reason);
      },
      complete: function() {
        // complete
      }
    });
  });
};
