---
title: Acerca del resumen de seguridad
intro: 'Puedes ver, filtrar y clasificar las alertas de seguridad para los repositorios que pertenezcan a tu organización o equipo en un solo lugar: la página de Resumen de Seguridad.'
permissions: '{% data reusables.security-center.permissions %}'
product: '{% data reusables.gated-features.security-center %}'
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
shortTitle: Acerca del resumen de seguridad
---

{% ifversion ghes < 3.5 or ghae %}
{% data reusables.security-center.beta %}
{% endif %}

## Acerca del resumen de seguridad

{% ifversion ghes or ghec or ghae %}Puedes{% elsif fpt %}Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} pueden{% endif %} utilizar el resumen de seguridad para una vista de alto nivel del estado de seguridad de {% ifversion ghes or ghec or ghae %}tu {% elsif fpt %}su{% endif %} organización o para identificar los repositorios problemáticos que requieren intervención. {% ifversion ghes or ghec or ghae %}Puedes {% elsif fpt %}Estas organizaciones pueden{% endif %} ver la información de seguridad agregada o específica de los repositorios en el resumen de seguridad. {% ifversion ghes or ghec or ghae %}También puedes {% elsif fpt %} Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} también pueden{% endif %} utilizar el resumen de seguridad para ver qué características de seguridad se habilitaron para {% ifversion ghes or ghec or ghae %}tus {% elsif fpt %}sus {% endif %} repositorios y para configurar cualquier característica de seguridad disponible que no se esté utilizando actualmente. {% ifversion fpt %}Para obtener más información, consulta la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %}
The security overview indicates whether {% ifversion fpt or ghes or ghec %}security{% endif %}{% ifversion ghae %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} features are enabled for repositories owned by your organization and consolidates alerts for each feature.{% ifversion fpt or ghes or ghec %} Security features include {% data variables.product.prodname_GH_advanced_security %} features, such as {% data variables.product.prodname_code_scanning %} and {% data variables.product.prodname_secret_scanning %}, as well as {% data variables.product.prodname_dependabot_alerts %}.{% endif %} For more information about {% data variables.product.prodname_GH_advanced_security %} features, see "[About {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)."{% ifversion fpt or ghes or ghec %} For more information about {% data variables.product.prodname_dependabot_alerts %}, see "[About {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)."{% endif %}

Para obtener más información sobre cómo proteger tu código a nivel de repositorio u organización, consulta las secciones "[Proteger tu repositorio](/code-security/getting-started/securing-your-repository)" y "[Proteger tu organización](/code-security/getting-started/securing-your-organization)".

El equipo de seguridad de aplicaciones en tu compañía puede utilizar el resumen de seguridad tanto para los análisis específicos como para los generales del estado de seguridad de tu organización. Por ejemplo, pueden utilizar la página de resumen para monitorear la adopción de características en tu organización o en equipos específicos conforme implementas la {% data variables.product.prodname_GH_advanced_security %} en tu empresa o para revisar todas las alertas de un tipo específico y nivel de severidad en todos los repositorios de tu organización.

### Acerca de filtrar y clasificar las alertas

En el resumen de seguridad, puedes ver, clasificar y filtrar las alertas para entender los riesgos de seguridad en tu organización y en los repositorios específicos. El resumen de seguridad es altamente interactivo, lo cual te permite investigar las categorías de información específicas con base en los calificadores como nivel de riesgo de alerta, tipo de alerta y habilitación de características. También puedes aplicar filtros múltiples para enfocarte en áreas de interés más específicas. Por ejemplo, puedes identificar repositorios privados que tengan una gran cantidad de {% data variables.product.prodname_dependabot_alerts %} o repositorios que no tengan alertas del {% data variables.product.prodname_code_scanning %}. Para obtener más información, consulta la sección "[Filtrar las alertas en el resumen de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)".

{% ifversion security-overview-views %}

En el resumen de seguridad, tanto a nivel de repositorio como de organización, hay vistas dedicadas para las características de seguridad específicas, tales como alertas de escaneo de secretos y de escaneo de código. Puedes utilizar estas vistas para limitar tu análisis a un conjunto de alertas específico y reducirlos aún más con un rango de filtros específico para cada vista. Por ejemplo, en la vista de alertas del escaneo de secretos, puedes utilizar el filtro `Secret type` para ver solo las alertas de escaneo de secretos para un secreto específico, como un Token de Acceso Personal de GitHub. A nivel de repositorio, puedes utilizar el resumen de seguridad para valorar el estado de seguridad actual del repositorio específico y configurar cualquier característica de seguridad adicional que no esté utilizando el repositorio.

{% endif %}

![El resumen de seguridad para una organziación](/assets/images/help/organizations/security-overview.png)

Para cada repositorio en el resumen de seguridad, verás iconos de cada tipo de característica de seguridad y cuántas alertas hay para cada tipo. Si no se habilita una característica de seguridad para un repositorio, su icono se mostrará en gris. Adicionalmente, la puntuación de riesgo se calcula para cada repositorio con base de su escaneo de código, las alertas del Dependabot y del escaneo de secretos. Esta puntuación se encuentra en beta y debe utilizarse con cuidado. Su algoritmo y enfoque está sujeto a cambios.

![Los iconos en el resumen de seguridad](/assets/images/help/organizations/security-overview-icons.png)

| Icono                                                         | Significado                                                                                                                                                                                                                                                              |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | Alertas de {% data variables.product.prodname_code_scanning_capc %}. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)".                         |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | alertas del {% data variables.product.prodname_secret_scanning_caps %}. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)".                |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Acerca de las {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)". |
| {% octicon "check" aria-label="Check" %}                      | La característica de seguridad se habilitó pero no levanta alertas en este repositorio.                                                                                                                                                                                  |
| {% octicon "x" aria-label="x" %}                              | La característica de seguridad no es compatible con este repositorio.                                                                                                                                                                                                    |

El resumen de seguridad muestra alertas activas que levantan las características de seguridad. Si no hay alertas en el resumen de seguridad de un repositorio, las vulnerabilidades de seguridad no detectadas o los errores de código podrían aún existir.

### Acerca del resumen de seguridad a nivel organizacional

A nivel organizacional, el resumen de seguridad muestra seguridad agregada y específica del repositorio para aquellos que pertenezcan a tu organización. Puedes filtrar información por características de seguridad a nivel organizacional.

{% ifversion ghec or ghes > 3.4 or ghae-issue-6199 %}
### Acerca del resumen de seguridad a nivel empresarial
En el nivel empresarial, el resumen de seguridad muestra información de seguridad agregada y específica del repositorio para tu empresa. Puedes ver los repositorios que le pertenecen a tu empresa y que tienen alertas de seguridad, ver todas las alertas de seguridad o las alertas de seguridad con características específicas desde cualquier punto de tu empresa.

Los propietarios de organizaciones y administradores de seguridad para las organizaciones de tu empresa también tienen acceso limitado al resumen de seguridad a nivel empresarial. Solo pueden ver los repositorios y alertas de las organizaciones a las cuales tienen acceso completo.

{% elsif fpt %}
### Acerca del resumen de seguridad a nivel empresarial
A nivel empresarial, el resumen de seguridad muestra información agregada y específica del repositorio de una empresa. Para obtener más información, consulta la sección "[Acerca del resumen de seguridad a nivel empresarial](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview#about-the-enterprise-level-security-overview)" en la documentación de {% data variables.product.prodname_ghe_cloud %}.
{% endif %}

### Acerca del resumen de seguridad a nivel de equipo
A nivel de equipo, el resumen de seguridad muestra la información de seguridad específica del repositorio para aquellos en los que el equipo tenga privilegios de administración. Para obtener más información, consulta la sección "[Administrar el acceso de un equipo a un repositorio organizacional](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".
{% endif %}
