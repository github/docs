---
ms.openlocfilehash: 23a47438a4b4091ec5034671fa226eff68a08ef6
ms.sourcegitcommit: 80842b4e4c500daa051eff0ccd7cde91c2d4bb36
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/12/2022
ms.locfileid: "147079552"
---
使用依赖项提交 API，可以提交项目的依赖项。 这使你可以将依赖项（如编译或生成软件时解析的依赖项）添加到 {% data variables.product.prodname_dotcom %} 的依赖项关系图功能，从而更全面地了解项目的所有依赖项。

依赖项关系图显示你使用 API 提交的任何依赖项，以及从存储库中的清单或锁定文件（例如 `package-lock.json` JavaScript 项目中的文件）标识的任何依赖项。 若要详细了解如何查看依赖项关系图，请参阅“[探索存储库的依赖项](/code-security/supply-chain-security/understanding-your-software-supply-chain/exploring-the-dependencies-of-a-repository#viewing-the-dependency-graph)”。 

提交的依赖项将收到 {% data variables.product.prodname_dependabot_alerts %} 和 {% data variables.product.prodname_dependabot_security_updates %} 以处理任何已知的漏洞。 你只会收到来自 {% data variables.product.prodname_advisory_database %} [支持的生态系统](https://github.com/github/advisory-database#supported-ecosystems)之一的依赖项的 {% data variables.product.prodname_dependabot_alerts %}。 提交的依赖项将不会显示在依赖项评审或组织的依赖项见解中。
