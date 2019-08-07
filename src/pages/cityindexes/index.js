import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtIndexes, AtTag } from "taro-ui";
import mockData from "./mock-data";
import "./index.scss";

export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: "Taro UI"
  };

  constructor() {
    super(...arguments);
    this.hotCities = [
      {
        name: "北京市"
      },
      {
        name: "上海市"
      },
      {
        name: "广州市"
      },
      {
        name: "深圳市"
      },
      {
        name: "杭州市"
      },
      {
        name: "成都市"
      },
      {
        name: "合肥市"
      },
      {
        name: "长沙市"
      }
    ];
  }
  onClick(item) {
    console.log(item);
  }

  render() {
    return (
      <View className='page' style='height: 100vh;'>
        {/* 基础用法 */}
        <View style='height: 100%;'>
          <AtIndexes
            list={mockData}
            topKey='Top'
            onClick={this.onClick.bind(this)}
          >
            <View className='custom-area'>
              <View className='item'>定位城市</View>
              <View className='item'>
                <AtTag type='primary'>上海</AtTag>
              </View>
              <View className='item'>热门城市</View>
              <View className='item'>
                {this.hotCities.map(city => {
                  return (
                    <AtTag type='primary' className='tag_item'>
                      {city.name}
                    </AtTag>
                  );
                })}
              </View>
              <View />
            </View>
          </AtIndexes>
        </View>
      </View>
    );
  }
}
