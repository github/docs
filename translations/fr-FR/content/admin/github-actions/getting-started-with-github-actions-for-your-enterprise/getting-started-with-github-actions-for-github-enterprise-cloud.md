---
title: Bien démarrer avec GitHub Actions pour GitHub Enterprise Cloud
shortTitle: Get started
intro: 'Découvrez comment configurer {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_cloud %}.'
permissions: 'Enterprise owners can configure {% data variables.product.prodname_actions %}.'
versions:
  ghec: '*'
type: how_to
topics:
  - Actions
  - Enterprise
ms.openlocfilehash: 088fc1fcce3b44c6db350f744ad13668d04a4bb8
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145106814'
---
## À propos de {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_cloud %}

{% data variables.product.prodname_actions %} est activé pour votre entreprise par défaut. Pour commencer à utiliser {% data variables.product.prodname_actions %} dans votre entreprise, vous pouvez gérer les stratégies qui contrôlent la façon dont les membres de l’entreprise utilisent {% data variables.product.prodname_actions %} et éventuellement ajouter des exécuteurs auto-hébergés pour exécuter des workflows.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Gestion des stratégies pour {% data variables.product.prodname_actions %}

Vous pouvez utiliser des stratégies pour contrôler la façon dont les membres de l’entreprise utilisent {% data variables.product.prodname_actions %}. Par exemple, vous pouvez limiter les actions qui sont autorisées et configurer la rétention des artefacts et des journaux. Pour plus d’informations, consultez « [Application de stratégies GitHub Actions pour votre entreprise](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise) ».

## Ajout d’exécuteurs

Pour exécuter des workflows {% data variables.product.prodname_actions %}, vous utiliser des exécuteurs. {% data reusables.actions.about-runners %} Si vous utilisez des exécuteurs hébergés par {% data variables.product.company_short %}, vous serez facturé en fonction de votre consommation après épuisement des minutes comprises dans {% data variables.product.product_name %}. En revanche, les exécuteurs auto-hébergés sont gratuits. Pour plus d’informations, consultez « [À propos de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions/about-billing-for-github-actions) ».

Pour plus d’informations, consultez « [About self-hosted runners](/actions/hosting-your-own-runners/about-self-hosted-runners) ».

Si vous décidez d’utiliser des exécuteurs auto-hébergés, vous pouvez ajouter des exécuteurs aux niveaux de l’entreprise, de l’organisation ou du dépôt. Pour plus d’informations, consultez « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».

{% data reusables.actions.general-security-hardening %}
