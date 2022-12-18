---
ms.openlocfilehash: 81bb084ee5dcb540c77b4a7b55c67890bab2d47a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182294"
---
Para los lenguajes compilados compatibles, puedes utilizar la acción `autobuild` en {% data variables.code-scanning.codeql_workflow %} para compilar tu código. Esto evita tener que especificar comandos de compilación explícitos para C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %}{% ifversion codeql-kotlin-beta %} Kotlin {% endif %} y Java.