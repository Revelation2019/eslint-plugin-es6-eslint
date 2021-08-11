# eslint-plugin-es6-eslint

检视freemarker前后端未分离项目中脚本是否使用ES6+语法

## 安装

首先，你需要安装 [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

接着，安装 `eslint-plugin-es6-eslint`:

```
$ npm install eslint-plugin-es6-eslint --save-dev
```


## 使用
添加`es6-eslint` 到`.eslintrc`，你可以省略`eslint-plugin-`前缀：

```json
{
    "plugins": [
        "es6-eslint"
    ]
}
```

然后在规则部分配置您要使用的规则：

```json
{
    "rules": {
        "es6-eslint/es6-syntax": [2, "always"]
    }
}
```
该插件有导出默认规则，如果你没有自定义规则的需求，可以在`extends`字段中添加默认规则：

```json
{
    "extends": ["plugin:es6-eslint/recommended"]
}
```

另外，该插件是基于`esprima`解析器做的，如果`eslint`服务控制台有报解析有关的错误，请指定该解析器

```json
{
    "parser": "esprima"
}
```
## 支持的规则

- ✔️如果规则属于`recommended`配置
- 🛠如果规则报告的某些问题可以通过`--fix` 命令行选项自动修复
- 💡如果规则报告的某些问题可以通过编辑器建议手动修复

| 规则                                                         | **✔️** | **🛠** | **💡** | **描述**                   |
| ------------------------------------------------------------ | ----- | ----- | ----- | -------------------------- |
| [es6-syntax](https://github.com/Revelation2019/eslint-plugin-es6-eslint/blob/main/docs/rules/es6-syntax.md) | **✔️** | **🛠** |       | 不允许使用ES6+语法     |





