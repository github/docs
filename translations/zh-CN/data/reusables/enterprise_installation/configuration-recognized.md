---
ms.openlocfilehash: 2fd5ca9c5a65bed4a656cb3fdbd37db7a23a9387
ms.sourcegitcommit: 5f9527483381cfb1e41f2322f67c80554750a47d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: "145097816"
---
1. 实例完全重启后即可访问，使用 SSH 管理 shell 可验证是否已识别新资源配置：
```shell
$ ssh -p 122 admin@<em>HOSTNAME</em>
$ ghe-system-info
```
