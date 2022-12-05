---
title: Using workflow run logs
intro: 'Vous pouvez afficher, rechercher et télécharger les journaux pour chaque travail dans une exécution de workflow.'
redirect_from:
  - /actions/managing-workflow-runs/using-workflow-run-logs
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
ms.openlocfilehash: ef8d0a7f1708b8c23705a04496b3d78737aec450
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/12/2022
ms.locfileid: '147521521'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Vous pouvez voir si une exécution de workflow est en cours ou terminée à partir de la page d’exécutions de workflow. Vous devez être connecté à un compte {% data variables.product.prodname_dotcom %} pour afficher les informations sur les exécutions de workflow, notamment pour les dépôts publics. Pour plus d’informations, consultez « [Autorisations d’accès sur GitHub](/articles/access-permissions-on-github) ».

Si l’exécution est terminée, vous pouvez voir si le résultat a été un succès, un échec, une annulation ou une opération neutre. Si l’exécution a échoué, vous pouvez afficher les journaux de génération et y effectuer des recherches pour diagnostiquer l’échec et réexécuter le workflow. Vous pouvez également afficher les minutes d’exécution de travaux facturables, ou télécharger les journaux et les artefacts de build.

{% data variables.product.prodname_actions %} utilise l’API Vérifications pour générer des états, résultats et journaux pour un workflow. {% data variables.product.prodname_dotcom %} crée une suite de vérifications pour chaque exécution de workflow. La suite de vérifications contient une exécution de vérification pour chaque travail dans le workflow, et chaque travail inclut des étapes. {% data variables.product.prodname_actions %} est exécuté en tant qu’étape dans un workflow. Pour plus d’informations sur l’API Vérifications, consultez « [Vérifications](/rest/reference/checks) ».

{% data reusables.actions.invalid-workflow-files %}

## Affichage des journaux pour diagnostiquer les défaillances

Si l’exécution de votre workflow échoue, vous pouvez voir quelle étape a provoqué l’échec et passer en revue les journaux de génération de l’étape ayant échoué pour résoudre les problèmes. Vous pouvez voir le temps nécessaire à l’exécution de chaque étape. Vous pouvez également copier un lien permanent vers une ligne spécifique dans le fichier journal à partager avec votre équipe. {% data reusables.repositories.permissions-statement-read %}

Outre les étapes configurées dans le fichier de workflow, {% data variables.product.prodname_dotcom %} ajoute deux étapes supplémentaires à chaque travail pour configurer et terminer l’exécution du travail. Ces étapes sont enregistrées dans l’exécution du workflow avec les noms « Configurer un travail » et « Terminer un travail ».

Pour les travaux exécutés sur les exécuteurs hébergés par {% data variables.product.prodname_dotcom %}, « Configurer un travail » enregistre les détails de l’image de l’exécuteur et inclut un lien vers la liste des outils préinstallés présents sur l’ordinateur de l’exécuteur.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %} {% data reusables.repositories.view-failed-job-results %} {% data reusables.repositories.view-specific-line %}

## Recherche dans les journaux

Vous pouvez rechercher dans les journaux de génération une étape particulière. Lorsque vous effectuez une recherche dans les journaux, seules les étapes développées sont incluses dans les résultats. {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. Dans le coin supérieur droit de la sortie du journal, dans la zone de recherche **Rechercher dans les journaux**, tapez une requête de recherche.
![Zone de recherche pour rechercher dans les journaux](/assets/images/help/repository/search-log-box-updated-2.png)

## Téléchargement des journaux

Vous pouvez télécharger les fichiers journaux à partir de votre exécution de workflow. Vous pouvez également télécharger les artefacts d’un workflow. Pour plus d’informations, consultez « [Persistance des données de workflow à l’aide d’artefacts](/actions/automating-your-workflow-with-github-actions/persisting-workflow-data-using-artifacts) ». {% data reusables.repositories.permissions-statement-read %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %} {% data reusables.repositories.navigate-to-job %}
1. Dans le coin supérieur droit, cliquez sur {% octicon "gear" aria-label="The gear icon" %} et sélectionnez **Télécharger l’archive des journaux**.
  
  ![Menu déroulant Télécharger les journaux](/assets/images/help/repository/download-logs-drop-down-updated-2.png)
  

  {% ifversion re-run-jobs %}

  {% note %}

  **Remarque** : Lorsque vous téléchargez l’archive des journaux pour un workflow partiellement réexécuté, l’archive inclut uniquement les travaux qui ont été réexécutés. Pour obtenir un ensemble complet de journaux pour les travaux exécutés à partir d’un workflow, vous devez télécharger les archives des journaux pour les tentatives d’exécution précédentes qui ont exécuté les autres travaux.

  {% endnote %}

  {% endif %}

## Suppression des journaux

Vous pouvez supprimer les fichiers journaux à partir de votre exécution de workflow. {% data reusables.repositories.permissions-statement-write %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Dans le coin supérieur droit, cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
    
    ![Icône de menu kebab horizontal](/assets/images/help/repository/workflow-run-kebab-horizontal-icon-updated-2.png)
    
2. Pour supprimer les fichiers journaux, cliquez sur le bouton **Supprimer tous les journaux** et passez en revue l’invite de confirmation. 
  
  ![Supprimer tous les journaux](/assets/images/help/repository/delete-all-logs-updated-2.png)
  
Une fois les journaux supprimés, le bouton **Supprimer tous les journaux** est supprimé pour indiquer qu’aucun fichier journal n’est conservé dans l’exécution de workflow.

## Affichage des journaux avec {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-learn-more %}

Pour afficher le journal d’un travail spécifique, utilisez la sous-commande `run view`. Remplacez `run-id` par l’ID de l’exécution pour laquelle vous voulez afficher des journaux. {% data variables.product.prodname_cli %} retourne un menu interactif pour vous permettre de choisir un travail à partir de l’exécution. Si vous ne spécifiez pas `run-id`, {% data variables.product.prodname_cli %} retourne un menu interactif pour vous permettre de choisir une exécution récente, puis un autre menu interactif pour vous permettre de choisir un travail à partir de l’exécution.

```shell
gh run view <em>run-id</em> --log
```

Vous pouvez également utiliser l’indicateur `--job` pour spécifier un ID de travail. Remplacez `job-id` par l’ID du travail pour lequel vous voulez afficher des journaux.

```shell
gh run view --job <em>job-id</em> --log
```

Vous pouvez utiliser `grep` pour effectuer une recherche dans le journal. Par exemple, cette commande retourne toutes les entrées de journal qui contiennent le mot `error`.

```shell
gh run view --job <em>job-id</em> --log | grep error
```

Pour filtrer les journaux selon les étapes ayant échoué, utilisez `--log-failed` plutôt que `--log`.

```shell
gh run view --job <em>job-id</em> --log-failed
```
