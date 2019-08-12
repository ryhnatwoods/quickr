export const INPUT_CELLPHONE_PLACEHOLDER = "请输入手机号";
export const INPUT_RANDOM_CODE_PLACEHOLDER = "填写验证码";
export const BTN_RANDOM_CODE_PLACEHOLDER = "获取验证码";
export const BTN_RANDOM_CODE_AGAIN_PLACEHOLDER = "s后重新获取";
export const RADIO_SHOP_PLACEHOLDER = "商家";
export const RADIO_RIDER_PLACEHOLDER = "骑手";
export const RADIO_USER_PLACEHOLDER = "用户";
export const roles = [
  {
    value: "1",
    text: RADIO_SHOP_PLACEHOLDER,
    checked: false
  },
  {
    value: "2",
    text: RADIO_RIDER_PLACEHOLDER,
    checked: false
  },
  {
    value: "3",
    text: RADIO_USER_PLACEHOLDER,
    checked: true
  }
];
//define 同步的action名字
export const UPDATE_MOBILE_NO = "UPDATE_MOBILE_NO";

export const UPDATE_RANDOMCODE = "UPDATE_RANDOMCODE";

export const UPDATE_COUNT_DOWN = "UPDATE_COUNT_DOWN";

export const UPDATE_USER_TYPE = "UPDATE_USER_TYPE";

export const UPDATE_FRONT_ID = "UPDATE_FRONT_ID";

export const UPDATE_BACK_ID = "UPDATE_BACK_ID";

export const SELECT_RIDER_DEPOSIT = "SELECT_RIDER_DEPOSIT";
