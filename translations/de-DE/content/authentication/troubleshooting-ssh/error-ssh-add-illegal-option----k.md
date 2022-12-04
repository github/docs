---
title: 'Fehler: „ssh-add: illegal option -- K“'
intro: 'Diese Fehlermeldung bedeutet, dass deine Version von `ssh-add` die macOS-Keychainintegration nicht unterstützt, die das Speichern deiner Passphrase in der Keychain ermöglicht.'
redirect_from:
  - /articles/error-ssh-add-illegal-option-k
  - /articles/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/error-ssh-add-illegal-option----k
  - /github/authenticating-to-github/troubleshooting-ssh/error-ssh-add-illegal-option----k
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: 'ssh-add: illegal option -- K'
ms.openlocfilehash: a9c563f637d2deb544611c8b357761ff1148fa1c
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085875'
---
Die Option `-K` ist in Apples Standardversion von `ssh-add`, die die Passphrase in deiner Schlüsselkette für dich speichert, wenn du einen SSH-Schlüssel zum SSH-Agenten hinzufügst. Wenn du eine andere Version von `ssh-add` installiert hast, fehlt möglicherweise die Unterstützung für `-K`.

## Das Problem beheben

Um deinen privaten SSH-Schlüssel zum SSH-Agent hinzuzufügen, kannst du den Pfad zur Apple-Version von `ssh-add` angeben:

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_ed25519
```

{% note %}

**Hinweis:** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

## Weitere Informationsquellen

- „[Generieren eines neuen SSH-Schlüssels und Hinzufügen zu SSH-Agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)“
- [Linus-Manpage für SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- Führe `man ssh-add` im Terminal aus, um die Manpage von Apple für SSH-ADD anzuzeigen.
