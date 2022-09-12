---
title: GitHub Codespaces での GitHub Copilot の使用
intro: '拡張機能を追加することで、{% data variables.product.prodname_github_codespaces %} で Copilot を使用できます。'
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
ms.openlocfilehash: e31b0816a804ce9d7290bf1afd648631f3bb99a3
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111543'
---
## {% data variables.product.prodname_copilot %} の使用

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) (AI ペア プログラマー) は、任意の codespace で使用できます。 {% data variables.product.prodname_github_codespaces %} で {% data variables.product.prodname_copilot_short %} の使用を開始するには、[{% data variables.product.prodname_vscode_marketplace %} から {% data variables.product.prodname_copilot_short %} 拡張機能](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)をインストールします。

{% data variables.product.prodname_copilot_short %} またはその他の拡張機能をすべての codespace に含めるには、Settings Sync を有効にします。詳しくは、「[アカウントの {% data variables.product.prodname_github_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)」をご覧ください。 また、すべてのユーザーの特定のプロジェクトに {% data variables.product.prodname_copilot_short %} を含めるには、`devcontainer.json` ファイルで `GitHub.copilot` を拡張機能として指定できます。 `devcontainer.json` ファイルの構成については、「[開発コンテナーの概要](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)」を参照してください。

