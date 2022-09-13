---
title: 设置 GitHub Codespaces 的默认编辑器
shortTitle: Set the default editor
intro: '您可以在个人设置页面中设置 {% data variables.product.prodname_codespaces %} 的默认编辑器。'
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 7cfc188cb265482ea9dd40f3fc653af870aa6982
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147111454'
---
在设置页面上，您可以设置编辑器首选项，以便在 Web 或 {% data variables.product.prodname_vscode %} 桌面应用程序的 {% data variables.product.prodname_vscode %} 中自动打开任何新创建的代码空间。

如果要将 {% data variables.product.prodname_vscode %} 用作 {% data variables.product.prodname_codespaces %} 的默认编辑器，则需要安装 {% data variables.product.prodname_vscode %} 和 {% data variables.product.prodname_vscode %} 的 {% data variables.product.prodname_github_codespaces %} 扩展。 有关详细信息，请参阅 [{% data variables.product.prodname_vscode %} 的下载页](https://code.visualstudio.com/download/)和 [{% data variables.product.prodname_vscode %} 市场中的 {% data variables.product.prodname_github_codespaces %} 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)。

## 设置默认编辑器

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“Editor preference（编辑器首选项）”下，选择所需的选项。
   ![设置编辑器](/assets/images/help/codespaces/select-default-editor.png) 如果选择 {% data variables.product.prodname_vscode %}，在下次创建 codespace 时，{% data variables.product.prodname_codespaces %} 将自动在桌面应用程序中打开。 您可能需要同时允许访问浏览器和 {% data variables.product.prodname_vscode %} 才能成功打开。
   ![设置编辑器](/assets/images/help/codespaces/launch-default-editor.png)
