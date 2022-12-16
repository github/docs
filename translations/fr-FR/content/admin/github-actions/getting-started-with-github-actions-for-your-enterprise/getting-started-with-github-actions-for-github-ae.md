---
title: Bien démarrer avec GitHub Actions pour GitHub AE
shortTitle: Get started
intro: 'Découvrez comment configurer {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_managed %}.'
permissions: 'Enterprise owners can enable {% data variables.product.prodname_actions %} and configure enterprise settings.'
versions:
  ghae: '*'
type: how_to
topics:
  - Actions
  - Enterprise
redirect_from:
  - /admin/github-actions/getting-started-with-github-actions-for-github-ae
  - /admin/github-actions/using-github-actions-in-github-ae/getting-started-with-github-actions-for-github-ae
ms.openlocfilehash: c6d6767e95e6f5d27c311e46f5042c79717ab97e
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145104946'
---
## À propos de {% data variables.product.prodname_actions %} sur {% data variables.product.prodname_ghe_managed %}

{% data variables.product.prodname_actions %} est activé pour {% data variables.product.product_name %} par défaut. Pour commencer à utiliser {% data variables.product.prodname_actions %} dans votre entreprise, vous devez gérer les autorisations d’accès pour {% data variables.product.prodname_actions %} et ajouter des exécuteurs pour exécuter les workflows.

{% data reusables.actions.introducing-enterprise %}

{% data reusables.actions.migrating-enterprise %}

## Gestion des autorisations d’accès pour {% data variables.product.prodname_actions %} dans votre entreprise

Vous pouvez utiliser des stratégies pour gérer l’accès à {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Application de stratégies GitHub Actions pour votre entreprise](/admin/github-actions/enforcing-github-actions-policies-for-your-enterprise) ».

## Ajout d’exécuteurs

Vous devez configurer et héberger vos propres machines pour qu’elles exécutent des travaux pour votre entreprise sur {% data variables.product.product_name %}. {% data reusables.actions.about-self-hosted-runners %} Pour plus d’informations, consultez « [Bien démarrer avec les exécuteurs auto-hébergés pour votre entreprise](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-self-hosted-runners-for-your-enterprise) » et « [Hébergement de vos propres exécuteurs](/actions/hosting-your-own-runners) ».

{% data reusables.actions.general-security-hardening %}
