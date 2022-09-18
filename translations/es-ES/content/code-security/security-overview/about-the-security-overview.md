---
title: Acerca de la información general sobre seguridad
intro: 'Puedes ver, filtrar y clasificar las alertas de seguridad para los repositorios que pertenezcan a tu organización o equipo en un solo lugar: la página de Información general sobre seguridad.'
permissions: '{% data reusables.security-overview.permissions %}'
product: '{% data reusables.gated-features.security-overview %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: '*'
  ghes: '*'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Dependabot
  - Dependencies
  - Organizations
  - Teams
shortTitle: About security overview
ms.openlocfilehash: ac069277564d7249d36b54f218c78f33eefc3c47
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '147881481'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Acerca de la información general sobre seguridad

{% ifversion ghes or ghec or ghae %}Usted{% elsif fpt %}Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %}{% endif %} pueden usar la información general de seguridad para obtener una visión de nivel superior del estado de seguridad de {% ifversion ghes or ghec or ghae %}su {% elsif fpt %}su{% endif %} organización o para identificar repositorios problemáticos que requieren una intervención. {% ifversion ghes or ghec or ghae %}Usted {% elsif fpt %}Estas organizaciones{% endif %} pueden ver la información de seguridad agregada o específica del repositorio en la información general de seguridad. {% ifversion ghes or ghec or ghae %}Usted {% elsif fpt %} Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %}{% endif %} también pueden usar la información general de seguridad para ver qué características están habilitadas para {% ifversion ghes or ghec or ghae %}sus {% elsif fpt %}sus {% endif %} repositorios y configurar cualquier característica de seguridad disponible que no se esté usando actualmente. {% ifversion fpt %}Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %} La información general de seguridad indica si las características de {% ifversion fpt or ghes or ghec %}seguridad{% endif %}{% ifversion ghae %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} están habilitadas para los repositorios que son propiedad de la organización y consolida las alertas para cada característica.{% ifversion fpt or ghes or ghec %} Las características de seguridad incluyen características de {% data variables.product.prodname_GH_advanced_security %}, como {% data variables.product.prodname_code_scanning %} y {% data variables.product.prodname_secret_scanning %}, así como {% data variables.product.prodname_dependabot_alerts %}.{% endif %} Para más información sobre las características de {% data variables.product.prodname_GH_advanced_security %}, consulta "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".{% ifversion fpt or ghes or ghec %} Para más información sobre {% data variables.product.prodname_dependabot_alerts %}, consulta "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".{% endif %}

Para obtener más información sobre la protección del código en los niveles del repositorio y la organización, consulta "[Protección del repositorio](/code-security/getting-started/securing-your-repository)" y "[Protección de la organización](/code-security/getting-started/securing-your-organization)."

El equipo de seguridad de aplicaciones en tu compañía puede utilizar el resumen de seguridad tanto para los análisis específicos como para los generales del estado de seguridad de tu organización. Por ejemplo, pueden utilizar la página de resumen para monitorear la adopción de características en tu organización o en equipos específicos conforme implementas la {% data variables.product.prodname_GH_advanced_security %} en tu empresa o para revisar todas las alertas de un tipo específico y nivel de severidad en todos los repositorios de tu organización.

### Acerca de filtrar y clasificar las alertas

En el resumen de seguridad, puedes ver, clasificar y filtrar las alertas para entender los riesgos de seguridad en tu organización y en los repositorios específicos. El resumen de seguridad es altamente interactivo, lo cual te permite investigar las categorías de información específicas con base en los calificadores como nivel de riesgo de alerta, tipo de alerta y habilitación de características. También puedes aplicar filtros múltiples para enfocarte en áreas de interés más específicas. Por ejemplo, puedes identificar repositorios privados que tengan una gran cantidad de {% data variables.product.prodname_dependabot_alerts %} o repositorios que no tengan alertas del {% data variables.product.prodname_code_scanning %}. Para obtener más información, consulta "[Filtrado de alertas en la información general de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)."

{% ifversion security-overview-views %}

En la información general de seguridad, hay vistas dedicadas para cada tipo de alerta de seguridad, como Dependabot, análisis de código y alertas de análisis de secretos. Puedes utilizar estas vistas para limitar tu análisis a un conjunto de alertas específico y reducirlos aún más con un rango de filtros específico para cada vista. Por ejemplo, en la vista de alertas de análisis de secretos, puedes usar el filtro `Secret type` para ver solo las alertas de análisis de secretos de un secreto en particular, como un token de acceso personal de GitHub. A nivel de repositorio, puedes utilizar el resumen de seguridad para valorar el estado de seguridad actual del repositorio específico y configurar cualquier característica de seguridad adicional que no esté utilizando el repositorio.

{% endif %}

![El resumen de seguridad para una organziación](/assets/images/help/organizations/security-overview.png)

Para cada repositorio en el resumen de seguridad, verás iconos de cada tipo de característica de seguridad y cuántas alertas hay para cada tipo. Si una característica de seguridad no está habilitada para un repositorio, el icono de esa característica aparecerá atenuado. Además, se calcula una puntuación de riesgo para cada repositorio en función de su análisis de código, Dependabot y las alertas de análisis de secretos. Esta puntuación se encuentra en beta y debe utilizarse con cuidado. Su algoritmo y enfoque está sujeto a cambios.

![Los iconos en el resumen de seguridad](/assets/images/help/organizations/security-overview-icons.png)

| Icono | Significado |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | Alertas de {% data variables.product.prodname_code_scanning_capc %}. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)". |
| {% octicon "key" aria-label="Secret scanning alerts" %} | Alertas de {% data variables.product.prodname_secret_scanning_caps %}. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)". |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)". |
| {% octicon "check" aria-label="Check" %} | La característica de seguridad se habilitó pero no levanta alertas en este repositorio. |
| {% octicon "x" aria-label="x" %} | La característica de seguridad no es compatible con este repositorio. |

El resumen de seguridad muestra alertas activas que levantan las características de seguridad. Si no hay alertas en el resumen de seguridad de un repositorio, las vulnerabilidades de seguridad no detectadas o los errores de código podrían aún existir.

### Acerca del resumen de seguridad a nivel organizacional

A nivel organizacional, el resumen de seguridad muestra seguridad agregada y específica del repositorio para aquellos que pertenezcan a tu organización. Puedes filtrar información por características de seguridad a nivel organizacional.

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
### Acerca del resumen de seguridad a nivel empresarial
En el nivel empresarial, el resumen de seguridad muestra información de seguridad agregada y específica del repositorio para tu empresa. Puedes ver los repositorios que pertenecen a tu empresa que tienen alertas de seguridad, todas las alertas de seguridad o alertas de seguridad específicas de características de toda la empresa.

Los propietarios de organizaciones y administradores de seguridad para las organizaciones de tu empresa también tienen acceso limitado al resumen de seguridad a nivel empresarial. Solo pueden ver los repositorios y alertas de las organizaciones a las cuales tienen acceso completo.

{% elsif fpt %}
### Acerca del resumen de seguridad a nivel empresarial
A nivel empresarial, el resumen de seguridad muestra información agregada y específica del repositorio de una empresa. Para obtener más información, consulta "[Acerca de la información general de seguridad de nivel empresarial](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview#about-the-enterprise-level-security-overview) en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

### Acerca del resumen de seguridad a nivel de equipo
A nivel de equipo, el resumen de seguridad muestra la información de seguridad específica del repositorio para aquellos en los que el equipo tenga privilegios de administración. Para obtener más información, consulta "[Administración del acceso de equipo a un repositorio de la organización](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".
{% endif %}
