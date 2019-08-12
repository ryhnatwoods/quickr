import Taro from "@tarojs/taro";
import GlobalData from "../global_data";
import {
  UPDATE_MOBILE_NO,
  UPDATE_RANDOMCODE,
  UPDATE_COUNT_DOWN,
  UPDATE_USER_TYPE,
  UPDATE_FRONT_ID,
  UPDATE_BACK_ID,
  SELECT_RIDER_DEPOSIT
} from "../constants/register";

export const updateMobile = e => {
  return {
    type: UPDATE_MOBILE_NO,
    mobile: e.detail.value
  };
};

export const updateRandomCode = e => {
  return {
    type: UPDATE_RANDOMCODE,
    code: e.detail.value
  };
};
export const updateCountDown = (countDown, btnName) => {
  return {
    type: UPDATE_COUNT_DOWN,
    payload: {
      countDown,
      btnName
    }
  };
};
export const updateUserType = e => {
  return {
    type: UPDATE_USER_TYPE,
    userType: e.detail.value
  };
};

// 异步的 action 包括，获取随机数，注册用户
export function sendRandomCode(mobile) {
  return Taro.request({
    url: GlobalData.rootUrl + "verifyCode/insertCode",
    method: "GET",
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    data: { userId: 1, phone: mobile, openId: 1 }, //todo 修改成用户id
    success: function(res) {
      console.info("====>orderDetails details11111");
      console.info(res);
      console.info(mobile);
      console.info("====>orderDetails details11111");

      Taro.hideLoading();

      var result = res.data.result;

      if (result == 1) {
        Taro.showModal({
          title: "",
          content: "短信已发送",
          showCancel: false
        });
      } else {
        Taro.showModal({
          title: "提示",
          content: res.data.msg,
          showCancel: false
        });
      }
    }
  });
}

const gotoPanel = userType => {
  switch (userType) {
    case "1":
      Taro.navigateTo({
        url: `/pages/register/shop/index`
      });
      break;
    case "2":
      Taro.navigateTo({
        url: `/pages/register/rider/index`
      });
      break;
    case "3":
      Taro.navigateTo({
        url: `/pages/login/index`
      });
      break;
    default:
      break;
  }
};
export function registerUser(rd_session, nickeName, code, mobile, userType) {
  return Taro.request({
    url: GlobalData.rootUrl + "verifyCode/checkCode",
    method: "GET",
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    data: {
      phone: mobile,
      code: code,
      sessionId: rd_session,
      nickname: nickeName,
      userType: userType
    }, //todo 修改成用户id
    success: function(res) {
      console.info(res);
      console.info(code);
      console.info(mobile);
      Taro.hideLoading();

      var result = res.data.result;
      var msg = res.data.msg;

      if (result == 1) {
        const { session, userId, userName, orgName, inner } = res.data.userInfo;
        const { usrMobil, usrDuty, usrCard, questionnaire } = res.data;

        var loginInfo = {
          rd_session: session,
          userId: userId,
          userName: userName,
          orgName: orgName,
          inner: inner,
          questionnaire: questionnaire,

          usrMobil: usrMobil,
          usrDuty: usrDuty,
          usrCard: usrCard
        };

        Taro.setStorageSync("loginInfo", loginInfo);

        Taro.showModal({
          title: "提示",
          content: msg,
          showCancel: false
        });

        gotoPanel(userType);
      } else {
        Taro.showModal({
          title: "提示",
          content: res.data.msg,
          showCancel: false
        });
      }
    }
  });
}

export function doCountDown(countDown) {
  return dispatch => {
    setInterval(() => {
      dispatch(updateCountDown(--countDown, "waitcountdown"));
    }, 1000);
  };
}
