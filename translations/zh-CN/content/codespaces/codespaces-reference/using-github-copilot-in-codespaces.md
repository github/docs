---
title: 在 Codespaces 中使用 GitHub Copilot
intro: 您可以通过添加扩展在 Codespaces 中使用 Copilot。
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
  - Copilot
  - Visual Studio Code
product: '{% data reusables.gated-features.codespaces %}'
shortTitle: Codespaces 中的 Copilot
redirect_from:
  - /codespaces/codespaces-reference/using-copilot-in-codespaces
---

## 使用 {% data variables.product.prodname_copilot %}

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) 是 AI 对编程工具，可用于任何代码空间。 To start using {% data variables.product.prodname_copilot_short %} in {% data variables.product.prodname_codespaces %}, install the [{% data variables.product.prodname_copilot_short %} extension from the {% data variables.product.prodname_vscode_marketplace %}](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot).

要在所有代码空间中包含 {% data variables.product.prodname_copilot_short %} 或其他扩展，请启用“设置同步”。 更多信息请参阅“[为帐户个性化 {% data variables.product.prodname_codespaces %}](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)”。 此外，要在所有用户的给定项目中包含 {% data variables.product.prodname_copilot_short %}，可以在 `devcontainer.json` 文件中指定 `GitHub.copilot` 作为扩展名。 有关配置 `devcontainer.json` 文件的信息，请参阅“[开发容器简介](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)”。

