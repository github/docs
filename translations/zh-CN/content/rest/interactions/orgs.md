---
title: 组织交互
shortTitle: Organization
intro: 组织交互 API 允许组织所有者临时限制哪类用户可以在组织的公共存储库中发表评论、开设问题或创建拉取请求。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: f06bfbe50c7fa43d03329d69bba8816e4559565a
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062464'
---
## 关于组织交互 API

组织交互 API 允许组织所有者临时限制哪类用户可以在组织的公共存储库中发表评论、开设问题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* 组织中的 {% data reusables.interactions.existing-user-limit-definition %}。
* 组织中的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 组织中的 {% data reusables.interactions.collaborator-user-limit-definition %}。

在组织级别设置交互限制将覆盖为组织拥有的各个仓库设置的任何交互限制。 要为组织拥有的个别存储库设置不同的交互限制，请改为使用[存储库](#repository)交互终结点。
