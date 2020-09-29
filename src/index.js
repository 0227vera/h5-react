import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "mobx-react";
import { HashRouter } from "react-router-dom";
import FastClick from "fastclick";
import AutoRouter from "./AutoRouter";
// 对网络请求的统一设置
import "./services/SetAxios";
// 将应用中必不可少的信息先请求之后在渲染页面
import CommonStore from "./stores/CommonStore";

/* plop auto add stores import */

// 修正一些不同内核浏览器的样式问题
import "./assets/style/normalize.css";
// 全局样式
import "./assets/style/global.less";

// 移动端点击延迟300ms问题

FastClick.attach(document.body);
// 防止在ios上面点击无法唤醒键盘
FastClick.prototype.focus = targetElement => {
  targetElement.focus();
};

// 解决挡住焦点的问题
window.addEventListener("resize", () => {
  if (
    document.activeElement.tagName === "INPUT" ||
    document.activeElement.tagName === "TEXTAREA" // 获得文档中获取焦点的元素
  ) {
    window.setTimeout(() => {
      if ("scrollIntoView" in document.activeElement) {
        document.activeElement.scrollIntoView(); // 滚动当前元素到可见区域
      } else {
        document.activeElement.scrollIntoViewIfNeeded();
      }
    }, 0);
  }
});

const app = () => {
  ReactDOM.render(
    <Provider
      {...{
        CommonStore,
        /* plop auto add stores */
      }}
    >
      <HashRouter>
        <AutoRouter />
      </HashRouter>
    </Provider>,
    document.getElementById("root")
  );
};

CommonStore.init().then(() => {
  app();
});
