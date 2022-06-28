---
title: Solución de problemas del gráfico de dependencias
intro: 'If the dependency information reported by the dependency graph is not what you expected, there are a number of points to consider, and various things you can check.'
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
---

{% data reusables.dependabot.result-discrepancy %}

## ¿Acaso la gráfica de dependencias solo encuentra depedencias en los manifiestos y lockfiles?

The dependency graph {% ifversion dependency-submission-api %}automatically{% endif %} includes information on dependencies that are explicitly declared in your environment. Esto es, dependencias que se especifican en un manifiesto o en un lockfile. La gráfica de dependencias también incluye dependencias transitivas generalmente, aún cuando no se especifican en un lockfile, mediante la revisión de las dependencias de las dependencias en un archivo de manifiesto.

The dependency graph doesn't {% ifversion dependency-submission-api %}automatically{% endif %} include "loose" dependencies. Las dependencias "sueltas" son archivos individuales que se copian de otra fuernte y se revisan directamente en el repositorio o dentro de un archivo (tal como un archivo ZIP o JAR) en ves de que se referencien en un manifiesto de paquete de administrador o en un lockfile.

{% ifversion dependency-submission-api %}However, you can use the Dependency submission API (beta) to add dependencies to a project's dependency graph, even if the dependencies are not declared in a manifest or lock file, such as dependencies resolved when a project is built. The dependency graph will display the submitted dependencies grouped by ecosystem, but separately from the dependencies parsed from manifest or lock files. For more information on the Dependency submission API, see "[Using the Dependency submission API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."{% endif %}

**Check**: Is the missing dependency for a component that's not specified in the repository's manifest or lockfile?

## ¿Acaso la gráfica de dependencias detecta dependencias que se especifican utilizando variables?

La gráfica de dependencias analiza los manifiestos mientras se suben a {% data variables.product.prodname_dotcom %}. Por lo tanto, la gráfica de dependencias no tiene acceso al ambiente de compilación del proyecto, así que no puede resolver variables que se utilizan dentro de los manifiestos. If you use variables within a manifest to specify the name, or more commonly the version of a dependency, then that dependency will not {% ifversion dependency-submission-api %}automatically{% endif %} be included in the dependency graph.

{% ifversion dependency-submission-api %}However, you can use the Dependency submission API (beta) to add dependencies to a project's dependency graph, even if the dependencies are only resolved when a project is built. For more information on the Dependency submission API, see "[Using the Dependency submission API](/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api)."{% endif %}

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
