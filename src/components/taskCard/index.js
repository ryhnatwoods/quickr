import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtButton, AtIcon } from "taro-ui";
import "./index.scss";

function TaskCard(props) {
  return (
    <View className='card'>
      <View>
        <AtIcon prefixClass='fa' value='clock-o' color='#C3C3C3' size='10' />
        <Text>剩余2分钟（21：26前送达）</Text>
        <Text>#23</Text>
      </View>
      <View style='display:flex; flex-direction:column'>
        <Text>系统派</Text>
        <View style='display:flex;flex-direction:row;align-items:center;'>
          <View className='task_circle_completed_mark' />
          <View>
            <Text>龙门花甲</Text>
          </View>
        </View>
        <View style='border-left: 1px solid #B7D0E4; display: inline-block;margin-left: 7px;padding: 0px 0px 0px 3px;height:80px' />
        <View style='display:flex;flex-direction:row;align-items:center;'>
          <View className='task_circle_inprogress_mark' />
          <View>
            <Text>味江淮餐厅（广场北路110号味江淮餐厅三楼吧台）</Text>
          </View>
        </View>
      </View>
      <View style='display:flex; justify-content:space-around; border-top: 1px solid #ccc; padding:5px'>
        <AtButton size='small'>在线对话</AtButton>
        <AtButton size='small'>联系</AtButton>
        <AtButton type='primary' size='small'>
          确认已送达
        </AtButton>
      </View>
    </View>
  );
}

export default TaskCard;
