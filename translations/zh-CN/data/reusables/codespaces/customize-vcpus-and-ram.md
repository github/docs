---
ms.openlocfilehash: 5f6285fe19915c3962b43cb45a26e65144607788
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062400"
---
可以通过调整 vCPU 和 RAM 的数量、[添加点文件来个性化环境](/codespaces/setting-up-your-codespace/personalizing-codespaces-for-your-account)或通过修改已安装的工具和脚本来自定义 codespace。

{% data variables.product.prodname_codespaces %} 使用名为 `devcontainer.json` 的文件来配置在 codespace 中使用的开发容器。 每个存储库可以包含一个或多个 `devcontainer.json` 文件，以便准确提供在 codespace 中处理代码所需的开发环境。 

启动时，{% data variables.product.prodname_codespaces %} 使用 `devcontainer.json` 文件以及构成开发容器配置的任何依赖文件来安装工具和运行时，以及执行项目所需的其他安装任务。 有关详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-codespace/configuring-codespaces-for-your-project)”。
