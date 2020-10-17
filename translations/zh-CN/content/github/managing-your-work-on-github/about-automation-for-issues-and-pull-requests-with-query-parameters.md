---
title: 关于使用参数自动化议题和拉取请求
intro: 可以使用查询参数共享包含定制信息的 URL。
redirect_from:
  - /articles/about-automation-for-issues-and-pull-requests-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

查询参数是 URL 中可以定制的部分，用于在 {% data variables.product.prodname_dotcom %} 上共享特定的网页视图，如搜索过滤结果或议题模板。 要创建自己的查询参数，必须将键与值进行配对。

{% tip %}

**提示：**也可使用默认标签、受理人和议题标题创建议题模板。 更多信息请参阅“[为仓库配置议题模板](/articles/configuring-issue-templates-for-your-repository)”或“[手动为仓库创建单一议题模板](/articles/manually-creating-a-single-issue-template-for-your-repository)”。

{% endtip %}

必须具有适当的权限才可执行使用相关查询参数的操作。 例如，必须具有向议题添加标签的权限才可使用 `labels` 查询参数。

如果使用查询参数创建无效的 URL，或者没有适当的权限，URL 将返回 404 错误页。

### 支持的查询参数

| 查询参数        | 示例                                                                                                                                                                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `正文`        | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&body=Fixes+the+problem.` creates a pull request, comparing the branches `main` and `pull-request-test`, with the comment "Fixes the problem" in the pull request body. |
| `title`     | `https://github.com/octo-org/octo-repo/issues/new?labels=bug&title=New+bug+report` 使用标签 "bug" 和标题 "New bug report" 创建议题。                                                                                                                                    |
| `labels`    | `https://github.com/octo-org/octo-repo/compare/main...pull-request-test?quick_pull=1&labels=bug` creates a pull request, comparing the branches `main` and `pull-request-test`, with the label "bug."                                                       |
| `模板`        | `https://github.com/octo-org/octo-repo/issues/new?template=issue_template.md` 使用模板在议题正文中创建议题。                                                                                                                                                                   |
| `里程碑`       | `https://github.com/octo-org/octo-repo/issues/new?milestone=testing+milestones` 创建包含里程碑 "testing milestones" 的议题。                                                                                                                                               |
| `assignees` | `https://github.com/octo-org/octo-repo/issues/new?assignees=octocat` 创建议题并分配到 @octocat。                                                                                                                                                                         |
| `projects`  | `https://github.com/octo-org/octo-repo/issues/new?title=Bug+fix&projects=octo-org/1` 创建标题为 "Bug fix" 的议题并将其添加到组织的项目板 1。                                                                                                                                     |

### 使用自定义模板填写议题和拉取请求

{% data reusables.repositories.legacy-issue-template-tip %}

您可以使用 `template` 查询参数指定模板自动填充议题或拉取请求正文。 `template` 查询参数支持仓库根目录 `docs/` 或 `.github/` 的 `ISSUE_TEMPLATE` 或 `PULL_REQUEST_TEMPLATE` 子目录中的模板。

如果仓库只包含默认拉取请求或议题模板，则任何新议题或拉取请求在正文中都会有默认模板。

更多信息请参阅“[为仓库创建拉取请求模板](/articles/creating-a-pull-request-template-for-your-repository)”或“[手动为仓库创建单一议题模板](/articles/manually-creating-a-single-issue-template-for-your-repository)”。

### 延伸阅读

- "[使用查询参数自动化发行版表单](/articles/automation-for-release-forms-with-query-parameters)"
