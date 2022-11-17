---
ms.openlocfilehash: 982b04961e4f780a5f1e284dad5620157f68569b
ms.sourcegitcommit: b617c4a7a1e4bf2de3987a86e0eb217d7031490f
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/11/2022
ms.locfileid: "148161065"
---
Для поддерживаемых скомпилированных языков можно использовать `autobuild` действие в {% data variables.code-scanning.codeql_workflow %} для сборки кода. Это позволяет избежать необходимости указывать явные команды сборки для C/C++, C#,{% ifversion codeql-go-autobuild %} Go,{% endif %} и Java.