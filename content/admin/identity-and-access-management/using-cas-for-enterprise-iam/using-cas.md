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

CAS is a single sign-on (SSO) protocol that centralizes authentication to multiple web applications. For more information, see "[Central Authentication Service](https://en.wikipedia.org/wiki/Central_Authentication_Service)" on Wikipedia.

After you configure CAS, people who use {% data variables.product.product_location %} must use a personal access token to authenticate API or Git requests over HTTP(S). CAS credentials cannot be used to authenticate these requests. For more information, see "[Creating a personal access token](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)."

If you configure CAS, people with accounts on your identity provider (IdP) do not consume a user license until the person signs into {% data variables.product.product_location %}.

{% data reusables.enterprise_user_management.built-in-authentication %}

## Username considerations with CAS

{% data reusables.enterprise_user_management.consider-usernames-for-external-authentication %} For more information, see "[Username considerations for external authentication](/admin/identity-and-access-management/managing-iam-for-your-enterprise/username-considerations-for-external-authentication)."

## CAS attributes

The following attributes are available.

| Attribute name           | Type     | Description |
|--------------------------|----------|-------------|
| `username`               | Required | The {% data variables.product.prodname_ghe_server %} username. |

## Configuring CAS

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Select **CAS**.

   ![Screenshot of selection of CAS for authentication](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %}

   ![Screenshot of of fallback built-in authentication option for CAS](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. In the **Server URL** field, type the full URL of your CAS server. If your CAS server uses a certificate that can't be validated by {% data variables.product.prodname_ghe_server %}, you can use the `ghe-ssl-ca-certificate-install` command to install it as a trusted certificate. For more information, see "[Command-line utilities](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-ssl-ca-certificate-install)."
