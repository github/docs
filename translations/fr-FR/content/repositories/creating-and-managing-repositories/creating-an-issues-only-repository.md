---
title: Création d’un dépôt de problèmes uniquement
intro: '{% data variables.product.product_name %} ne fournit pas d’autorisations d’accès limitées aux problèmes, mais, pour ce faire, vous pouvez utiliser un deuxième dépôt qui contient uniquement les problèmes.'
redirect_from:
  - /articles/issues-only-access-permissions
  - /articles/is-there-issues-only-access-to-organization-repositories
  - /articles/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-an-issues-only-repository
  - /github/creating-cloning-and-archiving-repositories/creating-a-repository-on-github/creating-an-issues-only-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: Issues-only repository
ms.openlocfilehash: 76450c6d3bddd02ab3e389b35e6ce67d01ffd771
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145132332'
---
1. Créez un dépôt **privé** pour héberger le code source à partir de votre projet.
2. Créez un deuxième dépôt avec les autorisations que vous souhaitez pour héberger le traqueur de problèmes.
3. Ajoutez un fichier README au dépôt de problèmes, expliquant l’objectif de ce dépôt et liant à la section des problèmes.
4. Définissez vos collaborateurs ou équipes pour leur donner accès aux dépôts comme vous le souhaitez.

Les utilisateurs disposant d’un accès en écriture aux deux peuvent référencer et clore des questions dans les deux dépôts, mais ceux qui n’ont pas les autorisations requises verront des références contenant un minimum d’informations.

Par exemple, si vous envoyiez (push) une validation à la branche par défaut du dépôt privé avec un message disant `Fixes organization/public-repo#12`, le problème serait clos, mais seuls les utilisateurs disposant des autorisations appropriées verraient la référence inter-dépôt indiquant la validation qui a clos le problème. Sans les autorisations, une référence apparaît toujours, mais les détails sont omis.
