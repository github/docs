---
title: Gestion d’IAM pour votre entreprise
intro: |
  {%- ifversion ghec %} Vous pouvez inviter des comptes personnels existants sur {% data variables.product.product_location %} à devenir membres de votre entreprise, et vous pouvez éventuellement activer l’authentification unique SAML pour gérer l’accès de manière centralisée. Vous pouvez également utiliser {% data variables.product.prodname_emus %} avec l’authentification unique SAML pour créer et contrôler les comptes des membres de votre entreprise.
  {%- elsif ghes %} Vous pouvez utiliser l’authentification intégrée de {% data variables.product.product_name %} ou vous pouvez gérer de manière centralisée l’authentification et l’accès à votre instance avec CAS, LDAP ou SAML.
  {%- elsif ghae %} Vous devez utiliser l’authentification unique SAML pour gérer de manière centralisée l’authentification et l’accès à votre entreprise sur {% data variables.product.product_name %}. Vous pouvez éventuellement utiliser System for Cross-domain Identity Management (SCIM) pour provisionner automatiquement les comptes et les accès sur {% data variables.product.product_name %} lorsque vous effectuez des changements sur votre fournisseur d’identité (IdP).
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718004'
---

