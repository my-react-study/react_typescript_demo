import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import { createStore } from "redux";
import reducer from "./reducers/index";
import { Provider } from "react-redux";
// 1、创建 store
const store = createStore(reducer);

ReactDOM.render(
  // 2、然后使用react-redux的Provider将props与容器连通起来
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
