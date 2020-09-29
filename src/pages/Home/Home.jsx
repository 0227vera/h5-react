import React from "react";
import { withRouter } from "react-router-dom";
import { MobXProviderContext } from "mobx-react";
import { toJS } from "mobx";
import styles from "./style/Home.less";
// import classnames from "classnames/bind"

// const cx = classnames.bind(styles)

const Home = props => {
  const { history } = props;
  const { CommonStore } = React.useContext(MobXProviderContext);
  const common = toJS(CommonStore);

  // 这种使用方式是为了切换class方便，方便做一些动画效果，可以通过state的变量直接控制class的情况
  // const container = cx({ class1: false, class2: true })
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>this is home page</h3>
          <span>使用mobx情况:</span>
          <ul>
            <li>
              <span>{`当前人姓名：${common.currentUserInfo.name}`}</span>
            </li>
            <li>
              <span>{`当前人年纪：${common.currentUserInfo.age}`}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer}>
        <button
          onClick={() => {
            history.push("/setting");
          }}
        >
          click to go back home
        </button>
      </div>
    </div>
  );
};

export default withRouter(Home);
