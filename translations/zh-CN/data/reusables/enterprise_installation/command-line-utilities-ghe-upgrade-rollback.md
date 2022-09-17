---
ms.openlocfilehash: ea162bdacad3d8e4a85c343eb9c3c08afd2b9056
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145097819"
---
回滚升级时，必须使用一个带 .pkg 扩展的升级包文件。 不支持带 .hpkg 扩展的热补丁包文件。

```shell
ghe-upgrade --allow-patch-rollback <em>EARLIER-RELEASE-UPGRADE-PACKAGE</em>.pkg
```

运行命令后需要重启。 回滚不会影响数据分区，因为迁移不是在补丁版本上运行的。
