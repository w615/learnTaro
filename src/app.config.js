export default {
  pages: ["pages/index/index", "pages/post/index"],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#ff0",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  tabBar: {
    color: "#7A7E83",
    selectedColor: "#288DFA",
    borderStyle: "black",
    backgroundColor: "#F5F6F8",
    list: [
      {
        pagePath: "pages/index/index",
        text: "最新"
      },
      {
        pagePath: "pages/post/index",
        text: "热门"
      }
    ]
  }
};
