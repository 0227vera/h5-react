import React from "react";
import { withRouter } from "react-router-dom";
import styles from "./style/Setting.less";

const Setting = props => {
  const { history } = props;
  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h3>this is setting page</h3>
          <span>之后这个地方会加一下已有组件的展示</span>
        </div>
      </div>
      <div className={styles.footer}>
        <button
          onClick={() => {
            history.goBack();
          }}
        >
          click to go to setting
        </button>
      </div>
    </div>
  );
};

export default withRouter(Setting);
