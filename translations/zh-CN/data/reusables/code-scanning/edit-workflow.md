---
ms.openlocfilehash: a697342c2435c479a3309cfb4619c15d4521098e
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161222"
---
一般情况下无需编辑 {% data variables.product.prodname_code_scanning %} 的默认工作流程。 但是，如果需要，您可以编辑工作流程以自定义某些设置。 例如，可以编辑 {% data variables.product.prodname_dotcom %} 的 {% data variables.code-scanning.codeql_workflow %} 来指定扫描频率、要扫描的语言或目录，以及 {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} 在代码中查找的内容。 如果使用一组特定的命令来编译代码，可能还需要编辑 {% data variables.code-scanning.codeql_workflow %}。
