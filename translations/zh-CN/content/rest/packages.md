---
title: 包
intro: '通过 {% data variables.product.prodname_registry %} API，您可以管理 {% data variables.product.prodname_dotcom %} 仓库和组织的软件包。'
versions:
  fpt: '*'
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/packages
ms.openlocfilehash: 5edb7e30b296626a53fdc41806bcfba88718e6b3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147059920'
---
## 关于 {% data variables.product.prodname_registry %} API

{% data variables.product.prodname_registry %} API 允许您使用 REST API 管理包。 要了解有关还原或删除包的详细信息，请参阅“[还原和删除包](/packages/learn-github-packages/deleting-and-restoring-a-package)”。

要使用此 API ，您必须使用个人访问令牌进行验证。 
  - 要访问包元数据，令牌必须包含 `read:packages` 范围。
  - 要删除包和包版本，令牌必须包含 `read:packages` 和 `delete:packages` 范围。
  - 要还原包和包版本，令牌必须包含 `read:packages` 和 `write:packages` 范围。

如果你的 `package_type` 为 `npm`、`maven`、`rubygems` 或 `nuget`，则令牌还必须包含 `repo` 范围，因为你的包从 {% data variables.product.prodname_dotcom %} 存储库继承权限。 如果包在 {% data variables.product.prodname_container_registry %} 中，则你的 `package_type` 为 `container`，包和令牌不需要 `repo` 范围即可访问或管理此 `package_type`。 `container` 包提供与存储库不同的精细权限。 有关详细信息，请参阅“[关于 {% data variables.product.prodname_registry %} 的权限](/packages/learn-github-packages/about-permissions-for-github-packages#about-scopes-and-permissions-for-package-registries)”。

如果您想使用 {% data variables.product.prodname_registry %} API 访问已启用 SSO 的组织中的资源，则必须对个人访问令牌启用 SSO。 有关详细信息，请参阅 {% data variables.product.prodname_ghe_cloud %} 文档中的“[授权个人访问令牌以用于 SAML 单一登录](/github/authenticating-to-github/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on){% ifversion fpt %}”。{% else %}."{% endif %}
