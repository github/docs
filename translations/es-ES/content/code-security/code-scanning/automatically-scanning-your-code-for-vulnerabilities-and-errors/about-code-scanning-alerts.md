---
title: Acerca de las alertas de análisis de código
intro: Obtén información sobre los diferentes tipos de alertas de análisis de código y la información que te ayuda a comprender el problema que resalta cada alerta.
product: '{% data reusables.gated-features.code-scanning %}'
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
ms.openlocfilehash: 1e540aa8b061e0bbdd5b7be1a2563cd983cfb753
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881231'
---
{% data reusables.code-scanning.beta %} {% data reusables.code-scanning.enterprise-enable-code-scanning %}

## Acerca de las alertas de {% data variables.product.prodname_code_scanning %}

Puedes configurar el {% data variables.product.prodname_code_scanning %} para que verifique el código en un repositorio utilizando el análisis predeterminado de {% data variables.product.prodname_codeql %}, un análisis de terceros, o varios tipos de análisis. Cuando se complete el análisis, las alertas resultantes se mostrarán unas junto a otras en la vista de seguridad del repositorio. Los resultados de las herramientas de terceros o de las consultas personalizadas podrían no incluir todas las propiedades que ves para las alertas que se detectan con el análisis predeterminado del {% data variables.product.prodname_codeql %} de {% data variables.product.company_short %}. Para más información, vea "[Configuración de {% data variables.product.prodname_code_scanning %} para un repositorio](/code-security/secure-coding/setting-up-code-scanning-for-a-repository)".

Predeterminadamente, el {% data variables.product.prodname_code_scanning %} analiza tu código periódicamente en la rama predeterminada y durante las solicitudes de cambios. Para obtener información sobre cómo administrar alertas en una solicitud de incorporación de cambios, vea "[Evaluación de prioridades de las alertas de {% data variables.product.prodname_code_scanning %} en las solicitudes de incorporación de cambios](/code-security/secure-coding/triaging-code-scanning-alerts-in-pull-requests)".

## Acerca de los detalles de la alerta

Cada alerta resalta un problema en el código y el nombre de la herramienta que lo identificó. Puedes ver la línea de código que ha desencadenado la alerta, así como las propiedades de la misma, tales como la gravedad de alerta, la gravedad de seguridad y la naturaleza del problema. Las alertas también te dicen si el problema se introdujo por primera vez. Para las alertas que identificó el análisis de {% data variables.product.prodname_codeql %}, también verás información de cómo arreglar elproblema.

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} {% data reusables.code-scanning.alert-default-branch %} {% endif %}

{% ifversion fpt or ghec or ghes > 3.4 or ghae-issue-6249 %} ![Alerta de ejemplo de {% data variables.product.prodname_code_scanning %}](/assets/images/help/repository/code-scanning-alert.png) {% else %} ![Example alert from {% data variables.product.prodname_code_scanning %}](/assets/images/enterprise/3.4/repository/code-scanning-alert.png) {% endif %}

Si configura {% data variables.product.prodname_code_scanning %} mediante {% data variables.product.prodname_codeql %}, también encontrará problemas de flujo de datos en el código. El análisis de flujo de datos encuentra problemas de seguridad potenciales en el código, tales como: utilizar los datos de formas no seguras, pasar argumentos peligrosos a las funciones y tener fugas de información sensible.

Cuando {% data variables.product.prodname_code_scanning %} reporta alertas de flujo de datos, {% data variables.product.prodname_dotcom %} te muestra como se mueven los datos a través del código. El {% data variables.product.prodname_code_scanning_capc %} te permite identificar las áreas de tu código que filtran información sensible y que podrían ser el punto de entrada para los ataques que hagan los usuarios malintencionados.

### Acerca de los niveles de gravedad

Los niveles de gravedad de la alerta pueden ser `Error`, `Warning` o `Note`.

Si {% data variables.product.prodname_code_scanning %} está habilitado como una comprobación de solicitud de incorporación de cambios, se producirá un error en la comprobación si detecta resultados con una gravedad de `error`. Puedes especificar qué nivel de gravedad de las alertas de análisis de código provocan un error de comprobación. Para obtener más información, consulta "[Definición de las gravedades que provocan un error de comprobación de solicitudes de incorporación de cambios](/code-security/secure-coding/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".

### Acerca de los niveles de gravedad

El {% data variables.product.prodname_code_scanning_capc %} muestra los niveles de gravedad de seguridad para las alertas que generan las consultas de seguridad. Los niveles de gravedad de seguridad pueden ser `Critical`, `High`, `Medium` o `Low`.

Para calcular la gravedad de seguridad de una alerta, utilizamos los datos del Sistema de Puntuación para Vulnerabilidades Comunes (CVSS). El CVSS es un marco de trabajo de código abierto para comunicar las características y gravedad de las vulnerabilidades de software y otros productos de seguridad lo utilizan habitualmente para puntuar las alertas. Para más información sobre cómo se calculan los niveles de gravedad, vea [esta entrada de blog](https://github.blog/changelog/2021-07-19-codeql-code-scanning-new-severity-levels-for-security-alerts/).

De manera predeterminada, cualquier resultado de {% data variables.product.prodname_code_scanning %} con una gravedad de seguridad de `Critical` o `High` provocará un error de comprobación. Puede especificar qué nivel de gravedad de seguridad para los resultados de {% data variables.product.prodname_code_scanning %} debe provocar un error de comprobación. Para obtener más información, consulta "[Definición de las gravedades que provocan un error de comprobación de solicitudes de incorporación de cambios](/code-security/secure-coding/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#defining-the-severities-causing-pull-request-check-failure)".

{% ifversion fpt or ghes > 3.4 or ghae-issue-6251 or ghec %}
### Acerca de los orígenes de análisis

Puede establecer varias configuraciones de análisis de código en un repositorio, mediante distintas herramientas y destinadas a diferentes lenguajes o áreas del código. Cada configuración del análisis de código es el origen del análisis de todas las alertas que genera. Por ejemplo, una alerta generada mediante el análisis de CodeQL predeterminado con Acciones de GitHub tendrá un origen de análisis diferente al de una alerta generada externamente y cargada mediante la API de análisis de código.

Si usa varias configuraciones para analizar un archivo, los problemas detectados por la misma consulta se notifican como alertas con varios orígenes de análisis. Si una alerta tiene más de un origen de análisis, aparecerá un icono {% octicon "workflow" aria-label="The workflow icon" %} junto a cualquier rama pertinente de la sección **Ramas afectadas** en el lado derecho de la página de alertas. Puede mantener el puntero sobre el icono {% octicon "workflow" aria-label="The workflow icon" %} para ver los nombres de cada origen de análisis y el estado de la alerta para ese origen de análisis. También puede ver el historial de cuándo han aparecido las alertas en cada origen de análisis en la escala de tiempo de la página de alertas. Si una alerta solo tiene un origen de análisis, no se muestra información sobre los orígenes de análisis en la página de alertas.

![Alerta de análisis de código con varios orígenes de análisis](/assets/images/help/repository/code-scanning-analysis-origins.png)

{% note %}

**Nota:** En ocasiones una alerta de análisis de código se muestra como fija para un origen de análisis, pero sigue abierta para un segundo origen de análisis. Para resolverlo, vuelva a ejecutar la segunda configuración de análisis de código para actualizar el estado de alerta de ese origen de análisis.

{% endnote %}

{% endif %}
### Acerca de las etiquetas para las alertas que no se encuentran en el código de la aplicación

{% data variables.product.product_name %} asigna una etiqueta de categoría a las alertas que no se encuentran en el código de aplicación. La etiqueta se relaciona con la ubicación de la alerta.

- **Generada**: código generado por el proceso de compilación
- **Prueba**: código de prueba
- **Biblioteca**: biblioteca o código de terceros
- **Documentación**: documentación

El {% data variables.product.prodname_code_scanning_capc %} categoriza los archivos por sus rutas. No puedes categorizar los archivos de origen manualmente.

Este es un ejemplo de la lista de alertas de {% data variables.product.prodname_code_scanning %} para una alerta marcada como procedente de código de biblioteca.

![Alerta de librería del escaneo de código en la lista](/assets/images/help/repository/code-scanning-library-alert-index.png)

En la página de alertas, puede ver si la ruta se marca como código de biblioteca (la etiqueta `Library`).

![Detalles de la alerta de librería del escaneo de código](/assets/images/help/repository/code-scanning-library-alert-show.png)

{% ifversion codeql-ml-queries %}

## Acerca de las alertas experimentales

{% data reusables.code-scanning.beta-codeql-ml-queries %}

En los repositorios que ejecutan {% data variables.product.prodname_code_scanning %} mediante la acción {% data variables.product.prodname_codeql %}, es posible que vea algunas alertas marcadas como experimentales. Se trata de alertas detectadas mediante un modelo de Machine Learning para ampliar las funcionalidades de una consulta de {% data variables.product.prodname_codeql %} existente.

![Alerta experimental de análisis de código en la lista](/assets/images/help/repository/code-scanning-experimental-alert-list.png)

### Ventajas del uso de modelos de Machine Learning para ampliar las consultas

Las consultas que usan modelos de Machine Learning son capaces de encontrar vulnerabilidades en el código que se ha escrito mediante marcos y bibliotecas que el creador original de la consulta no ha incluido.

Cada una de las consultas de seguridad de {% data variables.product.prodname_codeql %} identifica código vulnerable a un tipo de ataque específico. Los investigadores de seguridad escriben las consultas e incluyen los marcos y bibliotecas más comunes. Por tanto, cada consulta existente busca usos vulnerables de marcos y bibliotecas comunes. Pero los desarrolladores usan muchos marcos y bibliotecas diferentes, y una consulta mantenida manualmente no puede incluirlas todas. Por tanto, las consultas mantenidas manualmente no proporcionan cobertura para todos los marcos y bibliotecas.

En {% data variables.product.prodname_codeql %} se usa un modelo de Machine Learning para ampliar una consulta de seguridad existente a fin de abarcar una gama más amplia de marcos y bibliotecas. El modelo de Machine Learning se entrena para detectar problemas en el código que nunca se han visto antes. Las consultas que usan el modelo encontrarán resultados para marcos y bibliotecas que no se describen en la consulta original.

### Alertas identificadas mediante el aprendizaje automático

Las alertas encontradas mediante un modelo de Machine Learning se etiquetan como "Alertas experimentales" para mostrar que la tecnología está en desarrollo activo. Estas alertas tienen una tasa más alta de resultados falsos positivos que las consultas en las que se basan. El modelo de Machine Learning mejorará en función de las acciones del usuario, como marcar un resultado deficiente como un falso positivo o corregir un resultado correcto.

![Detalles de la alerta experimental de análisis de código](/assets/images/help/repository/code-scanning-experimental-alert-show.png)

## Habilitación de alertas experimentales

Los conjuntos de consultas de {% data variables.product.prodname_codeql %} predeterminados no incluyen ninguna consulta que use el aprendizaje automático para generar alertas experimentales. Para ejecutar consultas de aprendizaje automático durante {% data variables.product.prodname_code_scanning %} tendrá que ejecutar las consultas adicionales contenidas en uno de los conjuntos de consultas siguientes.

{% data reusables.code-scanning.codeql-query-suites %}

Al actualizar el flujo de trabajo para ejecutar un conjunto de consultas adicional, aumentará el tiempo de análisis.

``` yaml
- uses: {% data reusables.actions.action-codeql-action-init %}
  with:
    # Run extended queries including queries using machine learning
    queries: security-extended
```

Para más información, vea "[Configuración del análisis de código](/code-security/code-scanning/automatically-scanning-your-code-for-vulnerabilities-and-errors/configuring-code-scanning#using-queries-in-ql-packs)".

## Deshabilitación de alertas experimentales

La manera más sencilla de deshabilitar las consultas que usan el aprendizaje automático para generar alertas experimentales consiste en dejar de ejecutar el conjunto de consultas `security-extended` o `security-and-quality`. En el ejemplo anterior, tendría que convertir en comentario la línea `queries`. Si necesita seguir ejecutando el conjunto `security-extended` o `security-and-quality`, y las consultas de aprendizaje automático generan problemas, puede abrir una incidencia con el [soporte técnico de {% data variables.product.company_short %}](https://support.github.com/contact) con los detalles siguientes.

- Título de la incidencia de soporte técnico: "{% data variables.product.prodname_code_scanning %}: eliminación de alertas experimentales beta"
- Especificar los detalles de los repositorios u organizaciones que se ven afectados
- Solicitud de una escalación al departamento de ingeniería

{% endif %}
