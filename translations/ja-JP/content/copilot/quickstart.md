---
title: Quickstart for GitHub Copilot
intro: '{% data variables.product.prodname_copilot %} can help you work, by offering inline suggestions as you code.'
product: '{% data reusables.gated-features.copilot %}'
allowTitleToDifferFromFilename: true
versions:
  feature: copilot
shortTitle: クイックスタート
topics:
  - Copilot
---

## はじめに

{% data variables.product.prodname_copilot %} is an AI pair programmer. You can use {% data variables.product.prodname_copilot %} to get suggestions for whole lines or entire functions right inside your editor.

This guide will show you how to sign up for {% data variables.product.prodname_copilot %}, install the {% data variables.product.prodname_copilot %} extension in {% data variables.product.prodname_vscode %}, and get your first suggestion. For more information on {% data variables.product.prodname_copilot %}, see "[About {% data variables.product.prodname_copilot %}](/copilot/overview-of-github-copilot/about-github-copilot)." For more in-depth information on how to use {% data variables.product.prodname_copilot %} in a variety of environments, see "[Getting Started](/copilot/getting-started-with-github-copilot)."

## 必要な環境

{% data reusables.copilot.copilot-prerequisites %}
- To use {% data variables.product.prodname_copilot %} in {% data variables.product.prodname_vscode %}, you must have {% data variables.product.prodname_vscode %} installed. For more information, see the [{% data variables.product.prodname_vscode %}](https://code.visualstudio.com/) documentation.

## {% data variables.product.prodname_copilot %} へのサインアップ

{% data reusables.copilot.signup-procedure %}

## Installing the {% data variables.product.prodname_copilot %} extension for {% data variables.product.prodname_vscode %}

To use {% data variables.product.prodname_copilot %}, you must first install the {% data variables.product.prodname_vscode %} extension.

1. In the {% data variables.product.prodname_vscode %} Marketplace, go to the [{% data variables.product.prodname_copilot %} extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) page and click **Install**. ![Install {% data variables.product.prodname_copilot %} extension {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/install-copilot-extension-visual-studio-code.png)
1. A popup will appear, asking to open {% data variables.product.prodname_vscode %}. Click **Open {% data variables.product.prodname_vscode %}**.
1. In the "Extension: {% data variables.product.prodname_copilot %}" tab in {% data variables.product.prodname_vscode %}, click **Install**. ![Install button in {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/in-visual-studio-code-install-button.png)
1. If you have not previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, you will be prompted to sign in to {% data variables.product.prodname_dotcom %} in {% data variables.product.prodname_vscode %}.
   - If you have previously authorized {% data variables.product.prodname_vscode %} in your {% data variables.product.prodname_dotcom %} account, {% data variables.product.prodname_copilot %} will be automatically authorized. ![Screen shot of {% data variables.product.prodname_vscode %} authorization screen](/assets/images/help/copilot/vsc-copilot-authorize.png)
1. In your browser, {% data variables.product.prodname_dotcom %} will request the necessary permissions for {% data variables.product.prodname_copilot %}. To approve these permissions, click **Authorize {% data variables.product.prodname_vscode %}**.
1. In {% data variables.product.prodname_vscode %}, in the "{% data variables.product.prodname_vscode %}" dialogue box, to confirm the authentication, click **Open**.

## Getting your first suggestion

{% data reusables.copilot.supported-languages %} The following samples are in JavaScript, but other languages will work similarly.

1. Open {% data variables.product.prodname_vscode %}.
{% data reusables.copilot.create-js-file %}
{% data reusables.copilot.type-function-header %}
   {% data variables.product.prodname_copilot %} will automatically suggest an entire function body in grayed text, as shown below. The exact suggestion may vary.
   ![First suggestion {% data variables.product.prodname_vscode %}](/assets/images/help/copilot/first-suggestion-visual-studio-code.png)
{% data reusables.copilot.accept-suggestion %}

## 次のステップ

You successfully installed {% data variables.product.prodname_copilot %} and received your first suggestion, but that's just the beginning! {% data variables.product.prodname_copilot %} で次のステップを実行するための役立つリソースは以下のとおりです。

- [Getting Started](/copilot/getting-started-with-github-copilot): You've learned how to get your first suggestion in {% data variables.product.prodname_vscode %}. These guides show you how to set up and navigate the various functions of {% data variables.product.prodname_copilot %} across all of the supported environments.
- [{% data variables.product.prodname_copilot %}](https://copilot.github.com/): See practical examples of how {% data variables.product.prodname_copilot %} can help you work.
- [Configuring {% data variables.product.prodname_copilot %}](/copilot/configuring-github-copilot): These guides provide details on how to configure {% data variables.product.prodname_copilot %} to your personal preferences.


## 参考リンク

- [{% data variables.product.prodname_copilot %}について](/copilot/overview-of-github-copilot/about-github-copilot)
