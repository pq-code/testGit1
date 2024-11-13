import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default {
  // 指定代码运行的环境
  "env": {
      "browser": true,  // 允许使用浏览器环境中的全局变量，如 window 和 document
      "es2021": true  // 支持 ECMAScript 2021 的语法
  },
  // 继承一些推荐的配置和规则集
  "extends": [
      "eslint:recommended",  // 继承 ESLint 的推荐规则
      "plugin:vue/essential",  // 继承 Vue 的基础规则集，适用于 Vue.js 项目
      "plugin:@typescript-eslint/recommended"  // 继承 TypeScript 的推荐规则集，适用于 TypeScript 项目
  ],
  // 解析器选项，定义如何解析不同的 ECMAScript 版本和模块
  "parserOptions": {
      "ecmaVersion": 12,  // 指定 ECMAScript 版本为 12（ES2021）
      "parser": "@typescript-eslint/parser",  // 使用 @typescript-eslint/parser 解析 TypeScript 代码
      "sourceType": "module"  // 指定使用 ES 模块的模块系统
  },
  // 插件部分，增加对 Vue 和 TypeScript 的支持
  "plugins": [
      "vue",  // 支持 Vue.js 代码的解析和校验
      "@typescript-eslint"  // 支持 TypeScript 代码的解析和校验
  ],
  // 自定义的规则配置（当前为空，但可以添加自定义规则）
  "rules": {
      // 例如： "semi": ["error", "always"] 强制要求语句以分号结束
  }
};
