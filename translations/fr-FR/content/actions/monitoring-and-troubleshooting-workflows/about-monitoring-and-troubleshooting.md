---
title: À propos du monitoring et de la résolution des problèmes
intro: 'Vous pouvez utiliser les outils dans {% data variables.product.prodname_actions %} pour superviser et déboguer vos workflows.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: About monitoring and troubleshooting
miniTocMaxHeadingLevel: 3
ms.openlocfilehash: d9158cd9bba6d003a583e78459240aa6790a1154
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147062041'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Monitoring de vos workflows 

{% ifversion github-runner-dashboard %}
### Monitoring de vos travaux en cours dans votre organisation ou votre entreprise

{% data reusables.actions.github-hosted-runners-check-concurrency %}

{% endif %}

### Utilisation du graphe de visualisation

Chaque exécution de workflow génère un graphe en temps réel qui illustre la progression de l’exécution. Vous pouvez utiliser ce graphe pour superviser et déboguer des workflows. Par exemple :

   ![Graphe de workflow](/assets/images/help/images/workflow-graph.png)

Pour plus d’informations, consultez « [Utilisation du graphe de visualisation](/actions/monitoring-and-troubleshooting-workflows/using-the-visualization-graph) ». 

### Adding a workflow status badge

{% data reusables.repositories.actions-workflow-status-badge-intro %}

Pour plus d’informations, consultez « [Ajout d’un badge d’état de workflow](/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge) ».

{% ifversion fpt or ghec %}
### Affichage de la durée d’exécution des travaux

Pour déterminer le temps nécessaire à l’exécution d’un travail, vous pouvez afficher sa durée d’exécution. Par exemple :

   ![Lien des détails sur l’exécution et la durée à facturer](/assets/images/help/repository/view-run-billable-time.png)

Pour plus d’informations, consultez « [Affichage de la durée d’exécution des travaux](/actions/monitoring-and-troubleshooting-workflows/viewing-job-execution-time) ».
{% endif %}

### Affichage de l’historique des exécutions de workflows

Vous pouvez afficher l’état de chaque travail et étape d’un workflow. Par exemple :

   ![Nom de l’exécution de workflow](/assets/images/help/repository/run-name.png)

Pour plus d’informations, consultez « [Affichage de l’historique des exécutions de workflows](/actions/monitoring-and-troubleshooting-workflows/viewing-workflow-run-history) ».

## Résolution des problèmes liés à vos workflows

### Using workflow run logs

Chaque exécution de workflow génère des journaux d’activité que vous pouvez afficher, investiguer et télécharger. Par exemple :

   ![Résultats de workflow super linter](/assets/images/help/repository/super-linter-workflow-results-updated-2.png)

Pour plus d’informations, consultez « [Utilisation des journaux d’exécution de workflow](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs) ».

### Enabling debug logging

Si les journaux de workflow ne fournissent pas suffisamment de détails pour diagnostiquer la raison pour laquelle un workflow, un travail ou une étape ne fonctionne pas comme prévu, vous pouvez activer une journalisation de débogage supplémentaire. Pour plus d’informations, consultez « [Activation de la journalisation de débogage](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging) ».

## Surveillance des exécuteurs auto-hébergés et résolution des problèmes

Si vous utilisez des exécuteurs auto-hébergés, vous pouvez afficher leur activité et diagnostiquer les problèmes courants. 

Pour plus d’informations, consultez « [Monitoring et résolution des problèmes des exécuteurs auto-hébergés](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners) ».
