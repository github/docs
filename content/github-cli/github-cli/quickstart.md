---
title: GitHub CLI quickstart
intro: 'Start using {% data variables.product.prodname_cli %} to work with {% data variables.product.company_short %} in the command line.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
topics:
  - CLI
type: overview
allowTitleToDifferFromFilename: true
shortTitle: Quickstart
---

## About {% data variables.product.prodname_cli %}

{% data reusables.cli.about-cli %}

## Getting started

1. [Install](https://github.com/cli/cli#installation) {% data variables.product.prodname_cli %} on macOS, Windows, or Linux.
1. In the command line, authenticate to {% data variables.product.company_short %}.

  ```shell
  gh auth login
  ```

  {% ifversion not fpt %}
  To authenticate to {% data variables.product.product_location %}, use the `--hostname` flag.

  ```shell
  gh auth login --hostname <em>hostname</em>
  ```

  {% endif %}
1. Start working with {% data variables.product.company_short %} in the command line. For example, find an issue to work on with `gh issue status` or `gh issue list --assignee @me`. Create a pull request with `gh pr create`. Review a pull request with `gh pr checkout`, `gh pr diff` and `gh pr review`.

## Next steps

- Tell {% data variables.product.prodname_cli %} which text editor to use for commands that open a text editor. For example, enter `gh config set editor "code -w"` to set your preferred text editor to {% data variables.product.prodname_vscode %}. For more information, see [`gh config set`](https://cli.github.com/manual/gh_config_set).

- Define aliases for commands that you commonly run. For example, if you run `gh alias set prd "pr create --draft"`, you will then be able to run `gh prd` to quickly open a draft pull request. For more information, see [`gh alias`](https://cli.github.com/manual/gh_alias).

- Create or add custom commands with {% data variables.product.prodname_cli %} extensions. For more information, see "[Using {% data variables.product.prodname_cli %} extensions](/github-cli/github-cli/using-github-cli-extensions)" and "[Creating {% data variables.product.prodname_cli %} extensions](/github-cli/github-cli/creating-github-cli-extensions)."

- For more information about all of the commands that you can run with {% data variables.product.prodname_cli %}, see "[{% data variables.product.prodname_cli %} reference](/github-cli/github-cli/github-cli-reference)."
