---
title: Einen neuen GPG-Schlüssel erzeugen
intro: 'Wenn du noch keinen GPG-Schlüssel besitzt, kannst du einen neuen GPG-Schlüssel für das Signieren von Commits und Tags erzeugen.'
redirect_from:
  - /articles/generating-a-new-gpg-key
  - /github/authenticating-to-github/generating-a-new-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/generating-a-new-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
ms.openlocfilehash: fbe51f7b50414632e6994d6f621441c8923e47f1
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/09/2022
ms.locfileid: '147710227'
---
{% data reusables.gpg.supported-gpg-key-algorithms %}

## Einen GPG-Schlüssel erzeugen

{% note %}

**Hinweis:** Bevor du einen neuen GPG-Schlüssel erzeugst, musst du unbedingt deine E-Mail-Adresse verifizieren. Wenn du deine E-Mail-Adresse nicht verifiziert hast, kannst du Commits und Tags nicht mit GPG signieren.{% ifversion fpt or ghec %} Weitere Informationen findest du unter [Verifizieren deiner E-Mail-Adresse](/articles/verifying-your-email-address).{% endif %}

{% endnote %}

1. Lade [die GPG-Befehlszeilentools](https://www.gnupg.org/download/) für dein Betriebssystem herunter und installiere sie. Wir empfehlen normalerweise, die aktuellste Version für dein Betriebssystem zu installieren.
{% data reusables.command_line.open_the_multi_os_terminal %}
3. Erzeuge ein GPG-Schlüsselpaar. Da es mehrere GPG-Versionen gibt, musst du möglicherweise die relevante [_Manpage_](https://en.wikipedia.org/wiki/Man_page) konsultieren, um den entsprechenden Befehl zur Schlüsselgenerierung zu finden. Dein Schlüssel muss RSA verwenden.
    - Wenn du Version 2.1.17 oder höher verwendest, füge den folgenden Text ein, um ein GPG-Schlüsselpaar zu erzeugen.
      ```shell{:copy}
      $ gpg --full-generate-key
      ```
    - Wenn du nicht Version 2.1.17 oder höher verwendest, funktioniert der `gpg --full-generate-key`-Befehl nicht. Füge den nachfolgenden Text ein, und fahre mit Schritt 6 fort.
      ```shell{:copy}
      $ gpg --default-new-key-algo rsa4096 --gen-key
      ```
4. Gib an der Eingabeaufforderung den gewünschten Schlüssel ein, oder drücke `Enter`, um die Standardeinstellung zu akzeptieren.
5. Gib an der Eingabeaufforderung die gewünschte Schlüsselgröße ein, oder drücke `Enter`, um die Standardeinstellung zu akzeptieren. Dein Schlüssel muss mindestens `4096` Bits aufweisen.
6. Gib die Zeitdauer für die Gültigkeit des Schlüssels ein. Drücke `Enter`, um die Standardeinstellung festzulegen, die vorgibt, dass der Schlüssel nicht abläuft. Es wird empfohlen, diese Standardeinstellung zu übernehmen, außer es ist ein Ablaufdatum erforderlich.
7. Überprüfe, dass deine Einstellungen korrekt sind.
8. Gib deine Benutzer-ID-Informationen ein.

  {% note %}

  **Hinweis:** Wenn du zur Eingabe deiner E-Mail-Adresse aufgefordert wirst, stelle sicher, dass du die verifizierte E-Mail-Adresse für dein GitHub-Konto eingibst. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} Weitere Informationen findest du unter [Verifizieren deiner E-Mail-Adresse](/articles/verifying-your-email-address) und [Festlegen deiner Commit-E-Mail-Adresse](/articles/setting-your-commit-email-address). {% endif %}

  {% endnote %}

9. Gib eine sichere Passphrase ein.
{% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
10. Füge den folgenden Text ein, und ersetzte dabei die GPG-Schlüssel-ID, die du verwenden möchtest. In diesem Beispiel lautet die GPG-Schlüssel-ID `3AA5C34371567BD2`:
 ```shell{:copy}
 $ gpg --armor --export 3AA5C34371567BD2
 # Prints the GPG key ID, in ASCII armor format
 ```
11. Kopiere deinen GPG-Schlüssel, der mit `-----BEGIN PGP PUBLIC KEY BLOCK-----` beginnt und auf `-----END PGP PUBLIC KEY BLOCK-----` endet.
12. [Füge den GPG-Schlüssel deinem GitHub-Konto hinzu](/articles/adding-a-gpg-key-to-your-github-account).

## Weitere Informationsquellen

* „[Auf vorhandene GPG-Schlüssel hin prüfen](/articles/checking-for-existing-gpg-keys)“
* [Hinzufügen eines GPG-Schlüssels zu deinem GitHub-Konto](/articles/adding-a-gpg-key-to-your-github-account)
* „[Git deinen Signaturschlüssel mitteilen](/articles/telling-git-about-your-signing-key)“
* [Verknüpfen einer E-Mail-Adresse mit deinem GPG-Schlüssel](/articles/associating-an-email-with-your-gpg-key)
* [Signieren von Commits](/articles/signing-commits)
* [Signieren von Tags](/articles/signing-tags)
