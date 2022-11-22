---
ms.openlocfilehash: 982b04961e4f780a5f1e284dad5620157f68569b
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161062"
---
Für die unterstützten kompilierten Sprachen kannst du den Code mithilfe der `autobuild`-Aktion im {% data variables.code-scanning.codeql_workflow %} erstellen. So wird vermieden, dass du explizite Buildbefehle für C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} und Java angeben musst.