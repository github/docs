---
title: 使用查询参数自动化发行版表单
intro: 要通过使用自定义信息自动填充新发行版表单来快速创建发行版，可以添加查询参数到发行版表单页面的 URL。
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Repositories
---

查询参数是 URL 中可以定制的部分，用于在 {% data variables.product.prodname_dotcom %}上共享特定的网页视图，如搜索过滤结果、议题模板或发行版表单页面。 要创建自己的查询参数，必须将键与值进行配对。

必须具有适当的权限才可执行使用相关查询参数的操作。 例如，必须具有创建发行版的权限才可预填发行版表单。 更多信息请参阅“[管理仓库中的发行版](/github/administering-a-repository/managing-releases-in-a-repository)”。

如果使用查询参数创建无效的 URL，或者没有适当的权限，URL 将返回 404 错误页。

### 支持的查询参数

| 查询参数         | 示例                                                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------------------------------------- |
| `标记`         | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` 根据标记 "v1.0.1" 创建发行版。                                   |
| `target`     | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` 根据对 "release-1.0.1" 分支的最新提交创建发行版。            |
| `title`      | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` 根据标记 "v1.0.1" 创建发行版 "octo-1.0.1"。 |
| `正文`         | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` 创建发行版正文描述为 "Adds widget support" 的发行版。  |
| `prerelease` | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` 创建将识别为不可直接用于生产的发行版。                                  |

### 延伸阅读

- "[关于使用查询参数自动化议题和拉取请求](/articles/about-automation-for-issues-and-pull-requests-with-query-parameters)"
