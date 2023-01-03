---
title: Início rápido da CLI do GitHub
intro: 'Comece a usar {% data variables.product.prodname_cli %} para trabalhar com {% data variables.product.company_short %} na linha de comando.'
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
ms.contentlocale: pt-BR
ms.lasthandoff: 09/11/2022
ms.locfileid: '145065531'
---
## Sobre a {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %}

## Introdução

1. [Instale](https://github.com/cli/cli#installation) a {% data variables.product.prodname_cli %} no macOS, no Windows ou no Linux.
1. Na linha de comando, efetue a aitenticação em {% data variables.product.company_short %}.

  ```shell
  gh auth login
  ```

  {% ifversion not fpt or ghec %} Para se autenticar no {% data variables.product.product_location %}, use o sinalizador `--hostname`.

  ```shell
  gh auth login --hostname <em>hostname</em>
  ```

  {% endif %}
1. Comece a trabalhar com {% data variables.product.company_short %} na linha de comando. Por exemplo, encontre um problema para trabalhar com `gh issue status` ou `gh issue list --assignee @me`. Crie uma solicitação de pull com `gh pr create`. Revise uma solicitação de pull com `gh pr checkout`, `gh pr diff` e `gh pr review`.

## Próximas etapas

- Diga a {% data variables.product.prodname_cli %} qual editor de texto usar para comandos que abram um editor de texto. Por exemplo, insira `gh config set editor "code -w"` para definir seu editor de texto preferido como o {% data variables.product.prodname_vscode %}. Para obter mais informações, confira [`gh config set`](https://cli.github.com/manual/gh_config_set).

- Defina aliases para comandos que você executa com frequência. Por exemplo, se você executar `gh alias set prd "pr create --draft"`, poderá executar `gh prd` para abrir rapidamente uma solicitação de pull de rascunho. Para obter mais informações, confira [`gh alias`](https://cli.github.com/manual/gh_alias).

- Crie ou adicione comandos personalizados com extensões de {% data variables.product.prodname_cli %}. Para obter mais informações, confira "[Como usar extensões da {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions) e "[Como criar extensões da {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions)".

- Para obter mais informações sobre todos os comandos que você pode executar com a {% data variables.product.prodname_cli %}, confira "[Referência da {% data variables.product.prodname_cli %}](/github-cli/github-cli/github-cli-reference)".
