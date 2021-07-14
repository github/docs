# GitHub Enterprise Server 发行说明

在此处渲染：https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## 工作原理

### 占位符内容文件

内容文件存在于 `content/admin/release-notes.md` 中。 它有一个特殊的前辅文属性 `layout: release-notes`，无 Markdown 内容。 发行说明的来源来自 YAML 数据。

### YAML 来源

发行说明的源数据位于此目录 (`data/release-notes/enterprise-server`)。

目录按 GHES 版本编号命名（带有连字符而不是句点）。

每个目录中的 YAML 文件按补丁编号命名。 一些补丁文件名可能以 `-rc<num>.yml` 结尾，这意味着它是一个候选版本。 版本候选文件还需要 YAML 数据中有 `release_candidate: true`。

已弃用 GHES 版本（参阅 `lib/enterprise-server-releases.js`）的发行说明 **不会**从站点中删除 ，将始终与当前支持的版本一起显示。

请注意，补丁文件可由可选的 `deprecated: true` 属性单独废弃（即在文档网站上隐藏）。

### 中间件处理

YAML 数据由 `middleware/contextualizers/release-notes.js` 处理和排序，并添加到 `context` 对象。

### 布局

`context` 对象数据由 `layouts/release-notes.html` 和 `includes/enterprise-server-release-notes.html` 渲染。

发行说明页面有自定义设计，在 `stylesheets/release-notes.scss` 中使用 CSS，在 `javascripts/release-notes.js` 中使用客户端 JavaScript。

### 架构

验证 YAML 数据的模式存在于 `tests/helpers/schemas/ghes-release-notes-schema.js` 中。 查看架构文件来了解必需和可选的属性。

架构在 `tests/linting/lint-files.js` 中执行测试。 如果数据未通过验证，测试将失败。
