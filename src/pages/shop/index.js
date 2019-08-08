// @ts-nocheck
import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtFab } from "taro-ui";
import ScollTab from "../../components/scrollTab";
import "./index.scss";
import user_location from "../../assets/images/user.png";

export default class ShopPage extends Component {
  config = {
    navigationBarTitleText: "商家首页"
  };
  constructor() {
    super(...arguments);
    this.state = {
      winHeight: 0
    };
  }
  onButtonClick(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/shop/order/index`
    });
  }
  goToUserCenter(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/shop/shopAdmin/index`
    });
  }
  //因为taro中并没有onload的生命周期钩子函数，用componentDidMount代替
  componentDidMount() {
    //高度自适应
    Taro.getSystemInfo({
      success: res => {
        const clientHeight = res.windowHeight,
          clientWidth = res.windowWidth;
        //计算设备象素比
        const rpxR = 750 / clientWidth;

        const calc = clientHeight * rpxR - 180;
        this.setState({
          winHeight: calc
        });
      }
    });
  }
  render() {
    const tabList = [
      { title: "待支付" },
      { title: "待接单" },
      { title: "取货中" },
      { title: "配送中" }
    ];
    const isRequiredButton = true;
    return (
      <View>
        {/* fix this icon after finish this page */}
        <CoverImage
            src={user_location}
            onClick={this.goToUserCenter.bind(this)}
          />
        <ScollTab
          tabList={tabList}
          winHeight={this.state.winHeight}
          isRequiredButton={isRequiredButton}
          onButtonClick={this.onButtonClick.bind(this)}
        />
      </View>
    );
  }
}
