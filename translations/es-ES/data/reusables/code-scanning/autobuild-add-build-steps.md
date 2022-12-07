---
ms.openlocfilehash: d4d496d4b5c45f557d80aace29013b3b32e478c6
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182278"
---
Si se produce un error de `autobuild` o quiere analizar un conjunto diferente de archivos de origen de los compilados por el proceso `autobuild`, deberá quitar el paso `autobuild` del flujo de trabajo y agregar manualmente pasos de compilación. Para proyectos de C/C++, C#, Go,{% ifversion codeql-kotlin-beta %} Kotlin {% endif %} y Java, {% data variables.product.prodname_codeql %} analizará el código fuente que creen los pasos de compilación especificados.

