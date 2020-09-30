# h5+React 模版

## 使用技术栈

`react` + `hook` + `mobx` + `less(modules)`

## 开发前必读

[react](https://react.docschina.org/) + [mobx](https://mobx.js.org/README.html) + [less(modoles)](http://www.ruanyifeng.com/blog/2016/06/css_modules.html)

## 目录说明

```js
h5-react
|  public                 // 静态文件
|
└─src
    │  index.js           // 页面根组件
    │  AutoRouter.js      // 自定义路由表
    ├─assets              // 静态资源目录
    │  ├─img              // 图片
    │  ├─css              // 公共scss/css文件
    ├─components          // 组件目录
    ├─services            // 统一的数据请求方法
    ├─stores              // mobx文件
    │
    └─utils               // 工具类
    | ├─productionId.js   // ID生成器
    ├─pages               // 业务页面
    ├─plop-templates      // plop模版文件
│  .commitlintrc.js       // git提交规范
│  .editorconfig          // eslint风格配置
│  .eslintignore          // eslint忽略配置
|  .eslintrc.js           // eslint配置
|  .gitignore             // git提交忽略
|  postcss.config.js      // css相关配置
|  tsconfig.json          // ts配置
│  .babelrc               // babel配置
|  .prettierrc            // 编辑器配置
│  package-lock.json      // package锁定文件
│  package.json           // package配置
│  README.md              // readme
|  webpack.config.js      // webpack配置
|  devProxy.js            // 代理配置文件
|  todo.md                // 待开发说明
|  plopfile.js            // plop命令入口文件
```

## 项目中的特殊点交代

在项目中的特殊点需要在 readme 中交代一下，方便之后的同事快速了解项目，减小同事之间的维护成本，当然如果之后是自己维护，时间比较久之后也方便自己快速了解项目和开发疑难点

有需求未完成的情况，需要在 todo 中表明出来，防止之后的开发和产品之间有所误会

## 关于注释

```js
// TODO 功能未完成，待完善
// FIXME 待修复
// XXX 实现方法待确认
// NOTE 代码功能说明
// HACK 此处写法有待优化
// BUG 此处有 Bug
```

[其他的注释详情](https://0227vera.github.io/posts/tool/%E6%B3%A8%E9%87%8A.html)

## git提交规范

- init: 初始化项目
- feat: 新功能（feature）
- fix: 修补bug
- docs: 文档（documentation）
- style: 格式（不影响代码运行的变动）
- refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
- test: 增加测试
- chore: 构建过程或辅助工具的变动
- perf: 项目优化
- ci: 进行ci

## 祝愿

```html
<!--
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑       永不宕机     永无BUG
 -->
```
