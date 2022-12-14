---
title: SSH-Schlüssel-Passphrase wiederherstellen
intro: 'Wenn du deine SSH-Schlüsselpassphrase verloren hast, kannst du sie je nach verwendetem Betriebssystem wiederherstellen oder musst eine neue SSH-Schlüsselpassphrase generieren.'
redirect_from:
  - /articles/how-do-i-recover-my-passphrase
  - /articles/how-do-i-recover-my-ssh-key-passphrase
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/troubleshooting-ssh/recovering-your-ssh-key-passphrase
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Recover SSH key passphrase
ms.openlocfilehash: 28d768e81f3076898c23b2b1668314ae5573ec5c
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/10/2022
ms.locfileid: '145085848'
---
{% mac %}

Wenn du [deine SSH-Passphrase mit der macOS-Schlüsselkette konfiguriert](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain) hast, kannst du sie möglicherweise wiederherstellen.

1. Suche über die Suchfunktion nach der **Keychain Access**-App.
   ![Suchleiste von Spotlight](/assets/images/help/setup/keychain-access.png)
2. Suche in Keychain Access nach **SSH**.
3. Doppelklicke auf den Eintrag für deinen SSH-Schlüssel, um ein neues Dialogfeld zu öffnen.
4. Klicke in der unteren linken Ecke auf **Passwort anzeigen**.
   ![Dialogfenster in Keychain Access](/assets/images/help/setup/keychain_show_password_dialog.png)
5. Du wirst nach deinem Administrator-Passwort gefragt. Gib es im Dialogfeld „Keychain Access“ (Keychain Zugriff) ein.
6. Dein Passwort wird angezeigt.

{% endmac %}

{% windows %}

Wenn du deine SSH-Schlüssel-Passphrase verlierst, kannst du sie nicht wiederherstellen. Du musst [ein brandneues SSH-Schlüsselpaar generieren](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) oder [zum HTTPS-Klonen wechseln](/github/getting-started-with-github/managing-remote-repositories), damit du stattdessen dein GitHub-Kennwort verwenden kannst.

{% endwindows %}

{% linux %}

Wenn du deine SSH-Schlüssel-Passphrase verlierst, kannst du sie nicht wiederherstellen. Du musst [ein brandneues SSH-Schlüsselpaar generieren](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) oder [zum HTTPS-Klonen wechseln](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls), damit du stattdessen dein GitHub-Kennwort verwenden kannst.

{% endlinux %}
