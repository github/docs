---
title: Examen del código
intro: 'La API del {% data variables.product.prodname_code_scanning %} te permite recuperar y actualizar las alertas del {% data variables.product.prodname_code_scanning %} desde un repositorio.'
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
  - Code scanning
  - REST
miniTocMaxHeadingLevel: 3
redirect_from:
  - /rest/reference/code-scanning
ms.openlocfilehash: 29e04fddb96212e716f2f54b1b62e99fcff1e4da
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147061398'
---
{% data reusables.code-scanning.beta %}

## Acerca de la API de examen del código

La API del {% data variables.product.prodname_code_scanning %} te permite recuperar y actualizar las alertas del {% data variables.product.prodname_code_scanning %} desde un repositorio. Puedes utilizar las terminales para crear reportes automatizados para las alertas del {% data variables.product.prodname_code_scanning %} en una organización o cargar resutlados de análisis que se hayan generado utilizando con herramientas fuera de línea del {% data variables.product.prodname_code_scanning %}. Para más información, vea "[Búsqueda de vulnerabilidades de seguridad y errores en el código](/github/finding-security-vulnerabilities-and-errors-in-your-code)".

### Tipos de medios personalizados para el {% data variables.product.prodname_code_scanning %}

Hay un tipo de medios personalizado compatible para la API de REST del {% data variables.product.prodname_code_scanning %}. 

    application/sarif+json

Puede usar esto con solicitudes `GET` enviadas al punto de conexión `/analyses/{analysis_id}`. Para más información sobre esta operación, vea "[Obtención de un análisis de {% data variables.product.prodname_code_scanning %} para un repositorio](#get-a-code-scanning-analysis-for-a-repository)". Cuando se usa este tipo de medio con esta operación, la respuesta incluye un subconjunto de los datos reales que se cargaron para el análisis especificado, en lugar del resumen del análisis que se devuelve cuando se usa el tipo de medio predeterminado. La respuesta también incluye datos adicionales, como las propiedades `github/alertNumber` y `github/alertUrl`. El formato de los datos es [SARIF, versión 2.1.0](https://docs.oasis-open.org/sarif/sarif/v2.1.0/cs01/sarif-v2.1.0-cs01.html).

Para más información, vea "[Tipos de soporte físico](/rest/overview/media-types)".
