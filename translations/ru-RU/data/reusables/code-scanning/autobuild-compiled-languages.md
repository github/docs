---
ms.openlocfilehash: 81bb084ee5dcb540c77b4a7b55c67890bab2d47a
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182293"
---
Для поддерживаемых скомпилированных языков можно использовать `autobuild` действие в {% data variables.code-scanning.codeql_workflow %} для сборки кода. Это позволяет избежать необходимости указывать явные команды сборки для C/C++, C#, {% ifversion codeql-go-autobuild %} Go,{% endif %}{% ifversion codeql-kotlin-beta %} Kotlin, {% endif %} и Java.