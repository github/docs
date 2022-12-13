---
title: 'Fehler: „Agent admitted failure to sign“ (Agent gibt Signierfehler zu)'
intro: 'Unter seltenen Umständen erzeugt die Verbindung mit {% data variables.product.product_name %} über SSH unter Linux den Fehler `"Agent admitted failure to sign using the key"`. Führe diese Schritte aus, um das Problem zu beheben.'
redirect_from:
  - /articles/error-agent-admitted-failure-to-sign-using-the-key
  - /articles/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/error-agent-admitted-failure-to-sign
  - /github/authenticating-to-github/troubleshooting-ssh/error-agent-admitted-failure-to-sign
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Agent failure to sign
ms.openlocfilehash: eceb783df61b403a6b94b8eda84be62e63aa5ead
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085888'
---
Wenn du auf einem Linux-Computer versuchst, eine SSH-Verbindung mit {% data variables.product.product_location %} herzustellen, wird möglicherweise die folgende Meldung im Terminal angezeigt:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

Weitere Details findest du in <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>diesem Issue-Bericht</a>.

## Lösung

Du solltest diesen Fehler beheben können, indem du deine Schlüssel mit `ssh-add` in deinen SSH-Agenten lädst:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/<em>you</em>/.ssh/id_rsa: <em>[tippy tap]</em>
> Identity added: /home/<em>you</em>/.ssh/id_rsa (/home/<em>you</em>/.ssh/id_rsa)
```

Wenn dein Schlüssel nicht über den Standarddateinamen (`/.ssh/id_rsa`) verfügt, musst du diesen Pfad an `ssh-add` übergeben:

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/<em>you</em>/.ssh/my_other_key: <em>[tappity tap tap]</em>
> Identity added: /home/<em>you</em>/.ssh/my_other_key (/home/<em>you</em>/.ssh/my_other_key)
```
