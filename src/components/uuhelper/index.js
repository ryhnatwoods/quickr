// @ts-nocheck
import Taro, { Component } from "@tarojs/taro";
import { ScrollView, View, Swiper, SwiperItem } from "@tarojs/components";
import "./index.scss";

class TestPageView extends Component {
  static defaultProps = {
    winHeight: "",
    currentTab: 0, //预设当前的值
    scrollLeft: 0 //tab标题的滚动条位置
  };
  constructor() {
    super(...arguments);
  }
  //滚动切换标签样式
  switchTab = e => {
    this.setState({
      currentTab: e.detail.current
    });
  };
  //点击标题切换当前页时改变样式
  switchNav = e => {
    var cur = e.target.dataset.current;
    if (this.props.currentTab !== cur) {
      this.setState(
        {
          currentTab: parseInt(cur)
        },
        () => {
          console.log(this.props);
        }
      );
    }
  };
  //判断当前滚动超过一屏时，设置tab标题滚动条
  checkCor = () => {
    if (this.props.currentTab > 4) {
      this.setState({
        scrollLeft: 300
      });
    } else {
      this.setState({
        scrollLeft: 0
      });
    }
  };
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
    this.checkCor();
  }
  render() {
    return (
      <View>
        <ScrollView
          className='tab-h'
          scrollX
          scrollWithAnimation
          scrollLeft={this.props.scrollLeft}
          onScroll={this.switchTab}
        >
          <View
            className={
              "tab-item " + (this.props.currentTab == 0 ? "active" : "")
            }
            data-current='0'
            ontap='switchNav'
          >
            帮我送
          </View>
          <View
            className={
              "tab-item " + (this.props.currentTab == 1 ? "active" : "")
            }
            data-current='1'
            ontap={this.switchNav}
          >
            帮我取
          </View>
          <View
            className={
              "tab-item " + (this.props.currentTab == 2 ? "active" : "")
            }
            data-current='2'
            ontap={this.switchNav}
          >
            帮我买
          </View>
          <View
            className={
              "tab-item " + (this.props.currentTab == 3 ? "active" : "")
            }
            data-current='3'
            ontap={this.switchNav}
          >
            帮我排队
          </View>
          <View
            className={
              "tab-item " + (this.props.currentTab == 4 ? "active" : "")
            }
            data-current='4'
            ontap={this.switchNav}
          >
            UU帮帮
          </View>
          <View
            className={
              "tab-item " + (this.props.currentTab == 5 ? "active" : "")
            }
            data-current='5'
            ontap={this.switchNav}
          >
            UU帮帮2
          </View>
          <View
            className={
              "tab-item " + (this.props.currentTab == 6 ? "active" : "")
            }
            data-current='6'
            ontap={this.switchNav}
          >
            UU帮帮3
          </View>
          <View
            className={
              "tab-item " + (this.props.currentTab == 7 ? "active" : "")
            }
            data-current='7'
            ontap={this.switchNav}
          >
            UU帮帮4
          </View>
        </ScrollView>
        <Swiper
          className='tab-content'
          duration='300'
          current={this.props.currentTab}
          style={{ height: this.props.winHeight + "rpx" }}
        >
          <SwiperItem>
            <View>Test</View>
          </SwiperItem>
        </Swiper>
      </View>
    );
  }
}

export default TestPageView;
