import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton, AtInput, AtIcon } from "taro-ui";
import AddrBar from "../../../components/public/addrBar";

import "./index.scss";

class UserOrder extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      queueVal: ""
    };
  }
  queueContentChange() {}
  render() {
    return (
      <View>
        <View>
          <View>
            <Text>填写你想要排队的内容</Text>
            <AtButton>万能排队</AtButton>
          </View>
          <AtInput
            name='queue'
            type='text'
            placeholder='无论是买票，占座，办业务，填写排队需求，全能搞定'
            value={this.state.queueVal}
            onChange={this.queueContentChange.bind(this)}
          />
        </View>
        <AddrBar color='#ccc' title='从哪里发货？' message='点击选择发送地址' />
        <View>
          <AtIcon prefixClass='fa' value='clock' />
          <Text>排队时间</Text>
          <AtButton>立即排队(指定时间段)</AtButton>
        </View>
        <View>
          <AtIcon prefixClass='fa' value='clock' />
          <Text>排队时长</Text>
          <AtButton>30分钟</AtButton>
        </View>
        <View>
          <AtIcon prefixClass='fa' value='clock' />
          <Text>优惠金额</Text>
          <AtButton>完善订单信息</AtButton>
        </View>
      </View>
    );
  }
}

export default UserOrder;
