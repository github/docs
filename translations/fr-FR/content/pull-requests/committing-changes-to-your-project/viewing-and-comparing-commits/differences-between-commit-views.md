---
title: Différences entre les vues de validation
intro: Vous pouvez observer des différences dans l’historique des validations en fonction de la méthode d’affichage choisie.
redirect_from:
  - /articles/differences-between-commit-views
  - /github/committing-changes-to-your-project/differences-between-commit-views
  - /github/committing-changes-to-your-project/viewing-and-comparing-commits/differences-between-commit-views
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Commit views
ms.openlocfilehash: 2b5d59d385f815bd09c853e398d372bb4c861650
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '145132515'
---
Sur {% data variables.product.product_name %}, vous pouvez consulter l’historique des validations d’un référentiel en :

- Accédant directement à [la page des validations](https://github.com/mozilla/rust/commits/master) d’un référentiel
- Cliquant sur un fichier, puis sur **Historique** pour accéder à [l’historique des validations d’un fichier spécifique](https://github.com/mozilla/rust/commits/master/README.md)

Ces deux vues de validation peuvent afficher des informations _différentes_. L’historique d’un seul fichier peut omettre les validations trouvées dans l’historique des validations du référentiel.

Git propose plusieurs façons d’afficher l’historique d’un référentiel. Lorsque Git affiche l’historique d’un seul fichier, il simplifie l’historique en omettant les validations qui ne modifient pas le fichier. Au lieu d’examiner chaque validation pour voir ses éventuelles répercussions sur le fichier, Git omet une branche entière si celle-ci, une fois fusionnée, n’a pas eu d’impact sur le contenu final du fichier. Les validations sur la branche ayant eu un impact sur le fichier ne sont pas affichées.

En matière d’historique des validations d’un fichier, {% data variables.product.product_name %} suit explicitement cette stratégie simple. Il simplifie l’historique en supprimant les validations qui n’ont pas contribué au résultat final. Par exemple, si une branche latérale a effectué une modification et l'a ensuite annulée, cette validation n'apparaît pas dans l'historique de la branche. Cela rend la révision des branches plus efficace, car seules les validations affectant le fichier s’affichent.

Cette vue tronquée ne contient pas toujours les informations que vous recherchez. Si vous souhaitez afficher l’historique dans son intégralité, {% data variables.product.product_name %} offre une vue plus détaillée sur la page des validations d’un référentiel.

Pour plus d’informations sur la façon dont Git considère l’historique des validations, consultez [la section « Simplification de l’historique »](https://git-scm.com/docs/git-log#_history_simplification) de l’article d’aide `git log`.

## Pour aller plus loin

- « [Signature de commits](/articles/signing-commits) »
- « [Recherche de validations](/search-github/searching-on-github/searching-commits) »
