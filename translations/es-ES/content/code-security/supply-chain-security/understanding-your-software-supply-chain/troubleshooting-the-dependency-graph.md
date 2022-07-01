---
title: Solución de problemas del gráfico de dependencias
intro: 'Si la información de las dependencias que reporta la gráfica de dependencias no es la que esperabas, existen varios puntos a considerar y varias cosas que puedes verificar.'
shortTitle: Solucionar problemas en la gráfica de dependencias
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
---

{% data reusables.dependabot.result-discrepancy %}

## ¿Acaso la gráfica de dependencias solo encuentra depedencias en los manifiestos y lockfiles?

La gráfica de dependencias incluye {% ifversion dependency-submission-api %}automáticamente{% endif %} la información de las dependencias que se declaran explícitamente en tu ambiente. Esto es, dependencias que se especifican en un manifiesto o en un lockfile. La gráfica de dependencias también incluye dependencias transitivas generalmente, aún cuando no se especifican en un lockfile, mediante la revisión de las dependencias de las dependencias en un archivo de manifiesto.

La gráfica de dependencias no incluye {% ifversion dependency-submission-api %}automáticamente{% endif %} las dependencias "sueltas". Las dependencias "sueltas" son archivos individuales que se copian de otra fuernte y se revisan directamente en el repositorio o dentro de un archivo (tal como un archivo ZIP o JAR) en ves de que se referencien en un manifiesto de paquete de administrador o en un lockfile.

{% ifversion dependency-submission-api %}Sin embargo, puedes utilizar la API de emisión de dependencias (beta) para agregar dependencias a la gráfica de dependencias de un proyecto, incluso si estas no se declaran en un archivo de bloqueo o de manifiesto, tales como las dependencias que se resolvieron cuando se creó un proyecto. La gráfica de dependencias mostrará las dependencias emitidas agrupadas por ecosistema, pero separadas de aquellas que se analizan de archivos de bloqueo o de manifiesto. Para obtener más información sobre la API de emisión de dependencias, consulta la sección "[Utilizar la API de emisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".{% endif %}

**Verifica**: ¿La dependencia faltante es para un componente que no se especifica en los archivos de bloqueo o de manifiesto en el repositorio?

## ¿Acaso la gráfica de dependencias detecta dependencias que se especifican utilizando variables?

La gráfica de dependencias analiza los manifiestos mientras se suben a {% data variables.product.prodname_dotcom %}. Por lo tanto, la gráfica de dependencias no tiene acceso al ambiente de compilación del proyecto, así que no puede resolver variables que se utilizan dentro de los manifiestos. Si utilizas variables dentro de un manifiesto para especificar el nombre o, más comúnmente, la versión de una dependencia, entonces dicha dependencia no se incluirá {% ifversion dependency-submission-api %}automáticamente{% endif %} en la gráfica de dependencias.

{% ifversion dependency-submission-api %}Sin embargo, puedes utilizar la API de emisión de dependencias (beta) para agregar dependencias la gráfica de dependencias de un proyecto, incluso si estas solo se resuelven cuando se crea un proyecto. Para obtener más información sobre la API de emisión de dependencias, consulta la sección "[Utilizar la API de emisión de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)".{% endif %}

**Verifica**: ¿Acaso la dependencia faltante se declara en el manifiesto utilizando una variable para su nombre o versión?

## ¿Existen límites que afecten los datos de la gráfica de dependencias?

Sí, la gráfica de dependencias tiene dos categorías de límites:

1. **Límites de procesamiento**

    Estos afectan la gráfica de dependencias que se muestra dentro de {% data variables.product.prodname_dotcom %} y también previenen la creación de {% data variables.product.prodname_dependabot_alerts %}.

    Los manifiestos mayores a 0.5 MB solo se procesan para las cuentas empresariales. En el caso de otras cuentas, los manifiestos mayores a 0.5 MB se ingoran y no crearán {% data variables.product.prodname_dependabot_alerts %}.

    Predeterminadamente, {% data variables.product.prodname_dotcom %} no procesará más de 20 manifiestos por repositorio. Las {% data variables.product.prodname_dependabot_alerts %} no se crean para los manifiestos más allá de este límite. Si necesitas incrementar el límite, contacta a {% data variables.contact.contact_support %}.

2. **Límites de visualización**

    Estos afectan a lo que se muestra en la gráfica de dependencias dentro de {% data variables.product.prodname_dotcom %}. Sin embargo, estos no afectan las {% data variables.product.prodname_dependabot_alerts %} que se crean.

    La vista de dependencias de la gráfica de dependencias para un repositorio solo muestra 1000 manifiestos. Habitualmente, esto es tan adecuado como es significativamente más alto que el límite de procesamiento descrito anteriormente. En situaciones en donde le límite de procesamiento es mayor a 100, las {% data variables.product.prodname_dependabot_alerts %} se crearán aún para cualquier manifiesto que no se muestre dentro de {% data variables.product.prodname_dotcom %}.

**Verifica**: ¿La dependencia faltante está en un archivo de manifiesto que tiene más de 0.5 MB, o en un repositorio con una gran cantidad de manifiesto?

## Leer más

- "[Acerca de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-the-dependency-graph)"
- "[Administrar la configuración de seguridad y de análisis para tu organización](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solucionar problemas en la detección de dependencias vulnerables](/code-security/dependabot/working-with-dependabot/troubleshooting-the-detection-of-vulnerable-dependencies)"{% ifversion fpt or ghec or ghes > 3.2 %}
- "[Solucionar problemas de los errores del {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
