---
title: 'Partage de workflows, de secrets et d’exécuteurs avec votre organisation'
shortTitle: Sharing workflows with your organization
intro: 'Découvrez comment utiliser les fonctionnalités de l’organisation pour collaborer avec votre équipe, en partageant des workflows de démarrage, des secrets et des exécuteurs auto-hébergés.'
redirect_from:
  - /actions/learn-github-actions/sharing-workflows-with-your-organization
  - /actions/learn-github-actions/sharing-workflows-secrets-and-runners-with-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
ms.openlocfilehash: bf80624fe1118d424a57f7c22efab6368c914819
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '147884260'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Vue d’ensemble

Si vous devez partager des workflows et d’autres fonctionnalités {% data variables.product.prodname_actions %} avec votre équipe, envisagez de collaborer au sein d’une organisation {% data variables.product.prodname_dotcom %}. Une organisation vous permet de stocker et de gérer de manière centralisée des secrets, des artefacts et des exécuteur auto-hébergés. Vous pouvez également créer des workflows de démarrage dans le dépôt `.github` et les partager avec d’autres utilisateurs de votre organisation.

## Partage d’actions{% ifversion internal-actions %} et de workflows{% endif %}

{% ifversion internal-actions %} Vous pouvez partager des actions individuelles et des workflows complets avec votre organisation, en publiant ou non les actions ou les workflows publiquement. Vous pouvez réutiliser des actions et des workflows en les référençant précisément dans votre fichier de workflow, et vous pouvez créer des workflows de démarrage qui fournissent des modèles pour de nouveaux workflows.
{% else %} Votre organisation peut partager des workflows en réutilisant précisément les workflows ou en créant des workflows de démarrage qui fournissent des modèles pour de nouveaux workflows.
{% endif %}

{% ifversion internal-actions %}
### Partage d’actions avec votre entreprise

{% data reusables.actions.internal-actions-summary %} {% endif %}

{% ifversion fpt or ghes > 3.3 or ghae-issue-4757 or ghec %}
### Réutilisation des workflows

{% data reusables.actions.reusable-workflows %} {% endif %}

### Utilisation de workflows de démarrage

{% data reusables.actions.workflow-organization-templates %} Pour plus d’informations, consultez « [Création de workflows de démarrage pour votre organisation](/actions/using-workflows/creating-starter-workflows-for-your-organization) ».

## Partage de secrets au sein d’une organisation

Vous pouvez gérer de manière centralisée vos secrets au sein d’une organisation, puis les rendre disponibles pour les dépôts sélectionnés. Cela signifie également que vous pouvez mettre à jour un secret dans un seul emplacement et que la modification s’applique à tous les workflows du dépôt qui utilisent le secret.

Lors de la création d’un secret dans une organisation, vous pouvez utiliser une stratégie pour limiter les dépôts qui peuvent accéder à ce secret. Par exemple, vous pouvez accorder l’accès à tous les dépôts, ou limiter l’accès aux seuls dépôts privés ou à une liste spécifiée de dépôts.

{% data reusables.actions.permissions-statement-secrets-organization %}

{% data reusables.organizations.navigate-to-org %} {% data reusables.organizations.org_settings %} {% data reusables.actions.sidebar-secret %}
1. Cliquez sur **Nouveau secret**.
1. Tapez un nom pour votre secret dans la zone d’entrée **Nom**.
1. Entrez la **valeur** de votre secret.
1. Dans la liste déroulante **Accès au dépôt**, choisissez une stratégie d’accès.
1. Cliquez sur **Ajouter un secret**.

## Partager des exécuteurs auto-hébergés au sein d’une organisation

Les administrateurs d’organisation peuvent ajouter leurs exécuteurs auto-hébergés à des groupes, puis créer des stratégies qui contrôlent les dépôts pouvant accéder au groupe.

Pour plus d’informations, consultez « [Gestion de l’accès aux exécuteurs auto-hébergés à l’aide de groupes](/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups) ».


## Étapes suivantes

Pour continuer à découvrir {% data variables.product.prodname_actions %}, consultez « [Création de workflows de démarrage pour votre organisation](/actions/using-workflows/creating-starter-workflows-for-your-organization) ».
