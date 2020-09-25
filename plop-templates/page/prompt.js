const { notEmpty } = require("../utils.js")

module.exports = {
  description: "自动生成一个页面",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入页面的名称",
      validate: notEmpty("name"),
    },
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "src/pages/{{properCase name}}/{{properCase name}}.jsx",
        templateFile: "plop-templates/page/template.hbs",
      },
      {
        type: "add",
        path:
          "src/pages/{{properCase name}}/style/{{properCase name}}Style.less",
        templateFile: "plop-templates/page/style.hbs",
      },
      {
        type: "add",
        path: "src/pages/{{properCase name}}/index.js",
        templateFile: "plop-templates/page/index.hbs",
      },
    ]
    return actions
  },
}
