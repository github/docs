---
title: Verwalten der GPG-Überprüfung für GitHub Codespaces
intro: 'Du kannst zulassen, dass {% data variables.product.company_short %} automatisch GPG verwendet, um Commits zu signieren, die du in deinen Codespaces vornimmst, damit andere Personen sicher sein können, dass die Änderungen aus einer vertrauenswürdigen Quelle stammen.'
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
  - /codespaces/managing-your-codespaces/managing-gpg-verification-for-codespaces
shortTitle: GPG verification
ms.openlocfilehash: ff83eba1720a2841747536ec04bfc0b3db055669
ms.sourcegitcommit: 47e03737d09bed84dfedb7be5924d893d34ea1a8
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/16/2022
ms.locfileid: '148167101'
---
Nachdem du die GPG-Überprüfung aktiviert hast, signiert {% data variables.product.company_short %} automatisch Commits, die du in {% data variables.product.prodname_github_codespaces %} ausführst, und die Commits weisen in {% data variables.product.product_name %} den Status „Überprüft“ auf. Standardmäßig ist die GPG-Überprüfung für von dir erstellte Codespaces deaktiviert. Du kannst die GPG-Überprüfung für alle oder nur für bestimmte Repositorys zulassen. Aktiviere die GPG-Überprüfung nur für Repositorys, denen du vertraust. Weitere Informationen zu von {% data variables.product.product_name %} signierten Commits findest du unter [Informationen zur Überprüfung von Commitsignaturen](/github/authenticating-to-github/about-commit-signature-verification).

{% data reusables.codespaces.gpg-in-active-codespaces %}

{% note %}

**Hinweis:** Wenn du ein Fotfiles-Repository mit {% data variables.product.prodname_github_codespaces %} verknüpft hast, kann die Git-Konfiguration in deinen Dotfiles mit der Konfiguration in Konflikt stehen, die {% data variables.product.prodname_github_codespaces %} zum Signieren von Commits erfordert. Weitere Informationen findest du unter [Problembehandlung für die GPG-Überprüfung für {% data variables.product.prodname_github_codespaces %}](/codespaces/troubleshooting/troubleshooting-gpg-verification-for-github-codespaces).

{% endnote %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. Wähle unter „GPG-Überprüfung“ die gewünschte Einstellung für die GPG-Überprüfung aus.
  ![Optionsfelder zum Verwalten der GPG-Überprüfung](/assets/images/help/settings/codespaces-gpg-verification-radio-buttons.png) 
1. Wenn du „Ausgewählte Repositorys“ ausgewählt hast, öffne das Dropdownmenü, und klicke dann auf ein Repository, für das du die GPG-Überprüfung aktivieren möchten. Wiederhole dies für alle Repositorys, für die du die GPG-Überprüfung aktivieren möchtest.
  ![Dropdownmenü „Ausgewählte Repositorys“](/assets/images/help/settings/codespaces-gpg-verification-repository-drop-down.png) 


Nachdem du die GPG-Überprüfung für {% data variables.product.prodname_github_codespaces %} aktiviert hast, werden alle Commits in deinen Codespaces standardmäßig signiert.
