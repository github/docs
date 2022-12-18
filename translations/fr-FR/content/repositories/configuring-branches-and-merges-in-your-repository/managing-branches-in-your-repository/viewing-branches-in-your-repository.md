---
title: Affichage des branches dans votre dépôt
intro: 'Les branches sont essentielles à la collaboration sur {% data variables.product.product_name %}, et la meilleure façon de les afficher est d’utiliser la page branches.'
redirect_from:
  - /articles/viewing-branches-in-your-repository
  - /github/administering-a-repository/viewing-branches-in-your-repository
  - /github/administering-a-repository/managing-branches-in-your-repository/viewing-branches-in-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Repositories
shortTitle: View branches
ms.openlocfilehash: 286c8eb8c717f5a002db0059e65c416ccc3981e8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145132353'
---
{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.navigate-to-branches %}
3. Utilisez la navigation en haut de la page pour afficher des listes spécifiques de branches :
    - **Vos branches** : dans les dépôts auxquels vous disposez d’un accès push, la vue **Les vôtres** affiche toutes les branches vers lesquelles vous avez poussé, à l’exclusion de la branche par défaut, avec les branches les plus récentes en premier.
    - **Branches actives** : la vue **Actives** affiche toutes les branches qui ont fait l’objet d’un commit au cours des trois derniers mois (les branches avec les commits les plus récents étant affichées en premier).
    - **Branches obsolètes** : la vue **Obsolètes** affiche toutes les branches qui n’ont fait l’objet d’aucun commit au cours des trois derniers mois (les branches avec les commits les plus anciens étant affichées en premier). Utilisez cette liste pour déterminer [les branches à supprimer](/articles/creating-and-deleting-branches-within-your-repository).
    - **Toutes les branches** : la vue **Toutes** affiche la branche par défaut, suivie de toutes les autres branches (celles avec les commits les plus récents étant affichées en premier).

4. Si vous le souhaitez, utilisez le champ de recherche en haut à droite. Il fournit une recherche de sous-chaîne simple, sans respect de la casse, sur le nom de la branche. Il ne prend pas en charge de syntaxe de requête supplémentaire.

![Page de branches pour le dépôt Atom](/assets/images/help/branches/branches-overview-atom.png)

## Pour aller plus loin

- « [Création et suppression de branches dans votre dépôt](/articles/creating-and-deleting-branches-within-your-repository) »
- « [Suppression de branches inutilisées](/articles/deleting-unused-branches) »
