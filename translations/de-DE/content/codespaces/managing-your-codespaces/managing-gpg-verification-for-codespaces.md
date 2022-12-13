---
title: Verwalten der GPG-Überprüfung für Codespaces
intro: Du kannst zulassen, dass {% data variables.product.company_short %} automatisch GPG verwendet, um Commits zu signieren, die du in deinen Codespaces vornimmst, damit andere Personen sicher sein können, dass die Änderungen aus einer vertrauenswürdigen Quelle stammen.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
- Codespaces
- Developer
- Security
redirect_from:
- /github/developing-online-with-codespaces/managing-gpg-verification-for-codespaces
- /codespaces/working-with-your-codespace/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: 588082ccd4d861afd8fc78b3b56ae22a06ba72d9
ms.sourcegitcommit: 22d665055b1bee7a5df630385e734e3a149fc720
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 07/13/2022
ms.locfileid: "145106508"
---
Nachdem du die GPG-Überprüfung aktiviert hast, signiert {% data variables.product.company_short %} automatisch Commits, die du in {% data variables.product.prodname_codespaces %} ausführst, und die Commits weisen in {% data variables.product.product_name %} den Status „Überprüft“ auf. Standardmäßig ist die GPG-Überprüfung für von dir erstellte Codespaces deaktiviert. Du kannst die GPG-Überprüfung für alle oder nur für bestimmte Repositorys zulassen. Aktiviere die GPG-Überprüfung nur für Repositorys, denen du vertraust. Weitere Informationen zu von {% data variables.product.product_name %} signierten Commits findest du unter [Informationen zur Überprüfung von Commitsignaturen](/github/authenticating-to-github/about-commit-signature-verification).

Sobald du die GPG-Überprüfung aktivierst, wird sie sofort für alle Codespaces wirksam.

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Wähle unter „GPG-Überprüfung“ die gewünschte Einstellung für die GPG-Überprüfung aus.
  ![Optionsfelder zum Verwalten der GPG-Überprüfung](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. Wenn du „Ausgewählte Repositorys“ ausgewählt hast, öffne das Dropdownmenü, und klicke dann auf ein Repository, für das du die GPG-Überprüfung aktivieren möchten. Wiederhole dies für alle Repositorys, für die du die GPG-Überprüfung aktivieren möchtest.
  ![Dropdownmenü „Ausgewählte Repositorys“](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


{% note %}

**Hinweis**: Nachdem du die GPG-Überprüfung für {% data variables.product.prodname_codespaces %} aktiviert hast, musst du `-S` an jeden Commit anfügen, damit dieser signiert wird. Um dies in {% data variables.product.prodname_vscode %} zu tun, stelle sicher, dass die Option „Git: Commitsignierung aktivieren“ in den Einstellungen aktiviert ist.

{% endnote %}
