---
title: 使用查询参数自动化发行版表单
intro: 要通过使用自定义信息自动填充新发行版表单来快速创建发行版，可以添加查询参数到发行版表单页面的 URL。
redirect_from:
  - /articles/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/automation-for-release-forms-with-query-parameters
  - /github/administering-a-repository/releasing-projects-on-github/automation-for-release-forms-with-query-parameters
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Automate release forms
ms.openlocfilehash: 75c7fe4b79a6103060151742f1277861f23785c4
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145193561'
---
查询参数是 URL 中可以定制的部分，用于在 {% data variables.product.prodname_dotcom %}上共享特定的网页视图，如搜索过滤结果、议题模板或发行版表单页面。 要创建自己的查询参数，必须将键与值进行配对。

必须具有适当的权限才可执行使用相关查询参数的操作。 例如，必须具有创建发行版的权限才可预填发行版表单。 有关详细信息，请参阅“[管理存储库中的版本](/github/administering-a-repository/managing-releases-in-a-repository)”。

如果使用查询参数创建无效的 URL，或者没有适当的权限，URL 将返回 404 错误页。  

## 支持的查询参数

查询参数 | 示例
---  | ---
`tag` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1` 基于名为“v1.0.1”的标记创建版本。
`target` | `https://github.com/octo-org/octo-repo/releases/new?target=release-1.0.1` 根据对“release-1.0.1”分支的最新提交创建版本。
`title` | `https://github.com/octo-org/octo-repo/releases/new?tag=v1.0.1&title=octo-1.0.1` 根据标记“v1.0.1”创建版本“octo-1.0.1”。
`body` | `https://github.com/octo-org/octo-repo/releases/new?body=Adds+widgets+support` 创建版本正文描述为“添加小组件支持”的版本。
`prerelease` | `https://github.com/octo-org/octo-repo/releases/new?prerelease=1` 创建将识别为不可直接用于生产的版本。

## 延伸阅读

- [从 URL 查询创建议题](/issues/tracking-your-work-with-issues/creating-an-issue#creating-an-issue-from-a-url-query)
- [使用查询参数创建拉取请求](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/using-query-parameters-to-create-a-pull-request/)
