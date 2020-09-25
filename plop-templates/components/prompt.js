const { notEmpty } = require("../utils.js")

module.exports = {
  description: "自动生成一个组件模版",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入组件的名称",
      validate: notEmpty("name"),
    },
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "src/components/{{properCase name}}/{{properCase name}}.jsx",
        templateFile: "plop-templates/components/template.hbs",
      },
      {
        type: "add",
        path:
          "src/components/{{properCase name}}/style/{{properCase name}}Style.less",
        templateFile: "plop-templates/page/style.hbs",
      },
      {
        type: "add",
        path: "src/components/{{properCase name}}/index.js",
        templateFile: "plop-templates/page/index.hbs",
      },
    ]
    return actions
  },
}
