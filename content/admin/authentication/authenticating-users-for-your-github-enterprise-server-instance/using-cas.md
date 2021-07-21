---
title: Using CAS
redirect_from:
  - /enterprise/admin/articles/configuring-cas-authentication/
  - /enterprise/admin/articles/about-cas-authentication/
  - /enterprise/admin/user-management/using-cas
  - /enterprise/admin/authentication/using-cas
  - /admin/authentication/using-cas
intro: 'CAS is a single sign-on (SSO) protocol for multiple web applications. A CAS user account does not take up a {% ifversion ghes %}user license{% else %}seat{% endif %} until the user signs in.'
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
{% data reusables.enterprise_user_management.built-in-authentication %}

## Username considerations with CAS

{% data reusables.enterprise_management_console.username_normalization %}

{% data reusables.enterprise_management_console.username_normalization_sample %}

{% data reusables.enterprise_user_management.two_factor_auth_header %}
{% data reusables.enterprise_user_management.external_auth_disables_2fa %}

## CAS attributes

The following attributes are available.

| Attribute name           | Type     | Description |
|--------------------------|----------|-------------|
| `username`               | Required | The {% data variables.product.prodname_ghe_server %} username. |

## Configuring CAS
{% warning %}

**Warning:** Before configuring CAS on {% data variables.product.product_location %}, note that users will not be able to use their CAS usernames and passwords to authenticate API requests or Git operations over HTTP/HTTPS. Instead, they will need to [create an access token](/enterprise/{{ currentVersion }}/user/articles/creating-an-access-token-for-command-line-use).

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.management-console %}
{% data reusables.enterprise_management_console.authentication %}
3. Select **CAS**.
![CAS select](/assets/images/enterprise/management-console/cas-select.png)
4. {% data reusables.enterprise_user_management.built-in-authentication-option %} ![Select CAS built-in authentication checkbox](/assets/images/enterprise/management-console/cas-built-in-authentication.png)
5. In the **Server URL** field, type the full URL of your CAS server. If your CAS server uses a certificate that can't be validated by {% data variables.product.prodname_ghe_server %}, you can use the `ghe-ssl-ca-certificate-install` command to install it as a trusted certificate.
