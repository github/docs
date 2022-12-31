---
title: codespace での GitHub Copilot の使用
intro: Codespaces で Copilot を使うには、拡張機能を追加します。
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
ms.openlocfilehash: 05e8779688b2136c7fd53a1cebd99fd75b531f2c
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149341"
---
## <a name="using--data-variablesproductprodname_copilot-"></a>{% data variables.product.prodname_copilot %} の使用

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) (AI ペア プログラマー) は、任意の codespace で使用できます。 {% data variables.product.prodname_codespaces %} で {% data variables.product.prodname_copilot_short %} の使用を開始するには、[{% data variables.product.prodname_vscode_marketplace %} から {% data variables.product.prodname_copilot_short %} 拡張機能を](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)インストールします。

{% data variables.product.prodname_copilot_short %} またはその他の拡張機能をすべての codespace に含めるには、Settings Sync を有効にします。詳細については、「[アカウントの {% data variables.product.prodname_codespaces %} をパーソナライズする](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)」を参照してください。 また、すべてのユーザーの特定のプロジェクトに {% data variables.product.prodname_copilot_short %} を含めるには、`devcontainer.json` ファイルで `GitHub.copilot` を拡張機能として指定できます。 `devcontainer.json` ファイルの構成については、「[開発コンテナーの概要](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)」を参照してください。

