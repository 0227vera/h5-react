import axios from "axios";
import { Toast } from "antd-mobile";

function formatResponse({ code, status, message, msg, data }) {
  return {
    code: code != null ? code : status,
    status,
    message: message != null ? message : msg,
    data,
  };
}

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Galaxy-Application-Id"] =
  "12299d7057164ed99f1b43dd8792647b";
axios.defaults.timeout = 0;

axios.interceptors.response.use(response => {
  const res = formatResponse(response.data);
  // 每分钟读160个字
  const perTime = 60 / 200;
  res.url = response.request.responseURL;
  if (res.code === 1 || res.code === 0) {
    if (response.config.successMsg) {
      Toast.success(
        response.config.successMsg,
        response.config.successMsg.length * perTime
      );
    }
    return res.data || {};
  }
  Toast.fail(
    res.message || "请求出错",
    res.message ? res.message.length * perTime : 1
  );

  return null;
});
