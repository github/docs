---
title: Herunterladen der SSO-Wiederherstellungscodes für dein Unternehmenskonto
shortTitle: Download recovery codes
intro: 'Damit du auch auf {% data variables.product.product_name %} zugreifen kannst, wenn dein Identitätsanbieter (IdP) nicht verfügbar ist, solltest du die SSO-Wiederherstellungscodes für dein Unternehmenskonto herunterladen.'
versions:
  ghec: '*'
type: how_to
topics:
  - Accounts
  - Authentication
  - Enterprise
  - SSO
redirect_from:
  - /admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/downloading-your-enterprise-accounts-saml-single-sign-on-recovery-codes
permissions: Enterprise owners can download the SSO recovery codes for the enterprise account.
ms.openlocfilehash: 82f44654b18a36d2fb29797fe8b6e0426785522b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '147063594'
---
Wenn dein IdP nicht verfügbar ist, kannst du einen Wiederherstellungscode verwenden, um dich anzumelden und auf dein Unternehmen auf {% data variables.product.product_location %} zuzugreifen. Weitere Informationen findest du unter [Zugriff auf dein Unternehmenskonto, wenn dein Identitätsanbieter nicht verfügbar ist](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable).

Wenn du deine Wiederherstellungscodes beim Konfigurieren von SSO nicht gespeichert hast, kannst du über die Einstellungen deines Unternehmens auf die Codes zugreifen.



{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. Klicke {% ifversion oidc-for-emu %} entweder unter{% endif %} „SAML-Authentifizierung erzwingen“{% ifversion oidc-for-emu %} oder unter „OIDC-Authentifizierung erzwingen“{% endif %} auf **Wiederherstellungscodes speichern**.{% ifversion oidc-for-emu %} {% note %}
  
  **Hinweis:** OIDC-SSO ist nur für {% data variables.product.prodname_emus %} verfügbar. Weitere Informationen findest du unter [Informationen zu Enterprise Managed Users](/admin/identity-and-access-management/using-enterprise-managed-users-and-saml-for-iam/about-enterprise-managed-users).
  
  {% endnote %}{% endif %}
  
  ![Screenshot der Schaltfläche zum Testen der SAML-Konfiguration vor dem Erzwingen](/assets/images/help/enterprises/saml-recovery-codes-link.png)
1. Speichere deine Wiederherstellungscodes, indem du auf **Herunterladen**, **Drucken** oder **Kopieren** klickst.
  ![Screenshot der Schaltflächen zum Herunterladen, Drucken oder Kopieren von Wiederherstellungscodes](/assets/images/help/saml/saml_recovery_code_options.png)
