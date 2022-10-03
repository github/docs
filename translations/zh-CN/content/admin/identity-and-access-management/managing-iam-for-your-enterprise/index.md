---
title: 管理企业的 IAM
intro: |
  {%- ifversion ghec %} 你可以邀请 {% data variables.product.product_location %} 上的现有个人帐户成为企业成员，并且可以选择启用 SAML 单一登录 (SSO) 来集中管理访问权限。 或者，可以将 {% data variables.product.prodname_emus %} 与 SAML SSO 配合使用来创建和控制企业成员的帐户。
  {%- elsif ghes %} 你可以使用 {% data variables.product.product_name %} 的内置身份验证，也可以使用 CAS、LDAP 或 SAML 集中管理对实例的身份验证和访问。
  {%- elsif ghae %} 必须使用 SAML 单一登录 (SSO) 在 {% data variables.product.product_name %} 上集中管理对企业的身份验证和访问。 （可选）当对标识提供者 (IdP) 进行更改时，可以使用跨域身份管理系统 (SCIM) 在 {% data variables.product.product_name %} 上自动预配帐户和访问权限。
  {%- endif %}
redirect_from:
  - /enterprise/admin/categories/authentication
  - /enterprise/admin/guides/installation/user-authentication
  - /enterprise/admin/articles/inviting-users
  - /enterprise/admin/guides/migrations/authenticating-users-for-your-github-enterprise-instance
  - /enterprise/admin/user-management/authenticating-users-for-your-github-enterprise-server-instance
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
children:
  - /about-authentication-for-your-enterprise
  - /username-considerations-for-external-authentication
  - /changing-authentication-methods
  - /allowing-built-in-authentication-for-users-outside-your-provider
  - /troubleshooting-identity-and-access-management-for-your-enterprise
shortTitle: Manage IAM for your enterprise
ms.openlocfilehash: 0af30fe07928336fd93ba3b17fd1efff0b64e354
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718003'
---

