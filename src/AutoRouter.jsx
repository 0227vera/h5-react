import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { Toast } from "antd-mobile";
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import loadable from '@loadable/component';
import Home from "./pages/Home";
import Setting from "./pages/Setting";
/* 误删,plop自动添加路由的标识 */
/* plop auto add router import */

// 路由表
const ROUTES = [
  {
    path: "/home",
    isExact: true,
    title: "首页",
    component: Home,
  },
  {
    path: "/setting",
    isExact: true,
    title: "设置",
    component: Setting,
  },
  /* plop auto add router config */
];

function AutoRouter() {
  return (
    // 这个会导致所有的接口请求两次的问题，暂时先不用了，等找到解决方案再使用
    // <TransitionGroup className="container">
    // 	<CSSTransition
    // 		timeout={300}
    // 		classNames={{
    // 			enter: 'my-enter',
    // 			enterActive: 'my-active-enter',
    // 			enterDone: 'my-done-enter',
    // 			exit: 'my-exit',
    // 			exitActive: 'my-active-exit',
    // 			exitDone: 'my-done-exit'
    // 		}}
    // 		key={location.pathname}
    // 		unmountOnExit
    // 	>
    <Switch>
      {ROUTES.map(ROUTE => (
        <Route
          key={ROUTE.path}
          path={ROUTE.path}
          exact={ROUTE.isExact}
          render={props => {
            Toast.hide();
            document.title = ROUTE.title;
            return <ROUTE.component {...props} />;
          }}
        />
      ))}
      <Redirect from="/" to="/home" />
    </Switch>
    // 	</CSSTransition>
    // </TransitionGroup>
  );
}
export default withRouter(AutoRouter);
