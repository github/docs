---
ms.openlocfilehash: 982b04961e4f780a5f1e284dad5620157f68569b
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161059"
---
Para as linguagens compiladas compatíveis, use a ação `autobuild` no {% data variables.code-scanning.codeql_workflow %} para compilar o código. Isso evita que você precise especificar comandos de build explícitos para C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} e Java.