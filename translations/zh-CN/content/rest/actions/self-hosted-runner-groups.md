---
title: 自托管运行器组
intro: 自托管运行器组 API 允许您管理自托运行器组。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ca08d05414764250a11dc94bac763f5aa56060be
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064368'
---
## 关于自托管运行器组 API

自托管运行器组 API 允许你管理自托管运行器组。 有关详细信息，请参阅“[使用组管理对自托管运行器的访问](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups)”。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}必须具有对存储库的 `administration` 权限，或具有对组织的 `organization_self_hosted_runners` 权限。 经过身份验证的用户必须具有对存储库或组织的管理员访问权限或者企业的 `manage_runners:enterprise` 作用域才能使用此 API。
