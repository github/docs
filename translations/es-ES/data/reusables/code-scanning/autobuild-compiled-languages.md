---
ms.openlocfilehash: 982b04961e4f780a5f1e284dad5620157f68569b
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161066"
---
Para los lenguajes compilados compatibles, puedes utilizar la acción `autobuild` en {% data variables.code-scanning.codeql_workflow %} para compilar tu código. Esto evita tener que especificar comandos de compilación explícitos para C/C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} y Java.