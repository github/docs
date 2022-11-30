---
ms.openlocfilehash: a697342c2435c479a3309cfb4619c15d4521098e
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161220"
---
De modo geral, você não precisa editar o fluxo de trabalho padrão para {% data variables.product.prodname_code_scanning %}. No entanto, se necessário, você editar o fluxo de trabalho para personalizar algumas das configurações. Por exemplo, você pode editar o {% data variables.code-scanning.codeql_workflow %} do {% data variables.product.prodname_dotcom %} para especificar a frequência das verificações, as linguagens ou os diretórios a serem verificados e o que é procurado pela {% data variables.product.prodname_code_scanning %} do {% data variables.product.prodname_codeql %} no código. Talvez você precise editar o {% data variables.code-scanning.codeql_workflow %} caso use um conjunto específico de comandos para compilar o código.
