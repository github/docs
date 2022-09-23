---
title: 团队同步
intro: '团队同步 API 允许你管理 {% data variables.product.product_name %} 团队与外部标识提供者 (IdP) 组之间的连接。'
versions:
  ghec: '*'
topics:
  - API
miniTocMaxHeadingLevel: 3
allowTitleToDifferFromFilename: true
ms.openlocfilehash: 6a5d379b1050e10f9e31e14ed2b094a684676737
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067160'
---
## 关于团队同步 API

要使用此 API，经过身份验证的用户必须是团队维护员或与团队关联的组织的所有者。 用于身份验证的令牌还需要获得授权才能与 IdP (SSO) 提供程序一起使用。 有关详细信息，请参阅“[授权用于 SAML 单一登录组织的个人访问令牌](/enterprise-cloud@latest/authentication/authenticating-with-saml-single-sign-on/authorizing-a-personal-access-token-for-use-with-saml-single-sign-on)”。

您可以通过 IdP 通过团队同步管理 GitHub 团队成员。 必须启用团队同步才能使用团队同步 API。 有关详细信息，请参阅“[在标识提供者与 GitHub 之间同步团队](/enterprise-cloud@latest/organizations/managing-saml-single-sign-on-for-your-organization/managing-team-synchronization-for-your-organization)”。

{% note %}

注意：团队同步 API 不能与 {% data variables.product.prodname_emus %} 一起使用。 若要详细了解如何管理 {% data variables.product.prodname_emu_org %}，请参阅“[外部组 API](/enterprise-cloud@latest/rest/reference/teams#external-groups)”。

{% endnote %}
