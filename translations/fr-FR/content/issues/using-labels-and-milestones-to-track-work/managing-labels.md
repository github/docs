---
title: Gestion des étiquettes
intro: 'Vous pouvez classifier les {% ifversion fpt or ghec %}problèmes, demandes de tirage et discussions{% else %}problèmes et demandes de tirage{% endif %} en créant, modifiant, appliquant et supprimer des étiquettes.'
permissions: '{% data reusables.enterprise-accounts.emu-permission-repo %}'
redirect_from:
  - /github/managing-your-work-on-github/managing-your-work-with-issues-and-pull-requests/managing-labels
  - /articles/managing-Labels
  - /articles/labeling-issues-and-pull-requests
  - /github/managing-your-work-on-github/labeling-issues-and-pull-requests
  - /articles/about-labels
  - /github/managing-your-work-on-github/about-labels
  - /articles/creating-and-editing-labels-for-issues-and-pull-requests
  - /articles/creating-a-label
  - /github/managing-your-work-on-github/creating-a-label
  - /articles/customizing-issue-labels
  - /articles/applying-labels-to-issues-and-pull-requests
  - /github/managing-your-work-on-github/applying-labels-to-issues-and-pull-requests
  - /articles/editing-a-label
  - /github/managing-your-work-on-github/editing-a-label
  - /articles/deleting-a-label
  - /github/managing-your-work-on-github/deleting-a-label
  - /github/managing-your-work-on-github/managing-labels
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Pull requests
  - Issues
  - Project management
type: how_to
ms.openlocfilehash: 42feddd5ebbdee81140d3aab48b81f83a2c6e69f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145128618'
---
## À propos des étiquettes

Vous pouvez gérer votre travail sur {% data variables.product.product_name %} en créant des étiquettes qui catégorisent les {% ifversion fpt or ghec %}problèmes, demandes de tirage et les discussions{% else %}problèmes et demandes de tirage{% endif %}. Vous pouvez appliquer des étiquettes dans le dépôt où l’étiquette a été créée. Une fois qu’une étiquette existe, vous pouvez l’utiliser pour n’importe quel {% ifversion fpt or ghec %}problème, demande de tirage ou discussion{% else %}problème ou demande de tirage{% endif %} de ce dépôt.

## À propos des étiquettes par défaut

Les données {% data variables.product.product_name %} fournissent des étiquettes par défaut dans chaque nouveau dépôt. Vous pouvez utiliser ces étiquettes par défaut pour créer un workflow standard dans un dépôt.

Étiquette | Description
---  | ---
`bug` | Indique un problème ou un comportement inattendu{% ifversion fpt or ghes or ghec %}
`documentation` | Indique la nécessité d’apporter des améliorations ou d’effectuer des ajouts à la documentation{% endif %}
`duplicate` | Indique les {% ifversion fpt or ghec %}problèmes, demandes de tirage ou discussions{% else %}problèmes ou demandes de tirage{% endif %} similaires
`enhancement` | Indique les nouvelles demandes de fonctionnalités
`good first issue` | Indique un problème qui convient bien à une première contribution
`help wanted` | Indique qu’un gestionnaire souhaite obtenir de l’aide sur un problème ou une demande de tirage
`invalid` | Indique qu’{% ifversion fpt or ghec %}un problème, une demande de tirage ou une discussion{% else %}un problème ou une demande de tirage{% endif %} ne sont plus pertinents
`question` | Indique qu’{% ifversion fpt or ghec %}un problème, une demande de tirage ou une discussion{% else %}un problème ou une demande de tirage{% endif %} ont besoin de davantage d’informations
`wontfix` | Indique que le travail ne pourra pas continuer sur {% ifversion fpt or ghec %}un problème, une demande de tirage ou une discussion{% else %}un problème ou une demande de tirage{% endif %}

Les étiquettes par défaut sont incluses dans chaque nouveau dépôt créé. Toutefois, vous pouvez modifier ou supprimer les étiquettes ultérieurement.

Les problèmes liés à l’étiquette `good first issue` sont utilisés pour remplir la page `contribute` du dépôt. Pour obtenir un exemple de page `contribute`, consultez [github/docs/contribute](https://github.com/github/docs/contribute). 

{% ifversion fpt or ghes or ghec %} Les propriétaires d’organisation peuvent personnaliser les étiquettes par défaut pour les dépôts de leur organisation. Pour plus d’informations, consultez « [Gestion des étiquettes par défaut pour les dépôts de votre organisation](/articles/managing-default-labels-for-repositories-in-your-organization) ».
{% endif %}

## Création d’une étiquette

Toute personne disposant d’un accès en écriture sur un dépôt peut créer une étiquette.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %}
4. À droite du champ de recherche, cliquez sur **Nouvelle étiquette**.
{% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.create-label %}

## Application d’une étiquette

Toute personne disposant d’un accès en triage sur un dépôt peut appliquer et supprimer des étiquettes.

1. Accédez {% ifversion fpt or ghec %}au problème, à la demande de tirage ou à la discussion{% else %}au problème ou à la demande de tirage{% endif %}.
1. Dans la barre latérale droite, à droite de « Étiquettes », cliquez sur {% octicon "gear" aria-label="The gear icon" %}, puis cliquez sur une étiquette.
  ![« Étiquettes » dans le menu déroulant](/assets/images/help/issues/labels-drop-down.png)

## Modification d’une étiquette

Toute personne disposant d’un accès en écriture sur un dépôt peut modifier les étiquettes existantes.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.edit-label %} {% data reusables.project-management.name-label %} {% data reusables.project-management.label-description %} {% data reusables.project-management.label-color-randomizer %} {% data reusables.project-management.save-label %}

## Suppression d’une étiquette

Toute personne disposant d’un accès en écriture sur un dépôt peut supprimer les étiquettes existantes.

Si vous supprimez une étiquette, celle-ci sera supprimée des problèmes et des demandes de tirage.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-issue-pr %} {% data reusables.project-management.labels %} {% data reusables.project-management.delete-label %}

## Pour aller plus loin
- « [Filtrage et recherche de problèmes et de demandes d’extraction](/issues/tracking-your-work-with-issues/filtering-and-searching-issues-and-pull-requests) »{% ifversion fpt or ghes or ghec %}
- « [Gestion des étiquettes par défaut pour les dépôts de votre organisation](/articles/managing-default-labels-for-repositories-in-your-organization) »{% endif %}{% ifversion fpt or ghec %}
- « [Encourager les contributions utiles à votre projet à l’aide des étiquettes](/communities/setting-up-your-project-for-healthy-contributions/encouraging-helpful-contributions-to-your-project-with-labels) »{% endif %}
- « [Syntaxe de base pour l’écriture et la mise en forme ](/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#using-emoji) »
