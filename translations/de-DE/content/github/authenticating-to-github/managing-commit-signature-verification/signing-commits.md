---
title: Commits signieren
intro: You can sign commits locally using GPG or S/MIME.
redirect_from:
  - /articles/signing-commits-and-tags-using-gpg/
  - /articles/signing-commits-using-gpg/
  - /articles/signing-commits
  - /github/authenticating-to-github/signing-commits
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - Identity
  - Access management
---
{% data reusables.gpg.desktop-support-for-commit-signing %}

{% tip %}

**Tipps:**

Um Deinen Git-Client so zu konfigurieren, dass Commits für ein bestimmtes lokales Repository standardmäßig signiert werden, führe in Git-Versionen ab 2.0.0 den Befehl `git config commit.gpgsign true` aus. Um alle Commits für ein beliebiges lokales Repository standardmäßig zu signieren, führe `git config --global commit.gpgsign true` aus.

Wenn Du Deine GPG-Schlüssel-Passphrase speichern möchtest, damit Du sie nicht bei jeder Signatur eines Commits erneut eingeben musst, empfehlen wir Dir den Einsatz der folgenden Tools:
  - Für Mac-Benutzer erlaubt die [GPG Suite](https://gpgtools.org/), Deine GPG-Schlüssel-Passphrase in Mac OS Keychain zu speichern.
  - Für Windows-Benutzer [Gpg4win](https://www.gpg4win.org/), das sich in andere Windows-Tools integriert.

Zum manuellen Speichern Deiner GPG-Schlüssel-Passphrase kannst Du auch einen [GPG-Agenten](http://linux.die.net/man/1/gpg-agent) konfigurieren. Dieser integriert sich jedoch nicht wie der SSH-Agent in Mac OS Keychain und erfordert mehr Konfiguration.

{% endtip %}

Wenn Du über mehrere Schlüssel verfügst oder versuchst, Commits oder Tags mit einem Schlüssel zu signieren, der nicht mit Deiner Beitragender-Identität übereinstimmt, solltest Du [Git Deinen Signaturschlüssel mitteilen](/articles/telling-git-about-your-signing-key).

1. Wenn Du Änderungen in Deinem lokalen Branch freigeben möchtest, füge dem „git commit“-Befehl das Flag „-S“ hinzu:
  ```shell
  $ git commit -S -m <em>your commit message</em>
  # Erstellt einen signierten Commit
  ```
2. Wenn Du GPG verwendest, gib nach der Erstellung Deines Commits die Passphrase ein, die Du bei der [Generierung Deines GPG-Schlüssels](/articles/generating-a-new-gpg-key) eingerichtet hast.
3. Übertrage Deine Commits, nachdem Du sie lokal erstellt hast, mittels Push auf Dein Remote-Repository auf {% data variables.product.product_name %}:
  ```shell
  $ git push
  # lokale Commits zum remote Repository pushen
  ```
4. On
{% data variables.product.product_name %}, navigate to your pull request.
{% data reusables.repositories.review-pr-commits %}
5. Wenn Du ausführliche Informationen zur verifizierten Signatur sehen möchtest, klicke auf „Verified“ (Verifiziert). ![Signierter Commit](/assets/images/help/commits/gpg-signed-commit-verified-without-details.png)

### Weiterführende Informationen

* „[Nach vorhandenen GPG-Schlüsseln suchen](/articles/checking-for-existing-gpg-keys)“
* „[Einen neuen GPG-Schlüssel erzeugen](/articles/generating-a-new-gpg-key)“
* „[Einen neuen GPG-Schlüssel zu Deinem GitHub-Konto hinzufügen](/articles/adding-a-new-gpg-key-to-your-github-account)“
* „[GitHub über Deinen Signaturschlüssel informieren](/articles/telling-git-about-your-signing-key)“
* „[Eine E-Mail-Adresse mit Deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“
* „[Tags signieren](/articles/signing-tags)“
