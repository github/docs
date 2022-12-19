---
title: Affichage de l’historique des changements apportés à un wiki
intro: "Étant donné que les wikis sont des dépôts\_Git, chaque modification que vous apportez est un commit que vous pouvez afficher."
product: '{% data reusables.gated-features.wikis %}'
redirect_from:
  - /articles/viewing-a-wiki-s-history-of-changes
  - /articles/viewing-a-wikis-history-of-changes
  - /github/building-a-strong-community/viewing-a-wikis-history-of-changes
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Community
shortTitle: View a history of changes
ms.openlocfilehash: 1c5330a9067749b4bf0d1f2ed4e6fb9f10b38602
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '145086601'
---
## Affichage de l’historique d’un wiki

L’historique d’un wiki comprend :
- L’utilisateur qui a effectué le changement
- Le message de commit qu’il a fourni
- Le moment où le changement a été effectué

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-wiki %}
3. À l’aide de la barre latérale du wiki, accédez à la page dont vous souhaitez voir l’historique.
4. En haut du wiki, cliquez sur le lien de révision.
   ![Lien de révision du wiki](/assets/images/help/wiki/wiki_revision_link.png)

## Affichage du contenu précédent

Dans le tableau d’historique du wiki, vous pouvez cliquer sur un [code de hachage SHA-1](http://en.wikipedia.org/wiki/SHA-1) (séquence de lettres et de chiffres à l’extrémité droite) pour voir une page wiki telle qu’elle existait à un moment donné.

![Numéro SHA du wiki](/assets/images/help/wiki/wiki_sha_number.png)

## Comparaison de deux révisions

1. Sélectionnez les deux lignes à comparer.
2. En haut du tableau d’historique, cliquez sur **Comparer les révisions**.
   ![Bouton de comparaison des révisions du wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Vous pouvez voir une comparaison des changements montrant les lignes ajoutées, supprimées et modifiées.

## Rétablissement des changements à l’état antérieur

Vous pouvez rétablir des changements à leur état antérieur uniquement si vous êtes autorisé à modifier le wiki.

1. Sélectionnez une ligne à rétablir.
2. En haut du tableau d’historique, cliquez sur **Comparer les révisions**.
   ![Bouton de comparaison des révisions du wiki](/assets/images/help/wiki/wiki_compare_revisions.png)
3. Vous pouvez voir une comparaison des changements montrant les lignes ajoutées, supprimées et modifiées.
   ![Révision du wiki par comparaison des différences](/assets/images/help/wiki/wiki_revision_diff.png)
4. Pour rétablir les changements les plus récents à leur état antérieur, cliquez sur **Rétablir les changements**.
   ![Bouton de rétablissement des changements apportés au wiki](/assets/images/help/wiki/wiki_revert_changes.png)
