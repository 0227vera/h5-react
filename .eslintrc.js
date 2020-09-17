module.exports = {
  extends: [
    "react-app", //  react帮配置好了一些语法，譬如箭头函数
    "airbnb",
    "plugin:prettier/recommended", // prettier配置
  ],
  env: {
    node: true,
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    "import/first": 1, // 库的引用需要放在文件的开头，这个由于习惯，喜欢把一些逻辑放在一起写，暂时给为警告
    "no-unused-expressions": 1,
    "react/jsx-pascal-case": 0,
    "react/destructuring-assignment": [
      true,
      "always",
      {
        ignoreClassFields: false,
      },
    ],

    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "only-multiline", // 关闭airbnb对函数调用参数，非一行，最后也要加逗号的限制
      },
    ],
    "react/jsx-filename-extension": 0, // 关闭airbnb对于jsx必须写在jsx文件中的设置，在mobx中有时候是需要写jsx的
    "no-param-reassign": 0, // 关闭禁止对传参的改变，因为有些地方确实需要改变
    "react/prop-types": 0, // 关闭airbnb对于必须添加prop-types的校验，这个看个人习惯，我自己是觉得有些是可以不需要检验的，在书写的时候给好默认值就可以,感觉加上之后大大减小了开发效率
    "react/jsx-one-expression-per-line": 0, // 关闭要求一个表达式必须换行的要求，和Prettier冲突了
    "react/jsx-wrap-multilines": 0, // 关闭要求jsx属性中写jsx必须要加括号，和Prettier冲突了
    "jsx-a11y/no-static-element-interactions": 0, // 关闭非交互元素加事件必须加 role
    "jsx-a11y/click-events-have-key-events": 0, // 关闭click事件要求有对应键盘事件
    "no-bitwise": 0, // 不让用位操作符，在我的书写习惯里，有一些地方是会使用到位运算的
    "react/jsx-props-no-spreading": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "import/no-duplicates": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,
  },
}
