---
title: LDAP
intro: '您可以使用 LDAP API 来更新 {% data variables.product.product_name %} 用户或团队与其关联的 LDAP 条目之间的帐户关系，或者排队新同步。'
versions:
  ghes: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: 0948fbf02aea86d01a7034ae6b1836c0f69ca6e2
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065336'
---
通过 LDAP 映射端点，您可以更新用户或团队所映射的识别名称 (DN) 。 请注意，仅当 {% data variables.product.product_name %} 设备 [启用了 LDAP 同步](/enterprise/admin/authentication/using-ldap)时，LDAP 终结点通常才有效。 即使已禁用 LDAP 同步，也可以在启用 LDAP 后使用[为用户更新 LDAP 映射](#update-ldap-mapping-for-a-user)终结点。
