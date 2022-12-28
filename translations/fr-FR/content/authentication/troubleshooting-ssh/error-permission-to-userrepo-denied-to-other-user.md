---
title: "Erreur\_: Autorisation pour l’utilisateur/dépôt refusée à l’autre utilisateur"
intro: Cette erreur signifie que la clé avec laquelle vous effectuez une poussée (push) est rattachée à un compte qui n’a pas accès au dépôt.
redirect_from:
  - /articles/error-permission-to-user-repo-denied-to-other-user
  - /articles/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/error-permission-to-userrepo-denied-to-other-user
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-to-userrepo-denied-to-other-user
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied other-user
ms.openlocfilehash: b46df8f9e8671008b37d3db69e2094e96e0413b8
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145085878'
---
Pour résoudre ce problème, le propriétaire du dépôt (`user`) doit ajouter votre compte (`other-user`) en tant que collaborateur sur le dépôt ou à une équipe disposant d’un accès en écriture au dépôt.
