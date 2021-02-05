# 全栈项目

[![lang](https://img.shields.io/badge/lang-typescript-informational)](https://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)

一个完整的基于 [vue 3.x][vue3] 的全栈项目。

## 目录结构

```bash
Project/
├── .vscode/
├── apps/                    --- 独立应用
|   ├── api/
|   └── web/
├── libs/                     --- 公共模块
├── lerna.json
├── tsconfig.base.json
├── tsconfig.json
└── vscode.code-workspace
```

## 快速启动

注意启动项目前，必须先全局安装 `yarn` 和 `lerna` 模块。

```shell
# 安装依赖
$ yarn bootstrap

# 启动工程
$ yarn start
```

## 技术栈

- [lerna][lerna]
- [vitejs](https://vitejs.dev/)
- [vue.js](vue3)
- [koa](https://koajs.com/)
- [sass](https://sass-lang.com/)
- [typescript](https://www.typescriptlang.org/)
- [eslint](https://eslint.org/)
- [prettier](https://prettier.io/)

## License

- MIT

[lerna]: https://lerna.js.org/
[vue3]: https://v3.vuejs.org/
