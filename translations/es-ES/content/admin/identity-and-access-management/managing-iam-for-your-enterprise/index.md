---
title: Administrar el IAM para tu empresa
intro: |
  {%- ifversion ghec %} Puedes invitar a cuentas personales existentes en {% data variables.product.product_location %} para ser miembros de tu empresa y, opcionalmente, habilitar el inicio de sesión único (SSO) de SAML para administrar el acceso de forma centralizada. Como alternativa, puedes usar {% data variables.product.prodname_emus %} con el inicio de sesión único de SAML para crear y controlar las cuentas de los miembros de la empresa.
  {%- elsif ghes %} Puedes usar la autenticación integrada de {% data variables.product.product_name %}, o bien administrar de forma centralizada la autenticación y el acceso a la instancia con CAS, LDAP o SAML.
  {%- elsif ghae %} Debes usar el inicio de sesión único (SSO) de SAML para administrar de forma centralizada la autenticación y el acceso a la empresa en {% data variables.product.product_name %}. Opcionalmente, puedes usar System for Cross-domain Identity Management (SCIM) para aprovisionar cuentas de forma automática y acceder a l{% data variables.product.product_name %} al realizar cambios en el proveedor de identidades (IdP).
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718009'
---

