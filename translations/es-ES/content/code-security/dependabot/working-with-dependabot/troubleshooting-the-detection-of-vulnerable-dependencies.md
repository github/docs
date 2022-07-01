---
title: Solucionar problemas en la detección de dependencias vulnerables
intro: 'Si la información de la dependencia que reportó {% data variables.product.product_name %} no es lo que esperabas, hay varios puntos a considerar y varias cosas que puedes revisar.'
shortTitle: Troubleshoot vulnerability detection
redirect_from:
  - /github/managing-security-vulnerabilities/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/troubleshooting-the-detection-of-vulnerable-dependencies
  - /code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/troubleshooting-the-detection-of-vulnerable-dependencies
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Troubleshooting
  - Errors
  - Security updates
  - Dependencies
  - Vulnerabilities
  - CVEs
  - Repositories
---

{% data reusables.dependabot.beta-security-and-version-updates %}
{% data reusables.dependabot.result-discrepancy %}

## ¿Por qué parece que faltan algunas dependencias?

{% data variables.product.prodname_dotcom %} genera y muestra los datos de las dependencias de forma diferente a otras herramientas. En consecuencia, si has estado utilizando otra herramienta para identificar dependencias, muy probablemente encuentres resultados diferentes. Considera lo sigueinte:

*   {% data variables.product.prodname_advisory_database %} is one of the data sources that {% data variables.product.prodname_dotcom %} uses to identify vulnerable dependencies{% ifversion GH-advisory-db-supports-malware %} and malware{% endif %}. It's a free, curated database of security advisories for common package ecosystems on {% data variables.product.prodname_dotcom %}. Esta incluye tanto los datos reportados directamente a {% data variables.product.prodname_dotcom %} desde {% data variables.product.prodname_security_advisories %}, así como las fuentes oficiales y las comunitarias. {% data variables.product.prodname_dotcom %} revisa y organiza estos datos para garantizar que la información falsa o inprocesable no se comparta con la comunidad de desarrollo. {% data reusables.security-advisory.link-browsing-advisory-db %}
*   La gráfica de dependencias analiza todos los archivos de manifiesto de paquetes conocidos en un repositorio de usuario. Por ejemplo, para npm analizará el archivo _package-lock.json_. Construye una gráfica de todas las dependencias del repositorio y de los dependientes públicos. Esto sucede cuando habilitas la gráfica de dependencias y cuando alguien hace cargas a la rama predeterminada, y esto incluye a las confirmaciones que hacen cambios a un formato de manifiesto compatible. Para obtener más información, consulta las secciones "[Acerca de la gráfica de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" y "[Solucionar problemas de la gráfica de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)".
*   {% data variables.product.prodname_dependabot %} escanea cualquier subida a la rama predeterminada que contenga un archivo de manifiesto. When a new advisory is added, it scans all existing repositories and generates an alert for each repository that is affected. {% data variables.product.prodname_dependabot_alerts %} are aggregated at the repository level, rather than creating one alert per advisory. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".
*   {% ifversion fpt or ghec or ghes > 3.2 %}{% data variables.product.prodname_dependabot_security_updates %} se activa cuando recibes una alerta sobre una dependencia vulnerable en tu repositorio. Cuando sea posible, el {% data variables.product.prodname_dependabot %} creará una solicitud de cambios en tu repositorio para actualizar la dependencia vulnerable a la versión segura mínima posible que se requiere para evitar la vulnerabilidad. Para obtener más información, consulta las secciones "[Acerca de las {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)" y "[Solucionar problemas en los errores del {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)".

    {% endif %}{% data variables.product.prodname_dependabot %} doesn't scan repositories on a schedule, but rather when something changes. For example, a scan is triggered when a new dependency is added ({% data variables.product.prodname_dotcom %} checks for this on every push), or when a new advisory is added to the database{% ifversion ghes or ghae %} and synchronized to {% data variables.product.product_location %}{% endif %}. For more information, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies)."

## Do {% data variables.product.prodname_dependabot_alerts %} only relate to insecure dependencies in manifests and lockfiles?

Las {% data variables.product.prodname_dependabot_alerts %} te asesoran sobre las dependencias que debes actualizar, incluyendo aquellas transitivas en donde la versión se puede determinar desde un manifiesto o lockfile. {% ifversion fpt or ghec or ghes > 3.2 %}Las {% data variables.product.prodname_dependabot_security_updates %} solo sugieren un cambio donde el {% data variables.product.prodname_dependabot %} pueda "arreglar" la dependencia directamente, es decir, cuando estas son:
* Dependencias directas declaradas explícitamente en un manifiesto o lockfile
* Dependencias transitorias declaradas en un archivo de bloqueo{% endif %}

**Verifica**; ¿Acaso no se especifica la vulnerabilidad no detectada para un componente en el manifiesto o lockfile del repositorio?

## Why don't I get {% data variables.product.prodname_dependabot_alerts %} for some ecosystems?

{% data variables.product.prodname_dependabot_alerts %} are supported for a set of ecosystems where we can provide high-quality, actionable data. Las asesorías que se seleccionan para la {% data variables.product.prodname_advisory_database %}, la gráfica de dependencias, las actualizaciones de seguridad del {% ifversion fpt or ghec %}{% data variables.product.prodname_dependabot %} {% endif %}y las {% data variables.product.prodname_dependabot_alerts %} se proporcionan para diversos ecosistemas, incluyendo Maven de Java, Yarn y npm de Javascript, NuGet de .NET, pip de Python, RubyGems de Ruby y Composer de PHP. Seguiremos agregando soporte para más ecosistemas a la larga. Para obtener una vista general de los ecosistemas de paquete que soportamos, consulta la sección "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

It's worth noting that security advisories may exist for other ecosystems. The information in an unreviewed security advisory is provided by the maintainers of a particular repository. This data is not curated by {% data variables.product.prodname_dotcom %}. {% data reusables.security-advisory.link-browsing-advisory-db %}

**Verifica**: ¿Acaso la vulnerabilidad que no se detectó aplica a algún ecosistema no compatible?

## ¿Acaso el {% data variables.product.prodname_dependabot %} genera alertas para vulnerabilidades que se han conocido por muchos años?

The {% data variables.product.prodname_advisory_database %} was launched in November 2019, and initially back-filled to include advisories for security risks in the supported ecosystems, starting from 2017. Cuando agregas CVE a la base de datos, priorizamos la organización de CVE nuevos y los CVE que afecten las versiones nuevas del software.

Alguna información sobre las vulnerabilidades antiguas se encuentra disponible, especialmente en donde estos CVE se diseminan específicamente, sin embargo, algunas vulnerabilidades no se incluyen en la {% data variables.product.prodname_advisory_database %}. Si hay una vulnerabilidad antigua específica la cual necesites incluir en la base de datos, contacta a {% data variables.contact.contact_support %}.

**Verifica**: ¿Acaso la vulnerabilidad no detectada tiene una fecha depublicación más antigua de 2017 en la Base de Datos de Vulnerabilidades Nacional?

## Por qué la {% data variables.product.prodname_advisory_database %} utiliza un subconjunto de datos de vulnerabilidades publicados?

Algunas herramientas de terceros utilizan datos de CVE sin organizar y no las verificó ni filtró un humano. Esto significa que los CVE con errores de etiquetado o de severidad, o con cualquier problema de calidad, causarán alertas más frecuentes, ruidosas y menos útiles.

Ya que {% data variables.product.prodname_dependabot %} utiliza datos organizado en la {% data variables.product.prodname_advisory_database %}, la cantidad de alertas podría ser menor, pero las alertas que sí recibas serán exactas y relevantes.

{% ifversion fpt or ghec %}
## Does each insecure dependency generate a separate alert?

Cuando una dependencia tiene vulnerabilidades múltiples, se genera una alerta para cada una de ellas a nivel de la asesoría más el manifiesto.

![Captura de pantalla de la pestaña de {% data variables.product.prodname_dependabot_alerts %} que muestra dos alertas del mismo paquete con diferentes manifiestos.](/assets/images/help/repository/dependabot-alerts-view.png)

Las {% data variables.product.prodname_dependabot_alerts %} tradicionales se agruparon en una sola alerta agregada con todas las vulnerabilidades de la misma dependencia. Si navegas a un enlace a una alerta tradicional del {% data variables.product.prodname_dependabot %}, se te redirigirá a la pestaña de {% data variables.product.prodname_dependabot_alerts %} filtrada para mostrar vulnerabilidades de ese paquete y manifiesto dependientes.

![Captura de pantalla de la pestaña de {% data variables.product.prodname_dependabot_alerts %} que muestra las alertas filtradas cuando se navega desde una alerta tradicional del {% data variables.product.prodname_dependabot %}.](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

El conteo de {% data variables.product.prodname_dependabot_alerts %} en {% data variables.product.prodname_dotcom %} muestra el total de la cantidad de alertas, el cual es el número de vulnerabilidades y no la cantidad de dependencias.

**Verifica**: Si hay alguna discrepancia en los totales que ves, verifica que no estés comparando números de alerta con números de dependencia. También, verifica que estés viendo todas las alertas y no solo un subconjunto de alertas filtradas.
{% endif %}

{% ifversion fpt or ghec or ghes > 3.2 %}
## Can Dependabot ignore specific dependencies?

You can configure {% data variables.product.prodname_dependabot %} to ignore specific dependencies in the configuration file, which will prevent security and version updates for those dependencies. If you only wish to use security updates, you will need to override the default behavior with a configuration file. For more information, see "[Overriding the default behavior with a configuration file](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file)" to prevent version updates from being activated. For information about ignoring dependencies, see "[`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)."
{% endif %}

## Leer más

- "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Ver y actualizar las {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Administrar la configuración de seguridad y de análisis para tu organización](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Troubleshooting the dependency graph](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"{% ifversion fpt or ghec or ghes > 3.2 %}
- "[Solucionar problemas de los errores del {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
