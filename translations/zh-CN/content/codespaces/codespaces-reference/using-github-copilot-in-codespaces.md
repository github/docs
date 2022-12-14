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
shortTitle: Copilot in Codespaces
redirect_from:
- /codespaces/codespaces-reference/using-copilot-in-codespaces
ms.openlocfilehash: 05e8779688b2136c7fd53a1cebd99fd75b531f2c
ms.sourcegitcommit: dc42bb4a4826b414751ffa9eed38962c3e3fea8e
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 07/13/2022
ms.locfileid: "145149338"
---
## <a name="using--data-variablesproductprodname_copilot-"></a>使用 {% data variables.product.prodname_copilot %}

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) 是 AI 结对程序员，可用于任何 codespace。 若要开始在 {% data variables.product.prodname_codespaces %} 中使用 {% data variables.product.prodname_copilot_short %}，请安装 [{% data variables.product.prodname_vscode_marketplace %} 市场中的 {% data variables.product.prodname_copilot_short %} 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)。

若要在所有 codespace 中包含 {% data variables.product.prodname_copilot_short %} 或其他扩展，请启用设置同步。有关详细信息，请参阅“[为帐户个性化 {% data variables.product.prodname_codespaces %}](/codespaces/customizing-your-codespace/personalizing-codespaces-for-your-account#settings-sync)”。 此外，若要在所有用户的给定项目中加入 {% data variables.product.prodname_copilot_short %}，可以将 `GitHub.copilot` 指定为 `devcontainer.json` 文件中的扩展。 有关配置 `devcontainer.json` 文件的信息，请参阅“[开发容器简介](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)”。

