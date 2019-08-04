import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtFab, AtTabs, AtTabsPane } from "taro-ui";
import "./index.scss";

class ScollTab extends Taro.Component {
  constructor() {
    super(...arguments);
    this.state = {
      current: 0
    };
  }
  handleClick(value) {
    this.setState({
      current: value
    });
  }
  render() {
    return (
      <AtTabs
        current={this.state.current}
        scroll
        tabList={this.props.tabList}
        onClick={this.handleClick.bind(this)}
      >
        <AtTabsPane current={this.state.current} index={0}>
          <View style={{ height: this.props.winHeight + "rpx" }}>
            标签页一的内容
          </View>
          {this.props.isRequiredButton ? (
            <View className='uu-scrolltab__btn'>
              <AtFab onClick={this.props.onButtonClick}>
                <Text className='at-fab__icon at-icon at-icon-menu'>
                  添加订单
                </Text>
              </AtFab>
            </View>
          ) : (
            ""
          )}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={1}>
          <View style={{ height: this.props.winHeight + "rpx" }}>
            标签页二的内容
          </View>
          {this.props.isRequiredButton ? (
            <View className='uu-scrolltab__btn'>
              <AtFab onClick={this.props.onButtonClick}>
                <Text className='at-fab__icon at-icon at-icon-menu'>
                  添加订单
                </Text>
              </AtFab>
            </View>
          ) : (
            ""
          )}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={2}>
          <View style={{ height: this.props.winHeight + "rpx" }}>
            标签页三的内容
          </View>
          {this.props.isRequiredButton ? (
            <View className='uu-scrolltab__btn'>
              <AtFab onClick={this.props.onButtonClick}>
                <Text className='at-fab__icon at-icon at-icon-menu'>
                  添加订单
                </Text>
              </AtFab>
            </View>
          ) : (
            ""
          )}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={3}>
          <View style={{ height: this.props.winHeight + "rpx" }}>
            标签页四的内容
          </View>
          {this.props.isRequiredButton ? (
            <View className='uu-scrolltab__btn'>
              <AtFab onClick={this.props.onButtonClick}>
                <Text className='at-fab__icon at-icon at-icon-menu'>
                  添加订单
                </Text>
              </AtFab>
            </View>
          ) : (
            ""
          )}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={4}>
          <View style={{ height: this.props.winHeight + "rpx" }}>
            标签页五的内容
          </View>
          {this.props.isRequiredButton ? (
            <View className='uu-scrolltab__btn'>
              <AtFab onClick={this.props.onButtonClick}>
                <Text className='at-fab__icon at-icon at-icon-menu'>
                  添加订单
                </Text>
              </AtFab>
            </View>
          ) : (
            ""
          )}
        </AtTabsPane>
        <AtTabsPane current={this.state.current} index={5}>
          <View style={{ height: this.props.winHeight + "rpx" }}>
            标签页六的内容
          </View>
          {this.props.isRequiredButton ? (
            <View className='uu-scrolltab__btn'>
              <AtFab onClick={this.props.onButtonClick}>
                <Text className='at-fab__icon at-icon at-icon-menu'>
                  添加订单
                </Text>
              </AtFab>
            </View>
          ) : (
            ""
          )}
        </AtTabsPane>
      </AtTabs>
    );
  }
}

ScollTab.defaultProps = {
  tabList: [
    { title: "帮我送" },
    { title: "帮我取" },
    { title: "帮我买" },
    { title: "帮我排队" },
    { title: "UU帮" }
  ],
  isRequiredButton: false
};

export default ScollTab;
