---
title: "Erreur\_: Clé déjà utilisée"
intro: 'Cette erreur se produit quand vous essayez [d’ajouter une clé](/articles/adding-a-new-ssh-key-to-your-github-account) déjà ajoutée à un autre compte ou référentiel.'
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
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085882'
---
## Recherche de l’endroit où la clé a été utilisée

Pour déterminer où la clé a déjà été utilisée, ouvrez un terminal et tapez la commande `ssh`. Utilisez l’indicateur `-i` pour fournir le chemin de la clé à vérifier :

```shell
$ ssh -T -ai <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
# Connect to {% data variables.product.product_location %} using a specific ssh key
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

Le nom d’utilisateur (*username*) dans la réponse est le compte sur {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} auquel la clé est attachée. Si la réponse ressemble à « nom d’utilisateur/dépôt », la clé a été attachée à un dépôt en tant que [*clé de déploiement*](/guides/managing-deploy-keys#deploy-keys).


Pour forcer SSH à utiliser uniquement la clé fournie sur la ligne de commande, utilisez `-o` pour ajouter l’option `IdentitiesOnly=yes` :

```shell
$ ssh -v -o "IdentitiesOnly=yes" -i <em>~/.ssh/id_rsa</em> git@{% data variables.command_line.codeblock %}
```

## Résolution du problème

Pour résoudre le problème, commencez par supprimer la clé de l’autre compte ou dépôt, puis [ajoutez-la à votre compte](/articles/adding-a-new-ssh-key-to-your-github-account).

Si vous n’avez pas d’autorisations pour transférer la clé et ne pouvez pas contacter un utilisateur qui dispose de ces autorisations, supprimez la paire de clés et [générez-en une nouvelle](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

## Clés de déploiement

Une fois qu’une clé a été attachée à un dépôt en tant que clé de déploiement, elle ne peut pas être utilisée sur un autre dépôt.  Si vous rencontrez cette erreur lors de la configuration des clés de déploiement, consultez « [Gestion des clés de déploiement](/guides/managing-deploy-keys) ».
