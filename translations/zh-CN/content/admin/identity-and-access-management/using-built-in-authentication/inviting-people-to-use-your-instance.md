---
title: 邀请他人使用您的实例
intro: '当您对 {% data variables.product.product_name %} 使用内置身份验证时，您可以按电子邮件地址邀请人员在您的实例上创建用户帐户。'
versions:
  ghes: '*'
permissions: 'Enterprise owners can invite people to create a user account on a {% data variables.product.product_name %} instance.'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: 邀请他人
---

## 关于新用户的邀请

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %}

您可以禁用未经身份验证的注册，并需要邀请才能在您的实例上创建新的用户帐户。 更多信息请参阅“[禁用未经身份验证的注册](/admin/identity-and-access-management/using-built-in-authentication/disabling-unauthenticated-sign-ups)”。

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## 邀请他人创建用户帐户

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.invite-user-sidebar-tab %}
{% data reusables.enterprise_site_admin_settings.invite-user-reset-link %}

如果您已在 {% data variables.product.product_location %} 上为通知配置了电子邮件，则您的实例会将邀请发送到提供的电子邮件地址。 更多信息请参阅“[配置电子邮件通知](/admin/configuration/configuring-your-enterprise/configuring-email-for-notifications)”。
