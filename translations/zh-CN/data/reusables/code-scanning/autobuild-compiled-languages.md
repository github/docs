---
ms.openlocfilehash: 982b04961e4f780a5f1e284dad5620157f68569b
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161060"
---
对于受支持的编译语言，你可使用 {% data variables.code-scanning.codeql_workflow %} 中的 `autobuild` 操作来生成代码。 这样就无需为 C/C++、C#、{% ifversion codeql-go-autobuild %}Go{% endif %} 和 Java 指定显式生成命令。