import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtInput, AtIcon } from "taro-ui";
// import PropTypes from "prop-types";
// import classNames from "classnames";

import "./index.scss";

class SrchAddrInput extends Component {
  onInput = event => this.props.onChange(event.target.value, event);
  constructor() {
    super(...arguments);
    this.state = {};
  }

  render() {
    return (
      <View className='srchArr'>
        <AtInput
          name='value'
          type='text'
          editable={false}
          value={this.state.value}
          onChange={this.onInput}
        >
          <AtIcon prefixClass='fa' value='search' color='#C3C3C3' />
        </AtInput>
        <AtInput
          name='value'
          type='text'
          focus
          onChange={this.onInput}
          placeholder='填写楼号'
        />
        <View className='at-row'>
          <View className='at-col at-col-3'>
            <AtInput
              name='value'
              type='text'
              focus
              className='hd'
              onChange={this.onInput}
            />
          </View>
          <View className='at-col at-col-9'>
            <AtInput name='value' type='text' focus onChange={this.onInput}>
              <AtIcon prefixClass='fa' value='address-book' color='#C3C3C3' />
            </AtInput>
          </View>
        </View>
      </View>
    );
  }
}

export default SrchAddrInput;
