import Taro, { Component } from "@tarojs/taro";
import { View, Text, Checkbox } from "@tarojs/components";
import { AtForm, AtImagePicker, AtButton } from "taro-ui";

import "./index.scss";

export default class RiderRegister extends Component {
  initComponentOptions() {
    this.imageSelector = {
      length: 1,
      count: 1
    };
  }
  constructor() {
    super(...arguments);
    this.initComponentOptions();
    this.state = {
      front: {
        front_image: [],
        showAddBtn: true
      },
      back: {
        back_image: [],
        showAddBtn: true
      }
    };
  }
  uploadUserFront(front_image) {
    console.log(front_image);
    const updateImage = {
      front: {
        front_image,
        showAddBtn: true
      }
    };
    if (Array.isArray(front_image) && front_image.length) {
      updateImage.front.showAddBtn = false;
    }
    this.setState(updateImage, () => {
      console.log(this.state.front);
    });
  }
  uploadUserBack(back_image) {
    console.log(back_image);
    const updateImage = {
      back: {
        back_image,
        showAddBtn: true
      }
    };
    if (Array.isArray(back_image) && back_image.length) {
      updateImage.back.showAddBtn = false;
    }
    this.setState(updateImage, () => {
      console.log(this.state.back);
    });
  }
  onSave = e => {
    e.stopPropagation();
    const { front, back } = this.state;
    if (front.front_image.length === 0) {
      Taro.showModal({
        title: "提示",
        content: "请上传身份证正面",
        showCancel: false
      });
      return;
    }
    if (back.back_image.length === 0) {
      Taro.showModal({
        title: "提示",
        content: "请上传身份证反面",
        showCancel: false
      });
      return;
    }
  };
  render() {
    return (
      <AtForm
        className='uu-rideruser-register__container'
        onSubmit={this.onSave}
      >
        <View className='upload_rider_idphoto'>
          <View className='text_item'>
            <Text>身份证正面</Text>
          </View>
          <View className='image_item'>
            <AtImagePicker
              length={this.imageSelector.length}
              count={this.imageSelector.count}
              files={this.state.front.front_image}
              onChange={this.uploadUserFront.bind(this)}
              showAddBtn={this.state.front.showAddBtn}
            />
          </View>
        </View>
        <View className='upload_rider_idphoto'>
          <View className='text_item'>
            <Text>身份证背面</Text>
          </View>
          <View className='image_item'>
            <AtImagePicker
              length={this.imageSelector.length}
              count={this.imageSelector.count}
              files={this.state.back.back_image}
              onChange={this.uploadUserBack.bind(this)}
              showAddBtn={this.state.back.showAddBtn}
            />
          </View>
        </View>
        <View className='rider_deposit'>
          <Checkbox value='选中' checked>
            骑手押金100元整
          </Checkbox>
        </View>
        <View className='register-btn'>
          <AtButton formType='submit' onClick={this.uploadUserData}>
            确认
          </AtButton>
        </View>
      </AtForm>
    );
  }
}
