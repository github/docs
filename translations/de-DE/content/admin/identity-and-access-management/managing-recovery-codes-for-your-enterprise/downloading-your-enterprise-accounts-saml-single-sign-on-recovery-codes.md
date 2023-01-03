---
title: Herunterladen der SAML-SSO-Wiederherstellungscodes für dein Unternehmenskonto
shortTitle: Download recovery codes
intro: To ensure that you can access {% data variables.product.product_name %} if your identity provider (IdP) is unavailable, you should download your enterprise account's SAML single sign-on (SSO) recovery codes.
versions:
  ghec: '*'
type: how_to
topics:
- Accounts
- Authentication
- Enterprise
- SSO
permissions: Enterprise owners can download the SAML SSO recovery codes for the enterprise account.
ms.openlocfilehash: cd06d34b2dbf3e0c3b0a96bc3b92b2fb2b78e080
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145104904"
---
Wenn dein IdP nicht verfügbar ist, kannst du einen Wiederherstellungscode verwenden, um sich anzumelden und auf dein Unternehmen auf {% data variables.product.product_location %} zuzugreifen. Weitere Informationen findest du unter „[Zugriff auf dein Unternehmenskonto, wenn dein Identitätsanbieter nicht verfügbar ist](/admin/identity-and-access-management/managing-recovery-codes-for-your-enterprise/accessing-your-enterprise-account-if-your-identity-provider-is-unavailable)“.

Wenn du deine Wiederherstellungscodes beim Konfigurieren von SAML SSO nicht gespeichert hast, kannst du weiterhin über die Einstellungen deines Unternehmens auf die Codes zugreifen.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.security-tab %}

1. Klicke unter „SAML-Authentifizierung anfordern“ auf **Wiederherstellungscodes speichern**.
![Screenshot der Schaltfläche zum Testen der SAML-Konfiguration vor dem Erzwingen](/assets/images/help/enterprises/saml-recovery-codes-link.png)

2. Speichere deine Wiederherstellungscodes, indem du auf **Herunterladen**, **Drucken** oder **Kopieren** klickst.
![Screenshot der Schaltflächen zum Herunterladen, Drucken oder Kopieren von Wiederherstellungscodes](/assets/images/help/saml/saml_recovery_code_options.png)
