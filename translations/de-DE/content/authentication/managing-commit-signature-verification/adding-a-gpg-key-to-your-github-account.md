---
title: Hinzufügen eines GPG-Schlüssels zu deinem GitHub-Konto
intro: 'Du benötigst auch den Schlüssel zu deinem Konto, um es auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} zu konfigurieren, um den neuen (oder vorhandenen) GPG-Schlüssel zu verwenden.'
redirect_from:
  - /articles/adding-a-gpg-key-to-your-github-account
  - /github/authenticating-to-github/adding-a-new-gpg-key-to-your-github-account
  - /github/authenticating-to-github/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
  - /articles/updating-an-expired-gpg-key
  - /authentication/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /github/authenticating-to-github/updating-an-expired-gpg-key
  - /github/authenticating-to-github/troubleshooting-commit-signature-verification/updating-an-expired-gpg-key
  - /authentication/managing-commit-signature-verification/adding-a-new-gpg-key-to-your-github-account
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Add a GPG key
ms.openlocfilehash: db832d4e02ea5f19303b3178fb669967238e661b
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369340'
---
## Informationen zum Hinzufügen von GPG-Schlüsseln zu deinem Konto

Um Commits zu signieren, die deinem Konto auf {% data variables.product.product_name %} zugeordnet sind, kannst du deinem persönlichen Konto einen öffentlichen GPG-Schlüssel hinzufügen. Bevor du einen Schlüssel hinzufügst, solltest du nach vorhandenen Schlüsseln suchen. Wenn du keine vorhandenen Schlüssel finden kannst, kannst du einen neuen Schlüssel generieren und kopieren. Weitere Informationen findest du unter [Überprüfen auf vorhandene GPG-Schlüssel](/articles/checking-for-existing-gpg-keys) und [Generieren eines neuen GPG-Schlüssels](/articles/generating-a-new-gpg-key).

Du kannst deinem Konto auf {% data variables.product.product_name %} mehrere öffentliche Schlüssel hinzufügen. Commits, die von einem der entsprechenden privaten Schlüssel signiert wurden, werden als überprüft angezeigt. Wenn du einen öffentlichen Schlüssel entfernst, werden alle von dem entsprechenden privaten Schlüssel signierten Commits nicht mehr als überprüft angezeigt.

{% ifversion upload-expired-or-revoked-gpg-key %} Um möglichst viele deiner Commits zu überprüfen, kannst du abgelaufene und widerrufene Schlüssel hinzufügen. Wenn der Schlüssel alle anderen Überprüfungsanforderungen erfüllt, werden Commits, die zuvor von einem der entsprechenden privaten Schlüssel signiert wurden, als überprüft angezeigt und geben an, dass der Signaturschlüssel abgelaufen ist oder widerrufen wurde.

![Ein überprüfter Commit, dessen Schlüssel abgelaufen ist](/assets/images/help/settings/gpg-verified-with-expired-key.png) {% endif %}

{% data reusables.gpg.supported-gpg-key-algorithms %}

Bei der Überprüfung einer Signatur extrahiert {% data variables.product.product_name %} die Signatur und versucht, die Schlüssel-ID zu analysieren. Die Schlüssel-ID wird dann mit Schlüsseln abgeglichen, die {% data variables.product.product_name %} hinzugefügt wurden. Solange {% data variables.product.product_name %} kein übereinstimmender GPG-Schlüssel hinzugefügt wird, können deine Signaturen nicht überprüft werden.

## Einen GPG-Schlüssel hinzufügen

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
3. Klicke auf **Neuer GPG-Schlüssel**.
   ![Schaltfläche für GPG-Schlüssel](/assets/images/help/settings/gpg-add-gpg-key.png)
4. Füge im Feld „Schlüssel" den GPG-Schlüssel ein, den du kopiert hast, wenn du [den GPG-Schlüssel generiert hast](/articles/generating-a-new-gpg-key).
   ![Das Schlüssel-Feld](/assets/images/help/settings/gpg-key-paste.png)
5. Klicke auf **GPG-Schlüssel hinzufügen**.
   ![Die Schaltfläche Schlüssel hinzufügen](/assets/images/help/settings/gpg-add-key.png)
6. Um die Aktion zu bestätigen, gib dein {% data variables.product.product_name %}-Passwort ein.

{% ifversion upload-expired-or-revoked-gpg-key %} {% else %}
## Abgelaufenen GPG-Schlüssel aktualisieren

Bei der Verifizierung einer Signatur überprüft {% data variables.product.product_name %}, ob der Schlüssel widerrufen wurde oder abgelaufen ist. Bei Widerruf oder Ablauf des Signaturschlüssels kann {% data variables.product.product_name %} deine Signaturen nicht verifizieren.

Wenn dein Schlüssel abgelaufen ist, musst du die [Ablaufeinstellungen aktualisieren](https://www.gnupg.org/gph/en/manual.html#AEN329), den neuen Schlüssel exportieren, den abgelaufenen Schlüssel in deinem Konto auf {% data variables.product.product_name %} löschen und den neuen Schlüssel wie oben beschrieben zu deinem Konto hinzufügen. Deine bisherigen Commits und Tags werden als verifiziert angezeigt, sofern der Schlüssel alle anderen Verifizierungsanforderungen erfüllt.

Wenn dein Schlüssel widerrufen wurde, verwende den primären Schlüssel oder einen anderen, nicht widerrufenen Schlüssel zum signieren deiner Commits.

Wenn dein Schlüssel ungültig ist und du keinen anderen gültigen Schlüssel deines Schlüsselsatzes verwendest, sondern stattdessen einen neuen GPG-Schlüssel mit einem neuen Satz an Anmeldeinformationen generierst, werden Commits, die du mit dem widerrufenen oder abgelaufenen Schlüssel durchgeführt hast, weiterhin als nicht verifiziert angezeigt. Du kannst mit den neuen Anmeldeinformationen die alten Commits und Tags weder neu signieren noch verifizieren.
{% endif %}

## Weiterführende Themen

- „[Auf vorhandene GPG-Schlüssel hin prüfen](/articles/checking-for-existing-gpg-keys)“
- „[Einen neuen GPG-Schlüssel erzeugen](/articles/generating-a-new-gpg-key)“
- „[Git deinen Signaturschlüssel mitteilen](/articles/telling-git-about-your-signing-key)“
- „[Eine E-Mail-Adresse mit deinem GPG-Schlüssel verknüpfen](/articles/associating-an-email-with-your-gpg-key)“
- „[Unter Verwendung eines GPG-Schlüssels Commits und Tags signieren](/articles/signing-commits-and-tags-using-gpg)“
- [Informationen zur Verifizierung einer Commitsignatur](/articles/about-commit-signature-verification)
