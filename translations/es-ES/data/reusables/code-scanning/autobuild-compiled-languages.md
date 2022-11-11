---
ms.openlocfilehash: ac8f5fdb0d982d1c9427a99719e4f2bdf50ba56b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: "148109952"
---
Para los lenguajes compilados compatibles, puedes utilizar la acción `autobuild` en {% data variables.product.prodname_codeql_workflow %} para compilar tu código. Esto evita tener que especificar comandos de compilación explícitos para C/C++, C#,{% ifversion codeql-go-autobuild %} Go{% endif %} y Java.