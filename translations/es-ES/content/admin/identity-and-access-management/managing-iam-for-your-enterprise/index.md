---
title: Administrar el IAM para tu empresa
intro: |
  {%- ifversion ghec %}
  Puedes invitar a las cuentas personales existentes de {% data variables.product.product_location %} para que se conviertan en miembros de tu empresa y, opcionalmente, puedes habilitar el inicio de sesión único (SSO) de SAML para administrar el acceso centralmente. Como alternativa, puedes utilizar las {% data variables.product.prodname_emus %} con el SSO de SAML para crear y controlar las cuentas de los miembros de tu empresa.
  {%- elsif ghes %}
  Puedes utilizar la autenticación integrada de {% data variables.product.product_name %} o puedes administrar la autenticación centralmente y acceder a tu instancia con CAS, LDAP o SAML.
  {%- elsif ghae %}
  Debes utilizar el inicio de sesión único (SSO) de SAML para administrar centralmente la administración y el acceso a tu empresa de {% data variables.product.product_name %}. Opcionalmente, puedes utilizar el Sistema para Administración de Identidades entre Dominios (SCIM) para aprovisionar automáticamente las cuentas y acceder a {% data variables.product.product_name %} cuando hagas cambios en tu proveedor de identidad (IdP).
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
shortTitle: Administrar IAM para tu empresa
---

