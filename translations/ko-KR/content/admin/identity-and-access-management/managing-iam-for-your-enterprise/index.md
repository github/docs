---
title: 엔터프라이즈용 IAM 관리
intro: |
  {%- ifversion ghec %} {% 데이터 variables.location.product_location %}의 기존 개인 계정을 엔터프라이즈의 구성원으로 초대할 수 있으며 필요에 따라 SAML SSO(Single Sign-On)를 사용하도록 설정하여 액세스를 중앙에서 관리할 수 있습니다. 또는 {% data variables.product.prodname_emus %}를 SAML SSO와 함께 사용하여 엔터프라이즈 구성원의 계정을 만들고 제어할 수 있습니다.
  {%- elsif ghes %} {% data variables.product.product_name %}의 기본 제공 인증을 사용하거나 CAS, LDAP 또는 SAML을 사용하여 인스턴스에 대한 인증 및 액세스를 중앙에서 관리할 수 있습니다.
  {%- elsif ghae %} {% data variables.product.product_name %}에서 엔터프라이즈에 대한 인증 및 액세스는 SAML SSO(Single Sign-On)를 사용하여 중앙에서 관리해야 합니다. 필요에 따라 IdP(ID 공급자)에 대한 변경을 수행할 때 SCIM(도메인 간 ID 관리)용 시스템을 사용하여 {% data variables.product.product_name %}에 대한 계정 및 액세스를 자동으로 프로비전할 수 있습니다.
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
ms.openlocfilehash: 20415ca79bba676c9226a31736ded50f222b7e77
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ko-KR
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098406'
---

