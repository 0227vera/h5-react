import axios from "axios";
import qs from "qs";
import CommonApi from "./CommonApi";
/* plop auto add services import */

axios.interceptors.request.use(request => {
  if (
    request.data &&
    request.headers["Content-Type"] === "application/x-www-form-urlencoded"
  ) {
    request.data = qs.stringify(request.data, { allowDots: true });
  }
  return request;
});

export default {
  ...CommonApi,
  /* plop auto add services export */
};
