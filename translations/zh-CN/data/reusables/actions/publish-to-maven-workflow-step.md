---
ms.openlocfilehash: e61b98fb2e2ad39bf3e17b058b401a6fdb967836
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145084879"
---
运行 `mvn --batch-mode deploy` 命令以发布到 `ossrh` 存储库。 `MAVEN_USERNAME` 环境变量将使用 `OSSRH_USERNAME` 机密的内容进行设置，`MAVEN_PASSWORD` 环境变量将使用 `OSSRH_TOKEN` 机密的内容进行设置。
