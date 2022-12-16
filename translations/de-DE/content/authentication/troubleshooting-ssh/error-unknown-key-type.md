---
title: 'Fehler: Unbekannter Schlüsseltyp'
intro: 'Dieser Fehler bedeutet, dass der von dir verwendete SSH-Schlüsseltyp nicht erkannt wurde oder von deinem SSH-Client nicht unterstützt wird. '
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
redirect_from:
  - /github/authenticating-to-github/error-unknown-key-type
  - /github/authenticating-to-github/troubleshooting-ssh/error-unknown-key-type
ms.openlocfilehash: 83bf8714255a4d8f028beb73fd5c8fbcdbb0ef52
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065898'
---
## Informationen zum Fehler `unknown key type`

Beim Generieren eines neuen SSH-Schlüssels erhältst du möglicherweise einen Fehler vom Typ `unknown key type`, wenn dein SSH-Client den von dir angegebenen Schlüsseltyp nicht unterstützt.{% mac %}Um dieses Problem unter macOS zu lösen, kannst du deinen SSH-Client aktualisieren oder einen neuen SSH-Client installieren.

## Voraussetzungen

Homebrew muss installiert sein. Weitere Informationen findest du im [Installationshandbuch](https://docs.brew.sh/Installation) in der Homebrew-Dokumentation.

## Das Problem beheben

{% warning %}

**Warnung:** Wenn du OpenSSH installierst, kann dein Computer keine Passphrases abrufen, die in der Apple-Keychain gespeichert sind. Du musst jedes Mal deine Passphrase eingeben oder mit deinem Hardwaresicherheitsschlüssel interagieren, wenn du dich mit SSH bei {% data variables.product.prodname_dotcom %} oder einem anderen Webdienst authentifizierst.

Wenn du OpenSSH entfernst, können die in der Keychain gespeicherten Passphrases wieder abgerufen werden. Du kannst OpenSSH entfernen, indem du den Befehl `brew uninstall openssh` im Terminal eingibst.

{% endwarning %}

1. Öffne das Terminal.
2. Gib den Befehl `brew install openssh` ein.
3. Beende das Terminal, und starte es neu.
4. Wiederhole die Prozedur zum Generieren eines neuen SSH-Schlüssels. Weitere Informationen findest du unter [Generieren eines neuen SSH-Schlüssels und Hinzufügen des Schlüssels zum SSH-Agent](/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key-for-a-hardware-security-key).

{% endmac %}{% linux %}Um das Problem unter Linux zu beheben, verwende den Paket-Manager für deine Linux-Distribution, um eine neue Version von OpenSSH zu installieren, oder kompiliere eine neue Version aus der Quelle. Wenn du eine andere Version von OpenSSH installierst, kann die Fähigkeit anderer Anwendungen, sich über SSH zu authentifizieren, beeinträchtigt sein. Weitere Informationen hierzu findest du in der Dokumentation für deine Distribution.{% endlinux %}
