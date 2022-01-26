---
title: Using GitHub Copilot in Codespaces
intro: You can use Copilot in Codespaces by adding the extension.
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
---

## Uso de {% data variables.product.prodname_copilot %}

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/), an AI pair programmer, can be used in any codespace. Para comenzar a utilizar el {% data variables.product.prodname_copilot_short %} en {% data variables.product.prodname_codespaces %} instala la [extensión de {% data variables.product.prodname_copilot_short %} desde el mercado de {% data variables.product.prodname_vscode %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot).

To include {% data variables.product.prodname_copilot_short %}, or other extensions, in all of your codespaces, enable Settings Sync. Para obtener más información, consulta la sección "[Personalizar {% data variables.product.prodname_codespaces %} para tu cuenta](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)". Additionally, to include {% data variables.product.prodname_copilot_short %} in a given project for all users, you can specify `GitHub.copilot` as an extension in your `devcontainer.json` file. Para obtener más información sobre cómo configurar un archivo de `devcontainer.json`, consulta la sección "[Configurar {% data variables.product.prodname_codespaces %} para tu proyecto](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-codespace-configuration)".

