---
ms.openlocfilehash: 0ee285efb8b386c47d2782151fdf6a2bb24589fc
ms.sourcegitcommit: 5b1461b419dbef60ae9dbdf8e905a4df30fc91b7
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "147876168"
---
1. 要开始复制数据存储，请使用 `ghe-repl-start` 命令。
  ```shell
  $ ghe-repl-start
  ```
    {% warning %}

    警告：`ghe-repl-start` 会导致主服务器短暂中断，在此期间用户可能会看到内部服务器错误。 要提供更简便的消息，请先在主节点上运行 `ghe-maintenance -s`，然后再在副本节点上运行 `ghe-repl-start`，以将设备置于维护模式。 复制开始后，使用 `ghe-maintenance -u` 禁用维护模式。 当主节点处于维护模式时，Git 复制将无法进行。

    {% endwarning %}
