---
title: Using GitHub Copilot in GitHub Codespaces
intro: 'You can use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_github_codespaces %} by adding a VS Code extension.'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
shortTitle: Copilot in Codespaces
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-codespaces
  - /codespaces/codespaces-reference/using-github-copilot-in-github-codespaces
---

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) is an AI pair programmer that you can use in any codespace that you open in the {% data variables.product.prodname_vscode_shortname %} web client or desktop application. For more information about {% data variables.product.prodname_copilot %}, see "[AUTOTITLE](/copilot/overview-of-github-copilot/about-github-copilot-for-individuals)."

To start using {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_github_codespaces %}, install the [{% data variables.product.prodname_copilot %} extension from the {% data variables.product.prodname_vscode_marketplace %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot).

To include {% data variables.product.prodname_copilot %}, or other extensions, in all of your codespaces, enable Settings Sync. For more information, see "[AUTOTITLE](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)." Additionally, to include {% data variables.product.prodname_copilot %} in a given project for all users, you can specify `GitHub.copilot` as an extension in your `devcontainer.json` file. For information about configuring a `devcontainer.json` file, see "[AUTOTITLE](/codespaces/setting-up-your-project-for-codespaces/adding-a-dev-container-configuration/introduction-to-dev-containers#creating-a-custom-dev-container-configuration)."

## Further reading

- "[AUTOTITLE](/copilot/getting-started-with-github-copilot?tool=vscode)"
