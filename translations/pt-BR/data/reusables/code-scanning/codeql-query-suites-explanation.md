---
ms.openlocfilehash: 6581cf0b9a8c740d04e96d3049ff51e89f570666
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: pt-BR
ms.lasthandoff: 09/05/2022
ms.locfileid: "146180868"
---
Os conjuntos de consulta a seguir foram criados em {% data variables.product.prodname_codeql %} {% data variables.product.prodname_code_scanning %} e estão disponíveis para uso.

{% data reusables.code-scanning.codeql-query-suites %}

Quando você especificar um pacote de consultas, o mecanismo de análise do {% data variables.product.prodname_codeql %} executará o conjunto padrão de consultas e todas as consultas extras definidas no pacote de consultas adicionais. {% ifversion codeql-ml-queries %}Os pacotes de consultas `security-extended` e `security-and-quality` do JavaScript contêm consultas experimentais. Para obter mais informações, confira "[Sobre os alertas da {% data variables.product.prodname_code_scanning %}](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-alerts#about-experimental-alerts)".{% endif %}
