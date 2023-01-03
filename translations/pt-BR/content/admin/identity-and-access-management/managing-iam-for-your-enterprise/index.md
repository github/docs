---
title: Gerenciando o IAM da sua empresa
intro: |
  {%- ifversion ghec %} Você pode convidar contas pessoais existentes em {% data variables.product.product_location %} para serem membros de sua empresa e, opcionalmente, habilitar o SSO (logon único) de SAML para gerenciar o acesso centralmente. Como alternativa, você pode usar {% data variables.product.prodname_emus %} com SSO de SAML para criar e controlar as contas de seus membros corporativos.
  {%- elsif ghes %} Você pode usar a autenticação integrada do {% data variables.product.product_name %} ou pode gerenciar centralmente a autenticação e o acesso à sua instância com CAS, LDAP ou SAML.
  {%- elsif ghae %} Você deve usar o SSO (logon único) de SAML para gerenciar centralmente a autenticação e o acesso à sua empresa em {% data variables.product.product_name %}. Opcionalmente, você pode usar o SCIM (Sistema de Gerenciamento de Usuários entre Domínios) para provisionar automaticamente contas e acesso em {% data variables.product.product_name %} ao fazer alterações em seu IdP (provedor de identidade).
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
shortTitle: Manage IAM for your enterprise
ms.openlocfilehash: 0af30fe07928336fd93ba3b17fd1efff0b64e354
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718002'
---

