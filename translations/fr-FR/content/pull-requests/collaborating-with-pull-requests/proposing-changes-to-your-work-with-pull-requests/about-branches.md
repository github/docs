---
title: À propos des branches
intro: Utilisez une branche pour isoler le travail de développement sans affecter les autres branches du dépôt. Chaque dépôt a une branche par défaut et peut avoir plusieurs autres branches. Vous pouvez fusionner une branche dans une autre branche en utilisant une demande de tirage (pull request).
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
  - /articles/working-with-protected-branches
  - /articles/about-branches
  - /github/collaborating-with-issues-and-pull-requests/about-branches
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
ms.openlocfilehash: 0262a7a8fb0bb8556c3f6062e3fc8512eb9fa1c6
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145133935'
---
## À propos des branches

Les branches vous permettent de développer des fonctionnalités, de corriger des bogues ou d’expérimenter en toute sécurité de nouvelles idées dans une zone contenue de votre dépôt.

Pour créer une branche, vous partez toujours d’une branche existante. En règle générale, vous pouvez créer une branche à partir de la branche par défaut de votre dépôt. Vous pouvez ensuite travailler sur cette nouvelle branche indépendamment des changements apportés au dépôt par d’autres personnes. Une branche que vous créez pour générer une fonctionnalité est généralement appelée branche de fonctionnalité ou branche de rubrique. Pour plus d’informations, consultez « [Création et suppression de branches dans votre dépôt](/articles/creating-and-deleting-branches-within-your-repository/) ».

Vous pouvez aussi utiliser une branche pour publier un site {% data variables.product.prodname_pages %}. Pour plus d’informations, consultez « [À propos de {% data variables.product.prodname_pages %}](/articles/what-is-github-pages) ».

Vous devez disposer d’un accès en écriture à un dépôt pour créer une branche, ouvrir une demande de tirage (pull request) ou supprimer et restaurer des branches dans une demande de tirage. Pour plus d’informations, consultez « [Autorisations d’accès sur {% data variables.product.prodname_dotcom %}](/github/getting-started-with-github/access-permissions-on-github) ».

## À propos de la branche par défaut

{% data reusables.branches.new-repo-default-branch %} La branche par défaut est la branche que {% data variables.product.prodname_dotcom %} présente quand une personne visite votre dépôt. La branche par défaut est également la branche initiale vers laquelle Git bascule localement quand une personne clone le dépôt. {% data reusables.branches.default-branch-automatically-base-branch %}

Par défaut, {% data variables.product.product_name %} nomme `main` la branche par défaut dans un nouveau dépôt.

{% data reusables.branches.change-default-branch %}

{% data reusables.branches.set-default-branch %}

## Utilisation des branches

Une fois que vous êtes satisfait de votre travail, vous pouvez ouvrir une demande de tirage pour fusionner les changements de la branche actuelle (la branche *principale*) dans une autre branche (la branche de *base*). Pour plus d’informations, consultez « [À propos des demandes de tirage (pull requests)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) ».

Une fois qu’une demande de tirage a été fusionnée ou fermée, vous pouvez supprimer la branche principale, car celle-ci n’est plus nécessaire. Vous devez disposer d’un accès en écriture au dépôt pour supprimer des branches. Vous ne pouvez pas supprimer les branches directement associées à des demandes de tirage ouvertes. Pour plus d’informations, consultez « [Suppression et restauration de branches dans une demande de tirage](/github/administering-a-repository/deleting-and-restoring-branches-in-a-pull-request) ».

{% data reusables.pull_requests.retargeted-on-branch-deletion %} Les diagrammes suivants illustrent ce point.

 Ici, une personne a créé une branche appelée `feature1` à partir de la branche `main`, et vous avez ensuite créé une branche appelée `feature2` à partir de `feature1`. Il existe des demandes de tirage ouvertes pour les deux branches. Les flèches indiquent la branche de base actuelle pour chaque demande de tirage. À ce stade, `feature1` est la branche de base de `feature2`. Si vous fusionnez maintenant la demande de tirage pour `feature2`, la branche `feature2` est fusionnée dans `feature1`.

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram1.png)

Dans le diagramme suivant, une personne a fusionné la demande de tirage pour `feature1` dans la branche `main`, puis elle a supprimé la branche `feature1`. En conséquence, {% data variables.product.prodname_dotcom %} a automatiquement reciblé la demande de tirage pour `feature2` afin que sa branche de base soit maintenant `main`.

 ![merge-pull-request-button](/assets/images/help/branches/pr-retargeting-diagram2.png)

À présent, quand vous fusionnez la demande de tirage `feature2`, elle l’est dans la branche `main`.

## Utilisation de branches protégées

Les administrateurs de dépôt peuvent activer des protections sur une branche. Si vous travaillez sur une branche protégée, vous ne pouvez pas supprimer une branche ni forcer une poussée (push) vers la branche. Les administrateurs de dépôt peuvent également activer plusieurs autres paramètres de branche protégée pour appliquer divers workflows avant qu’une branche ne puisse être fusionnée.

{% note %}

**Remarque :** Si vous êtes administrateur de dépôt, vous pouvez fusionner des demandes de tirage sur des branches dotées de protections activées même si la demande de tirage ne satisfait pas aux exigences, sauf si les protections de branche ont été définies sur « Inclure les administrateurs ».

{% endnote %}

Pour voir si votre demande de tirage peut être fusionnée, examinez la zone de fusion située au bas de l’onglet **Conversation** de la demande de tirage. Pour plus d’informations, consultez « [À propos des branches protégées](/articles/about-protected-branches) ».

Quand une branche est protégée :

- Vous ne pouvez pas supprimer la branche ni forcer une poussée (push) vers elle.
- Si des vérifications d’état obligatoires sont activées sur la branche, vous ne pouvez pas fusionner les changements dans la branche tant que tous les tests CI nécessaires ne sont pas réussis. Pour plus d’informations, consultez « [À propos des vérifications d’état](/pull-requests/collaborating-with-pull-requests/collaborating-on-repositories-with-code-quality-features/about-status-checks) ».
- Si des révisions de demande de tirage obligatoires sont activées sur la branche, vous ne pouvez pas fusionner les changements dans la branche tant que toutes les exigences indiquées dans la stratégie de révision des demandes de tirage ne sont pas satisfaites. Pour plus d’informations, consultez « [Fusion d’une demande de tirage](/pull-requests/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request) ».
- Si une révision obligatoire est activée sur une branche par un propriétaire de code et qu’une demande de tirage modifie du code associé à un propriétaire, un propriétaire de code doit d’abord approuver la demande de tirage pour qu’elle puisse être fusionnée. Pour plus d’informations, consultez « [À propos des propriétaires de code](/articles/about-code-owners) ».
- Si une signature de commit obligatoire est activée sur une branche, vous ne pouvez pas pousser (push) des commits vers la branche s’ils ne sont pas signés ni vérifiés. Pour plus d’informations, consultez « [À propos de la vérification des signatures de commit](/articles/about-commit-signature-verification) » et « [À propos des branches protégées](/github/administering-a-repository/about-protected-branches#require-signed-commits) ».
- Si vous utilisez l’éditeur de conflit de {% data variables.product.prodname_dotcom %} pour corriger les conflits d’une demande de tirage que vous avez créée à partir d’une branche protégée, {% data variables.product.prodname_dotcom %} vous aide à créer une autre branche pour la demande de tirage, afin que votre résolution des conflits puisse être fusionnée. Pour plus d’informations, consultez « [Résolution d’un conflit de fusion sur {% data variables.product.prodname_dotcom %}](/github/collaborating-with-issues-and-pull-requests/resolving-a-merge-conflict-on-github) ».

## Pour aller plus loin

- « [À propos des demandes de tirage (pull requests)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) »
- « [Branche](/articles/github-glossary/#branch) » dans le glossaire de {% data variables.product.prodname_dotcom %}
- « [Les branches en bref](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) » dans la documentation de Git
