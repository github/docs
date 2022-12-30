---
title: Ändern der primären E-Mail-Adresse
intro: Du kannst die mit deinem persönlichen Konto verknüpfte E-Mail-Adresse jederzeit ändern.
redirect_from:
  - /articles/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/changing-your-primary-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
  - /account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/changing-your-primary-email-address
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Primary email address
ms.openlocfilehash: 5624a44c888b20350497fd2a4ec5a0d07186cdfe
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145164973'
---
{% note %}

**Hinweis:** Du kannst deine primäre E-Mail-Adresse nicht in eine E-Mail-Adresse ändern, die bereits als Backup-E-Mail-Adresse festgelegt ist.

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.emails %}
3. Gib unter „E-Mail-Adresse hinzufügen“ eine neue E-Mail-Adresse ein, und klicke auf **Hinzufügen**, wenn du eine neue E-Mail-Adresse hinzufügen und als primäre E-Mail-Adresse festlegen möchtest.
   ![Schaltfläche zum Hinzufügen einer weiteren E-Mail-Adresse](/assets/images/help/settings/add_another_email_address.png)
4. Klicke im Dropdownmenü unter „Primäre E-Mail-Adresse“ auf die E-Mail-Adresse, die du als primäre E-Mail-Adresse festlegen möchtest, und klicke dann auf **Speichern**.
   ![Schaltfläche zum Festlegen einer primären E-Mail-Adresse](/assets/images/help/settings/set_as_primary_email.png)
5. Klicke neben der alten E-Mail-Adresse auf {% octicon "trash" aria-label="The trash symbol" %}, um sie aus deinem Konto zu entfernen.
{% ifversion fpt or ghec %}
6. Verifiziere deine neue primäre E-Mail-Adresse. Ohne verifizierte E-Mail-Adresse kannst du nicht alle Funktionen von {% data variables.product.product_name %} nutzen. Weitere Informationen findest du unter [Verifizieren deiner E-Mail-Adresse](/articles/verifying-your-email-address).
{% endif %}
