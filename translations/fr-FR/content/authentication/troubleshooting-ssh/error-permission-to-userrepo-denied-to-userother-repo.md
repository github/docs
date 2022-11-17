---
title: "Erreur\_: Autorisation pour l’utilisateur/dépôt refusée à l’utilisateur/autre dépôt"
intro: 'Cette erreur signifie que la clé avec laquelle vous effectuez une poussée (push) est rattachée à un autre dépôt en tant que clé de déploiement, et qu’elle n’a pas accès au dépôt vers lequel vous tentez la poussée (push).'
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-user-other-repo
  - /articles/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-userother-repo
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-userother-repo
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-repo
ms.openlocfilehash: 4d4898e947338e39c5ade86b5ea0a71f54f36f03
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145085877'
---
Pour résoudre ce problème, supprimez la clé de déploiement du dépôt et [ajoutez la clé à votre compte personnel](/articles/adding-a-new-ssh-key-to-your-github-account) à la place.

Si la clé que vous utilisez est destinée à être une clé de déploiement, consultez [notre guide sur les clés de déploiement](/guides/managing-deploy-keys) pour plus d’informations.
