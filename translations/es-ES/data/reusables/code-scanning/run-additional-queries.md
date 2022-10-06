---
ms.openlocfilehash: b4da828ed2825e0f6aa8ced7a0f6b90067e9bfdb
ms.sourcegitcommit: 478f2931167988096ae6478a257f492ecaa11794
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/09/2022
ms.locfileid: "147717649"
---
Cuando utilizas {% data variables.product.prodname_codeql %} para escanear código, el motor de análisis de {% data variables.product.prodname_codeql %} genera una base de datos desde el código y ejecuta consultas en éste. El {% data variables.product.prodname_codeql %} utiliza un conjunto predeterminado de consultas, pero puedes especificar más consultas para que se ejecuten, adicionalmente a las predeterminadas.

{% ifversion code-scanning-exclude-queries-from-analysis %} {% tip %}

También puedes especificar las consultas que deseas excluir del análisis o incluirlas en el análisis. Esto requiere el uso de un archivo de configuración personalizado. Para obtener más información, consulta "[Uso de un archivo de configuración personalizado](#using-a-custom-configuration-file)" y "[Exclusión de consultas específicas del análisis](#excluding-specific-queries-from-analysis) " a continuación.

{% endtip %} {% endif %}

{% ifversion codeql-packs %} Puedes ejecutar consultas adicionales si son parte de un paquete {% data variables.product.prodname_codeql %} (beta) publicado en el {% data variables.product.company_short %} {% data variables.product.prodname_container_registry %} o de un paquete {% data variables.product.prodname_ql %} almacenado en un repositorio. Para más información, vea "[Acerca de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".

Las opciones disponibles para especificar las consultas adicionales que se quieren ejecutar son las siguientes:

- `packs` para instalar uno o más paquetes de consulta de {% data variables.product.prodname_codeql %} (beta) y ejecutar el conjunto de consultas predeterminado o las consultas para estos paquetes.
- `queries` para especificar un único archivo _.ql_, un directorio con varios archivos _.ql_, un archivo de definición de conjunto de consultas _.qls_ o cualquier combinación. Para más información sobre las definiciones de conjunto de consultas, vea "[Creación de conjuntos de consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".

Puede usar `packs` y `queries` en el mismo flujo de trabajo.
{% else %} Las consultas adicionales que quiera ejecutar deben pertenecer a un paquete de {% data variables.product.prodname_ql %} en un repositorio. Para más información, vea "[Acerca de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql#about-codeql-queries)".

Puede especificar un único archivo _.ql_, un directorio con varios archivos _.ql_, un archivo de definición de conjunto de consultas _.qls_ o cualquier combinación. Para más información sobre las definiciones de conjunto de consultas, vea "[Creación de conjuntos de consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/creating-codeql-query-suites/)".
{% endif %}

{% ifversion fpt or ghec %}No se recomienda hacer referencia a conjuntos de consultas directamente desde el repositorio `github/codeql`, como `github/codeql/cpp/ql/src@main`. Estas consultas tendrían que volver a compilarse y es posible que no sean compatibles con la versión de {% data variables.product.prodname_codeql %} actualmente activa en {% data variables.product.prodname_actions %}, lo que podría provocar errores durante el análisis.{% endif %}
