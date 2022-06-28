---
title: Disabling unauthenticated sign-ups
redirect_from:
  - /enterprise/admin/articles/disabling-sign-ups
  - /enterprise/admin/user-management/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/disabling-unauthenticated-sign-ups
  - /admin/authentication/disabling-unauthenticated-sign-ups
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/disabling-unauthenticated-sign-ups
intro: "If you're using built-in authentication for {% data variables.product.product_location %}, you can block unauthenticated people from creating new user accounts on your instance."
permissions: Site administrators can disable unauthenticated sign-ups on a {% data variables.product.product_name %} instance.
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
shortTitle: Block unauthenticated sign-up
---

## About unauthenticated sign-ups

{% data reusables.enterprise_user_management.built-in-authentication-new-accounts %} {% data reusables.enterprise_user_management.unauthenticated-sign-ups %} You can disable unauthenticated sign-ups and require an invitation to create a new user account on your instance.

{% data reusables.enterprise_user_management.alternatively-enable-external-authentication %}

## Disabling unauthenticated sign-ups

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.privacy %}
3. Unselect **Enable sign-up**.
![Enable sign-up checkbox](/assets/images/enterprise/management-console/enable-sign-up.png)
{% data reusables.enterprise_management_console.save-settings %}
