---
title: 'Fehler: „Key already in use“ (Schlüssel wird bereits verwendet)'
intro: 'Dieser Fehler tritt auf, wenn du versuchst, [einen Schlüssel](/articles/adding-a-new-ssh-key-to-your-github-account) hinzuzufügen, der bereits einem anderen Konto oder Repository hinzugefügt wurde.'
redirect_from:
  - /articles/error-key-already-in-use
  - /github/authenticating-to-github/error-key-already-in-use
  - /github/authenticating-to-github/troubleshooting-ssh/error-key-already-in-use
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: d202de2efe05951fe829a8198b20831fc15bbd72
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085883'
---
## Herausfinden, wo der Schlüssel verwendet wurde

Um zu ermitteln, wo der Schlüssel bereits verwendet wurde, öffne ein Terminal, und gib den Befehl `ssh` ein. Verwende das Flag `-i`, um den Pfad zu dem Schlüssel anzugeben, den du überprüfen möchtest:

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.product.product_location %} using a specific ssh key
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Der Wert für *username* in der Antwort ist das Konto in {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %}, an das der Schlüssel derzeit angefügt ist. Wenn die Antwort eine Zeichenfolge wie „username/repo“ enthält, wurde der Schlüssel als [*Bereitstellungsschlüssel*](/guides/managing-deploy-keys#deploy-keys) an ein Repository angefügt.


Um zu erzwingen, dass SSH nur den in der Befehlszeile angegebenen Schlüssel verwendet, verwende `-o` zum Hinzufügen der Option `IdentitiesOnly=yes`:

```shell
$ ssh -v -o "IdentitiesOnly=yes" -i <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
```

## Das Problem beheben

Um das Problem zu beheben, entferne zuerst den Schlüssel aus dem anderen Konto oder Repository, und [füge ihn dann deinem Konto hinzu](/articles/adding-a-new-ssh-key-to-your-github-account).

Wenn du keine Berechtigung zum Übertragen des Schlüssels besitzt und dich nicht an einen Benutzer wenden kannst, der über diese Berechtigung verfügt, entferne das Schlüsselpaar, und [generiere einen vollständig neuen Schlüssel](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Schlüssel bereitstellen

Sobald ein Schlüssel als Deployment-Schlüssel an ein Repository angehängt wurde, kann er nicht für andere Repositorys verwendet werden.  Wenn dieser Fehler beim Einrichten von Bereitstellungsschlüsseln auftritt, lies die Informationen unter [Verwalten von Bereitstellungsschlüsseln](/guides/managing-deploy-keys).
