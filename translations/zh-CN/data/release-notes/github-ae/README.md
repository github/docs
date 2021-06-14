# GitHub AE 版本说明

在此处渲染：https://docs.github.com/en/github-ae@latest/admin/release-notes

## 工作原理

### 占位符内容文件

内容文件存在于 `content/admin/release-notes.md` 中。 它有一个特殊的前辅文属性 `layout: release-notes`，无 Markdown 内容。 发行说明的来源来自 YAML 数据。

### YAML 来源

版本说明的源数据位于此目录 (`data/release-notes/github-ae`)。

目录按月命名。 YAML 文件由每周发布的数据命名。

必须在 YAML 文件中设置名为 `currentWeek` 的布尔属性。 每次不超过一个文件可将此属性设置为真。

请注意，补丁文件可由可选的 `deprecated: true` 属性单独废弃（即在文档网站上隐藏）。

### 中间件处理

YAML 数据由 `middleware/contextualizers/release-notes.js` 处理和排序，并添加到 `context` 对象。

### 布局

`context` 对象数据由 `layouts/release-notes.html` 和 `includes/github-ae-release-notes.html` 渲染。

发行说明页面有自定义设计，在 `stylesheets/release-notes.scss` 中使用 CSS，在 `javascripts/release-notes.js` 中使用客户端 JavaScript。

### 架构

验证 YAML 数据的模式存在于 `tests/helpers/schemas/ghae-release-notes-schema.js` 中。 查看架构文件来了解必需和可选的属性。

架构在 `tests/linting/lint-files.js` 中执行测试。 如果数据未通过验证，测试将失败。
