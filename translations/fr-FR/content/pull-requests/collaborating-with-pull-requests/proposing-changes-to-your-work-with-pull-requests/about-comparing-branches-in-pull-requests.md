---
title: À propos de la comparaison des branches dans les demandes de tirage
intro: Les demandes de tirage (pull request) affichent des différences qui permettent de comparer les modifications que vous avez apportées dans votre branche de rubrique par rapport à la branche de base dans laquelle vous souhaitez fusionner vos modifications.
redirect_from:
  - /github/collaborating-with-issues-and-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
  - /articles/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-issues-and-pull-requests/about-comparing-branches-in-pull-requests
  - /github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-comparing-branches-in-pull-requests
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
shortTitle: Compare branches
ms.openlocfilehash: c45bcb3bceda42019be3139724e0b68234e90cfc
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881803'
---
{% note %}

**Remarque :** lorsque vous créez votre demande de tirage, vous pouvez modifier la branche de base à laquelle vous comparez vos modifications. Pour plus d’informations, consultez « [Création d’une demande de tirage](/articles/creating-a-pull-request#changing-the-branch-range-and-destination-repository) ».

{% endnote %}

Vous pouvez afficher des modifications proposées dans une demande de tirage sous l’onglet Fichiers modifiés. ![Onglet Fichiers de demande de tirage modifiés](/assets/images/help/pull_requests/pull-request-tabs-changed-files.png)

Au lieu d’afficher les validations elles-mêmes, vous pouvez afficher les modifications proposées à mesure qu’elles apparaissent dans les fichiers une fois la demande de tirage fusionnée. Les fichiers apparaissent par ordre alphabétique sous l’onglet Fichiers modifiés. Les ajouts aux fichiers s’affichent en vert et sont précédés d’un signe `+` tandis que le contenu supprimé s’affiche en rouge et est précédé d’un signe `-`.

## Options d’affichage des différences

{% tip %}

**Astuce :** si vous éprouvez des difficultés à comprendre le contexte d’une modification, vous pouvez cliquer sur **Afficher** sous l’onglet Fichiers modifiés pour afficher le fichier entier avec les modifications proposées.

{% endtip %}

Vous avez plusieurs options pour afficher un différence.
- L’affichage unifié présente le contenu mis à jour et existant ensemble dans une vue linéaire.
- L’affichage fractionné présente l’ancien contenu d’un côté, et le nouveau contenu de l’autre.
- L’affichage des différences enrichi présente un aperçu de l’apparence des modifications une fois la demande de tirage fusionnée.
- L’affichage source présente les modifications apportées à la source sans la mise en forme de l’affichage des différences enrichie.

Vous pouvez également choisir d’ignorer les modifications d’espace blanc pour obtenir une vue plus précise des modifications substantielles dans une demande de tirage.

![Menu d’options d’affichage des différences](/assets/images/help/pull_requests/diff-settings-menu.png)

Pour simplifier la révision des modifications dans une demande de tirage volumineuse, vous pouvez filtrer les différences pour afficher uniquement les types de fichiers sélectionnés, afficher les fichiers dont vous êtes un CODEOWNER, masquer les fichiers que vous avez déjà affichés, ou masquer les fichiers supprimés. Pour plus d’informations, consultez « [Filtrage des fichiers dans une demande de tirage par type de fichier](/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/filtering-files-in-a-pull-request) ».

  ![Menu déroulant du filtre de fichiers](/assets/images/help/pull_requests/file-filter-menu.png)

## Raisons pour lesquelles des différences ne s’affichent pas
- Vous avez dépassé la limite totale de fichiers ou de certains types de fichiers. Pour plus d’informations, consultez « [À propos des dépôts](/repositories/creating-and-managing-repositories/about-repositories#limits-for-viewing-content-and-diffs-in-a-repository) ».
- Votre fichier correspond à une règle dans le fichier *.gitattributes* du dépôt, qui vise à bloquer l’affichage ce fichier par défaut. Pour plus d’informations, consultez « [Personnalisation de l’affichage des fichiers modifiés sur GitHub](/articles/customizing-how-changed-files-appear-on-github) ».

## Comparaisons des différences Git sur trois points et deux points

Il existe deux méthodes de comparaison pour la commande `git diff` : sur deux points (`git diff A..B`) et sur trois points (`git diff A...B`). Par défaut, les demandes de tirage sur {% data variables.product.prodname_dotcom %} affichent une différence sur trois points.

### Comparaison des différences Git sur trois points 

La comparaison sur trois points montre la différence entre la dernière validation commune de deux branches (base de fusion) et la version la plus récente de la branche de rubrique.

### Comparaison des différences Git sur deux points

La comparaison sur deux points montre la différence entre l’état le plus récent de la branche de base (par exemple `main`) et la version la plus récente de la branche de rubrique.

Pour voir deux références committish dans une comparaison de différences sur deux points sur {% data variables.product.prodname_dotcom %}, vous pouvez modifier l’URL de la page « Comparaison des modifications » de votre dépôt. Pour plus d’informations, consultez le [terme « commitish » dans le glossaire Git](https://git-scm.com/docs/gitglossary#gitglossary-aiddefcommit-ishacommit-ishalsocommittish) sur le site du livre _Pro Git_.

{% data reusables.repositories.two-dot-diff-comparison-example-urls %}

Un différence sur deux points compare deux références committish Git, telles que des SHAs ou des OID, directement entre elles. Sur {% data variables.product.prodname_dotcom %}, les références committish Git dans une comparaison de différences sur deux points doivent être envoyées (push) au même dépôt ou à ses duplications.

Si vous souhaitez simuler une différence sur deux points dans une demande de tirage et voir une comparaison entre les versions les plus récentes de chaque branche, vous pouvez fusionner la branche de base dans votre branche de rubrique, ce qui a pour effet de mettre à jour le dernier ancêtre commun de vos branches.

Pour plus d’informations sur les commandes Git pour comparer les modifications, consultez « [Options de différences Git](https://git-scm.com/docs/git-diff#git-diff-emgitdiffemltoptionsgtltcommitgtltcommitgt--ltpathgt82308203) » sur le site du livre _Pro Git_.

## À propos de la comparaison sur trois points sur {% data variables.product.prodname_dotcom %}

Étant donné que la comparaison sur trois points effectue une comparaison avec la base de fusion, elle se concentre sur « ce qu’introduit une demande de tirage ». 

Lorsque vous utilisez une comparaison sur deux points, la différence change lorsque la branche de base est mise à jour, même si vous n’avez apporté aucune modification à la branche de rubrique. En outre, une comparaison sur deux points se concentre sur la branche de base. Cela signifie que tout ce que vous ajoutez est affiché comme absent de la branche de base, comme s’il s’agissait d’une suppression, et inversement. Par conséquent, les modifications apportées à la branche de rubrique deviennent ambiguës.

En revanche, en comparant les branches à l’aide de la comparaison sur trois points, les modifications apportées à la branche de rubrique figurent toujours dans la différence si la branche de base est mise à jour, car la différence affiche toutes les modifications depuis que les branches ont divergé.

### Fusion fréquente

Pour éviter toute confusion, fusionnez fréquemment la branche de base (par exemple, `main`) dans votre branche de rubrique. En fusionnant la branche de base, les différences affichées par les comparaisons sur deux points et sur trois points sont identiques. Nous vous recommandons de fusionner une demande de tirage dès que possible. Cela encourage les contributeurs à réduire la taille des demandes de tirage, ce qui est recommandé en général.

## Pour aller plus loin

- « [À propos des demandes de tirage (pull requests)](/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) »
- « [À propos des duplications](/pull-requests/collaborating-with-pull-requests/working-with-forks/about-forks) »
