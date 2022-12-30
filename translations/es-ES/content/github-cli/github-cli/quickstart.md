---
title: Inicio rápido ára el CLI de GitHub
intro: 'Comienza a utilizar el {% data variables.product.prodname_cli %} para trabajar con {% data variables.product.company_short %} en la línea de comandos.'
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
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145069787'
---
## Acerca de la {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %}

## Introducción

1. [Instale](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} en macOS, Windows o Linux.
1. En la línea de comandos, autentícate en {% data variables.product.company_short %}.

  ```shell
  gh auth login
  ```

  {% ifversion not fpt or ghec %} Para autenticarse en {% data variables.product.product_location %}, use la marca `--hostname`.

  ```shell
  gh auth login --hostname <em>hostname</em>
  ```

  {% endif %}
1. Comienza a trabajar con {% data variables.product.company_short %} en la línea de comandos. Por ejemplo, busque una incidencia en la que trabajar con `gh issue status` o `gh issue list --assignee @me`. Cree una solicitud de incorporación de cambios con `gh pr create`. Revise una solicitud de incorporación de cambios con `gh pr checkout`, `gh pr diff` y `gh pr review`.

## Pasos siguientes

- Indica al {% data variables.product.prodname_cli %} qué editor de texto utilizar para los comandos que abran un editor de texto. Por ejemplo, escriba `gh config set editor "code -w"` para establecer el editor de texto preferido en {% data variables.product.prodname_vscode %}. Para más información, vea [`gh config set`](https://cli.github.com/manual/gh_config_set).

- Define los alias para los comandos que ejecutas comunmente. Por ejemplo, si ejecuta `gh alias set prd "pr create --draft"`, después podrá ejecutar `gh prd` para abrir rápidamente una solicitud de incorporación de cambios de borrador. Para más información, vea [`gh alias`](https://cli.github.com/manual/gh_alias).

- Crea o agrega comandos personalizados con las extensiones de {% data variables.product.prodname_cli %}. Para más información, vea "[Uso de extensiones de {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions)" y "[Creación de extensiones de {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions)".

- Para más información sobre todos los comandos que puede ejecutar con la {% data variables.product.prodname_cli %}, vea "[Referencia de {% data variables.product.prodname_cli %}](/github-cli/github-cli/github-cli-reference)".
