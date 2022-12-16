---
title: SSH-Verbindung testen
intro: 'Nachdem du deinen SSH-Schlüssel eingerichtet und deinem Konto auf {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} hinzugefügt hast, kannst du deine Verbindung testen.'
redirect_from:
  - /articles/testing-your-ssh-connection
  - /github/authenticating-to-github/testing-your-ssh-connection
  - /github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Test your SSH connection
ms.openlocfilehash: 7724c5939b319748f270db2f190a6df825b0bb4f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '146338973'
---
Vor dem Test deiner SSH-Verbindung solltest Du:
- [Auf vorhandene SSH-Schlüsseln überprüft](/articles/checking-for-existing-ssh-keys)
- [Neuer SSH-Schlüssel generiert](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [Deinem GitHub-Konto neue SSH-Schlüssel hinzugefügt](/articles/adding-a-new-ssh-key-to-your-github-account)

Für den Test deiner Verbindung musst du diese Aktion mit deinem Passwort authentifizieren, welches der zuvor erstellten SSH-Schlüssel-Passphrase entspricht. Weitere Informationen zur Verwendung von SSH-Schlüsselpassphrasen findest du unter [Verwenden von SSH-Schlüssel-Passphrasen](/articles/working-with-ssh-key-passphrases).

{% data reusables.command_line.open_the_multi_os_terminal %}
2. Geben Sie Folgendes ein:
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  Eventuell erhälst du eine Warnung wie die folgende:

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. Vergewissere dich, dass der Fingerabdruck in der Nachricht mit {% ifversion fpt or ghec %}[dem Fingerabdruck des öffentlichen Schlüssels von{% data variables.product.prodname_dotcom %}](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %} dem Fingerabdruck des öffentlichen Schlüssels deines Unternehmens übereinstimmt{% endif %}. Wenn dies der Fall ist, gib `yes` ein:
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  Möglicherweise wird folgende Fehlermeldung angezeigt:
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  Dies ist ein bekanntes Problem einiger Linux-Distributionen. Weitere Informationen findest du unter [Fehler: Agent hat Fehler beim Signieren zugelassen](/articles/error-agent-admitted-failure-to-sign).

  {% endlinux %}

   {% note %}

   **Hinweis:** Der Remotebefehl sollte mit Code 1 beendet werden.

   {% endnote %}

4. Vergewissere Dich, dass die resultierende Meldung deinen Benutzernamen enthält. Wenn du eine Meldung „Berechtigung verweigert" erhältst, lies [„Fehler: Berechtigung verweigert (publickey)"](/articles/error-permission-denied-publickey).
