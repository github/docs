---
title: 在代码空间中开发
intro: '您可以在 {% data variables.product.product_name %} 上打开代码空间，然后使用 {% data variables.product.prodname_vscode %} 的功能进行开发。'
product: '{% data reusables.gated-features.codespaces %}'
redirect_from:
  - /github/developing-online-with-github-codespaces/developing-in-a-codespace
  - /github/developing-online-with-codespaces/developing-in-a-codespace
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - Fundamentals
  - Developer
shortTitle: Develop in a codespace
ms.openlocfilehash: 70b7b5b91e68b80033edd59ae3a7826e0e2ee25f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147614349'
---
## 关于使用 {% data variables.product.prodname_github_codespaces %} 进行开发

{% data variables.product.prodname_github_codespaces %} 为你提供完整的 {% data variables.product.prodname_vscode %} 开发体验。 {% data reusables.codespaces.use-visual-studio-features %}

{% data reusables.codespaces.links-to-get-started %}

![带注释的代码空间概述](/assets/images/help/codespaces/codespace-overview-annotated.png)

1. 侧栏 - 默认情况下，此区域显示您在资源管理器中的项目文件。
2. 活动栏 - 显示视图并提供在视图之间切换的方法。 您可以通过拖放来重新排列视图。
3. 编辑器 - 这是您编辑文件的地方。 您可以使用每个编辑器的选项卡将其准确定位到您需要的位置。
4. 面板 - 这是您可以查看输出和调试信息的位置，以及集成终端的默认位置。
5. 状态栏 - 此区域提供有关您的代码空间和项目的有用信息。 例如，分支名称、配置端口等。

有关使用 {% data variables.product.prodname_vscode_shortname %} 的详细信息，请参阅 {% data variables.product.prodname_vscode_shortname %} 文档中的[用户界面指南](https://code.visualstudio.com/docs/getstarted/userinterface)。

{% data reusables.codespaces.connect-to-codespace-from-vscode %}

{% data reusables.codespaces.use-chrome %} 有关详细信息，请参阅“[对 Codespaces 客户端进行故障排除](/codespaces/troubleshooting/troubleshooting-codespaces-clients)”。

### 个性化代码空间

{% data reusables.codespaces.about-personalization %} 有关详细信息，请参阅“[为帐户设置个性化的 {% data variables.product.prodname_github_codespaces %}](/codespaces/customizing-your-codespace/personalizing-github-codespaces-for-your-account)”。

{% data reusables.codespaces.apply-devcontainer-changes %} 有关详细信息，请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)”。

### 从代码空间运行应用程序
{% data reusables.codespaces.about-port-forwarding %} 有关详细信息，请参阅“[转发 codespace 中的端口](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)”。

### 提交更改

{% data reusables.codespaces.committing-link-to-procedure %} 

### 使用 {% data variables.product.prodname_vscode_command_palette %}

{% data variables.product.prodname_vscode_command_palette %} 允许你访问和管理 {% data variables.product.prodname_codespaces %} 和 {% data variables.product.prodname_vscode_shortname %} 的许多功能。 有关详细信息，请参阅“[在 {% data variables.product.prodname_codespaces %} 中使用 {% data variables.product.prodname_vscode_command_palette_shortname %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)”。

## 导航到现有代码空间

1. {% data reusables.codespaces.you-can-see-all-your-codespaces %}
2. 单击您要在其中开发的代码空间的名称。
  ![Codespace 的名称](/assets/images/help/codespaces/click-name-codespace.png)

或者，你可以通过导航到创建 codespace 的存储库并选择 {% octicon "code" aria-label="The code icon" %} 代码来查看存储库的任何活动 codespace。 下拉菜单将显示仓库的所有活动代码空间。
