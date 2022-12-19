---
title: Verwalten von IAM für dein Unternehmen
intro: |
  {%- ifversion ghec %} Du kannst vorhandene persönliche Konten auf {% data variables.product.product_location %} einladen, Mitglieder deines Unternehmens zu werden. Zudem kannst du wahlweise SAML Single Sign-On (SSO) aktivieren, um den Zugriff zentral zu verwalten. Alternativ kannst du {% data variables.product.prodname_emus %} mit SAML SSO verwenden, um die Konten deiner Unternehmensmitglieder zu erstellen und zu steuern.
  {%- elsif ghes %} Du kannst die integrierte Authentifizierung von {% data variables.product.product_name %} verwenden oder die Authentifizierung und den Zugriff auf deine Instanz mit CAS, LDAP oder SAML zentral verwalten.
  {%- elsif ghae %} Du musst SAML Single Sign-On (SSO) verwenden, um die Authentifizierung und den Zugriff auf dein Unternehmen zentral zu verwalten und auf {% data variables.product.product_name %} zuzugreifen. Wahlweise kannst du System for Cross-domain Identity Management (SCIM) verwenden, um Konten automatisch bereitzustellen und auf {% data variables.product.product_name %} zuzugreifen, wenn du Änderungen an deinem Identitätsanbieter (IdP) vornimmst.
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
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147718005'
---

