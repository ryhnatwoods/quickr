/* eslint-disable react/jsx-key */
import Taro, { useState } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtTabs, AtTabsPane, AtCard, AtIcon } from "taro-ui";
import PropTypes from "prop-types";

import "./index.scss";
/*
1. 允许指定tab的数量， min是2， 最大4
2. 传递一个用户自定义的tab数组
const tabList = [
    { title: "新任务 0" },
    { title: "待取货 0" },
    { title: "待送达 0" }
  ];
*/
function TabLayout(props) {
  const [current, setCurrent] = useState(0);

  //tabList 由上层属性所提供
  const { tabList, ...rest } = props;
  function handleClick(val) {
    setCurrent(val);
  }
  return (
    <AtTabs current={current} tabList={tabList} onClick={handleClick}>
      {tabList.map((item, index) => {
        return <AtTabsPane current={current} index={index} />;
      })}
    </AtTabs>
  );
}
TabLayout.propTypes = {
  tabList: PropTypes.arrayOf(PropTypes.object)
};
export default TabLayout;
