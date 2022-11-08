---
ms.openlocfilehash: ac8f5fdb0d982d1c9427a99719e4f2bdf50ba56b
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 10/25/2022
ms.locfileid: "148107906"
---
Para as linguagens compiladas compatíveis, use a ação `autobuild` no {% data variables.product.prodname_codeql_workflow %} para compilar o código. Isso evita que você precise especificar comandos de build explícitos para C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} e Java.