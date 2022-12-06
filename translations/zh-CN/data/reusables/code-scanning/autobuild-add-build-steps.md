---
ms.openlocfilehash: d4d496d4b5c45f557d80aace29013b3b32e478c6
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182272"
---
如果 `autobuild` 失败，或者你想要分析与 `autobuild` 进程生成的源文件不同的一组源文件，则需要从工作流中删除 `autobuild` 步骤，并手动添加生成步骤。 对于 C/C++、C#、Go、{% ifversion codeql-kotlin-beta %}Kotlin {% endif %}和 Java 项目，{% data variables.product.prodname_codeql %} 将分析由指定的生成步骤生成的任何源代码。

