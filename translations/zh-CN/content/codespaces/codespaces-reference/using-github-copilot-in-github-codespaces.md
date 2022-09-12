---
title: 在 GitHub Codespaces 中使用 GitHub Copilot
intro: '可以通过添加扩展在 {% data variables.product.prodname_github_codespaces %} 中使用 Copilot。'
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
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111463'
---
## 使用 {% data variables.product.prodname_copilot %}

[{% data variables.product.prodname_copilot %}](https://copilot.github.com/) 是 AI 结对程序员，可用于任何 codespace。 若要开始在 {% data variables.product.prodname_github_codespaces %} 中使用 {% data variables.product.prodname_copilot_short %}，请安装 [{% data variables.product.prodname_vscode_marketplace %} 中的 {% data variables.product.prodname_copilot_short %} 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot)。

若要在所有 codespace 中包含 {% data variables.product.prodname_copilot_short %} 或其他扩展，请启用“设置同步”。有关详细信息，请参阅“[为帐户个性化 {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account#settings-sync)”。 此外，若要在所有用户的给定项目中加入 {% data variables.product.prodname_copilot_short %}，可以将 `GitHub.copilot` 指定为 `devcontainer.json` 文件中的扩展。 有关配置 `devcontainer.json` 文件的信息，请参阅“[开发容器简介](/codespaces/customizing-your-codespace/configuring-codespaces-for-your-project#creating-a-custom-dev-container-configuration)”。

