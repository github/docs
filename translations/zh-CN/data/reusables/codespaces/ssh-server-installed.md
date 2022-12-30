---
ms.openlocfilehash: 8c155db26d97e1f845638c790dd3cf1114eac47a
ms.sourcegitcommit: e8c012864f13f9146e53fcb0699e2928c949ffa8
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/09/2022
ms.locfileid: "148159521"
---
连接到的 codespace 必须运行 SSH 服务器。 默认容器映像包含一个可自动启动的 SSH 服务器。 如果未通过默认映像创建 codespace，可以通过将以下内容添加到 `devcontainer.json` 文件中的 `features` 对象来安装和启动 SSH 服务器。

```json
"features": {
    ...
    "ghcr.io/devcontainers/features/sshd:1": {
        "version": "latest"
    },
    ...
}
```