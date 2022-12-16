---
ms.openlocfilehash: 81bb084ee5dcb540c77b4a7b55c67890bab2d47a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182288"
---
对于受支持的编译语言，你可使用 {% data variables.code-scanning.codeql_workflow %} 中的 `autobuild` 操作来生成代码。 这样就无需为 C/C++、C#、{% ifversion codeql-go-autobuild %}Go、{% endif %}{% ifversion codeql-kotlin-beta %}Kotlin {% endif %}和 Java 指定显式生成命令。