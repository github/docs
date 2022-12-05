---
title: Quelles sont les différences entre Subversion et Git ?
intro: 'Les dépôts Subversion (SVN) sont similaires aux dépôts Git, mais il existe plusieurs différences au niveau de l’architecture de vos projets.'
redirect_from:
  - /articles/what-are-the-differences-between-svn-and-git
  - /articles/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/what-are-the-differences-between-subversion-and-git
  - /github/importing-your-projects-to-github/working-with-subversion-on-github/what-are-the-differences-between-subversion-and-git
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
shortTitle: Subversion & Git differences
ms.openlocfilehash: cbe328bf3d2fbf3a603f6eef1559715ad48ca7fe
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145128929'
---
## Structure de répertoires

Chaque *référence*, ou instantané étiqueté d’une validation, dans un projet est organisée dans des sous-répertoires spécifiques, tels que `trunk`, `branches` et `tags`. Par exemple, un projet SVN avec deux fonctionnalités en cours de développement pourrait ressembler à ceci :

      sample_project/trunk/README.md
      sample_project/trunk/lib/widget.rb
      sample_project/branches/new_feature/README.md
      sample_project/branches/new_feature/lib/widget.rb
      sample_project/branches/another_new_feature/README.md
      sample_project/branches/another_new_feature/lib/widget.rb

Un workflow SVN ressemble à ceci :

* Le répertoire `trunk` représente la dernière mise en production stable d’un projet.
* Le travail sur une fonctionnalité active est développé dans des sous-répertoires sous `branches`.
* Quand une fonctionnalité est terminée, son répertoire est fusionné dans `trunk` et supprimé.

Les projets Git sont également stockés dans un seul répertoire. Toutefois, Git masque les détails de ses références en les stockant dans un répertoire *.git* spécial. Par exemple, un projet Git avec deux fonctionnalités en cours de développement pourrait ressembler à ceci :

      sample_project/.git
      sample_project/README.md
      sample_project/lib/widget.rb

Un workflow Git ressemble à ceci :

* Un dépôt Git stocke l’historique complet de toutes ses branches et étiquettes dans le répertoire *.git*.
* La dernière mise en production stable est contenue dans la branche par défaut.
* Le travail sur une fonctionnalité active est développé dans des branches distinctes.
* Quand une fonctionnalité est terminée, sa branche est fusionnée dans la branche par défaut et supprimée.

Contrairement à SVN, avec Git, la structure de répertoire reste la même, mais le contenu des fichiers change en fonction de votre branche.

## Inclusion de sous-projets

Un *sous-projet* est un projet développé et managé quelque part en dehors de votre projet principal. Vous importez généralement un sous-projet pour ajouter des fonctionnalités à votre projet sans avoir à gérer le code vous-même. Chaque fois que le sous-projet est mis à jour, vous pouvez le synchroniser avec votre projet pour vous assurer que tout est à jour.

Dans SVN, un sous-projet est appelé *SVN externe*. Dans Git, il est appelé *sous-module Git*. Bien que conceptuellement similaires, les sous-modules Git ne sont pas automatiquement tenus à jour. Vous devez demander explicitement l’introduction d’une nouvelle version dans votre projet.

Pour plus d’informations, consultez « [Outils Git - Sous-modules](https://git-scm.com/book/en/Git-Tools-Submodules) » dans la documentation de Git.

## Conservation de l’historique

SVN est configuré pour supposer que l’historique d’un projet ne change jamais. Git vous permet de modifier des validations et modifications antérieures à l’aide d’outils tels que [`git rebase`](/github/getting-started-with-github/about-git-rebase).

{% tip %}

[GitHub prenant en charge les clients Subversion](/articles/support-for-subversion-clients), des résultats inattendus peuvent se produire si vous utilisez à la fois Git et SVN sur le même projet. Si vous avez manipulé l’historique des validations de Git, ces mêmes validations restent toujours dans l’historique de SVN. Si vous avez accidentellement validé des données sensibles, nous avons [un article qui vous aidera à les supprimer de l’historique de Git](/articles/removing-sensitive-data-from-a-repository).

{% endtip %}

## Pour aller plus loin

- « [Propriétés de Subversion prises en charge par GitHub](/articles/subversion-properties-supported-by-github) »
- « [Création de branches et fusion](https://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging) » dans le livre _Git SCM_
- « [Importation de code source dans GitHub](/articles/importing-source-code-to-github) »
- « [Outils de migration de code source](/articles/source-code-migration-tools) »
