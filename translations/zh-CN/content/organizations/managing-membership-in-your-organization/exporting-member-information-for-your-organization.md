---
title: 导出组织的成员信息
intro: 您可以直接从用户界面导出有关组织中成员的信息。
permissions: Organization owners can export member information for their organization.
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Export member information
ms.openlocfilehash: 2777e125f5eb43bfcf8ec1172db29fe7338bdbad
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145097347'
---
您可以导出有关组织中成员的信息。 如果要对组织内的用户执行审核，这将非常有用。

导出的信息包括：
- 用户名和显示名称详细信息
- 用户是否启用了双重身份验证
- 成员资格是公共的还是私有的
- 用户是组织所有者还是成员
- 用户上次活动的日期/时间（如需相关活动的完整列表，请参阅“[管理休眠用户](/admin/user-management/managing-users-in-your-enterprise/managing-dormant-users)”）
- 用户的 SAML 名称 ID（如果可用）

您可以直接从 {% data variables.product.product_name %} 用户界面或使用 API 获取成员信息。 本文介绍如何从 {% data variables.product.product_name %} 中获取成员信息。

有关 API 的详细信息，请参阅关于用户的 [GraphQL API](/graphql/reference/objects#user) 和 [REST API](/rest/reference/users) 文档。

{% data reusables.profile.access_org %} {% data reusables.user-settings.access_org %} {% data reusables.organizations.people %} {% data reusables.organizations.people-export %}
