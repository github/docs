---
title: Affichage de l’historique des exécutions de workflows
intro: Vous pouvez voir les journaux de chaque exécution d’un workflow. Les journaux incluent l’état de chaque travail et étape d’un workflow.
redirect_from:
  - /actions/managing-workflow-runs/viewing-workflow-run-history
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: View workflow run history
ms.openlocfilehash: bfef1ccd9f15480000332aec3ced6dc326cb9af3
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145107202'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

{% data reusables.repositories.permissions-statement-read %}

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %} {% data reusables.repositories.navigate-to-workflow %} {% data reusables.repositories.view-run %}

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

### Affichage des exécutions de workflow récentes

Pour répertorier les exécutions de workflow récentes, utilisez la sous-commande `run list`.

```shell
gh run list
```

Pour spécifier le nombre maximal d’exécutions à retourner, vous pouvez utiliser l’indicateur `-L` ou `--limit`. Par défaut, il s’agit de `10`.

```shell
gh run list --limit 5
```

Pour retourner uniquement les exécutions pour le workflow spécifié, vous pouvez utiliser l’indicateur `-w` ou `--workflow`.  Remplacez `workflow` par le nom de workflow, l’ID de workflow ou le nom de fichier de workflow. Par exemple, `"Link Checker"`, `1234567` ou `"link-check-test.yml"`.

```shell
gh run list --workflow <em>workflow</em>
```

### Affichage des détails d’une exécution de workflow spécifique

Pour afficher les détails d’une exécution de workflow spécifique, utilisez la sous-commande `run view`. Remplacez `run-id` par l’ID de l’exécution que vous voulez afficher. Si vous ne spécifiez pas de `run-id`, {% data variables.product.prodname_cli %} retourne un menu interactif pour vous permettre de choisir une exécution récente.

```shell
gh run view <em>run-id</em>
```

Pour inclure des étapes de travail dans la sortie, utilisez l’indicateur `-v` ou `--verbose`.

```shell
gh run view <em>run-id</em> --verbose
```

Pour afficher les détails d’un travail spécifique dans l’exécution, utilisez l’indicateur `-j` ou `--job`.  Remplacez `job-id` par l’ID du travail que vous voulez afficher.

```shell
gh run view --job <em>job-id</em>
```

Pour afficher le journal complet d’un travail, utilisez l’indicateur `--log`.

```shell
gh run view --job <em>job-id</em> --log
```

Utilisez l’indicateur `--exit-status` pour quitter avec un état différent de zéro si l’exécution a échoué. Par exemple :

```shell
gh run view 0451 --exit-status && echo "run pending or passed"
```

{% endcli %}
