---
title: 包
intro: '使用 REST API 与 {% data variables.product.prodname_registry %} 交互。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: a40709d8c51e445fb815c78eadbdb7886b5d60db
ms.sourcegitcommit: 6185352bc563024d22dee0b257e2775cadd5b797
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 12/09/2022
ms.locfileid: '148192823'
---
## 关于 {% data variables.product.prodname_registry %}

可以使用 REST API 管理 {% data variables.product.prodname_dotcom %} 存储库和组织中的包。 有关详细信息，请参阅“[还原和删除包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。

若要使用 REST API 管理 {% data variables.product.prodname_registry %}，必须使用 {% data variables.product.pat_v1 %} 进行身份验证。
  - 要访问包元数据，令牌必须包含 `read:packages` 范围。
  - 要删除包和包版本，令牌必须包含 `read:packages` 和 `delete:packages` 范围。
  - 要还原包和包版本，令牌必须包含 `read:packages` 和 `write:packages` 范围。

如果包位于支持精细权限的注册表中，则令牌不需要 `repo` 范围即可访问或管理此包。 如果包位于仅支持存储库范围权限的注册表中，则令牌还必须包括 `repo` 范围，因为包继承了 {% data variables.product.prodname_dotcom %} 存储库的权限。 有关仅支持存储库范围权限的注册表列表，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#permissions-for-repository-scoped-packages)”。

若要访问启用了 SSO 的组织中的资源，必须为 {% data variables.product.pat_v1 %} 启用 SSO。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[授权 {% data variables.product.pat_generic %} 以用于 SAML 单一登录](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}”。{% endif %}
