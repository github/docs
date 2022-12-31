---
title: 禁用未经身份验证的注册
redirect_from:
  - /enterprise/admin/articles/disabling-sign-ups
  - /enterprise/admin/user-management/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/disabling-unauthenticated-sign-ups
  - /admin/authentication/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
intro: '如果对 {% data variables.product.product_location %} 使用内置身份验证，则可阻止未经身份验证的人在你的实例上创建新用户帐户。'
permissions: 'Site administrators can disable unauthenticated sign-ups on a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Block unauthenticated sign-up
ms.openlocfilehash: 063da3aa1e73501d05251e40d7afcb271833afaf
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065382'
---
## 关于未经身份验证的注册

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %} 可以禁用未经身份验证的注册，并要求邀请在实例上创建新的用户帐户。

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## 禁用未经身份验证的注册

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% data reusables.enterprise_management_console.privacy %}
3. 取消选择“启用注册”。
![启用“注册”复选框](/assets/images/enterprise/management-console/enable-sign-up.png) {% data reusables.enterprise_management_console.save-settings %}
