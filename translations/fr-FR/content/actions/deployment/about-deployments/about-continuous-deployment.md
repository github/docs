---
title: À propos du déploiement continu
intro: 'Vous pouvez créer des workflows de déploiement continu (CD) personnalisés directement dans votre dépôt {% data variables.product.prodname_dotcom %} avec {% data variables.product.prodname_actions %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/about-continuous-deployment
topics:
  - CD
shortTitle: About continuous deployment
ms.openlocfilehash: 379afa0088f7f10302f5bf8202f5259ac4777bec
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060137'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos du déploiement continu

Le _déploiement continu_ (CD) correspond au processus automatisé qui permet de publier et de déployer des mises à jour logicielles. Dans le cadre du processus de déploiement continu standard, le code est généré et testé automatiquement avant le déploiement.

Le déploiement continu est souvent couplé à l’intégration continue. Pour plus d’informations sur l’intégration continue, consultez « [À propos de l’intégration continue](/actions/guides/about-continuous-integration) ».

## À propos du déploiement continu avec {% data variables.product.prodname_actions %}

Vous pouvez configurer un workflow {% data variables.product.prodname_actions %} pour déployer votre produit logiciel. Pour vérifier que votre produit fonctionne comme prévu, votre workflow peut générer le code dans votre dépôt et exécuter vos tests avant le déploiement.

Vous pouvez configurer votre workflow de déploiement continu pour qu’il s’exécute lorsqu’un événement {% data variables.product.product_name %} se produit (par exemple, lorsque le nouveau code est poussé vers la branche par défaut de votre dépôt) ou lorsqu’un événement externe se produit si vous utilisez le webhook de dispatch du dépôt. Vous pouvez également l’exécuter manuellement ou selon une planification définie. Pour plus d’informations sur l’exécution de votre workflow, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows) ».

{% data variables.product.prodname_actions %} fournit des fonctionnalités qui vous permettent de mieux contrôler les déploiements. Par exemple, vous pouvez utiliser des environnements pour exiger l’approbation d’un travail, restreindre les branches pouvant déclencher un workflow ou limiter l’accès aux secrets. Vous pouvez utiliser la concurrence pour limiter votre pipeline CD à un déploiement en cours et un déploiement en attente au maximum. Pour plus d’informations sur ces fonctionnalités, consultez « [Déploiement avec GitHub Actions](/actions/deployment/deploying-with-github-actions) » et « [Utilisation d’environnements pour le déploiement](/actions/deployment/using-environments-for-deployment) ».

{% ifversion fpt or ghec or ghae-issue-4856 or ghes > 3.4 %}

## Utilisation d’OpenID Connect pour accéder aux ressources cloud

{% data reusables.actions.about-oidc-short-overview %}

{% endif %}

## Workflows de démarrage et actions tierces

{% data reusables.actions.cd-templates-actions %}

## Pour aller plus loin

- [Déploiement avec GitHub Actions](/actions/deployment/deploying-with-github-actions)
- [Utilisation d’environnements pour le déploiement](/actions/deployment/using-environments-for-deployment){% ifversion fpt or ghec %}
- « [Gestion de la facturation pour {% data variables.product.prodname_actions %}](/billing/managing-billing-for-github-actions) »{% endif %}

