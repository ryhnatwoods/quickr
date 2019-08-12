import * as constants from "../constants/app";

const INITIAL_STATE = {
  //请求接口
  rootUrl: "https://paotui.xiaopeng.info/quickRun/",
  //应用首次加载
  hasLogin: false,
  //loginInfo是空对象
  loginInfo: {}
};

export default function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.PAOTUI_APP_ON_LAUNCH:
      return {
        ...state,
        hasLogin: true
      };
    case constants.INSERT_AUTHORIZE:
      return {
        ...state,
        authorize: action.authorize
      };
    default:
      return state;
  }
}
