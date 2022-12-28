---
ms.openlocfilehash: bf7a1cdb9c8b1300ef8ba8ab2dd427a9b5d28128
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: "148193224"
---
# GitHub Enterprise Server 发行说明

已呈现在此处： https://docs.github.com/en/enterprise-server@latest/admin/release-notes

## 向已弃用的 GitHub Enterprise Server 版本添加发行说明

根据[此问题模板](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md)弃用 GitHub Enterprise Server 版本期间，Docs 工程会从 `github/docs-internal` 中删除包含版本发行说明的 YAML 文件。

如果利益干系人请求更新已弃用的发行说明，可通过完成以下步骤来更新说明。

1. 查看长时间运行的分支 <code>enterprise-VERSION-release</code> 并创建 PR，以更新该分支上已弃用版本的发行说明。
2. 联系 #docs-engineering，请求重新抓取和更新 Azure 中存储的内容。 请参阅[弃用清单](/.github/actions-scripts/enterprise-server-issue-templates/deprecation-issue.md)中有关重新抓取内容的部分。

## 工作原理

### 占位符内容文件

内容文件存在于 `content/admin/release-notes.md` 中。 它有一个特殊的前辅文属性 `layout: release-notes`，无 Markdown 内容。 发行说明的来源来自 YAML 数据。

### YAML 来源

发行说明的源数据位于此目录 (`data/release-notes/enterprise-server`) 中。

目录按 GHES 版本编号命名（带有连字符而不是句点）。

每个目录中的 YAML 文件按补丁编号命名。 某些修补程序文件名可能以 `-rc<num>.yml` 结尾，这表示它是候选发布。 候选发布文件还需要 YAML 数据中的 `release_candidate: true`。

已弃用的 GHES 版本的发行说明（参见 `lib/enterprise-server-releases.js`）不会从网站删除，并且将始终与当前支持的版本一起显示。

请注意，可以使用可选的 `deprecated: true` 属性单独弃用修补程序文件（即隐藏在文档网站上）。

### 中间件处理

YAML 数据由 `middleware/contextualizers/ghes-release-notes.js` 处理和排序，并添加到 `context` 对象。

### 布局

`context` 对象数据由 `components/release-notes` 呈现。

发行说明页在 `stylesheets/release-notes.scss` 中使用 CSS 自定义设计。

### 架构

验证 YAML 数据的架构存在于 `tests/helpers/schemas/release-notes-schema.js` 中。 查看架构文件来了解必需和可选的属性。

架构在 `tests/linting/lint-files.js` 中执行测试。 如果数据未通过验证，测试将失败。
