---
title: Управление IAM для вашего предприятия
intro: |
  {%- ifversion ghec %} Вы можете пригласить существующие личные учетные записи на {% данных variables.location.product_location %}, чтобы быть участниками вашего предприятия, и при необходимости вы можете включить единый вход SAML для централизованного управления доступом. Кроме того, вы можете использовать {% data variables.product.prodname_emus %} с единым входом на основе SAML, чтобы создавать учетные записи корпоративных участников и управлять ими.
  {%- elsif ghes %} Вы можете использовать встроенную проверку подлинности {% data variables.product.product_name %} или централизованно управлять проверкой подлинности и доступом к экземпляру с помощью CAS, LDAP либо SAML.
  {%- elsif ghae %} Единый вход на основе SAML необходимо использовать для централизованного управления проверкой подлинности и доступом к вашему предприятию в {% data variables.product.product_name %}. Или вы можете использовать System for Cross-domain Identity Management (SCIM) для автоматической подготовки учетных записей и предоставления доступа к {% data variables.product.product_name %} при внесении изменений в поставщик удостоверений (IdP).
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
ms.openlocfilehash: 20415ca79bba676c9226a31736ded50f222b7e77
ms.sourcegitcommit: d697e0ea10dc076fd62ce73c28a2b59771174ce8
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 10/20/2022
ms.locfileid: '148098407'
---

