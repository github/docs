---
title: Herunterladen der Wiederherstellungscodes deiner Organisation für die einmalige SAML-Anmeldung
intro: 'Organisationsadministrator*innen sollten die Wiederherstellungscodes ihrer Organisation für die einmalige SAML-Anmeldung herunterladen, um sicherzustellen, dass sie auch dann auf {% data variables.product.product_name %} zugreifen können, wenn der Identitätsanbieter für die Organisation nicht verfügbar ist.'
redirect_from:
  - /articles/downloading-your-organization-s-saml-single-sign-on-recovery-codes
  - /articles/downloading-your-organizations-saml-single-sign-on-recovery-codes
  - /github/setting-up-and-managing-organizations-and-teams/downloading-your-organizations-saml-single-sign-on-recovery-codes
versions:
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Download SAML recovery codes
ms.openlocfilehash: 9b17e3e4fc20cc9eaedf59afe45e393054d7d8e5
ms.sourcegitcommit: 76b840f45ba85fb79a7f0c1eb43bc663b3eadf2b
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/12/2022
ms.locfileid: '145125666'
---
Wiederherstellungscode sollten nicht öffentlich gemacht und nicht weitergegeben werden. Es wird empfohlen, sie mit einem Kennwort-Manager wie [LastPass](https://lastpass.com/) oder [1Password](https://1password.com/) zu speichern.

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security %}
5. Klicke im Hinweis zu Wiederherstellungscodes unter „Einmalige SAML-Anmeldung“ auf **Wiederherstellungscodes speichern**.
![Link zum Anzeigen und Speichern deiner Wiederherstellungscodes](/assets/images/help/saml/saml_recovery_codes.png)
6. Speichere deine Wiederherstellungscodes, indem du auf **Herunterladen**, **Drucken** oder **Kopieren** klickst.
![Schaltflächen zum Herunterladen, Drucken oder Kopieren deiner Wiederherstellungscodes](/assets/images/help/saml/saml_recovery_code_options.png)

  {% note %}

  **Hinweis:** Mithilfe deiner Wiederherstellungscodes kannst du wieder auf {% data variables.product.product_name %} zugreifen, wenn dein Identitätsanbieter nicht verfügbar ist. Wenn du neue Wiederherstellungscodes erzeugst, werden die auf der Seite „Single sign-on recovery codes“ (Single Sign-On-Wiederherstellungscodes) angezeigten Wiederherstellungscodes automatisch aktualisiert.

  {% endnote %}

7. Wenn du einen Wiederherstellungscode genutzt hast, um wieder Zugriff auf {% data variables.product.product_name %} zu erhalten, kannst du diesen Code nicht mehr verwenden. Der Zugriff auf {% data variables.product.product_name %} ist nur 24 Stunden lang verfügbar, bevor du dazu aufgefordert wirst, dich mit Single Sign-On anzumelden.

## Weiterführende Themen

- „[Informationen zum Identitäts- und Zugriffsmanagement mit „Einmaligem Anmelden mit SAML“](/articles/about-identity-and-access-management-with-saml-single-sign-on)“
- [Zugriff auf deine Organisation bei nicht verfügbarem Identitätsanbieter](/articles/accessing-your-organization-if-your-identity-provider-is-unavailable)
