---
title: Verknüpfen einer E-Mail-Adresse mit deinem GPG-Schlüssel
intro: 'Dein GPG-Schlüssel muss mit einer von {% data variables.product.product_name %} verifizierten E-Mail-Adresse verknüpft werden, die mit deiner Beitragendenidentität übereinstimmt.'
redirect_from:
  - /articles/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/associating-an-email-with-your-gpg-key
  - /github/authenticating-to-github/managing-commit-signature-verification/associating-an-email-with-your-gpg-key
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Identity
  - Access management
shortTitle: Associate email with GPG key
ms.openlocfilehash: d36c053e1df0c329fb8d4607b1338c49414e76de
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147369281'
---
{% note %}

Wenn du einen GPG-Schlüssel verwendest, der mit deiner Committer-Identität und deiner verifizierten E-Mail-Adresse übereinstimmt, die mit deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} verbunden ist, kannst du mit dem Signieren von Commits und Tags beginnen.

{% endnote %}

{% data reusables.command_line.open_the_multi_os_terminal %} {% data reusables.gpg.list-keys-with-note %} {% data reusables.gpg.copy-gpg-key-id %}
4. Füge `gpg --edit-key GPG key ID` ein, und ersetzte dabei die GPG-Schlüssel-ID, die du verwenden möchtest. Im folgenden Beispiel lautet die GPG-Schlüssel-ID: `3AA5C34371567BD2`
  ```shell
  $ gpg --edit-key <em>3AA5C34371567BD2</em>
  ```
5. Gib `gpg> adduid` ein, um die Details der Benutzer-ID hinzuzufügen.
  ```shell
  $ gpg> adduid
  ```
6. Folge den Aufforderungen, deinen echten Namen, deine E-Mail-Adresse und jegliche Kommentare anzugeben. Du kannst deine Einträge ändern, indem du die Einträge `N`, `C` oder `E` auswählst. {% data reusables.gpg.private-email %} {% ifversion fpt or ghec %} Weitere Informationen findest du unter [Einrichten deiner Commit-E-Mail-Adresse](/articles/setting-your-commit-email-address).{% endif %}
  ```shell
  Real Name: <em>Octocat</em>
  Email address: <em>octocat@github.com</em>
  Comment: <em>GitHub key</em>
  Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
  ```
7. Gib `O` ein, um deine Auswahl zu bestätigen.
8. Gib die Passphrase deines Schlüssels ein.
9. Gib `gpg> save` ein, um die Änderungen zu speichern.
  ```shell
  $ gpg> save
  ```
10. Gib `gpg --armor --export GPG key ID` ein, und setze dabei die GPG-Schlüssel-ID ein, die du verwenden möchtest. Im folgenden Beispiel lautet die GPG-Schlüssel-ID: `3AA5C34371567BD2`
  ```shell
  $ gpg --armor --export <em>3AA5C34371567BD2</em>
  # Prints the GPG key, in ASCII armor format
  ```
11. Lade den GPG-Schlüssel hoch, indem du [ihn zu deinem GitHub-Konto hinzufügst](/articles/adding-a-gpg-key-to-your-github-account).

## Weiterführende Themen

- „[Auf vorhandene GPG-Schlüssel hin prüfen](/articles/checking-for-existing-gpg-keys)“
- „[Generieren eines neuen GPG-Schlüssels](/articles/generating-a-new-gpg-key)“
- [Verwenden einer überprüften E-Mail-Adresse in deinem GPG-Schlüssel](/articles/using-a-verified-email-address-in-your-gpg-key)
- [Hinzufügen eines GPG-Schlüssels zu deinem GitHub-Konto](/articles/adding-a-gpg-key-to-your-github-account)
- „[Signieren von Commits](/articles/signing-commits)“
- [Signieren von Tags](/articles/signing-tags)
