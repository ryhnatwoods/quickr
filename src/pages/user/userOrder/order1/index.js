import Taro, { Component } from "@tarojs/taro";
import { View, Text, ScrollView, Picker } from "@tarojs/components";
import { AtInput, AtDivider } from "taro-ui";
import NavigatorBtn from "../../../../components/public/navigator-btn";
//图片
import FaHuo from "../../../../assets/images/fahuo.png";
import Cusine from "../../../../assets/images/cusine.png";
import Cake from "../../../../assets/images/cake.png";
import Flower from "../../../../assets/images/flower.png";
import File from "../../../../assets/images/file.png";
import Key from "../../../../assets/images/key.png";
import Phone from "../../../../assets/images/phone.png";
import Others from "../../../../assets/images/others.png";
import "./index.scss";

const options = [
  {
    icon_path: Cusine,
    icon_name: "美食"
  },
  {
    icon_path: File,
    icon_name: "文件"
  },
  {
    icon_path: Cake,
    icon_name: "蛋糕"
  },
  {
    icon_path: Flower,
    icon_name: "鲜花"
  },
  {
    icon_path: Key,
    icon_name: "钥匙"
  },
  {
    icon_path: Phone,
    icon_name: "手机"
  },
  {
    icon_path: Others,
    icon_name: "其他"
  }
];
const minutes_column = (function() {
  const m_col = [];
  for (let m = 0; m < 60; m += 10) {
    m_col.push(`${m}分`);
  }
  return m_col;
})();
const hours_column = (function() {
  const h_col = [];
  for (let h = 0; h < 24; h++) {
    h_col.push(`${h}时`);
  }
  return h_col;
})();
const fixedSelectColumn = [["今天", "明天"]];
let selectedFirstColumn = true;
class UserOrder extends Component {
  //这里有个小的bug，就是时间函数的调用，必须是再一次load当前页面
  //这里先不添加setInterval的
  initDeliverTimeOptions() {
    const selector = fixedSelectColumn.concat([["立即发货"], []]);
    //get current time
    const cur_time = new Date().getHours();
    if (cur_time < 23) {
      //生成 hour options
      for (let h = cur_time + 1; h < 24; h++) {
        selector[1].push(`${h}时`);
      }
    }
    return selector;
  }
  constructor() {
    super(...arguments);
    this.multiIndex = [0, 0, 0];
    this.state = {
      selector: this.initDeliverTimeOptions()
    };
    console.log("yyyyy");
  }
  onScrollHandler = e => {
    console.log(e);
  };
  deliverTimeChange = e => {
    e.stopPropagation();
    console.log(e);
  };
  deliverTimeColumnHandler = e => {
    e.stopPropagation();
    const { column, value } = e.detail;
    //第一个0代表列，第二个0代表0中的选项
    const _key = [column, value].join("_");
    switch (_key) {
      case "0_0":
        selector = this.initDeliverTimeOptions();
        selectedFirstColumn = true;
        break;
      case "0_1":
        selector[1] = hours_column;
        selector[2] = minutes_column;
        selectedFirstColumn = false;
        break;
      default:
        if (selectedFirstColumn && column === 1) {
          if (value > 0) {
            //生成 minutes options
            if (selector[2].length === 0) {
              selector[2] = minutes_column;
            }
          } else {
            selector[2].length = 0;
          }
        }

        break;
    }
    this.setState({
      selector: selector
    });
  };
  updateOrderComment = e => {
    e.stopPropagation();
  };
  render() {
    return (
      <View>
        <View className='paotui_panel'>
          <h2>帮我送</h2>
          <View className='at-row'>
            <Image src={FaHuo} style='width:50px;height:50px' />
            <View className='at-row__direction--column'>
              <Text style={{ display: "block" }}>宜川一村小区</Text>
              <Text>具体的楼号，楼层和门牌号</Text>
            </View>
            <Text>12312312333</Text>
            <NavigatorBtn name='cityIndexes'>常用</NavigatorBtn>
          </View>
          <View className='at-row'>
            <Image src={FaHuo} style='width:50px;height:50px' />
            <View className='at-row__direction--column'>
              <Text style={{ display: "block" }}>宜川一村小区</Text>
              <Text>具体的楼号，楼层和门牌号</Text>
            </View>
            <Text>12312312333</Text>
            <NavigatorBtn name='cityIndexes'>常用</NavigatorBtn>
          </View>
        </View>
        <View className='paotui_panel'>
          <View className='at-row at-row__align--center goods'>
            <View className='at-col at-col-3 adjust_margin'>物品类型:</View>
            <View className='at-col at-col-9'>
              <ScrollView
                className='uu-scrollselector__container'
                scrollX
                scrollWithAnimation
                scrollLeft={0}
                onScroll={this.onScrollHandler}
              >
                {options.map(item => {
                  return (
                    <View className='child' key={item.icon_name}>
                      <Image src={item.icon_path} />
                      {item.icon_name}
                    </View>
                  );
                })}
                {props.children}
              </ScrollView>
            </View>
          </View>
          <AtDivider height={1} />
          <AtInput
            name='value'
            title='订单备注'
            type='text'
            placeholder='点击这里可以输入订单备注信息'
            onChange={this.updateOrderComment}
            value={this.state.value}
          />
          <View>
            <Picker
              mode='multiSelector'
              range={this.state.selector}
              onChange={this.deliverTimeChange}
              onColumnChange={this.deliverTimeColumnHandler}
              value={this.multiIndex}
            >
              <View>请选择</View>
            </Picker>
          </View>
        </View>
      </View>
    );
  }
}

export default UserOrder;
