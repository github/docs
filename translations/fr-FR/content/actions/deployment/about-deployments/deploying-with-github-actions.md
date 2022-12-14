---
title: Déploiement avec GitHub Actions
intro: Apprenez à contrôler les déploiements à l’aide de fonctionnalités comme les environnements et la concurrence.
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
redirect_from:
  - /actions/deployment/deploying-with-github-actions
topics:
  - CD
shortTitle: Deploy with GitHub Actions
ms.openlocfilehash: 533d85d83bea53d34af3d8b9a47d0d4426ea4bc6
ms.sourcegitcommit: 1309b46201604c190c63bfee47dce559003899bf
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145179183'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Introduction

{% data variables.product.prodname_actions %} offre des fonctionnalités qui vous permettent de contrôler les déploiements. Vous pouvez :

- Déclencher des workflows avec une grande variété d’événements.
- Configurer des environnements pour définir des règles sur la poursuite d’un travail et pour limiter l’accès aux secrets.
- Utiliser la concurrence pour contrôler le nombre de déploiements qui peuvent s’exécuter simultanément.

Pour plus d’informations sur le déploiement continu, consultez « [À propos du déploiement continu](/actions/deployment/about-continuous-deployment) ».

## Prérequis

Vous devez être familiarisé avec la syntaxe {% data variables.product.prodname_actions %}. Pour plus d’informations, consultez « [Découvrir {% data variables.product.prodname_actions %}](/actions/learn-github-actions) ».

## Déclenchement de votre déploiement

Vous pouvez utiliser divers événements pour déclencher votre workflow de déploiement. Les plus courants sont `pull_request`, `push` et `workflow_dispatch`.

Par exemple, un workflow avec les déclencheurs suivants s’exécute quand :

- Un élément est poussé (push) vers la branche `main`.
- Une demande de tirage (pull request) ciblant la branche `main` est ouverte, synchronisée ou rouverte.
- Quelqu’un le déclenche manuellement.

```yaml
on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main
  workflow_dispatch:
```

Pour plus d’informations sur les événements, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows) ».

## Utilisation des environnements

{% data reusables.actions.about-environments %}

## Utilisation de la concurrence

Avec la concurrence, vous ne pouvez exécuter qu’un seul travail ou workflow d’un même groupe de concurrence à la fois. Vous pouvez utiliser la concurrence pour qu’un environnement ait au maximum un déploiement en cours et un déploiement en attente.

{% note %}

**Remarque :** `concurrency` et `environment` ne sont pas connectés. Vous pouvez utiliser n’importe quelle chaîne comme valeur de concurrence. Il n’est pas nécessaire que ce soit un nom d’environnement. En outre, si un autre workflow utilise le même environnement mais ne spécifie pas la concurrence, ce workflow ne sera soumis à aucune règle de concurrence.

{% endnote %}

Par exemple, lorsque le workflow suivant s’exécute, il est suspendu avec l’état `pending` si un travail ou un workflow qui utilise le groupe de concurrence `production` est en cours d’exécution. Cela annulera également tout travail ou workflow qui utilise le groupe de concurrence `production` et qui a l’état `pending`. Cela signifie qu’il y aura au maximum un travail ou workflow en cours d’exécution, et un autre en attente qui utilisent le groupe de concurrence `production`.

```yaml
name: Deployment

concurrency: production

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Vous pouvez également spécifier la concurrence au niveau du travail. Cela permet aux autres travaux du workflow de continuer à s’exécuter, même si le travail simultané est à l’état `pending`.

```yaml
name: Deployment

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    concurrency: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Vous pouvez également utiliser `cancel-in-progress` pour annuler tout travail ou workflow en cours d’exécution dans le même groupe de concurrence.

```yaml
name: Deployment

concurrency: 
  group: production
  cancel-in-progress: true

on:
  push:
    branches:
      - main

jobs:
  deployment:
    runs-on: ubuntu-latest
    environment: production
    steps:
      - name: deploy
        # ...deployment-specific steps
```

Pour obtenir des conseils sur l’écriture d’étapes spécifiques au déploiement, consultez « [Trouver des exemples de déploiement](#finding-deployment-examples) ».

## Consultation de l’historique de déploiement

Lorsqu’un workflow {% data variables.product.prodname_actions %} est déployé dans un environnement, l’environnement s’affiche dans la page principale du dépôt. Pour plus d’informations sur l’affichage des déploiements dans les environnements, consultez « [Affichage de l’historique des déploiements](/developers/overview/viewing-deployment-history) ».

## Monitoring des exécutions de workflows

Chaque exécution de workflow génère un graphe en temps réel qui illustre la progression de l’exécution. Vous pouvez utiliser ce graphe pour monitorer et déboguer les déploiements. Pour plus d’informations, consultez « [Utilisation du graphe de visualisation](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph) ».

Vous pouvez également afficher les journaux d’activité de chaque exécution de workflow, ainsi que l’historique des exécutions de workflows. Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history) ».

## Suivi des déploiements via des applications

{% ifversion fpt or ghec %} Si votre compte personnel ou professionnel {% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} est intégré à Microsoft Teams ou Slack, vous pouvez suivre les déploiements qui utilisent des environnements via Microsoft Teams ou Slack. Par exemple, vous pouvez recevoir des notifications via l’application lorsqu’un déploiement est en attente d’approbation, lorsqu’un déploiement est approuvé ou lorsque l’état du déploiement change. Pour plus d’informations sur l’intégration à Microsoft Teams ou Slack, consultez « [Extensions et intégrations GitHub](/github/customizing-your-github-workflow/exploring-integrations/github-extensions-and-integrations#team-communication-tools) ».
{% endif %}

Vous pouvez également créer une application qui utilise des webhooks de déploiement et d’état de déploiement pour effectuer le suivi des déploiements. {% data reusables.actions.environment-deployment-event %} Pour plus d’informations, consultez « [Applications](/developers/apps) » et « [Événements et charges utiles de webhook ](/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#deployment) ».

{% ifversion fpt or ghes or ghec %}

## Choix de l’exécuteur

Vous pouvez exécuter votre workflow de déploiement sur des exécuteurs hébergés dans {% data variables.product.company_short %} ou sur des exécuteurs auto-hébergés. Le trafic provenant des exécuteurs hébergés dans {% data variables.product.company_short %} peut provenir d’une [large plage d’adresses réseau](/rest/reference/meta#get-github-meta-information). Si vous effectuez un déploiement dans un environnement interne et si votre entreprise restreint le trafic externe vers les réseaux privés, les workflows {% data variables.product.prodname_actions %} s’exécutant sur des exécuteurs hébergés dans {% data variables.product.company_short %} pourront ne pas pouvoir communiquer avec vos services ou ressources internes. Pour surmonter ce problème, vous pouvez héberger vos propres exécuteurs. Pour plus d’informations, consultez « [À propos des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/about-self-hosted-runners) et « [À propos des exécuteurs hébergés dans GitHub](/actions/using-github-hosted-runners/about-github-hosted-runners) ».

{% endif %}

## Affichage d’un badge d’état

Vous pouvez utiliser un badge d’état pour afficher l’état de votre workflow de déploiement. {% data reusables.repositories.actions-workflow-status-badge-intro %}

Pour plus d’informations, consultez « [Ajout d’un badge d’état de workflow](/actions/managing-workflow-runs/adding-a-workflow-status-badge) ».

## Trouver des exemples de déploiements

Cet article a montré les fonctionnalités de {% data variables.product.prodname_actions %} que vous pouvez ajouter à vos workflows de déploiement.

{% data reusables.actions.cd-templates-actions %}
