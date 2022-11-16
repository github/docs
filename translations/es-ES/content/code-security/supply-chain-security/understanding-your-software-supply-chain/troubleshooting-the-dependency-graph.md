---
title: Solución de problemas del gráfico de dependencias
intro: 'Si la información de la dependencia que se notifica en el gráfico de dependencias no es lo que esperabas, debes tener en cuenta varias cuestiones y comprobar diversos elementos.'
shortTitle: Troubleshoot dependency graph
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Troubleshooting
  - Errors
  - Dependencies
  - Vulnerabilities
  - Dependency graph
  - CVEs
  - Repositories
ms.openlocfilehash: 30c4830c125e9b20ada59e0e0e29fa0eb5c6c649
ms.sourcegitcommit: a9af58ef52d8d109186053d184d9b1e52e5f0323
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/02/2022
ms.locfileid: '148128908'
---
{% data reusables.dependabot.result-discrepancy %}

## ¿Acaso la gráfica de dependencias solo encuentra depedencias en los manifiestos y lockfiles?

El gráfico de dependencias incluye{% ifversion dependency-submission-api %} de forma automática{% endif %} información sobre las dependencias que se declaran explícitamente en el entorno. Esto es, dependencias que se especifican en un manifiesto o en un lockfile. La gráfica de dependencias también incluye dependencias transitivas generalmente, aún cuando no se especifican en un lockfile, mediante la revisión de las dependencias de las dependencias en un archivo de manifiesto.

El gráfico de dependencias no incluye{% ifversion dependency-submission-api %} de forma automática{% endif %} dependencias "sueltas". Las dependencias "sueltas" son archivos individuales que se copian de otra fuernte y se revisan directamente en el repositorio o dentro de un archivo (tal como un archivo ZIP o JAR) en ves de que se referencien en un manifiesto de paquete de administrador o en un lockfile. 

{% ifversion dependency-submission-api %}Aun así, puedes usar la API de envío de dependencias (beta) para agregar dependencias al gráfico de dependencias de un proyecto, incluso si las dependencias no se declaran en un archivo de manifiesto o de bloqueo, como las dependencias que se resuelven cuando se compila un proyecto. El gráfico de dependencias mostrará las dependencias enviadas agrupadas por ecosistema, pero por separado de las dependencias analizadas de los archivos de manifiesto o de bloqueo. Para obtener más información sobre la API de envío de dependencias, consulta "[Uso de la API de envío de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".{% endif %}

**Comprobación**: ¿La dependencia que falta es para un componente sin especificar en el manifiesto o archivo de bloqueo del repositorio?

## ¿Acaso la gráfica de dependencias detecta dependencias que se especifican utilizando variables?

La gráfica de dependencias analiza los manifiestos mientras se suben a {% data variables.product.prodname_dotcom %}. Por lo tanto, la gráfica de dependencias no tiene acceso al ambiente de compilación del proyecto, así que no puede resolver variables que se utilizan dentro de los manifiestos. Si usas variables dentro de un manifiesto para especificar el nombre, o más comúnmente la versión de una dependencia, dicha dependencia no se incluirá{% ifversion dependency-submission-api %} de forma automática{% endif %} en el gráfico de dependencias.

{% ifversion dependency-submission-api %}Aun así, puedes usar la API de envío de dependencias (beta) para agregar dependencias al gráfico de dependencias de un proyecto, incluso si las dependencias solo se resuelven cuando se compila un proyecto. Para obtener más información sobre la API de envío de dependencias, consulta "[Uso de la API de envío de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".{% endif %}

**Comprobación**: ¿Falta la dependencia declarada en el manifiesto mediante una variable para su nombre o versión?

## ¿Existen límites que afecten los datos de la gráfica de dependencias?

Sí, la gráfica de dependencias tiene dos categorías de límites:

1. **Límites de procesamiento**

    Estos afectan la gráfica de dependencias que se muestra dentro de {% data variables.product.prodname_dotcom %} y también previenen la creación de {% data variables.product.prodname_dependabot_alerts %}.

    Los manifiestos mayores a 0.5 MB solo se procesan para las cuentas empresariales. En el caso de otras cuentas, los manifiestos mayores a 0.5 MB se ingoran y no crearán {% data variables.product.prodname_dependabot_alerts %}.

    De manera predeterminada, {% data variables.product.prodname_dotcom %} no procesará más de {% ifversion fpt %}150{% else %}600{% endif %} manifiestos por repositorio. Las {% data variables.product.prodname_dependabot_alerts %} no se crean para los manifiestos más allá de este límite. Si necesitas incrementar el límite, contacta a {% data variables.contact.contact_support %}. 

2. **Límites de visualización**

    Estos afectan a lo que se muestra en la gráfica de dependencias dentro de {% data variables.product.prodname_dotcom %}. Sin embargo, estos no afectan las {% data variables.product.prodname_dependabot_alerts %} que se crean.

    La vista de dependencias de la gráfica de dependencias para un repositorio solo muestra 1000 manifiestos. Habitualmente, esto es tan adecuado como es significativamente más alto que el límite de procesamiento descrito anteriormente. En situaciones en donde le límite de procesamiento es mayor a 100, las {% data variables.product.prodname_dependabot_alerts %} se crearán aún para cualquier manifiesto que no se muestre dentro de {% data variables.product.prodname_dotcom %}.

**Comprobación**: ¿La dependencia que falta está en un archivo de manifiesto de más de 0,5 MB, o en un repositorio con una gran cantidad de manifiestos?

## Información adicional

- "[Acerca del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solución de problemas de detección de dependencias vulnerables](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes %}
- "[Solución de errores de {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
