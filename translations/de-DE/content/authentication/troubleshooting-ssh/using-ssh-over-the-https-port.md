---
title: SSH über den HTTPS-Port verwenden
intro: 'Mitunter verweigert die Firewall das Zulassen von SSH-Verbindungen vollständig.  Wenn das [HTTPS-Klonen mittels Zwischenspeicherung von Anmeldeinformationen](/github/getting-started-with-github/caching-your-github-credentials-in-git) keine Option ist, kannst Du versuchen, mithilfe einer über den HTTPS-Port hergestellten SSH-Verbindung einen Klonvorgang durchzuführen.  Die meisten Firewallregeln sollten dies erlauben, aber Proxyserver beeinträchtigen dies möglicherweise.'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
ms.openlocfilehash: 24a56147129e68c674eaf8dc733a203e2b03348a
ms.sourcegitcommit: 8c8d8598beeaa4f83b3f30cb160a5288fdb4ef9a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190322'
---
{% tip %}

**{% data variables.product.prodname_ghe_server %}-Benutzer**: Der Zugriff auf {% data variables.product.prodname_ghe_server %} über SSH über den HTTPS-Port wird derzeit nicht unterstützt.

{% endtip %}

Führe den folgenden Befehl aus, um zu testen, ob SSH über den HTTPS-Port möglich ist:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% note %}

**Hinweis**: Der Hostname für Port 443 ist `ssh.{% data variables.command_line.backticks %}`, nicht `{% data variables.command_line.backticks %}`.

{% endnote %}

Falls das funktioniert hat, prima! Wenn nicht, musst du [möglicherweise die Schritte in unserem Leitfaden zur Problembehandlung ausführen](/articles/error-permission-denied-publickey).

Um das Repository zu klonen, kannst du nun den folgenden Befehl ausführen:

```
$ git clone ssh://git@ssh.{% data variables.command_line.codeblock %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## SSH-Verbindungen über HTTPS aktivieren

Wenn du über Port 443 eine SSH-Verbindung mit `git@ssh.{% data variables.command_line.backticks %}` herstellen kannst, kannst du deine SSH-Einstellungen überschreiben, um zu erzwingen, dass Verbindungen mit {% data variables.location.product_location %} diesen Server und Port durchlaufen.

Um dies in deiner SSH-Konfigurationsdatei festzulegen, bearbeite die Datei unter `~/.ssh/config`, und füge den folgenden Abschnitt hinzu:

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

Du kannst testen, ob es funktioniert, indem du erneut eine Verbindung mit {% data variables.location.product_location %} herstellst:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

## Aktualisieren bekannter Hosts

Wenn du nach dem Wechsel zu Port 443 zum ersten Mal mit GitHub interagierst, wird möglicherweise eine Warnmeldung angezeigt, dass der Host in `known_hosts` nicht oder unter einem anderen Namen gefunden wurde.

```ShellSession
> The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> This host key is known by the following other names/addresses:
>     ~/.ssh/known_hosts:32: github.com
> Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

Du kannst diese Frage bedenkenlos mit „Ja“ beantworten, sofern der SSH-Fingerabdruck mit einem der von GitHub veröffentlichten Fingerabdrücke übereinstimmt. Die Liste der Fingerabdrücke findest du unter [GitHub-Fingerabdrücke für SSH-Schlüssel](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints).
