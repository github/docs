---
title: Exécution manuelle d’un workflow
intro: 'Quand un workflow est configuré pour s’exécuter sur l’événement `workflow_dispatch`, vous pouvez l’exécuter via l’onglet Actions de {% data variables.product.prodname_dotcom %}, {% data variables.product.prodname_cli %}, ou l’API REST.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Manually run a workflow
ms.openlocfilehash: 22717c31a6bc2599f066b0e870f0aa652c18cc6f
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/10/2022
ms.locfileid: '145105185'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## Configuration d’un workflow à exécuter manuellement

Pour exécuter un workflow manuellement, ce dernier doit être configuré pour s’exécuter sur l’événement `workflow_dispatch`. Pour déclencher l’événement `workflow_dispatch`, votre workflow doit se trouver dans la branche par défaut. Pour plus d’informations sur la configuration de l’événement `workflow_dispatch`, consultez « [Événements qui déclenchent des workflows](/actions/reference/events-that-trigger-workflows#workflow_dispatch) ».

{% data reusables.repositories.permissions-statement-write %}

## Exécution d’un workflow

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Dans la barre latérale gauche, cliquez sur le workflow que vous souhaitez exécuter.
![actions – sélectionner un workflow](/assets/images/actions-select-workflow.png)
1. Au-dessus de la liste des exécutions de workflows, sélectionnez **Exécuter le workflow**.
![actions – distribution de workflow](/assets/images/actions-workflow-dispatch.png)
1. Utilisez la liste déroulante **Branche** pour sélectionner la branche du workflow et tapez les paramètres d’entrée. Cliquez sur **Exécuter le workflow**.
![actions – exécuter manuellement un workflow](/assets/images/actions-manually-run-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour exécuter un workflow, utilisez la sous-commande `workflow run`. Remplacez le paramètre `workflow` par le nom, l’ID ou le nom de fichier du workflow que vous souhaitez exécuter. Par exemple, `"Link Checker"`, `1234567` ou `"link-check-test.yml"`. Si vous ne spécifiez pas de workflow, {% data variables.product.prodname_cli %} retourne un menu interactif pour vous permettre de choisir un workflow.

```shell
gh workflow run <em>workflow</em>
```

Si votre workflow accepte les entrées, {% data variables.product.prodname_cli %} vous invite à les entrer. Vous pouvez également utiliser `-f` ou `-F` pour ajouter une entrée au format `key=value`. Utilisez `-F` pour lire à partir d’un fichier.

```shell
gh workflow run greet.yml -f name=mona -f greeting=hello -F data=@myfile.txt
```

Vous pouvez également transmettre des entrées au format JSON à l’aide d’une entrée standard.

```shell
echo '{"name":"mona", "greeting":"hello"}' | gh workflow run greet.yml --json
```

Pour exécuter un workflow sur une branche autre que la branche par défaut du dépôt, utilisez l’indicateur `--ref`.

```shell
gh workflow run <em>workflow</em> --ref <em>branch-name</em>
```

Pour afficher la progression de l’exécution du workflow, utilisez la sous-commande `run watch` et sélectionnez l’exécution dans la liste interactive.

```shell
gh run watch
```

{% endcli %}

## Exécution d’un workflow à l’aide de l’API REST

Lorsque vous utilisez l’API REST, vous configurez `inputs` et `ref` comme paramètres du corps de la demande. Si les entrées sont omises, les valeurs par défaut définies dans le fichier de workflow sont utilisées.

{% note %}

**Remarque :** Vous pouvez définir jusqu’à 10 `inputs` pour un événement `workflow_dispatch`.

{% endnote %}

Pour plus d’informations sur l’utilisation de l’API REST, consultez « [Créer un événement de distribution de workflow](/rest/reference/actions/#create-a-workflow-dispatch-event) ».
