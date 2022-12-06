---
ms.openlocfilehash: d4d496d4b5c45f557d80aace29013b3b32e478c6
ms.sourcegitcommit: dac72908e8660cb4a347fbf73beab61034eed8c5
ms.translationtype: MT
ms.contentlocale: ru-RU
ms.lasthandoff: 11/25/2022
ms.locfileid: "148182277"
---
Если `autobuild` не удается или вы хотите проанализировать набор исходных файлов, отличный от созданных процессом `autobuild` , необходимо удалить `autobuild` этот шаг из рабочего процесса и вручную добавить шаги сборки. Для проектов C/C++, C#, Go, {% ifversion codeql-kotlin-beta %} Kotlin, {% endif %} и Java {% data variables.product.prodname_codeql %} проанализирует исходный код, созданный указанными шагами сборки.

