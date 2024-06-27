---
title: Using GitHub Copilot in the command line
intro: 'You can use {% data variables.product.prodname_copilot_short %} with the {% data variables.product.prodname_cli %} to get suggestions and explanations for the command line.'
versions:
  feature: copilot-in-the-cli
topics:
  - Copilot
  - CLI
shortTitle: Use Copilot in the CLI
redirect_from:
  - /copilot/github-copilot-in-the-cli/using-github-copilot-in-the-cli
  - /copilot/using-github-copilot/using-github-copilot-in-the-cli
---

## Prerequisites

* **Access to {% data variables.product.prodname_copilot %}**. See "[AUTOTITLE](/copilot/about-github-copilot#getting-access-to-github-copilot)."
* **{% data variables.product.prodname_cli %} installed**. {% data reusables.cli.cli-installation %}
* **{% data variables.product.prodname_copilot_cli_short %} extension installed**. See "[AUTOTITLE](/copilot/github-copilot-in-the-cli/installing-github-copilot-in-the-cli)."

If you have access to {% data variables.product.prodname_copilot %} via your organization or enterprise, you cannot use {% data variables.product.prodname_copilot_cli_short %} if your organization owner or enterprise administrator has disabled {% data variables.product.prodname_copilot_cli_short %}. See "[AUTOTITLE](/copilot/managing-copilot/managing-github-copilot-in-your-organization/managing-github-copilot-features-in-your-organization/managing-policies-for-copilot-in-your-organization)."

## Getting command explanations

To ask {% data variables.product.prodname_copilot_cli_short %} to explain a command, run `gh copilot explain` followed by the command that you want explained. For example:

```shell copy
gh copilot explain "sudo apt-get"
```

## Getting command suggestions

To ask {% data variables.product.prodname_copilot_cli_short %} to suggest a command, run `gh copilot suggest` followed by the command that you want. For example:

```shell copy
gh copilot suggest "Undo the last commit"
```

{% data variables.product.prodname_copilot_cli_short %} will start an interactive session to get more information about what you want.

If you choose the **Execute command** option after {% data variables.product.prodname_copilot_cli_short %} suggests a command, {% data variables.product.prodname_copilot_cli_short %} will copy the command to your clipboard and exit the interactive session. Then you can manually paste the command into your CLI.

If you want {% data variables.product.prodname_copilot_cli_short %} to be able to execute commands on your behalf, you must set up the `ghcs` alias. See "[AUTOTITLE](/copilot/github-copilot-in-the-cli/configuring-github-copilot-in-the-cli#setting-up-aliases)."

## Sharing feedback

To send feedback to {% data variables.product.company_short %} about the quality of a suggestion, select the **Rate response** option in {% data variables.product.prodname_copilot_cli_short %}.

You can also open an issue in the [{% data variables.product.prodname_copilot_cli_short %} extension repository](https://github.com/github/gh-copilot).

## Further reading

* [{% data variables.product.prodname_copilot_cli_short %} extension README](https://github.com/github/gh-copilot?tab=readme-ov-file)
* "[AUTOTITLE](/copilot/github-copilot-in-the-cli/configuring-github-copilot-in-the-cli)"
