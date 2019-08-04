import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtSlider, AtButton } from "taro-ui";

import "./index.scss";

class Goods extends Component {
  config = {
    navigationBarTitleText: "物品信息"
  };

  constructor() {
    super(...arguments);
    this.typeOfGoods = [
      {
        title: "餐饮"
      },
      {
        title: "文件"
      },
      {
        title: "生鲜"
      },
      {
        title: "蛋糕"
      },
      {
        title: "鲜花"
      },
      {
        title: "钥匙"
      },
      {
        title: "数码"
      },
      {
        title: "服饰"
      },
      {
        title: "其他"
      }
    ];

    this.priceOfGoods = [
      {
        label: "50元以下"
      },
      {
        label: "50-150元"
      },
      {
        label: "150-300元"
      },
      {
        label: "300-1000元"
      },
      {
        label: "1000-1500元"
      },
      {
        label: "1500元以上"
      }
    ];
  }
  addGoodHandler(e) {
    e.stopPropagation();
    Taro.navigateBack();
  }
  render() {
    return (
      <View className='uu-goodinfo__container'>
        <View className='child_container'>
          <View>
            <Text>物品类型</Text>
          </View>

          {this.typeOfGoods.map((item, index) => {
            return (
              <View key={item.title + index} className='item_container'>
                {item.title}
              </View>
            );
          })}
        </View>

        <View className='child_container'>
          <View>
            <Text>物品价值</Text>
          </View>

          {this.priceOfGoods.map((item, index) => {
            return (
              <View key={item.label + index} className='item_container'>
                {item.label}
              </View>
            );
          })}
        </View>

        <View className='child_container'>
          <View>
            <Text>物品重量</Text>
          </View>

          <AtSlider
            step={1}
            value={50}
            min={5}
            max={20}
            activeColor='#4285F4'
            backgroundColor='#BDBDBD'
            blockColor='#4285F4'
            blockSize={15}
            showValue
          />
        </View>

        <View className='confirm_btn'>
          <AtButton type='primary' onClick={this.addGoodHandler}>
            确定
          </AtButton>
        </View>
      </View>
    );
  }
}

export default Goods;
