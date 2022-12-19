---
title: Acerca del examen de código con CodeQL
shortTitle: Code scanning with CodeQL
intro: 'Puedes utilizar {% data variables.product.prodname_codeql %} para identificar las vulnerabilidades y errores en tu código. Los resultados se muestran como alertas del {% data variables.product.prodname_code_scanning %} en {% data variables.product.prodname_dotcom %}.'
product: '{% data reusables.gated-features.code-scanning %}'
redirect_from:
  - /code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/about-code-scanning-with-codeql
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: overview
topics:
  - Advanced Security
  - Code scanning
  - CodeQL
ms.openlocfilehash: 41531627f73e7878cfa5667560b61cd4e21d20b7
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147052180'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de {% data variables.product.prodname_code_scanning %} con {% data variables.product.prodname_codeql %}

{% data reusables.code-scanning.about-codeql-analysis %}

Hay dos formas principales para utilizar el análisis de {% data variables.product.prodname_codeql %} para el {% data variables.product.prodname_code_scanning %}:

- Agregar el flujo de trabajo de {% data variables.product.prodname_codeql %} a tu repositorio. Se usa la acción [github/codeql-action](https://github.com/github/codeql-action/) para ejecutar la {% data variables.product.prodname_codeql_cli %}. Para obtener más información, consulte "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/setting-up-code-scanning-for-a-repository#setting-up-code-scanning-using-actions)".
- Ejecutar el CLI de {% data variables.product.prodname_codeql %} directamente en un sistema de IC externo y cargar los resultados en {% data variables.product.prodname_dotcom %}. Para obtener más información, consulte "[Acerca del análisis de código de {% data variables.product.prodname_codeql %} en el sistema de CI](/code-security/secure-coding/using-codeql-code-scanning-with-your-existing-ci-system/about-codeql-code-scanning-in-your-ci-system)".

{% ifversion ghes or ghae %}

{% note %} En {% data variables.product.product_name %} {% ifversion ghes %}{{ allVersions[currentVersion].currentRelease }},{% endif %} la acción {% data variables.product.prodname_codeql %} utiliza la versión de {% data variables.product.prodname_codeql_cli %} {% data variables.product.codeql_cli_ghes_recommended_version %} de forma predeterminada. Se recomienda usar la misma versión de {% data variables.product.prodname_codeql_cli %} si ejecutas análisis en un sistema de CI externo.
{% endnote %}

{% endif %}


## Acerca de {% data variables.product.prodname_codeql %}

El {% data variables.product.prodname_codeql %} trata el código como datos, permitiéndote encontrar vulnerabilidades potenciales en tu código con mayor confianza que los analizadores estáticos tradicionales.

1. Generas una base de datos de {% data variables.product.prodname_codeql %} para representar tu base de código.
2. Entonces, ejecutarás consultas de {% data variables.product.prodname_codeql %} en esa base de datos para identificar problemas en la base de código.
3. Estos resultados de consulta se muestran como alertas del {% data variables.product.prodname_code_scanning %} en {% data variables.product.product_name %} cuando utilizas al {% data variables.product.prodname_codeql %} con el {% data variables.product.prodname_code_scanning %}.

{% data variables.product.prodname_codeql %} es compatible tanto con lenguajes compilados como interpretados, y puede buscar vulnerabilidades y errores en el código escrito en los lenguajes compatibles.

{% data reusables.code-scanning.codeql-languages-bullets %}

## Acerca de las consultas de {% data variables.product.prodname_codeql %}

Los expertos de {% data variables.product.company_short %}, investigadores de seguridad y contribuyentes comunitarios escriben y mantienen las consultas predeterminadas de {% data variables.product.prodname_codeql %} que se utilizan para el {% data variables.product.prodname_code_scanning %}. Las consultas se actualizan frecuentemente para mejorar el análisis y reducir cualquier resultado falso positivo. Las consultas son código abierto, por lo que puede ver y contribuir en ellas en el repositorio de [`github/codeql`](https://github.com/github/codeql). Para obtener más información, consulte [{% data variables.product.prodname_codeql %}](https://codeql.github.com/) en el sitio web de {% data variables.product.prodname_codeql %}. También puede escribir consultas propias. Para obtener más información, consulte "[Acerca de las consultas de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/writing-codeql-queries/about-codeql-queries/)" en la documentación de {% data variables.product.prodname_codeql %}.

Puedes ejecutar consultas adicionales como parte de tu análisis de escaneo de código. 

{%- ifversion codeql-packs %} Estas consultas deben pertenecer a un paquete de consultas (beta) de {% data variables.product.prodname_codeql %} publicado o un paquete de QL en un repositorio. Los paquetes de {% data variables.product.prodname_codeql %} (beta) proporcionan los siguientes beneficios sobre los paquetes tradicionales de QL:

- Cuando un paquete de consultas de {% data variables.product.prodname_codeql %} (beta) se publica en el {% data variables.product.prodname_container_registry %} de {% data variables.product.company_short %}, todas las dependencias transitivas que requieren las consultas y un caché de compilación se incluyen en el paquete. Esto mejora el rendimiento y garantiza que el ejecutar las consultas del paquete proporciona resultados idénticos cada vez que actualizas a una versión nueva del paquete o de CLI. 
- Los paquetes de QL no incluyen las dependencias transitivas, así que las consultas del paquete pueden depender únicamente de las librerías estándar (esto es, librerías a las que se hace referencia mediante una instrucción `import LANGUAGE` en la consulta) o en las librerías del mismo paquete de QL que la consulta.

Para obtener más información, consulte "[Acerca de los paquetes de {% data variables.product.prodname_codeql %}](https://codeql.github.com/docs/codeql-cli/about-codeql-packs/) y ["Acerca de los paquetes de {% data variables.product.prodname_ql %} packs](https://codeql.github.com/docs/codeql-cli/about-ql-packs/) en la documentación de {% data variables.product.prodname_codeql %}.

{% data reusables.code-scanning.beta-codeql-packs-cli %}

{%- else %} Estas consultas que desea ejecutar deben pertenecer al paquete de QL de un repositorio. Las consultas solo pueden depender de las librerías estándar (es decir, aquellas a las que hace referencia una instrucción `import LANGUAGE` en la consulta), o de aquellas en el mismo paquete de QL que la consulta. Para obtener más información, consulte ["Acerca de los paquetes de {% data variables.product.prodname_ql %}](https://codeql.github.com/docs/codeql-cli/about-ql-packs/)".
{% endif %}
