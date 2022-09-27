---
title: 机密扫描
intro: 使用机密扫描 API 从存储库中检索和更新机密警报。
versions:
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/secret-scanning
ms.openlocfilehash: d17aa63bb3d7e71adb310c66cabb05a83776b78f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: '147880122'
---
{% data reusables.secret-scanning.api-beta %}

## 关于机密扫描 API

使用 {% data variables.product.prodname_secret_scanning %} API，你可以：

- 为存储库启用或禁用 {% data variables.product.prodname_secret_scanning %}{% ifversion secret-scanning-push-protection %} 和推送保护{% endif %}。 有关详细信息，请参阅“[存储库](/rest/repos/repos#update-a-repository)”，并展开 REST API 文档中的“`security_and_analysis` 对象的属性”部分。
- 从存储库检索和更新 {% data variables.product.prodname_secret_scanning_GHAS %} 警报。 有关更多详细信息，请参阅以下部分。

有关 {% data variables.product.prodname_secret_scanning %} 的详细信息，请参阅“[关于 {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)”。
