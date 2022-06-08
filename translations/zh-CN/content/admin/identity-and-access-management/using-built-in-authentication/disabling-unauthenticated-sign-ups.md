---
title: 禁用未经身份验证的注册
redirect_from:
  - /enterprise/admin/articles/disabling-sign-ups
  - /enterprise/admin/user-management/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/disabling-unauthenticated-sign-ups
  - /admin/authentication/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
intro: '如果您对 {% data variables.product.product_location %} 使用内置身份验证，则可以阻止未经身份验证的人员在您的实例上创建新的用户帐户。'
permissions: 'Site administrators can disable unauthenticated sign-ups on a {% data variables.product.product_name %} instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: 阻止未经身份验证的注册
---

## 关于未经身份验证的注册

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %} 您可以禁用未经身份验证的注册，并需要邀请才能在您的实例上创建新的用户帐户。

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## 禁用未经身份验证的注册

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. 取消选中 **Enable sign-up**。 ![启用注册复选框](/assets/images/enterprise/management-console/enable-sign-up.png)
{% data reusables.enterprise_management_console.save-settings %}
