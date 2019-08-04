import Taro, { component, useState } from "@tarojs/taro";
import { ScrollView, View } from "@tarojs/components";

import "./index.scss";

function ScrollSelector(props) {
  const { scrollLeft, setScrollLeft } = useState(0);
  const { current, setCurrent } = useState(0);

  const onScrollHandler = e => {
    console.log(e);
  };

  const { options } = props;

  return (
    <ScrollView
      className='uu-scrollselector__container'
      scrollX
      scrollWithAnimation
      scrollLeft={scrollLeft}
      onScroll={onScrollHandler}
    >
      {options.map((item, index) => {
        return (
          <View className='child' key={index}>
            {item.title}
          </View>
        );
      })}
      {props.children}
    </ScrollView>
  );
}

export default ScrollSelector;
