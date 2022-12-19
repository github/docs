---
title: Exécution de scripts avant ou après un travail
intro: 'Les scripts peuvent s’exécuter automatiquement sur un exécuteur autohébergé, juste avant ou après un travail.'
versions:
  feature: job-hooks-for-runners
type: tutorial
miniTocMaxHeadingLevel: 3
shortTitle: Run a script before or after a job
ms.openlocfilehash: 11b2f63cd70c5276f0626a6016593553d1bedd0c
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/05/2022
ms.locfileid: '147067649'
---
{% note %}

**Remarque** : Cette fonctionnalité est actuellement en version bêta et est sujette à modification.

{% endnote %}

## À propos des scripts antérieurs et postérieurs aux travaux

Vous pouvez exécuter automatiquement des scripts sur un exécuteur auto-hébergé, soit avant l’exécution d’un travail, soit après son exécution. Vous pouvez utiliser ces scripts pour prendre en charge les exigences du travail, telles que la création ou la suppression d’un environnement d’exécuteur ou le nettoyage des répertoires. Vous pouvez également utiliser ces scripts pour suivre les données de télémétrie de la façon dont vos exécuteurs sont utilisés.

Les scripts personnalisés sont automatiquement déclenchés lorsqu’une variable d’environnement spécifique est définie sur l’exécuteur. La variable d’environnement doit contenir le chemin absolu vers le script. Pour plus d’informations, consultez « [Déclenchement des scripts](#triggering-the-scripts) » ci-dessous.

Les langages de script suivants sont pris en charge :

- **Bash** : utilise `bash` et peut basculer vers `sh`. S’exécute en exécutant `-e {pathtofile}`.
- **PowerShell** : utilise `pwsh` et peut basculer vers `powershell`. S’exécute en exécutant `-command \". '{pathtofile}'\"`.

## Écriture des scripts

Vos scripts personnalisés peuvent utiliser les fonctionnalités suivantes :

- **Variables d’environnement** : Les scripts ont accès aux variables d’environnement par défaut. La charge utile d’événement webhook complète est disponible dans `GITHUB_EVENT_PATH`. Pour en savoir plus, consultez « [Variables d’environnement](/actions/learn-github-actions/environment-variables#default-environment-variables) ».
- **Commandes de workflow** : les scripts peuvent utiliser des commandes de workflow. Pour plus d’informations, consultez [« Commandes de workflow pour {% data variables.product.prodname_actions %} »](/actions/using-workflows/workflow-commands-for-github-actions), à l’exception de `save-state` et `set-output`, qui ne sont pas pris en charge par ces scripts. Les scripts peuvent également utiliser des fichiers d’environnement. Pour plus d’informations, consultez [Fichiers d’environnement](/actions/using-workflows/workflow-commands-for-github-actions#environment-files).

{% note %}

**Remarque** : Évitez d’utiliser vos scripts pour générer des informations sensibles pour la console, car toute personne disposant d’un accès en lecture au dépôt peut voir la sortie dans les journaux d’interface utilisateur.

{% endnote %}

### Gestion des codes de sortie

Pour les scripts antérieurs aux travaux, le code de sortie `0` indique que le script s’est terminé correctement et que le travail va ensuite s’exécuter. S’il existe un autre code de sortie, le travail ne sera pas exécuté et sera marqué comme ayant échoué. Pour afficher les résultats de vos scripts antérieurs aux travaux, vérifiez les journaux à la recherche d’entrées `Set up runner`. Pour plus d’informations sur la vérification des journaux, consultez « [Affichage des journaux pour diagnostiquer les défaillances](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures) ».

Le paramètre [`continue-on-error`](/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idcontinue-on-error) n’est pas pris en charge pour une utilisation par ces scripts.

## Déclenchement des scripts

Les scripts personnalisés doivent se trouver sur l’exécuteur, mais ne doivent pas être stockés dans le répertoire de l’application `actions-runner`. Les scripts sont exécutés dans le contexte de sécurité du compte de service qui exécute le service d’exécuteur.

{% note %}

**Remarque** : Les scripts déclenchés sont traités de manière synchrone, de manière à bloquer l’exécution des travaux pendant leur exécution.

{% endnote %}

Les scripts sont exécutés automatiquement lorsque l’exécuteur possède les variables d’environnement suivantes contenant un chemin absolu vers le script :
- `ACTIONS_RUNNER_HOOK_JOB_STARTED` : le script défini dans cette variable d’environnement est déclenché quand un travail a été affecté à un exécuteur, mais avant l’exécution du travail.
- `ACTIONS_RUNNER_HOOK_JOB_COMPLETED` : le script défini dans cette variable d’environnement est déclenché une fois que le travail a terminé le traitement.

Pour définir ces variables d’environnement, vous pouvez les ajouter au système d’exploitation ou les ajouter à un fichier nommé `.env` dans le répertoire d’application d’exécuteur auto-hébergé. Par exemple, l’entrée `.env` suivante entraîne l’exécution automatique par l’exécuteur d’un script nommé `cleanup_script.sh` avant l’exécution de chaque travail :

```bash
ACTIONS_RUNNER_HOOK_JOB_STARTED=/cleanup_script.sh
```

## Dépannage


### Pas de paramètre de délai d’attente

Il n’existe actuellement aucun paramètre de délai d’attente disponible pour les scripts exécutés par `ACTIONS_RUNNER_HOOK_JOB_STARTED` ou `ACTIONS_RUNNER_HOOK_JOB_COMPLETED`. Par conséquent, vous pouvez envisager d’ajouter la gestion des délais d’expiration à votre script.

### Examen du journal d’exécution de workflow

Pour vérifier si vos scripts s’exécutent, vous pouvez passer en revue les journaux pour ce travail. Les scripts sont répertoriés dans des étapes distinctes pour `Set up runner` ou `Complete runner`, selon la variable d’environnement qui déclenche le script. Pour plus d’informations sur la vérification des journaux, consultez « [Affichage des journaux pour diagnostiquer les défaillances](/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs#viewing-logs-to-diagnose-failures) ».
