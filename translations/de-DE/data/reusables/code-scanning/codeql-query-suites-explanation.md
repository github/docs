---
ms.openlocfilehash: 6581cf0b9a8c740d04e96d3049ff51e89f570666
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: de-DE
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180871"
---
Die folgenden Abfragesuiten sind in {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} integriert und stehen zur Verwendung zur Verfügung.

{% data reusables.code-scanning.codeql-query-suites %}

Wenn du eine Abfragesuite angibst, wird das {% data variables.product.prodname_codeql %}-Analysemodul den Standardsatz von Abfragen und alle zusätzlichen Abfragen ausführen, die in der zusätzlichen Abfragesuite definiert sind. {% ifversion codeql-ml-queries %} Die `security-extended`- und `security-and-quality`-Abfragesuites für JavaScript enthalten experimentelle Abfragen. Weitere Informationen findest du unter [Informationen zu {% data variables.product.prodname_code_scanning %}-Warnungen](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts).{% endif %}
