---
title: 用户交互
shortTitle: User
allowTitleToDifferFromFilename: true
intro: 用户交互 API 允许你临时限制哪类用户可以在公共存储库上发表评论、开启问题或创建拉取请求。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: e61096e6f09a9c17608e67846c138142c527c314
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147066896'
---
## 关于用户交互 API

用户交互 API 允许你临时限制哪类用户可以在公共存储库上发表评论、开启问题或创建拉取请求。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* 与仓库交互产生的 {% data reusables.interactions.existing-user-limit-definition %}。
* 与仓库交互产生的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 与仓库交互产生的 {% data reusables.interactions.collaborator-user-limit-definition %}。

在用户级别设置交互限制将覆盖为用户拥有的各个仓库设置的任何交互限制。 要为用户拥有的个别存储库设置不同的交互限制，请使用[存储库](#repository)交互终结点。
