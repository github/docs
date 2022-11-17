---
title: Configuration de la vérification des dépendances pour votre appliance
shortTitle: Configuring dependency review
intro: 'Pour aider les utilisateurs à comprendre les changements de dépendances lorsqu’ils révisent les demandes de tirage, vous pouvez activer, configurer et désactiver la vérification des dépendances pour {% data variables.location.product_location %}.'
product: '{% data reusables.gated-features.dependency-review %}'
miniTocMaxHeadingLevel: 3
versions:
  feature: dependency-review-action-ghes
type: how_to
topics:
  - Advanced Security
  - Enterprise
  - Dependency review
  - Security
ms.openlocfilehash: 613f2f2bd69a90027533ff063ea0f0a44bc1f5d2
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107756'
---
## À propos de la vérification des dépendances

{% data reusables.dependency-review.feature-overview %}  

Certaines fonctionnalités supplémentaires, telles que les vérifications de licence, le blocage des demandes de tirage et l’intégration CI/CD, sont disponibles avec l’[action Vérification des dépendances](https://github.com/actions/dependency-review-action).

## Vérification de la présence de {% data variables.product.prodname_GH_advanced_security %} dans votre licence

{% data reusables.advanced-security.check-for-ghas-license %}

## Prérequis à la vérification des dépendances

- Une licence pour {% data variables.product.prodname_GH_advanced_security %}{% ifversion ghes %} (consultez « [À propos de la facturation de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security) »).{% endif %}

- Graphe des dépendances activé pour l’instance. Les administrateurs de site peuvent activer le graphe des dépendances via la console de gestion ou l’interpréteur de commandes d’administration (voir « [Activation du graphe de dépendances pour votre entreprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise) »).
  
- {% data variables.product.prodname_github_connect %} activé pour télécharger et synchroniser les vulnérabilités à partir de la {% data variables.product.prodname_advisory_database %}. Ceci est généralement configuré dans le cadre de la configuration de {% data variables.product.prodname_dependabot %} (voir « [Activation de Dependabot pour votre entreprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise) »).

## Activation et désactivation de la vérification des dépendances

Pour activer ou désactiver la vérification des dépendances, vous devez activer ou désactiver le graphe des dépendances pour votre instance.

Pour plus d’informations, consultez « [Activation du graphe de dépendances pour votre entreprise](/admin/code-security/managing-supply-chain-security-for-your-enterprise/enabling-the-dependency-graph-for-your-enterprise) ».

## Exécution de la vérification des dépendances à l’aide de {% data variables.product.prodname_actions %}

{% data reusables.dependency-review.dependency-review-action-beta-note %}

L’action de vérification des dépendances est incluse dans votre installation de {% data variables.product.prodname_ghe_server %}. Elle est disponible pour tous les dépôts où sont activés {% data variables.product.prodname_GH_advanced_security %} et le graphe des dépendances.

{% data reusables.dependency-review.dependency-review-action-overview %}  

Les utilisateurs exécutent l’action de vérification des dépendances à l’aide d’un workflow {% data variables.product.prodname_actions %}. Si vous n’avez pas déjà configuré d’exécuteurs pour {% data variables.product.prodname_actions %}, vous devez le faire pour permettre aux utilisateurs d’exécuter des workflows. Vous pouvez provisionner des exécuteurs auto-hébergés au niveau du dépôt, de l’organisation ou du compte d’entreprise. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) et « [Ajout d’exécuteurs auto-hébergés](/actions/hosting-your-own-runners/adding-self-hosted-runners) ».

