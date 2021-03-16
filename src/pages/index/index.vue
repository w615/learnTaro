<template>
  <view class="index">
    <Par>插槽父组件</Par>
    <Son>插槽子组件</Son>
    <text>{{ msg }}</text>
    <image src="../../assint/2.jpg"></image>
    <video src="../../assint/2.mp4"  controls autoplay="true"  title="123" />
  </view>
</template>
<script>
import Taro from "@tarojs/taro";
import { eventCenter, getCurrentInstance } from "@tarojs/taro";
import Par from "../../components/Par";
import Son from "../../components/Son";
import "./index.scss";

export default {
  name: "Index",
  components: {
    Par,
    Son
  },
  data() {
    return {
      msg: "你好，taro"
    };
  },
  onReady() {
    console.log("onReady");
  },
  onLoad(options) {
    var obj = Taro.getLaunchOptionsSync();
    console.log(obj, 31);
    console.log(options);
    console.log(getCurrentInstance().router);
  },
  onShareAppMessage() {
    console.log("转发");
    return {
      title: "转发时的标题",
      path: "/pagess/index?id=123"
    };
  }
};
</script>
