---
ms.openlocfilehash: cdfdf5507dd2c7efa14e7285cc2b18f163d5355d
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "147062408"
---
运行 `mvn --batch-mode deploy` 命令以发布到 {% data variables.product.prodname_registry %}。 `GITHUB_TOKEN` 环境变量将使用 `GITHUB_TOKEN` 机密的内容进行设置。 `permissions` 键指定了对 `GITHUB_TOKEN` 授予的访问权限。
