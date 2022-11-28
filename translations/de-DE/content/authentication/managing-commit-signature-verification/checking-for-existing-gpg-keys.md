---
title: Auf vorhandene GPG-Schlüssel prüfen
intro: 'Bevor du einen GPG-Schlüssel erstellst, kannst du überprüfen, ob du bereits GPG-Schlüssel besitzt.'
redirect_from:
  - /articles/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/checking-for-existing-gpg-keys
  - /github/authenticating-to-github/managing-commit-signature-verification/checking-for-existing-gpg-keys
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Existing GPG keys
ms.openlocfilehash: c766f4707f2b208c84394f655a7e8b47a9456f6e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369297'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

{% note %}

**Hinweis:** GPG wird nicht standardmäßig auf macOS oder Windows installiert. Informationen zum Installieren von GPG-Befehlszeilentools findest du auf [der Downloadseite von GnuPG](https://www.gnupg.org/download/).

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %}
3. Überprüfe die Befehlsausgabe, um zu ermitteln, ob du ein GPG-Schlüsselpaar besitzt.
    * Wenn es keine GPG-Schlüsselpaare gibt oder du keine verwenden möchtest, die zum Signieren von Commits und Tags zur Verfügung stehen, dann [erzeuge einen neuen GPG-Schlüssel](/articles/generating-a-new-gpg-key).
    * Wenn ein vorhandenes GPG-Schlüsselpaar vorhanden ist und du es zum Signieren von Commits und Tags verwenden möchtest, kannst du den öffentlichen Schlüssel mithilfe des folgenden Befehls anzeigen, indem du die GPG-Schlüssel-ID durch die ersetzt, die du verwenden möchtest. In diesem Beispiel lautet die GPG-Schlüssel-ID `3AA5C34371567BD2`:
      ```shell
      $ gpg --armor --export <em>3AA5C34371567BD2</em>
      # Prints the GPG key ID, in ASCII armor format
      ```
      Anschließend kannst du [deinen GPG-Schlüssel zu deinem GitHub-Konto hinzufügen](/articles/adding-a-gpg-key-to-your-github-account).

## Weiterführende Themen

* „[Einen neuen GPG-Schlüssel erzeugen](/articles/generating-a-new-gpg-key)“
* [Hinzufügen eines GPG-Schlüssels zu deinem GitHub-Konto](/articles/adding-a-gpg-key-to-your-github-account)
* „[Git deinen Signaturschlüssel mitteilen](/articles/telling-git-about-your-signing-key)“
* [Verknüpfen einer E-Mail-Adresse mit deinem GPG-Schlüssel](/articles/associating-an-email-with-your-gpg-key)
* [Signieren von Commits](/articles/signing-commits)
* [Signieren von Tags](/articles/signing-tags)
