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
shortTitle: QuickStart
---

## Sobre o {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %}

## Introdução

1. [Instale](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} no macOS, Windows ou Linux.
1. Na linha de comando, efetue a aitenticação em {% data variables.product.company_short %}.

  ```shell
  gh auth login
  ```

  {% ifversion not fpt or ghec %}
  Para efetuar a autenticação em {% data variables.product.product_location %}, use o sinalizador `--hostname`.

  ```shell
  gh auth login --hostname <em>hostname</em>
  ```

  {% endif %}
1. Comece a trabalhar com {% data variables.product.company_short %} na linha de comando. Por exemplo, encontre um problema para trabalhar com `gh issue status` ou `gh issue list --assignee @me`. Crie um pull request com `gh pr create`. Revise um pull request com `gh pr checkout`, `gh pr diff` e `gh gh pr review`.

## Próximas etapas

- Diga a {% data variables.product.prodname_cli %} qual editor de texto usar para comandos que abram um editor de texto. Por exemplo, digite `gh config editor "code -w"` para definir seu editor de texto preferido para {% data variables.product.prodname_vscode %}. Para obter mais informações, consulte [`gh config set`](https://cli.github.com/manual/gh_config_set).

- Defina aliases para comandos que você executa com frequência. Por exemplo, se você executar `gh alias set prd "pr create --draft"`, você poderá executar o `gh prd` para abrir rapidamente um pull request. Para obter mais informações, consulte [`gh alias`](https://cli.github.com/manual/gh_alias).

- Crie ou adicione comandos personalizados com extensões de {% data variables.product.prodname_cli %}. Para obter mais informações, consulte "[Usando extensões de {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions)" e "[Criando extensões de {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions)".

- Para obter mais informações sobre todos os comandos que você pode executar com {% data variables.product.prodname_cli %}, consulte "[Referência de {% data variables.product.prodname_cli %}](/github-cli/github-cli/github-cli-reference)".
