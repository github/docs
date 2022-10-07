---
title: Using GitHub Copilot in GitHub Codespaces
intro: 'You can use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_github_codespaces %} by adding the extension.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
---

## Using {% data variables.product.prodname_copilot %}

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/), an AI pair programmer, can be used in any codespace. To start using {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_github_codespaces %}, install the [{% data variables.product.prodname_copilot %} extension from the {% data variables.product.prodname_vscode_marketplace %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot). For more information about {% data variables.product.prodname_copilot %} setup and usage, see the [{% data variables.product.prodname_copilot %} documentation](/copilot).

To include {% data variables.product.prodname_copilot %}, or other extensions, in all of your codespaces, enable Settings Sync. For more information, see "[Personalizing {% data variables.product.prodname_github_codespaces %} for your account](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)." Additionally, to include {% data variables.product.prodname_copilot %} in a given project for all users, you can specify `GitHub.copilot` as an extension in your `devcontainer.json` file. For information about configuring a `devcontainer.json` file, see "[Introduction to dev containers](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)."

