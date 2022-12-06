---
title: 设置 GitHub Codespaces 的默认编辑器
shortTitle: Set the default editor
intro: '{% data reusables.codespaces.about-changing-default-editor %}'
versions:
  fpt: '*'
  ghec: '*'
redirect_from:
  - /codespaces/managing-your-codespaces/setting-your-default-editor-for-codespaces
  - /codespaces/customizing-your-codespace/setting-your-default-editor-for-codespaces
topics:
  - Codespaces
type: how_to
ms.openlocfilehash: 5c286ffe8f96d275dc0b20949a87b7ced411c9af
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: '148159443'
---
在“设置”页上，可以设置编辑器首选项，以便在创建 codespace 或打开现有 codespace 时，它会在所选的以下选项中打开：
* {% data variables.product.prodname_vscode %}（桌面应用程序）
* {% data variables.product.prodname_vscode %}（Web 客户端应用程序）
* JetBrains 网关 - 用于在 JetBrains IDE 中打开 codespace
* JupyterLab - Project Jupyter 的 Web 接口 

{% data reusables.codespaces.template-codespaces-default-editor %}

如果要将 {% data variables.product.prodname_vscode %} 用作 {% data variables.product.prodname_github_codespaces %} 的默认编辑器，则需要安装 {% data variables.product.prodname_vscode %} 和 {% data variables.product.prodname_vscode %} 的 {% data variables.product.prodname_github_codespaces %} 扩展。 有关详细信息，请参阅 [{% data variables.product.prodname_vscode %} 的下载页](https://code.visualstudio.com/download/)和 [{% data variables.product.prodname_vscode %} 市场中的 {% data variables.product.prodname_github_codespaces %} 扩展](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)。

如果要在 JetBrains IDE 中使用 codespace，则必须安装 JetBrains 网关。 有关详细信息，请参阅“[在 JetBrains IDE 中使用 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)”。

## 设置默认编辑器

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.codespaces-tab %}
1. 在“Editor preference（编辑器首选项）”下，选择所需的选项。

   ![设置编辑器](/assets/images/help/codespaces/select-default-editor.png)

   * {% data reusables.codespaces.application-installed-locally %}<br><br>

   * 如果选择“{% data variables.product.prodname_vscode %}”，在下次创建或打开 codespace 时，{% data variables.product.prodname_github_codespaces %} 将自动在桌面应用程序中打开。 

     您可能需要同时允许访问浏览器和 {% data variables.product.prodname_vscode %} 才能成功打开。<br><br>
     
   * 如果选择“JetBrains 网关”，则下次创建或打开 codespace 时，网关应用程序将自动打开。 

     首次以这种方式打开 codespace 时，必须授予打开该应用程序的权限。 

     网关应用程序将打开，然后会自动选择 codespace。 然后，可以选择 JetBrains IDE（如果之前没有选择），然后单击“连接”在 JetBrains 客户端中打开 codespace。 有关详细信息，请参阅“[在 JetBrains IDE 中使用 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-your-jetbrains-ide)”。
     
     若要从网关应用程序连接到 codespace，必须在 codespace 上运行 SSH 服务器。 {% indented_data_reference reusables.codespaces.ssh-server-installed spaces=5 %}

   * 如果选择“JupyterLab”，则必须在打开的 codespace 中安装 JupyterLab 应用程序。 {% data reusables.codespaces.jupyterlab-in-default-image %}
