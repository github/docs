---
title: Ré-exécution de workflows et de travaux
intro: 'Vous pouvez réexécuter une exécution de workflow{% ifversion re-run-jobs %}, tous les travaux ayant échoué dans une exécution de workflow ou des travaux spécifiques dans une exécution de workflow{% endif %} jusqu’à 30 jours après son exécution initiale.'
permissions: People with write permissions to a repository can re-run workflows in the repository.
miniTocMaxHeadingLevel: 3
redirect_from:
  - /actions/managing-workflow-runs/re-running-a-workflow
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: 086a57b238b4a11e38013997dfcb85418a6961bd
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '147419720'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## À propos de la ré-exécution de workflows et de travaux

La ré-exécution d’un workflow{% ifversion re-run-jobs %} ou de travaux dans un workflow{% endif %} utilise les mêmes algorithmes `GITHUB_SHA` (algorithme SHA de validation) et `GITHUB_REF` (référence Git) de l’événement d’origine qui a déclenché l’exécution du workflow. {% ifversion actions-stable-actor-ids %} Le workflow utilise les privilèges de l’acteur qui a initialement déclenché le workflow, et non les privilèges de l’acteur qui a initié la réexécutation. {% endif %}Vous pouvez réexécuter un workflow{% ifversion re-run-jobs %} ou des travaux dans un workflow{% endif %} jusqu’à 30 jours après l’exécution initiale.{% ifversion re-run-jobs %} Vous ne pouvez pas réexécuter des travaux dans un workflow une fois que ses journaux ont passé leurs limites de conservation. Pour plus d’informations, consultez « [Limites d’utilisation, facturation et administration](/actions/learn-github-actions/usage-limits-billing-and-administration#artifact-and-log-retention-policy) ».{% endif %}{% ifversion debug-reruns %} Lorsque vous réexécutez un workflow ou des travaux dans un workflow, vous pouvez activer la journalisation du débogage pour la réexécutation. Cela permet d’activer la journalisation des diagnostics de l’exécuteur et la journalisation du débogage par étape pour la réexécution. Pour plus d’informations sur la journalisation de débogage, consultez « [Activation de la journalisation du débogage](/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging) ».{% endif %}

## Ré-exécution de tous les travaux dans un workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
1. Dans le coin supérieur droit du workflow, utilisez le menu déroulant **Ré-exécuter les travaux** et sélectionnez **Ré-exécuter tous les travaux**.

   Si aucun travail n’a échoué, le menu déroulant **Ré-exécuter les travaux** ne s’affiche pas. Au lieu de cela, cliquez sur **Ré-exécuter tous les travaux**.
    ![Menu déroulant Ré-exécuter les vérifications](/assets/images/help/repository/rerun-checks-drop-down.png) {% endif %} {% ifversion ghes < 3.5 or ghae %}
1. Dans le coin supérieur droit du workflow, utilisez le menu déroulant **Ré-exécuter les travaux** et sélectionnez **Ré-exécuter tous les travaux**.
    ![Réexécutez les vérifications du menu déroulant](/assets/images/help/repository/rerun-checks-drop-down-updated.png) {% endif %} {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour ré-exécuter une exécution de workflow ayant échoué, utilisez la sous-commande `run rerun`. Remplacez `run-id` par l’ID de l’exécution ayant échoué que vous voulez ré-exécuter.  Si vous ne spécifiez pas de `run-id`, {% data variables.product.prodname_cli %} retourne un menu interactif pour vous permettre de choisir une exécution échouée récente.

```shell
gh run rerun <em>run-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --debug
```

{% endif %}

Pour afficher la progression de l’exécution du workflow, utilisez la sous-commande `run watch` et sélectionnez l’exécution dans la liste interactive.

```shell
gh run watch
```

{% endcli %}

{% ifversion re-run-jobs %}
## Ré-exécution de travaux ayant échoué dans un workflow

Si des travaux d’une exécution de workflow ont échoué, vous pouvez ré-exécuter uniquement les travaux qui ont échoué. Quand vous ré-exécutez les travaux qui ont échoué dans un workflow, une nouvelle exécution de workflow démarre pour tous les travaux ayant échoué et leurs dépendants. Toutes les sorties pour les travaux réussis dans l’exécution de workflow précédente seront utilisées pour la ré-exécution. Tous les artefacts créés dans l’exécution initiale seront disponibles dans la ré-exécution. Toutes les règles de protection de l’environnement qui sont passées lors de l’exécution précédente passeront automatiquement dans la ré-exécution.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Dans le coin supérieur droit du workflow, utilisez le menu déroulant **Ré-exécuter les travaux** et sélectionnez **Ré-exécuter les travaux ayant échoué**.
    ![Réexécutez les travaux échoués du menu déroulant](/assets/images/help/repository/rerun-failed-jobs-drop-down.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Pour ré-exécuter les travaux ayant échoué dans une exécution de workflow, utilisez la sous-commande `run rerun` avec l’indicateur `--failed`. Remplacez `run-id` par l’ID de l’exécution pour laquelle vous souhaitez ré-exécuter les travaux ayant échoué. Si vous ne spécifiez pas de `run-id`, {% data variables.product.prodname_cli %} retourne un menu interactif pour vous permettre de choisir une exécution échouée récente.

```shell
gh run rerun <em>run-id</em> --failed
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun <em>run-id</em> --failed --debug
```

{% endif %} {% endcli %}

## Ré-exécution d’un travail spécifique dans un workflow

Quand vous ré-exécutez un travail spécifique dans un workflow, une nouvelle exécution de workflow démarre pour le travail et tous les dépendants. Toutes les sorties pour les autres travaux dans l’exécution de workflow précédente seront utilisées pour la ré-exécution. Tous les artefacts créés dans l’exécution initiale seront disponibles dans la ré-exécution. Toutes les règles de protection de l’environnement qui sont passées lors de l’exécution précédente passeront automatiquement dans la ré-exécution.

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. En regard du travail que vous souhaitez ré-exécuter, cliquez sur {% octicon "sync" aria-label="The re-run icon" %}.
   ![Ré-exécuter le travail sélectionné](/assets/images/help/repository/re-run-selected-job.png)

   Vous pouvez également cliquer sur un travail pour afficher le journal. Dans le journal, cliquez sur {% octicon "sync" aria-label="The re-run icon" %}.
   ![Réexécutez le travail sélectionné](/assets/images/help/repository/re-run-single-job-from-log.png) {% data reusables.actions.enable-debug-logging %}

{% endwebui %}

{% cli %}

Pour ré-exécuter un travail spécifique dans une exécution de workflow, utilisez la sous-commande `run rerun` avec l’indicateur `--job`. Remplacez `job-id` par l’ID du travail que vous voulez ré-exécuter.

```shell
gh run rerun --job <em>job-id</em>
```

{% ifversion debug-reruns %} {% data reusables.actions.enable-debug-logging-cli %}

```shell
gh run rerun --job <em>job-id</em> --debug
```

{% endif %} {% endcli %}

{% endif %}

{% ifversion partial-reruns-with-reusable %}

## Réexécution de workflows et de travaux avec des workflows réutilisables

{% data reusables.actions.partial-reruns-with-reusable %}

{% endif %}

{% ifversion fpt or ghes > 3.4 or ghae-issue-4721 or ghec %}
## Examen des exécutions de workflow précédentes

Vous pouvez afficher les résultats de vos tentatives précédentes lors de l’exécution d’un workflow. Vous pouvez également afficher les exécutions de workflow précédentes à l’aide de l’API. Pour plus d’informations, consultez [« Obtenir une exécution de workflow »](/rest/reference/actions#get-a-workflow-run).

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {%- ifversion re-run-jobs %}
1. Toutes les tentatives d’exécution précédentes sont affichées dans le menu déroulant **Le plus récent**.
   ![Tentatives d’exécution précédentes](/assets/images/help/repository/previous-run-attempts.png) {%- else %}
1. Toutes les tentatives d’exécution précédentes sont affichées dans le volet gauche.
    ![Ré-exécuter le workflow](/assets/images/help/settings/actions-review-workflow-rerun.png) {%- endif %}
1. Cliquez sur une entrée pour afficher ses résultats.

{% endif %}
