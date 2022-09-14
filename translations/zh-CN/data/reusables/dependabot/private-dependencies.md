---
ms.openlocfilehash: 0f47648322834fd8ec81dc4a975cdb8f92610a70
ms.sourcegitcommit: fcf3546b7cc208155fb8acdf68b81be28afc3d2d
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/10/2022
ms.locfileid: "145129875"
---
目前，{% data variables.product.prodname_dependabot_version_updates %} 不支持包含任何私有 git 依赖项或私有 git 注册表的清单或锁定文件。 这是因为，在运行版本更新时，{% data variables.product.prodname_dependabot %} 必须能够解决来自其源的所有依赖项，以验证版本更新是否成功。
