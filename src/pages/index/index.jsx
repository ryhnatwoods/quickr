// @ts-nocheck
import Taro, { Component } from "@tarojs/taro";
import { Input, View, Text, Map } from "@tarojs/components";
import { AtButton } from "taro-ui";
import "./index.css";

export default class Index extends Component {
  config = {
    navigationBarTitleText: "首页"
  };

  constructor() {
    super(...arguments);
    this.state = {
      list: [
        {
          id: "User",
          title: "普通用户",
          content: "普通用户入口"
        },
        {
          id: "shop",
          title: "商家用户",
          content: "商家用户入口"
        },
        {
          id: "rider",
          title: "跑腿用户",
          content: "跑腿用户入口"
        },
        {
          id: "login",
          title: "登陆",
          content: "登陆"
        },
        {
          id: "register",
          title: "注册",
          content: "注册"
        }
      ]
    };
  }

  gotoPanel = (id, e) => {
    e.stopPropagation();
    console.log("id: " + id);
    Taro.switchTab({
      url: `/pages/${id.toLowerCase()}/index`
    });
  };
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { list } = this.state;
    console.log(list);
    return (
      <View className="page page-index">
        <View className="page-title">Demo Page</View>
        <View className="module-list">
          {list.map((item, index) => (
            <AtButton onClick={this.gotoPanel.bind(this, item.id)}>
              {item.content}
            </AtButton>
          ))}
        </View>
      </View>
    );
  }
}
