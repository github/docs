---
ms.openlocfilehash: 6581cf0b9a8c740d04e96d3049ff51e89f570666
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180875"
---
Las siguientes suites de consultas se compilan en el {% data variables.product.prodname_codeql %} del {% data variables.product.prodname_code_scanning %} y están disponibles para utilizarse.

{% data reusables.code-scanning.codeql-query-suites %}

Al especificar un conjunto de consultas, el motor de análisis de {% data variables.product.prodname_codeql %} ejecutará el conjunto de consultas predeterminado y todas las demás definidas en el conjunto de consultas adicional. {% ifversion codeql-ml-queries %}Los conjuntos de consultas `security-extended` y `security-and-quality` para JavaScript contienen consultas experimentales. Para más información, vea "[Acerca de las alertas de {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)".{% endif %}
