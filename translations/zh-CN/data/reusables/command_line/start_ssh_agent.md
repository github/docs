---
ms.openlocfilehash: a7d12084e7faee6e6b5f6aaec970a9f7a7fc1f17
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145129943"
---
1. 在后台启动 ssh 代理。 

    ```shell
    $ eval "$(ssh-agent -s)"
    > Agent pid 59566
    ```

    根据您的环境，您可能需要使用不同的命令。 例如，在启动 ssh-agent 之前，你可能需要通过运行 `sudo -s -H` 根访问，或者可能需要使用 `exec ssh-agent bash` 或 `exec ssh-agent zsh` 运行 ssh-agent。
