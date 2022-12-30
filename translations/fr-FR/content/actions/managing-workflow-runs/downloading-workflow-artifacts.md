---
title: Téléchargement d’artefacts de workflow
intro: Vous pouvez télécharger les artefacts archivés avant qu’ils n’expirent automatiquement.
permissions: 'People who are signed into {% data variables.product.product_name %} and have read access to a repository can download workflow artifacts.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Download workflow artifacts
ms.openlocfilehash: dcb2d97095f6cdd704207084b776db05a4d1bd44
ms.sourcegitcommit: d82f268a6f0236d1f4d2bf3d049974ada0170402
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 11/10/2022
ms.locfileid: '148160631'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

Par défaut, {% data variables.product.product_name %} stocke les journaux de build et les artefacts pendant 90 jours, et vous pouvez personnaliser cette période de rétention en fonction du type de dépôt. Pour plus d’informations, consultez « [Gestion des paramètres {% data variables.product.prodname_actions %} pour un dépôt](/repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-github-actions-settings-for-a-repository#configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-repository) ».

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}
1. Sous **Artefacts**, cliquez sur l’artefact que vous souhaitez télécharger.
    
    ![Menu déroulant Télécharger l’artefact](/assets/images/help/repository/artifact-drop-down-updated.png)
    

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

{% data variables.product.prodname_cli %} télécharge chaque artefact dans un répertoire distinct en fonction du nom de l’artefact. Si un seul artefact est spécifié, il est extrait dans le répertoire actif.

Pour télécharger tous les artefacts générés par l’exécution d’un workflow, utilisez la sous-commande `run download`. Remplacez `run-id` par l’ID de l’exécution à partir de laquelle vous souhaitez télécharger des artefacts. Si vous ne spécifiez pas de `run-id`, {% data variables.product.prodname_cli %} retourne un menu interactif pour vous permettre de choisir une exécution récente.

```shell
gh run download RUN_ID
```

Pour télécharger un artefact spécifique à partir d’une exécution, utilisez la sous-commande `run download`. Remplacez `run-id` par l’ID de l’exécution à partir de laquelle vous souhaitez télécharger des artefacts. Remplacez `artifact-name` par le nom de l’artefact que vous souhaitez télécharger.

```shell
gh run download RUN_ID -n ARTIFACT_NAME
```

Vous pouvez spécifier plusieurs artefacts.

```shell
gh run download RUN_ID> -n ARTIFACT_NAME-1 -n ARTIFACT_NAME-2
```

Pour télécharger des artefacts spécifiques parmi toutes les exécutions d’un dépôt, utilisez la sous-commande `run download`.

```shell
gh run download -n ARTIFACT_NAME-1 ARTIFACT_NAME-2
```

{% endcli %}
