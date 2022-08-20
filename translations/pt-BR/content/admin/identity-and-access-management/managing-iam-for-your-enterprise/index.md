---
title: Gerenciando o IAM da sua empresa
intro: |
  {%- ifversion ghec %}
  Você pode convidar contas pessoais existentes em {% data variables.product.product_location %} para ser integrante da sua empresa, e você pode opcionalmente habilitar o logon único SAML (SSO) para gerenciar o acesso centralmente. Como alternativa, você pode usar {% data variables.product.prodname_emus %} com o SAML SSO para criar e controlar as contas dos integrantes da sua empresa.
  {%- elsif ghes %}
  Você pode usar a autenticação integrada de {% data variables.product.product_name %} ou você pode gerenciar centralmente a autenticação e acesso à sua instância com CAS, LDAP ou SAML.
  {%- elsif ghae %}
  Você deve usar o logon único SAML (SSO) para gerenciar centralmente a autenticação e o acesso à sua empresa em {% data variables.product.product_name %}. Opcionalmente, você pode usar o Sistema de Gerenciamento de Identidades de Domínio entre Domínios (SCIM) para provisionar automaticamente contas e acesso em {% data variables.product.product_name %} ao fazer alterações no seu provedor de identidade (IdP).
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
shortTitle: Gerenciando IAM para a sua empresa
---

