import commenPromise, { axiosPostFactory } from "./commenPromise";

export default {
  /**
   * @name: 附件上传
   * @param {*} data
   */
  uploadFile(data) {
    return axiosPostFactory({
      headers: { "Content-Type": "multipart/form-data" },
      data,
      url: "/pr/fileInfo/upload",
    });
  },
  /**
   * 获取公司主体列表
   */
  getCompanyList() {
    return commenPromise({
      url: "/base/company/list",
    });
  },
};
