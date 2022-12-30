---
title: 'Fehler: „Bad file number“ (Ungültige Dateinummer)'
intro: 'Diese Fehlermeldung bedeutet normalerweise, dass du keine Verbindung zum Server herstellen konntest. Häufig wird der Fehler durch Firewalls und Proxyserver verursacht.'
redirect_from:
  - /articles/error-bad-file-number
  - /github/authenticating-to-github/error-bad-file-number
  - /github/authenticating-to-github/troubleshooting-ssh/error-bad-file-number
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: db2a47ad6029790cdbf9f0212087acc659326941
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085887'
---
Beim Ausführen von Remote-Git-Befehlen oder SSH kann es bei deiner Verbindung zu einer Zeitüberschreitung kommen:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Connecting to {% data variables.command_line.codeblock %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Bad file number
```

## Das Problem beheben

### Verwende HTTPS.

Oft besteht die einfachste Lösung darin, SSH einfach ganz zu vermeiden. Die meisten Firewalls und Proxys lassen HTTPS-Datenverkehr problemlos zu. Um dies zu nutzen, ändere [die von dir verwendete Remote-URL](/github/getting-started-with-github/about-remote-repositories):

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>reponame</em>.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

### Versuch aus einem anderen Netzwerk

Wenn du von deinem Computer eine Verbindung zu einem anderen Netzwerk ohne Firewall herstellen kannst, kannst du versuchen, eine SSH-Verbindung mit {% data variables.product.product_name %} herzustellen. Wenn alles problemlos funktioniert, bitte deinen Netzwerkadministrator darum, die Firewall-Einstellungen zu ändern, damit du eine SSH-Verbindung mit {% data variables.product.product_name %} herstellen kannst.

{% ifversion fpt or ghec %}

### SSH über den HTTPS-Port verwenden

Wenn die Verwendung von HTTPS keine Option ist und dein Firewalladministrator keine SSH-Verbindungen zulassen möchte, kannst du stattdessen [SSH über den HTTPS-Port](/articles/using-ssh-over-the-https-port) verwenden.

{% endif %}

{% ifversion fpt or ghec %}

## Weitere Informationsquellen

- [Behandlung von Konnektivitätsproblemen](/articles/troubleshooting-connectivity-problems)

{% endif %}
