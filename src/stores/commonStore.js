import { observable, action } from "mobx";

class CommonStore {
  // 当前用户信息
  @observable.shallow currentUserInfo = null;

  @action
  init() {
    return new Promise(resolve => {
      setTimeout(() => {
        // 模拟数据请求的时间
        this.currentUserInfo = {
          name: "xx",
          age: 24,
        };
        resolve(true);
      }, 1000);
    });
  }
}

export default new CommonStore();
