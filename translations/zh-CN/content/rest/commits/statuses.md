---
title: 提交状态
intro: 提交状态 API 允许外部服务将提交标记为某个状态，然后在涉及这些提交的拉取请求中反映出来。
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 4c75b4817ecddad0e91460d7d12eddabc634d588
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147882293'
---
## 关于提交状态 API

提交状态 API 允许外部服务将提交标记为 `error`、`failure`、`pending` 或 `success` 状态，然后在涉及这些提交的拉取请求中反映出来。 状态还可以选择包含 `description` 和 `target_url`，强烈建议使用它们，因为它们使状态在 GitHub UI 中更有用。

例如，持续集成服务的一个常见用途是使用状态将提交标记为通过或失败的构建。  `target_url` 将是到构建输出的完整 URL，而 `description` 将是构建过程中发生情况的高级摘要。

状态可以包括 `context` 以指示提供该状态的服务是什么。 例如，你可以让持续集成服务推送上下文为 `ci` 的状态，让安全审核工具推送上下文为 `security` 的状态。  然后，可以使用[获取组合状态作为特定引用](/rest/reference/commits#get-the-combined-status-for-a-specific-reference)来检索提交的完整状态。

请注意，`repo:status` [OAuth 范围](/developers/apps/scopes-for-oauth-apps)授予对状态的目标访问权限，而不授予对存储库代码的访问权限，同时 `repo` 范围授予对代码和状态的权限。

如果你正在开发 GitHub 应用程序，并希望提供有关外部服务的更多信息，则可能需要使用[检查 API](/rest/reference/checks)。
