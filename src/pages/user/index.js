// @ts-nocheck
import Taro, { Component } from "@tarojs/taro";
import { View, Map, CoverView, CoverImage } from "@tarojs/components";
import { AtSearchBar, AtTabs, AtTabsPane, AtInput, AtButton } from "taro-ui";
import AddrBar from "../../components/public/addrBar";
import ScrollSelector from "../../components/public/scrollSelector";
import SearchAddress from "../../components/searchAddress";
import "./index.scss";

//import img
import main_location from "../../assets/images/dw.png";

export default class UserPage extends Component {
  config = {
    navigationBarTitleText: "用户首页"
  };

  constructor() {
    super(...arguments);
    this.state = {
      value: "",
      current: 0,
      userNeed: "",
      userNeedQueue: "",
      userNeedUU: ""
    };
    this.tabList = [
      { title: "帮我送" },
      { title: "帮我取" },
      { title: "帮我买" },
      { title: "帮我排队" },
      { title: "UU帮" }
    ];
    this.userOptions = [
      { title: "随意购" },
      { title: "饮料&早餐&宵夜" },
      { title: "药品" },
      { title: "生鲜" },
      { title: "其他" }
    ];
    this.userQueueOptions = [
      { title: "万能排队" },
      { title: "办事排队" },
      { title: "医院排队" },
      { title: "银行排队" },
      { title: "餐厅占座" }
    ];
    this.userUUOptions = [
      { title: "万能帮帮" },
      { title: "小时工" },
      { title: "搬运货物" },
      { title: "照顾宠物" },
      { title: "传单派发" }
    ];
  }
  handleClick(value) {
    this.setState({
      current: value
    });
  }
  onChange() {}
  handleUserNeed(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/user/userOrder/index`
    });
  }
  handleUserNeedQueue(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/user/userOrder/index`
    });
  }
  goToUserCenter(e) {
    e.stopPropagation();
    Taro.navigateTo({
      url: `/pages/user/userAdmin/index`
    });
  }
  handleUserUU() {}
  handleSearchAddress() {}
  render() {
    return (
      <View className='uu-user_container'>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          fixed='true'
        />
        <Map onClick={this.onTap} class='test_uu_map' show-location>
          <CoverView class='main__panel'>
            <CoverImage src={main_location} class='map-location' 
              onClick={this.goToUserCenter.bind(this)}/>
            <CoverImage src={main_location} class='map-location' />
            <AtTabs
              current={this.state.current}
              scroll
              tabList={this.tabList}
              onClick={this.handleClick.bind(this)}
            >
              <AtTabsPane current={this.state.current} index={0}>
                <View className='main__panel__view'>
                  <AddrBar
                    color='#ccc'
                    title='从哪里发货？'
                    message='点击选择发送地址'
                  />
                  <AddrBar
                    color='yellow'
                    title='要送到哪里？'
                    message='点击选择送货地址'
                  />
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
                <View className='main__panel__view'>
                  <AddrBar
                    color='#ccc'
                    title='从哪里取货？'
                    message='点击选择取送地址'
                  />
                  <AddrBar
                    color='yellow'
                    title='取货后送到哪里？'
                    message='点击选择收货地址'
                  />
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2}>
                <View className='main__panel__view'>
                  <View className='user_need'>
                    <AtInput
                      name='userNeed'
                      type='text'
                      placeholder='想买点什么...'
                      value={this.state.userNeed}
                      onChange={this.handleUserNeed.bind(this)}
                    />
                    <AtButton
                      circle
                      size='small'
                      onClick={this.handleUserNeed.bind(this)}
                    >
                      下单
                    </AtButton>
                  </View>
                  <ScrollSelector options={this.userOptions} />
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={3}>
                <View className='main__panel__view'>
                  <View className='user_need'>
                    <AtInput
                      name='userNeedQueue'
                      type='text'
                      placeholder='需要我排什么队？'
                      value={this.state.userNeedQueue}
                      onChange={this.handleUserNeedQueue.bind(this)}
                    />
                    <AtButton circle size='small'>
                      下单
                    </AtButton>
                  </View>
                  <ScrollSelector options={this.userQueueOptions} />
                </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={4}>
                <View className='main__panel__view'>
                  {/* <View className='user_need'>
                    <AtInput
                      name='userNeedUU'
                      type='text'
                      placeholder='需要帮你做点什么？'
                      value={this.state.userNeedUU}
                      onChange={this.handleUserUU.bind(this)}
                    />
                    <AtButton circle size='small'>
                      下单
                    </AtButton>
                  </View>
                  <ScrollSelector options={this.userUUOptions} /> */}
                </View>
              </AtTabsPane>
            </AtTabs>
          </CoverView>
        </Map>
      </View>
    );
  }
}
