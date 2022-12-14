---
title: Deine primäre E-Mail-Adresse ändern
intro: You can change the email address associated with your personal account at any time.
redirect_from:
- /articles/changing-your-primary-email-address
- /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
- /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
- Accounts
- Notifications
shortTitle: Primary email address
ms.openlocfilehash: af1443f1f23b8038d2cf1f4e42a1ab0a83214edb
ms.sourcegitcommit: 67064b14c9d4d18819db8f6398358b77a1c8002a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 05/17/2022
ms.locfileid: "145091411"
---
{% note %}

**Hinweis:** Du kannst deine primäre E-Mail-Adresse nicht in eine E-Mail-Adresse ändern, die bereits als Sicherungs-E-Mail-Adresse festgelegt ist.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
3. Gib unter „E-Mail-Adresse hinzufügen“ eine neue E-Mail-Adresse ein, und klicke auf **Hinzufügen**, wenn du eine neue E-Mail-Adresse hinzufügen und als primäre E-Mail-Adresse festlegen möchtest.
   ![Schaltfläche zum Hinzufügen einer weiteren E-Mail-Adresse](/assets/images/help/settings/add_another_email_address.png)
4. Klicke im Dropdownmenü unter „Primäre E-Mail-Adresse“ auf die E-Mail-Adresse, die du als primäre E-Mail-Adresse festlegen möchtest, und klicke dann auf **Speichern**.
   ![Schaltfläche zum Festlegen einer primären E-Mail-Adresse](/assets/images/help/settings/set_as_primary_email.png)
5. Klicke neben der alten E-Mail-Adresse auf {% octicon "trash" aria-label="The trash symbol" %}, um sie aus deinem Konto zu entfernen.
{% ifversion fpt or ghec %}
6. Verifiziere Deine neue primäre E-Mail-Adresse. Ohne verifizierte E-Mail-Adresse kannst Du nicht alle Funktionen von {% data variables.product.product_name %} nutzen. Weitere Informationen findest du unter [Verifizieren deiner E-Mail-Adresse](/articles/verifying-your-email-address).
{% endif %}
