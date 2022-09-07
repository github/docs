---
title: 邀请用户使用实例
intro: '对 {% data variables.product.product_name %} 使用内置身份验证时，可以通过电子邮件地址邀请人员在实例上创建用户帐户。'
versions:
  ghes: '*'
permissions: 'Enterprise owners can invite people to create a user account on a {% data variables.product.product_name %} instance.'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Invite people
ms.openlocfilehash: d7ccb5e06f297a11ba97fa41d8250821909e5e3d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147717795'
---
## 关于新用户的邀请

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %}

可以禁用未经身份验证的注册，并要求邀请才能在实例上创建新用户帐户。 有关详细信息，请参阅“[禁用未经身份验证的注册](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)”。

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %} 

## 邀请用户创建用户帐户

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %} {% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

如果已为 {% data variables.product.product_location %} 上的通知配置了电子邮件，则实例会将邀请发送到提供的电子邮件地址。 有关详细信息，请参阅“[配置邮件通知](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)”。
