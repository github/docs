---
title: Enterprise の IAM の管理
intro: |
  {%- ifversion ghec %}{% data variables.product.product_location %} にある既存の個人用アカウントをエンタープライズのメンバーとして招待し、必要に応じて SAML シングル サインオン (SSO) を有効にしてアクセスを一元管理することができます。 または、SAML SSO と共に {% data variables.product.prodname_emus %} を使い、エンタープライズのメンバーのアカウントを作成して管理することもできます。
  {%- elsif ghes %}{% data variables.product.product_name %} の組み込み認証を使うか、CAS、LDAP、または SAML を使って認証とインスタンスへのアクセスを一元管理することができます。
  {%- elsif ghae %}{% data variables.product.product_name %} でエンタープライズへの認証とアクセスを一元的に管理するには、SAML シングル サインオン (SSO) を使う必要があります。 必要に応じて、クロスドメイン ID 管理システム (SCIM) を使うと、ID プロバイダー (IdP) を変更したときに {% data variables.product.product_name %} 上のアカウントとアクセスを自動的にプロビジョニングすることができます。
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
ms.contentlocale: ja-JP
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718006'
---

