---
ms.openlocfilehash: 0f47648322834fd8ec81dc4a975cdb8f92610a70
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: "145129875"
---
目前，{% data variables.product.prodname_dependabot_version_updates %} 不支持包含任何私有 git 依赖项或私有 git 注册表的清单或锁定文件。 这是因为，在运行版本更新时，{% data variables.product.prodname_dependabot %} 必须能够解决来自其源的所有依赖项，以验证版本更新是否成功。
