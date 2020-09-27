const viewGenerator = require("./plop-templates/page/prompt")
const componentGenerator = require("./plop-templates/components/prompt")
const storeGenerator = require("./plop-templates/stores/prompt")

module.exports = function (plop) {
  plop.setGenerator("page", viewGenerator)
  plop.setGenerator("component", componentGenerator)
  plop.setGenerator("store", storeGenerator)
}
