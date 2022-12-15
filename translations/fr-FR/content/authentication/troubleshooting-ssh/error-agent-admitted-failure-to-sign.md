---
title: "Erreur\_: l’agent a reconnu un échec de connexion"
intro: 'Dans de rares cas, la connexion à {% data variables.product.product_name %} via SSH sur Linux génère l’erreur `"Agent admitted failure to sign using the key"`. Pour résoudre ce problème, suivez ces étapes.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085889'
---
Quand vous essayez de vous connecter en mode SSH à {% data variables.product.product_location %} sur un ordinateur Linux, vous pouvez voir le message suivant dans votre terminal :

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> Agent admitted failure to sign using the key.
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```

Pour plus d’informations, consultez <a href="https://bugs.launchpad.net/ubuntu/+source/gnome-keyring/+bug/201786" data-proofer-ignore>ce rapport de problème</a>.

## Résolution

Vous devez être en mesure de corriger cette erreur en chargeant vos clés dans votre agent SSH avec `ssh-add` :

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add
> Enter passphrase for /home/<em>you</em>/.ssh/id_rsa: <em>[tippy tap]</em>
> Identity added: /home/<em>you</em>/.ssh/id_rsa (/home/<em>you</em>/.ssh/id_rsa)
```

Si votre clé n’a pas le nom de fichier par défaut (`/.ssh/id_rsa`), vous devez passer ce chemin à `ssh-add` :

```shell
# start the ssh-agent in the background
$ eval "$(ssh-agent -s)"
> Agent pid 59566
$ ssh-add ~/.ssh/my_other_key
> Enter passphrase for /home/<em>you</em>/.ssh/my_other_key: <em>[tappity tap tap]</em>
> Identity added: /home/<em>you</em>/.ssh/my_other_key (/home/<em>you</em>/.ssh/my_other_key)
```
