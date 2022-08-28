---
title: Inicio rápido ára el CLI de GitHub
intro: 'Comienza a utilizar el {% data variables.product.prodname_cli %} para trabajar con {% data variables.product.company_short %} en la línea de comandos.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - CLI
type: overview
allowTitleToDifferFromFilename: true
shortTitle: Inicio Rápido
---

## Acerca de {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %}

## Empezar

1. [Instala](https://github.com/cli/cli#installation) el {% data variables.product.prodname_cli %} en macoS, Windows o Linux.
1. En la línea de comandos, autentícate en {% data variables.product.company_short %}.

  ```shell
  gh auth login
  ```

  {% ifversion not fpt %}
  Para autenticarte en {% data variables.product.product_location %}, utiliza el marcador `--hostname`.

  ```shell
  gh auth login --hostname <em>hostname</em>
  ```

  {% endif %}
1. Comienza a trabajar con {% data variables.product.company_short %} en la línea de comandos. Por ejemplo, encuentra una propuesta en la cuál trabajar con `gh issue status` o `gh issue list --assignee @me`. Crea una solicitud de cambios con `gh pr create`. Revisa una solcitud de cambios con `gh pr checkout`, `gh pr diff` y `gh pr review`.

## Pasos siguientes

- Indica al {% data variables.product.prodname_cli %} qué editor de texto utilizar para los comandos que abran un editor de texto. Por ejemplo, ingresa `gh config set editor "code -w"` para configurar a {% data variables.product.prodname_vscode %} como tu editor de texto preferido. Para obtener más información, consulta la sección [`gh config set`](https://cli.github.com/manual/gh_config_set).

- Define los alias para los comandos que ejecutas comunmente. Por ejemplo, si ejecutas `gh alias set prd "pr create --draft"`, entonces podrás ejecutar `gh prd` para abrir un borrador de solicitud de cambios rápidamente. Para obtener más información, consulta el comando [`gh alias`](https://cli.github.com/manual/gh_alias).

- Crea o agrega comandos personalizados con las extensiones de {% data variables.product.prodname_cli %}. Para obtener más información, consulta las seciones "[Utilizar las extensiones del {% data variables.product.prodname_cli %}](/github-cli/github-cli/using-github-cli-extensions)" y "[Crear extensiones del {% data variables.product.prodname_cli %}](/github-cli/github-cli/creating-github-cli-extensions)".

- Para obtener más información sobre todos los comandos que puedes ejecutar con el {% data variables.product.prodname_cli %}, consulta la sección "[referencia del {% data variables.product.prodname_cli %}](/github-cli/github-cli/github-cli-reference)".
