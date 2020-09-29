const { notEmpty } = require("../utils.js");

module.exports = {
  description: "自动生成一个页面",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入页面的名称",
      validate: notEmpty("name"),
    },
    {
      type: "input",
      name: "title",
      message: "请输入页面的标题",
      validate: notEmpty("title"),
    },
    {
      type: "input",
      name: "mobxName",
      message:
        "页面是否需要mobx模块，如果需要输入对应名字，如果不需要为空回车直接过去",
    },
    {
      type: "confirm",
      name: "needRouter",
      default: true,
      message: "是否需要自动添加router表?",
    },
    {
      type: "confirm",
      name: "needApi",
      default: true,
      message: "是否需要services文件以及相关配置?",
    },
  ],
  actions: data => {
    const { needApi, needRouter } = data;
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
    ];

    if (needRouter) {
      actions.push({
        type: "append",
        pattern: /(\/\* plop auto add router import \*\/)/,
        path: "src/AutoRouter.jsx",
        template:
          'import {{ properCase name }} from "./pages/{{properCase name}}"',
      });
      actions.push({
        type: "append",
        pattern: /(\/\* plop auto add router config \*\/)/,
        path: "src/AutoRouter.jsx",
        template: `  {
    path: "/{{ snakeCase name }}",
    isExact: true,
    title: "{{ title }}",
    component: {{ properCase name }},
  },`,
      });
    }

    if (needApi) {
      actions.push({
        type: "add",
        path: "src/services/{{ properCase name }}Api.js",
        templateFile: "plop-templates/page/services.hbs",
      });
      actions.push({
        type: "append",
        pattern: /(\/\* plop auto add services import \*\/)/,
        path: "src/services/services.js",
        template:
          'import {{ properCase name }}Api from "./{{properCase name}}Api"',
      });
      actions.push({
        type: "append",
        pattern: /(\/\* plop auto add services export \*\/)/,
        path: "src/services/services.js",
        template: "  ...{{properCase name}}Api,",
      });
    }
    return actions;
  },
};
