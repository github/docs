---
title: Guide de démarrage rapide sur l’interface CLI de GitHub
intro: 'Commencez à utiliser {% data variables.product.prodname_cli %} pour travailler avec {% data variables.product.company_short %} dans la ligne de commande.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - CLI
type: overview
allowTitleToDifferFromFilename: true
shortTitle: Quickstart
ms.openlocfilehash: 004f848e973aa66d19b9de6b922d65dba76f1aea
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: fr-FR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145066713'
---
## À propos de {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %}

## Prise en main

1. [Installez](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} sur macOS, Windows ou Linux.
1. Sur la ligne de commande, authentifiez-vous auprès de {% data variables.product.company_short %}.

  ```shell
  gh auth login
  ```

  {% ifversion not fpt or ghec %} Pour vous authentifier auprès de {% data variables.product.product_location %}, utilisez l’indicateur `--hostname`.

  ```shell
  gh auth login --hostname <em>hostname</em>
  ```

  {% endif %}
1. Commencez à utiliser {% data variables.product.company_short %} à partir de la ligne de commande. Par exemple, recherchez un problème à traiter en entrant `gh issue status` ou `gh issue list --assignee @me`. Pour créer une demande de tirage (pull request), entrez `gh pr create`. Pour évaluer une demande de tirage, entrez `gh pr checkout`, `gh pr diff` et `gh pr review`.

## Étapes suivantes

- Indiquez à {% data variables.product.prodname_cli %} quel éditeur de texte utiliser pour les commandes qui ouvrent un éditeur de texte. Par exemple, entrez `gh config set editor "code -w"` pour définir votre éditeur de texte préféré sur {% data variables.product.prodname_vscode %}. Pour plus d’informations, consultez [`gh config set`](https://cli.github.com/manual/gh_config_set).

- Définissez des alias pour les commandes que vous exécutez couramment. Par exemple, si vous exécutez `gh alias set prd "pr create --draft"`, vous serez ainsi en mesure d’exécuter `gh prd` pour ouvrir rapidement un brouillon de demande de tirage. Pour plus d’informations, consultez [`gh alias`](https://cli.github.com/manual/gh_alias).

- Créez ou ajoutez des commandes personnalisées avec les extensions {% data variables.product.prodname_cli %}. Pour plus d’informations, consultez « [Utilisation des extensions {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions) » et « [Création d’extensions {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions) ».

- Pour plus d’informations sur les différentes commandes que vous pouvez exécuter avec {% data variables.product.prodname_cli %}, consultez « [Information de référence sur {% data variables.product.prodname_cli %}](/github-cli/github-cli/github-cli-reference) ».
