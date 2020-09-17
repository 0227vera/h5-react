import commenPromise, { axiosPostFactory } from "./commenPromise"

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
    })
  },
  /**
   * 获取公司主体列表
   */
  getCompanyList() {
    return commenPromise({
      url: "/base/company/list",
    })
  },
  /**
   * 获取hr部门列表
   */
  getHrDepartList() {
    return commenPromise({
      url: "/base/account/getOrgs",
    })
  },
  /**
   * 获取当前用户信息
   */
  getCurrentUserInfo() {
    return commenPromise({
      url: "/base/account/info",
    })
  },
  /**
   * 获取当前用户的公司主体信息
   */
  getCurrentCompany() {
    return commenPromise({
      url: "/base/company/empCompany",
    })
  },
  /**
   * 获取费用类型列表
   */
  getFeeTypeLst(params) {
    return commenPromise({
      url: "/base/costCategory/reimbCostTypes",
      params,
    })
  },
  /**
   * 获取币种列表
   */
  getCurrencysForReimb() {
    return commenPromise({
      url: "/base/companyCurrency/findCurrencysForReimb",
    })
  },
  /**
   * 人员选择
   */
  getPersonList(data) {
    return axiosPostFactory({
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data,
      url: "module/ac/api/account/grid",
      baseURL: "/",
    })
  },
  /**
   * 获取当前人的收款账号
   */
  getBankAccount(params) {
    return commenPromise({
      url: "/base/account/empBankAccount",
      params,
    })
  },
  /**
   * 获取默认报销币种
   */
  getDefaultReimb() {
    return commenPromise({
      url: "/base/companyCurrency/findDefaultCurrencyForReimb",
    })
  },
}
