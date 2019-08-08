// @ts-nocheck
import Taro, { Component } from "@tarojs/taro";
import { Input, View, Text, Map } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtTimeline, AtButton } from "taro-ui";
import "./index.scss";
import user_location from "../../assets/images/user.png";

export default class SupplierPage extends Component {
  config = {
    navigationBarTitleText: "骑手首页"
  };
  constructor() {
    super(...arguments);
    this.state = {
      current: 0,
      winHeight: 0
    };
    this.addrBarProps = {
      title: "从哪里发货",
      message: "点击选择发货地址",
      color: "#ccc",
      clickHandler: () => {
        console.log("go");
      }
    };
    this.tabList = [
      {
        title: "待接单 0"
      },
      {
        title: "待完成 0"
      },
      {
        title: "已完成 0"
      }
    ];
    this.options = [
      {
        title: "万能排队"
      },
      {
        title: "办事排队"
      },
      {
        title: "医院排队"
      },
      {
        title: "银行排队"
      },
      {
        title: "餐厅占座"
      }
    ];
  }
  handleClick(value) {
    this.setState({
      current: value
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
  getTask(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/rider/deliverPath/index`
    });
  }
  goToUserCenter(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/rider/riderAdmin/index`
    });
  }
  render() {
    return (
      <View>
        {/* fix this icon after finish this page */}
        <CoverImage
            src={user_location}
            onClick={this.goToUserCenter.bind(this)}
          />
      
      <AtTabs
        current={this.state.current}
        scroll
        tabList={this.tabList}
        onClick={this.handleClick.bind(this)}
      >
        <AtTabsPane current={this.state.current} index={0}>
          <View style={{ height: this.state.winHeight + "rpx" }}>
            <View className='card'>
              <AtTimeline
                pending
                items={[
                  {
                    title: "龙门花甲(淮南总店)",
                    icon: "circle"
                  },
                  {
                    title: "味江淮餐厅(广场北路110号味江淮餐厅三楼吧台)",
                    content: ["高女士-153****5203"],
                    icon: "circle"
                  }
                ]}
              />
              <View style='display:flex; justify-content:space-around; border-top: 1px solid #ccc; padding:5px'>
                <AtButton
                  type='primary'
                  size='small'
                  onClick={this.getTask.bind(this)}
                >
                  接单
                </AtButton>
              </View>
            </View>
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style={{ height: this.state.winHeight + "rpx" }}>
            标签页二的内容
          </View>
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style={{ height: this.state.winHeight + "rpx" }}>
            <View className='card'>
              <AtTimeline
                pending
                items={[
                  {
                    title: "龙门花甲(淮南总店)",
                    icon: "check-circle"
                  },
                  {
                    title: "味江淮餐厅(广场北路110号味江淮餐厅三楼吧台)",
                    content: ["高女士-153****5203"],
                    icon: "check-circle"
                  }
                ]}
              />
              <View style='display:flex; justify-content:space-around; border-top: 1px solid #ccc; padding:5px'>
                <AtButton size='small'>在线对话</AtButton>
                <AtButton size='small'>联系</AtButton>
                <AtButton type='primary' size='small'>
                  确认已送达
                </AtButton>
              </View>
            </View>
          </View>
        </AtTabsPane>
      </AtTabs>
      </View>
    );
  }
}
