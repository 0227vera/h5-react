const viewGenerator = require("./plop-templates/page/prompt")
const componentGenerator = require("./plop-templates/components/prompt")

module.exports = function (plop) {
  plop.setGenerator("page", viewGenerator)
  plop.setGenerator("component", componentGenerator)
}
