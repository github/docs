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
ms.openlocfilehash: 78ab86bf3314717a1f79b858496c4eb9fa323819
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106537'
---
{% data reusables.dependabot.beta-security-and-version-updates %} {% data reusables.dependabot.result-discrepancy %}

## ¿Por qué parece que faltan algunas dependencias?

{% data variables.product.prodname_dotcom %} genera y muestra los datos de las dependencias de forma diferente a otras herramientas. En consecuencia, si has estado utilizando otra herramienta para identificar dependencias, muy probablemente encuentres resultados diferentes. Tenga en cuenta lo siguiente.

*   {% data variables.product.prodname_advisory_database %} es uno de los orígenes de datos que {% data variables.product.prodname_dotcom %} usa para identificar dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} y malware{% endif %}. Es una base de datos de avisos de seguridad mantenida y gratuita para los ecosistemas de paquetes comunes en {% data variables.product.prodname_dotcom %}. Esta incluye tanto los datos reportados directamente a {% data variables.product.prodname_dotcom %} desde {% data variables.product.prodname_security_advisories %}, así como las fuentes oficiales y las comunitarias. {% data variables.product.prodname_dotcom %} revisa y organiza estos datos para garantizar que la información falsa o inprocesable no se comparta con la comunidad de desarrollo. {% data reusables.security-advisory.link-browsing-advisory-db %}
*   La gráfica de dependencias analiza todos los archivos de manifiesto de paquetes conocidos en un repositorio de usuario. Por ejemplo, para npm analizará el archivo _package-lock.json_. Construye una gráfica de todas las dependencias del repositorio y de los dependientes públicos. Esto sucede cuando habilitas la gráfica de dependencias y cuando alguien hace cargas a la rama predeterminada, y esto incluye a las confirmaciones que hacen cambios a un formato de manifiesto compatible. Para más información, vea "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)" y "[Solución de problemas del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)".
*   {% data variables.product.prodname_dependabot %} examina cualquier inserción, en la rama predeterminada, que contenga un archivo de manifiesto. Cuando se agrega un aviso nuevo, este examina todos los repositorios existentes y genera una alerta para cada repositorio afectado. Las {% data variables.product.prodname_dependabot_alerts %} se agregan en el nivel de repositorio, en vez de crear una alerta por cada aviso. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".
*   Las {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot_security_updates %} se activan cuando recibes una alerta sobre una dependencia vulnerable en tu repositorio. Cuando sea posible, el {% data variables.product.prodname_dependabot %} creará una solicitud de cambios en tu repositorio para actualizar la dependencia vulnerable a la versión segura mínima posible que se requiere para evitar la vulnerabilidad. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_security_updates %}](/github/managing-security-vulnerabilities/about-dependabot-security-updates)" y "[Solución de errores de {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)".
  
    {% endif %}{% data variables.product.prodname_dependabot %} no examina repositorios según una programación, sino cuando algo cambia. Por ejemplo, se activará un examen cuando se agregue una dependencia nueva ({% data variables.product.prodname_dotcom %} lo comprueba en cada inserción), o bien cuando se agregue un aviso nuevo a la base de datos{% ifversion ghes or ghae %} y se sincronice con {% data variables.location.product_location %}{% endif %}. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies#detection-of-insecure-dependencies)".

## ¿Las {% data variables.product.prodname_dependabot_alerts %} solo se relacionan con dependencias no seguras en manifiestos y archivos de bloqueo?

Las {% data variables.product.prodname_dependabot_alerts %} te asesoran sobre las dependencias que debes actualizar, incluyendo aquellas transitivas en donde la versión se puede determinar desde un manifiesto o lockfile. Las {% ifversion fpt or ghec or ghes %}{% data variables.product.prodname_dependabot_security_updates %} solo sugieren un cambio donde {% data variables.product.prodname_dependabot %} puede "corregir" directamente la dependencia, es decir, cuando son:
* Dependencias directas declaradas explícitamente en un manifiesto o lockfile
* Dependencias transitorias declaradas en un archivo de bloqueo{% endif %}

**Comprobación**: ¿La vulnerabilidad no detectada es para un componente sin especificar en el manifiesto o archivo de bloqueo del repositorio?

## ¿Por qué no recibo {% data variables.product.prodname_dependabot_alerts %} para algunos ecosistemas?

Las {% data variables.product.prodname_dependabot_alerts %} se admiten para un conjunto de ecosistemas en los que podemos proporcionar datos procesables de alta calidad. Los avisos mantenidos en {% data variables.product.prodname_advisory_database %}, el gráfico de dependencias{% ifversion fpt or ghec %}, las actualizaciones de seguridad de {% data variables.product.prodname_dependabot %}{% endif %} y las {% data variables.product.prodname_dependabot_alerts %} se proporcionan para diversos ecosistemas, incluyendo Maven de Java, Yarn y npm de Javascript, NuGet de .NET, pip de Python, RubyGems de Ruby y Composer de PHP. Seguiremos agregando soporte para más ecosistemas a la larga. Para obtener información general sobre los ecosistemas de paquetes que se admiten, vea "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph#supported-package-ecosystems)".

Cabe destacar que pueden existir avisos de seguridad para otros ecosistemas. La información de los avisos de seguridad sin revisar la proporcionan los mantenedores de un repositorio específico. {% data variables.product.prodname_dotcom %} no mantiene estos datos. {% data reusables.security-advisory.link-browsing-advisory-db %}

**Comprobación**: ¿La vulnerabilidad no detectada se aplica a un ecosistema no compatible?

## ¿{% data variables.product.prodname_dependabot %} genera alertas para vulnerabilidades conocidas desde hace años?

{% data variables.product.prodname_advisory_database %} se lanzó en noviembre de 2019 e inicialmente se llenó con avisos de riesgos de seguridad para los ecosistemas compatibles, empezando a partir de 2017. Cuando agregas CVE a la base de datos, priorizamos la organización de CVE nuevos y los CVE que afecten las versiones nuevas del software.

Alguna información sobre las vulnerabilidades antiguas se encuentra disponible, especialmente en donde estos CVE se diseminan específicamente, sin embargo, algunas vulnerabilidades no se incluyen en la {% data variables.product.prodname_advisory_database %}. Si hay una vulnerabilidad antigua específica la cual necesites incluir en la base de datos, contacta a {% data variables.contact.contact_support %}. 

**Comprobación**: ¿La vulnerabilidad no detectada tiene una fecha de publicación anterior a 2017 en la Base de Datos de Vulnerabilidades Nacional?

## Por qué la {% data variables.product.prodname_advisory_database %} utiliza un subconjunto de datos de vulnerabilidades publicados?

Algunas herramientas de terceros utilizan datos de CVE sin organizar y no las verificó ni filtró un humano. Esto significa que los CVE con errores de etiquetado o de severidad, o con cualquier problema de calidad, causarán alertas más frecuentes, ruidosas y menos útiles.

Como {% data variables.product.prodname_dependabot %} usa datos mantenidos en {% data variables.product.prodname_advisory_database %}, la cantidad de alertas podría ser menor, pero las que reciba serán exactas y pertinentes.

{% ifversion fpt or ghec %}
## ¿Se genera una alerta separada para cada dependencia no segura?

Cuando una dependencia tiene vulnerabilidades múltiples, se genera una alerta para cada una de ellas a nivel de la asesoría más el manifiesto.

![Captura de pantalla de la pestaña de {% data variables.product.prodname_dependabot_alerts %} que muestra dos alertas del mismo paquete con diferentes manifiestos.](/assets/images/help/repository/dependabot-alerts-view.png)

Las {% data variables.product.prodname_dependabot_alerts %} tradicionales se agruparon en una sola alerta agregada con todas las vulnerabilidades de la misma dependencia. Si navegas a un enlace a una alerta tradicional del {% data variables.product.prodname_dependabot %}, se te redirigirá a la pestaña de {% data variables.product.prodname_dependabot_alerts %} filtrada para mostrar vulnerabilidades de ese paquete y manifiesto dependientes.

![Captura de pantalla de la pestaña de {% data variables.product.prodname_dependabot_alerts %} que muestra las alertas filtradas cuando se navega desde una alerta tradicional del {% data variables.product.prodname_dependabot %}.](/assets/images/help/repository/legacy-dependabot-alerts-view.png)

El conteo de {% data variables.product.prodname_dependabot_alerts %} en {% data variables.product.prodname_dotcom %} muestra el total de la cantidad de alertas, el cual es el número de vulnerabilidades y no la cantidad de dependencias.

**Comprobación**: Si hay alguna discrepancia en los totales que ve, compruebe que no compara números de alerta con números de dependencia. También, verifica que estés viendo todas las alertas y no solo un subconjunto de alertas filtradas.
{% endif %}

{% ifversion fpt or ghec or ghes %}
## ¿Puede Dependabot omitir dependencias específicas?

Puedes configurar {% data variables.product.prodname_dependabot %} de modo que omita dependencias específicas en el archivo de configuración, lo que impedirá las actualizaciones de versión y de seguridad de esas dependencias. Si solo quieres usar actualizaciones de seguridad, deberás invalidar el comportamiento predeterminado con un archivo de configuración. Para obtener más información, consulta "[Invalidación del comportamiento predeterminado con un archivo de configuración](/code-security/dependabot/dependabot-security-updates/configuring-dependabot-security-updates#overriding-the-default-behavior-with-a-configuration-file)" para impedir que se activen las actualizaciones de versión. Para obtener información sobre cómo omitir las dependencias, consulta "[`ignore`](/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#ignore)". {% endif %}

## Información adicional

- "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)"
- "[Visualización y actualización de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/viewing-and-updating-dependabot-alerts)"
- "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)"
- "[Solución de problemas del gráfico de dependencias](/code-security/supply-chain-security/understanding-your-software-supply-chain/troubleshooting-the-dependency-graph)"{% ifversion fpt or ghec or ghes %}
- "[Solución de errores de {% data variables.product.prodname_dependabot %}](/github/managing-security-vulnerabilities/troubleshooting-dependabot-errors)"{% endif %}
