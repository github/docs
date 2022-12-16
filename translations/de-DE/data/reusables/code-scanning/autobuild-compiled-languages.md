---
ms.openlocfilehash: 81bb084ee5dcb540c77b4a7b55c67890bab2d47a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182290"
---
Für die unterstützten kompilierten Sprachen kannst du den Code mithilfe der `autobuild`-Aktion im {% data variables.code-scanning.codeql_workflow %} erstellen. So wird vermieden, dass du explizite Buildbefehle für C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %}{% ifversion codeql-kotlin-beta %} Kotlin, {% endif %} und Java angeben musst.