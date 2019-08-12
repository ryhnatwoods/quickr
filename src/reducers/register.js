import * as constants from "../constants/register";
/*
this.state = {
      registeredRole: "3",
      btn_name: "getcodebtn",
      countDown: 120,
      mobile: "",
      code: ""
    };
*/
const INITIAL_STATE = {
  //用户类型 1，商家，2，骑手，3. 普通用户
  userType: "3",
  //随机验证码
  btnName: "getcodebtn",
  //倒计时设置
  countDown: 120,
  //手机号
  mobile: "",
  //验证码
  code: ""
};

export default function app(state = INITIAL_STATE, action) {
  switch (action.type) {
    case constants.UPDATE_MOBILE_NO:
      return {
        ...state,
        mobile: action.mobile
      };
    case constants.UPDATE_RANDOMCODE:
      return {
        ...state,
        code: action.code
      };
    case constants.UPDATE_COUNT_DOWN:
      const { countDown, btnName } = action.payload;
      return {
        ...state,
        countDown,
        btnName
      };
    case constants.UPDATE_USER_TYPE:
      return {
        ...state,
        userType: action.userType
      };
    default:
      return state;
  }
}
