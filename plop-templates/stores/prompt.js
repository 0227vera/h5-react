const { notEmpty } = require("../utils.js");

module.exports = {
  description: "自动生成一个store模版",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入store的名称",
      validate: notEmpty("name"),
    },
  ],
  actions: () => {
    const actions = [
      {
        type: "add",
        path: "src/stores/{{properCase name}}.js",
        templateFile: "plop-templates/stores/stores.hbs",
      },
      {
        type: "append",
        pattern: /(\/\* plop auto add stores import \*\/)/,
        path: "src/index.js",
        template:
          'import {{ properCase name }} from "./stores/{{ properCase name }}"',
      },
      {
        type: "append",
        pattern: /(\/\* plop auto add stores \*\/)/,
        path: "src/index.js",
        template: "        {{ properCase name }},",
      },
    ];
    return actions;
  },
};
