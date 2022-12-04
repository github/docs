---
ms.openlocfilehash: 71aea4a0d9c72885e56e7aef5a20b36bf817fec5
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159475"
---
### 自定义存储库的 codespace

可以通过创建或更新存储库的开发容器配置来自定义为存储库创建的 codespace。 可以从 codespace 中执行此操作。 更改开发容器配置后，可以通过为 codespace 重新生成 Docker 容器来将更改应用于当前 codespace。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

### 个性化代码空间

可以使用 [dotfiles](https://dotfiles.github.io/tutorials/) 存储库和[设置同步](https://code.visualstudio.com/docs/editor/settings-sync)为创建的任何 codespace 个性化 codespace 环境的各个方面。 个性化可以包括 shell 首选项和其他工具。 有关详细信息，请参阅“[为帐户设置个性化的 {% data variables.product.prodname_codespaces %}](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)”。

### 从代码空间运行应用程序
{% data reusables.codespaces.about-port-forwarding %} 有关详细信息，请参阅“[转发 codespace 中的端口](/github/developing-online-with-codespaces/forwarding-ports-in-your-codespace)”。

### 提交更改

{% data reusables.codespaces.committing-link-to-procedure %} 

### 使用 {% data variables.product.prodname_vscode_command_palette %}

{% data variables.product.prodname_vscode_command_palette %} 允许你访问和管理 {% data variables.product.prodname_codespaces %} 和 {% data variables.product.prodname_vscode %} 的许多功能。 有关详细信息，请参阅“[在 {% data variables.product.prodname_codespaces %} 中使用 {% data variables.product.prodname_vscode_command_palette %}](/codespaces/codespaces-reference/using-the-vs-code-command-palette-in-codespaces)”。