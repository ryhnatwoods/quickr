// @ts-nocheck
import Taro, { Component } from "@tarojs/taro";
import { View, Map, Text, CoverView, CoverImage } from "@tarojs/components";
import { AtIcon } from "taro-ui";

import "./index.scss";
//import img
import main_location from "../../../assets/images/dw.png";

class DeliverPath extends Component {
  config = {
    navigationBarTitleText: "骑手送货路线"
  };
  constructor() {
    super(...arguments);
    this.markers = [
      {
        iconPath: main_location,
        id: 0,
        latitude: 23.099994,
        longitude: 113.32452,
        width: 50,
        height: 50
      }
    ];
    this.polyline = [
      {
        points: [
          {
            longitude: 113.3245211,
            latitude: 23.10229
          },
          {
            longitude: 113.32452,
            latitude: 23.21229
          }
        ],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }
    ];
    this.controls = [
      {
        id: 1,
        iconPath: main_location,
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }
    ];
  }
  render() {
    return (
      <View className='uu-deliverpath__container'>
        <Map
          onClick={this.onTap}
          class='test_uu_map'
          show-location
          markers={this.markers}
        >
          <CoverView class='addr_container'>
            <View className='icon'>
              <AtIcon prefixClass='fa' value='circle' size='15' color='green' />
            </View>
            <View className='desc__container'>
              <Text>[0.8km]味江淮餐厅</Text>
              <Text>(广场北路110号味江淮餐厅三楼吧台)</Text>
            </View>
            <View className='icon_container'>
              <View className='icon_item'>
                <AtIcon
                  prefixClass='fa'
                  value='folder'
                  size='20'
                  color='green'
                />
              </View>

              <View className='icon_item'>
                <AtIcon prefixClass='fa' value='phone' size='20' color='#ccc' />
              </View>
            </View>
          </CoverView>
          <CoverView class='main-map-function'>
            <CoverImage src={main_location} class='map-location' />
          </CoverView>
        </Map>
      </View>
    );
  }
}

export default DeliverPath;
