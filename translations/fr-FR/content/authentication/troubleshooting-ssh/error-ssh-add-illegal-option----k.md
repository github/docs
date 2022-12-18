---
title: "Erreur\_: ssh-add\_: option illégale-- K"
intro: 'Cette erreur signifie que votre version de `ssh-add` ne prend pas en charge l’intégration du trousseau macOS, qui vous permet de stocker votre phrase secrète dans le trousseau.'
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
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085874'
---
L’option `-K` se trouve dans la version standard d’Apple de `ssh-add`, qui stocke la phrase secrète dans votre trousseau quand vous ajoutez une clé SSH à ssh-agent. Si vous avez installé une autre version de `ssh-add`, elle peut ne pas être prise en charge pour `-K`.

## Résolution du problème

Pour ajouter votre clé privée SSH à ssh-agent, vous pouvez spécifier le chemin de la version Apple de `ssh-add` :

```shell
  $ /usr/bin/ssh-add -K ~/.ssh/id_ed25519
```

{% note %}

**Remarque  :** {% data reusables.ssh.add-ssh-key-to-ssh-agent %}

{% endnote %}

## Pour aller plus loin

- « [Génération d’une nouvelle clé SSH et ajout de celle-ci à ssh-agent](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) »
- [Page man Linux pour SSH-ADD](http://man7.org/linux/man-pages/man1/ssh-add.1.html)
- Pour afficher la page man d’Apple pour SSH-ADD, exécutez `man ssh-add` dans le terminal
