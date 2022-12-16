---
title: Désactivation et activation d’un workflow
intro: 'Vous pouvez désactiver et réactiver un workflow à l’aide de l’IU de {% data variables.product.prodname_dotcom %}, de l’API REST ou de {% data variables.product.prodname_cli %}.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
shortTitle: Disable & enable a workflow
ms.openlocfilehash: 1c0ebc0f56ba8c337648670e0f07d8a56e2fc326
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145109569'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

La désactivation d’un workflow vous permet d’empêcher le déclenchement d’un workflow sans avoir à supprimer le fichier du référentiel. Vous pouvez facilement réactiver le workflow sur {% data variables.product.prodname_dotcom %}.

La désactivation temporaire d’un workflow peut être utile dans de nombreux scénarios. Voici quelques exemples où la désactivation d’un workflow peut être utile :

- Une erreur de workflow qui produit des requêtes trop nombreuses ou incorrectes ayant un impact négatif sur les services externes.
- Un workflow qui n’est pas critique et qui consomme un trop grand nombre de minutes sur votre compte.
- Un workflow qui envoie des demandes à un service en panne.
- Workflows sur un référentiel dupliqué qui ne sont pas nécessaires (par exemple, workflows planifiés).

{% warning %}

**Avertissement :** {% data reusables.actions.scheduled-workflows-disabled %}

{% endwarning %}

Vous pouvez également désactiver et activer un workflow à l’aide de l’API REST. Pour plus d’informations, consultez « [API REST Actions](/rest/reference/actions#workflows) ».

## Désactivation d’un flux de travail

{% webui %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Dans la barre latérale gauche, cliquez sur le workflow que vous souhaitez désactiver.
![actions – sélectionner un workflow](/assets/images/actions-select-workflow.png)
1. Cliquez sur {% octicon "kebab-horizontal" aria-label="The horizontal kebab icon" %}.
![actions kebab menu](/assets/images/help/repository/actions-workflow-menu-kebab.png)
1. Cliquez sur **Désactiver le workflow**.
![actions disable workflow](/assets/images/help/repository/actions-disable-workflow.png) Le workflow désactivé est marqué {% octicon "stop" aria-label="The stop icon" %} pour indiquer son état.
![actions list disabled workflow](/assets/images/help/repository/actions-find-disabled-workflow.png)

{% endwebui %}

{% cli %}

{% data reusables.cli.cli-learn-more %}

Pour désactiver un workflow, utilisez la sous-commande `workflow disable`. Remplacez `workflow` par le nom, l’ID ou le nom de fichier du workflow que vous souhaitez désactiver. Par exemple, `"Link Checker"`, `1234567` ou `"link-check-test.yml"`. Si vous ne spécifiez pas de workflow, {% data variables.product.prodname_cli %} retourne un menu interactif pour vous permettre de choisir un workflow.

```shell
gh workflow disable <em>workflow</em>
```

{% endcli %}

## Activation d’un workflow

{% webui %}

Vous pouvez réactiver un workflow précédemment désactivé.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.actions-tab %}
1. Dans la barre latérale gauche, cliquez sur le workflow que vous souhaitez activer.
![actions select disabled workflow](/assets/images/help/repository/actions-select-disabled-workflow.png)
1. Cliquez sur **Activer le workflow**.
![actions enable workflow](/assets/images/help/repository/actions-enable-workflow.png)

{% endwebui %}

{% cli %}

Pour activer un workflow, utilisez la sous-commande `workflow enable`. Remplacez `workflow` par le nom, l’ID ou le nom de fichier du workflow que vous souhaitez activer. Par exemple, `"Link Checker"`, `1234567` ou `"link-check-test.yml"`. Si vous ne spécifiez pas de workflow, {% data variables.product.prodname_cli %} retourne un menu interactif pour vous permettre de choisir un workflow.

```shell
gh workflow enable <em>workflow</em>
```

{% endcli %}
