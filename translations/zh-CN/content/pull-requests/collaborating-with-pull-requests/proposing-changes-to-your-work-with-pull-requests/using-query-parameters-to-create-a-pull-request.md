---
title: 使用查询参数创建拉取请求
intro: 使用查询参数创建自定义 URL，以打开预填了字段的拉取请求。
redirect_from:
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
---

您可以使用查询参数打开拉取请求。 查询参数是 URL 的可选部分，用于在 {% data variables.product.prodname_dotcom %} 上共享特定的网页视图，如搜索过滤结果或议题模板。 要创建自己的查询参数，必须将键与值进行配对。

{% tip %}

**提示：** 您也可以创建以默认标签、受理人和拉请求标题打开的拉请求模板。 更多信息请参阅“[使用模板鼓励有用的议题和拉取请求](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”。

{% endtip %}

必须具有适当的权限才可执行使用相关查询参数的操作。 例如，必须具有向拉取请求添加标签的权限才可使用 `labels` 查询参数。 更多信息请参阅“[组织的仓库角色](/organizations/managing-access-to-your-organizations-repositories/repository-roles-for-an-organization)”。

如果使用查询参数创建无效的 URL，或者没有适当的权限，URL 将返回 `404 未找到`错误页。 如果您创建的 URL 超过服务器限制，URL 将返回 `414 URI 过长`错误页面。

| 查询参数         | 示例                                                                                                                                                                                                                                                                                                                        |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `quick_pull` | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1` 创建将基本分支 `main` 与头部分支 `my-branch` 进行比较的拉取请求。 `quick_pull=1` 查询将您直接带到“打开拉取请求”页面。                                                                                                                                                              |
| `title`      | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=bug&title=Bug+fix+report` 使用标签“漏洞”和标题“漏洞修复”创建拉取请求。                                                                                                                                                                            |
| `正文`         | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&body=Describe+the+fix.` 创建标题为 "Bug fix" 的拉取请求，并在拉取请求正文中创建评论 "Describe the fix"。                                                                                                                                        |
| `labels`     | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&labels=help+wanted,bug` 使用标签 "help wanted" 和 "bug" 创建拉取请求。                                                                                                                                                                               |
| `里程碑`        | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&milestone=testing+milestones` 使用里程碑 "testing milestones" 创建拉取请求。                                                                                                                                                                         |
| `assignees`  | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&assignees=octocat` 创建拉取请求并将其分配到 @octocat。                                                                                                                                                                                                |
| `projects`   | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&title=Bug+fix&projects=octo-org/1` 创建标题为 "Bug fix" 的拉取请求并将其添加到组织的项目板 1。                                                                                                                                                              |
| `模板`         | `https://github.com/octo-org/octo-repo/compare/main...my-branch?quick_pull=1&template=issue_template.md` 使用模板在拉取请求正文中创建拉取请求。 `template` 查询参数支持仓库根目录 `docs/` 或 `.github/` 的 `PULL_REQUEST_TEMPLATE` 子目录中存储的模板。 更多信息请参阅“[使用模板鼓励有用的议题和拉取请求](/communities/using-templates-to-encourage-useful-issues-and-pull-requests)”。 |
