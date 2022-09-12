---
title: 自托管运行程序
intro: 自托管运行器 API 支持注册、查看和删除自托管的运行器。
topics:
  - API
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 5fb3b281aab7120adeef45728ea0e4a16ae389a7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147064376'
---
## 关于自托管运行器 API

自托管运行器 API 支持注册、查看和删除自托管的运行器。 {% data reusables.actions.about-self-hosted-runners %} 有关详细信息，请参阅“[托管自己的运行器](/actions/hosting-your-own-runners)”。

{% data reusables.actions.actions-authentication %} {% data variables.product.prodname_github_apps %}必须具有对存储库的 `administration` 权限，或具有对组织的 `organization_self_hosted_runners` 权限。 经过身份验证的用户必须具有对存储库或组织的管理员访问权限或者企业的 `manage_runners:enterprise` 作用域才能使用此 API。
