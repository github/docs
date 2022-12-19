---
title: Commits signieren
intro: 'Du kannst Commits lokal mit GPG{% ifversion ssh-commit-verification %}, SSH{% endif %} oder S/MIME signieren.'
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg
  - /articles/signing-commits-using-gpg
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
  - /github/authenticating-to-github/managing-commit-signature-verification/signing-commits
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: 8550393cc31571756099ac364698434f38b02cfa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106749'
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Tipps:**

Um deinen Git-Client so zu konfigurieren, dass Commits für ein bestimmtes lokales Repository standardmäßig signiert werden, führe in Git-Versionen ab 2.0.0 den Befehl `git config commit.gpgsign true` aus. Führe `git config --global commit.gpgsign true` aus, um alle Commits standardmäßig in einem lokalen Repository auf deinem Computer zu signieren.

Wenn du deine GPG-Schlüssel-Passphrase speichern möchtest, damit du sie nicht bei jeder Signatur eines Commits erneut eingeben musst, empfehlen wir Dir den Einsatz der folgenden Tools:
  - Mac-Benutzern erlaubt die [GPG Suite](https://gpgtools.org/), die GPG-Schlüssel-Passphrase in Mac OS Keychain zu speichern.
  - Für Windows Benutzer wird [Gpg4win](https://www.gpg4win.org/) in andere Windows-Tools integriert.

Zum Speichern deiner GPG-Schlüssel-Passphrase kannst du auch einen [gpg-agent](http://linux.die.net/man/1/gpg-agent) manuell konfigurieren. Dieser wird jedoch nicht wie der SSH-Agent in Mac OS Keychain integriert und erfordert mehr Konfiguration.

{% endtip %}

Wenn du über mehrere Schlüssel verfügst oder versuchst, Commits oder Tags mit einem Schlüssel zu signieren, der nicht mit deiner Committeridentität übereinstimmt, solltest du [Git deinen Signaturschlüssel mitteilen](/articles/telling-git-about-your-signing-key).

1. Wenn du Änderungen in deinem lokalen Branch freigeben möchtest, füge dem „git commit“-Befehl das Flag „-S“ hinzu:
  ```shell
  $ git commit -S -m "YOUR_COMMIT_MESSAGE"
  # Creates a signed commit
  ```
2. Wenn du GPG verwendest, gib nach dem Erstellen deines Commits die Passphrase an, die du eingerichtet hast, als du [deinen GPG-Schlüssel generiert hast](/articles/generating-a-new-gpg-key).
3. Übertrage deine Commits, nachdem du sie lokal erstellt hast, mittels Push auf dein Remote-Repository auf {% data variables.product.product_name %}:
  ```shell
  $ git push
  # Pushes your local commits to the remote repository
  ```
4. Navigiere auf {% data variables.product.product_name %} zu Deinem Pull Request.
{% data reusables.repositories.review-pr-commits %}
5. Wenn du ausführliche Informationen zur verifizierten Signatur sehen möchtest, klicke auf „Verified“ (Verifiziert).
![Signierter Commit](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

## Weitere Informationsquellen

* „[Git deinen Signaturschlüssel mitteilen](/articles/telling-git-about-your-signing-key)“
* [Signieren von Tags](/articles/signing-tags)
