---
ms.openlocfilehash: 81bb084ee5dcb540c77b4a7b55c67890bab2d47a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182287"
---
Para as linguagens compiladas compatíveis, use a ação `autobuild` no {% data variables.code-scanning.codeql_workflow %} para compilar o código. Com isso, você não precisa especificar comandos de compilação explícitos para C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %}{% ifversion codeql-kotlin-beta %} Kotlin{% endif %} e Java.