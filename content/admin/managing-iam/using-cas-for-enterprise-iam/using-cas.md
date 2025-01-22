---
title: Using CAS
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication
  - /enterprise/admin/articles/about-cas-authentication
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
  - /enterprise/admin/authentication/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/authenticating-users-for-your-github-enterprise-server-instance/using-cas
  - /admin/identity-and-access-management/using-cas-for-enterprise-iam/using-cas
intro: 'If you use Central Authentication Service (CAS) to centralize access to multiple web applications, you can integrate {% data variables.product.product_name %} by configuring CAS authentication for your instance.'
versions:
  ghes: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - Identity
  - SSO
---

## About CAS authentication for {% data variables.product.product_name %}

CAS is a single sign-on (SSO) protocol that centralizes authentication to multiple web applications. For more information, see [Central Authentication Service](https://en.wikipedia.org/wiki/Central_Authentication_Service) on Wikipedia.

After you configure CAS, people who use {% data variables.location.product_location %} must use a {% data variables.product.pat_generic %} to authenticate API or Git requests over HTTP(S). CAS credentials cannot be used to authenticate these requests. For more information, see [AUTOTITLE](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token).

If you configure CAS, people with accounts on your identity provider (IdP) do not consume a user license until the person signs into {% data variables.location.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Username considerations with CAS

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} For more information, see [AUTOTITLE](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication).

## CAS attributes

The `username` attribute is required and should be set to the {% data variables.product.prodname_ghe_server %} username.

No other attributes are available.

## Configuring CAS

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
1. Under "Authentication", select **CAS**.
1. {% data reusables.enterprise_user_management.built-in-authentication-option %}
1. In the **Server URL** field, type the full URL of your CAS server. If your CAS server uses a certificate that can't be validated by {% data variables.product.prodname_ghe_server %}, you can use the `ghe-ssl-ca-certificate-install` command to install it as a trusted certificate. For more information, see [AUTOTITLE](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install).
{% data reusables.enterprise.apply-configuration %}
