---
title: Gestion de l’accès aux exécuteurs auto-hébergés à l’aide de groupes
shortTitle: Manage access with runner groups
intro: Vous pouvez utiliser des stratégies pour limiter l’accès aux exécuteurs autohébergés qui ont été ajoutés à une organisation ou une entreprise.
redirect_from:
  - /actions/hosting-your-own-runners/managing-access-to-self-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
ms.openlocfilehash: c6f53c3698800de519fe34231a8faf37924eacaa
ms.sourcegitcommit: d0cea547f6a5d991a28c310257cafd616235889f
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/01/2022
ms.locfileid: '148120888'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% ifversion target-runner-groups %} Pour plus d’informations sur la façon de router des travaux vers des exécuteurs d’un groupe spécifique, consultez « [Choix des exécuteurs dans un groupe](/actions/using-jobs/choosing-the-runner-for-a-job#choosing-runners-in-a-group) ».
{% endif %}

## À propos des groupes d’exécuteurs

{% data reusables.actions.about-runner-groups %} {% ifversion fpt %}Pour plus d’informations, consultez la [documentation {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/actions/hosting-your-own-runners/managing-access-to-self-hosted-runners-using-groups).{% endif %}

{% ifversion ghec or ghes or ghae %}

## Création d’un groupe d’exécuteurs auto-hébergés pour une organisation

{%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-organization %}

## Création d’un groupe d’exécuteurs auto-hébergés pour une grande entreprise

 {%- ifversion ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.creating-a-runner-group-for-an-enterprise %}

{% endif %}

## Modification de la stratégie d’accès d’un groupe d’exécuteurs auto-hébergés

{%- ifversion fpt or ghec or ghes %}

{% data reusables.actions.self-hosted-runner-security-admonition %}

{%- endif %}

{% data reusables.actions.changing-the-access-policy-of-a-runner-group %}

## Modification du nom d’un groupe d’exécuteurs

{% data reusables.actions.changing-the-name-of-a-runner-group %}

{% ifversion ghec or ghes or ghae %}
## Ajout automatique d’un exécuteur auto-hébergé à un groupe

{% data reusables.actions.automatically-adding-a-runner-to-a-group %}

## Déplacement d’un exécuteur auto-hébergé vers un groupe

{% data reusables.actions.moving-a-runner-to-a-group %}

## Suppression d’un groupe d’exécuteurs auto-hébergés

{% data reusables.actions.removing-a-runner-group %}

{% endif %}

{% data reusables.actions.section-using-unique-names-for-runner-groups %}
