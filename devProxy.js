const proxyHost = "{{projectProxyUrl}}"
module.exports = {
  "{{projectContext}}": {
    target: "{{projectProxyUrl}}",
    host: proxyHost,
    secure: false,
    changeOrigin: true,
  },
  "/module/auth/api/login/go": {
    target: "http://test.oa.sogou-inc.com/",
    secure: false,
    changeOrigin: true,
  },
}
