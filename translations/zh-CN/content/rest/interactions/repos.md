---
title: 存储库交互
shortTitle: Repository
intro: 存储库交互 API 允许具有所有者或管理员访问权限的人员临时限制可以在公共存储库中评论、打开问题或创建拉取请求的用户类型。
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: e1d7d0137ddc2334bb08e17a0c8d7069c13d982d
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/11/2022
ms.locfileid: '147064664'
---
## 关于存储库交互 API

存储库交互 API 允许具有所有者或管理员访问权限的人员临时限制可以在公共存储库中评论、打开问题或创建拉取请求的用户类型。 {% data reusables.interactions.interactions-detail %} 以下是有关 {% data variables.product.product_name %} 用户类型的更多信息：

* 仓库中的 {% data reusables.interactions.existing-user-limit-definition %}。
* 仓库中的 {% data reusables.interactions.contributor-user-limit-definition %}。
* 仓库中的 {% data reusables.interactions.collaborator-user-limit-definition %}。

如果对拥有该仓库的用户或组织启用了交互限制，单个仓库的限制就不能更改。 而应使用[用户](#user)或[组织](#organization)交互终结点来更改交互限制。
