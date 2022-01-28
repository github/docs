---
title: Acerca del resumen de seguridad
intro: 'Puedes ver, filtrar y clasificar las alertas de seguridad para los repositorios que pertenezcan a tu organización o equipo en un solo lugar: la página de Resumen de Seguridad.'
permissions: Organization owners and security managers can access the security overview for organizations. Members of a team can see the security overview for repositories that the team has admin privileges for.
product: '{% data reusables.gated-features.security-center %}'
redirect_from:
  - /code-security/security-overview/exploring-security-alerts
versions:
  fpt: '*'
  ghae: issue-4554
  ghes: '>3.1'
  ghec: '*'
type: how_to
topics:
  - Security overview
  - Advanced Security
  - Alerts
  - Organizations
  - Teams
shortTitle: Acerca del resumen de seguridad
---

{% data reusables.security-center.beta %}

## Acerca del resumen de seguridad

Puedes utilizar el resumen de seguirdad para tener una vista de nivel alto del estado de seguridad de tu organización o para identificar repositorios problemáticos que requieren intervención.

- A nivel organizacional, el resumen de seguridad muestra seguridad agregada y específica del repositorio para aquellos que pertenezcan a tu organización.
- A nivel de equipo, el resumen de seguridad muestra la información de seguridad específica del repositorio para aquellos en los que el equipo tenga privilegios de administración. Para obtener más información, consulta la sección "[Administrar el acceso de un equipo a un repositorio organizacional](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".
- En el nivel del repositorio, el resumen de seguridad muestra qué características de seguridad se encuentran habilitadas para este y ofrece la opción de configurar cualquier característica de seguridad disponible que no se esté utilizando actualmente.

El resumen de seguridad indica si se encuentran habilitadas las características de {% ifversion fpt or ghes > 3.1 or ghec %}seguridad{% endif %}{% ifversion ghae %}{% data variables.product.prodname_GH_advanced_security %}{% endif %} para los repositorios que pertenecen a tu organización y consolida las alertas para cada característica.{% ifversion fpt or ghes > 3.1 or ghec %} Las características de seguridad incluyen aquellas de {% data variables.product.prodname_GH_advanced_security %}, como el {% data variables.product.prodname_code_scanning %} y el {% data variables.product.prodname_secret_scanning %}, así como las {% data variables.product.prodname_dependabot_alerts %}.{% endif %} Para obtener más información sobre las características de la {% data variables.product.prodname_GH_advanced_security %}, consulta la sección "[Acerca de la {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".{% ifversion fpt or ghes > 3.1 or ghec %} Para obtener más información sobre las {% data variables.product.prodname_dependabot_alerts %}, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)".{% endif %}

Para obtener más información sobre cómo proteger tu código a nivel de repositorio u organización, consulta las secciones "[Proteger tu repositorio](/code-security/getting-started/securing-your-repository)" y "[Proteger tu organización](/code-security/getting-started/securing-your-organization)".

El equipo de seguridad de aplicaciones en tu compañía puede utilizar el resumen de seguridad tanto para los análisis específicos como para los generales del estado de seguridad de tu organización. Por ejemplo, pueden utilizar la página de resumen para monitorear la adopción de características en tu organización o en equipos específicos conforme implementas la {% data variables.product.prodname_GH_advanced_security %} en tu empresa o para revisar todas las alertas de un tipo específico y nivel de severidad en todos los repositorios de tu organización.

### Acerca de filtrar y clasificar las alertas

En el resumen de seguridad, puedes ver, clasificar y filtrar las alertas para entender los riesgos de seguridad en tu organización y en los repositorios específicos. El resumen de seguridad es altamente interactivo, lo cual te permite investigar las categorías de información específicas con base en los calificadores como nivel de riesgo de alerta, tipo de alerta y habilitación de características. También puedes aplicar filtros múltiples para enfocarte en áreas de interés más específicas. Por ejemplo, puedes identificar repositorios privados que tengan una gran cantidad de {% data variables.product.prodname_dependabot_alerts %} o repositorios que no tengan alertas del {% data variables.product.prodname_code_scanning %}. Para obtener más información, consulta la sección "[Filtrar las alertas en el resumen de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)".

{% ifversion ghec or ghes > 3.4 %}

En el resumen de seguridad, tanto a nivel de repositorio como de organización, hay vistas dedicadas para las características de seguridad específicas, tales como alertas de escaneo de secretos y de escaneo de código. Puedes utilizar estas vistas para limitar tu análisis a un conjunto de alertas específico y reducirlos aún más con un rango de filtros específico para cada vista. Por ejemplo, en la vista de alertas del escaneo de secretos, puedes utilizar el filtro `Secret type` para ver solo las alertas de escaneo de secretos para un secreto específico, como un Token de Acceso Personal de GitHub. A nivel de repositorio, puedes utilizar el resumen de seguridad para valorar el estado de seguridad actual del repositorio específico y configurar cualquier característica de seguridad adicional que no esté utilizando el repositorio.

{% endif %}

![El resumen de seguridad para una organziación](/assets/images/help/organizations/security-overview.png)

Para cada repositorio en el resumen de seguridad, verás iconos de cada tipo de característica de seguridad y cuántas alertas hay para cada tipo. Si no se habilita una característica de seguridad para un repositorio, su icono se mostrará en gris.

![Los iconos en el resumen de seguridad](/assets/images/help/organizations/security-overview-icons.png)

| Icono                                                         | Significado                                                                                                                                                                                                                                               |
| ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | Alertas de {% data variables.product.prodname_code_scanning_capc %}. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)".          |
| {% octicon "key" aria-label="Secret scanning alerts" %}       | alertas del {% data variables.product.prodname_secret_scanning_caps %}. Para obtener más información, consulta la sección "[Acerca del {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)". |
| {% octicon "hubot" aria-label="Dependabot alerts" %}          | {% data variables.product.prodname_dependabot_alerts %}. Para obtener más información, consulta la sección "[Acerca de las alertas para las dependencias vulnerables](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)".  |
| {% octicon "check" aria-label="Check" %}                      | La característica de seguridad se habilitó pero no levanta alertas en este repositorio.                                                                                                                                                                   |
| {% octicon "x" aria-label="x" %}                              | La característica de seguridad no es compatible con este repositorio.                                                                                                                                                                                     |

Predeterminadamente, los repositorios archivados se excluyen del resumen de seguridad de una organización. Puedes aplicar filtros para ver los repositorios archivados en el resumen de seguridad. Para obtener más información, consulta la sección "[Filtrar las alertas en el resumen de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)".

El resumen de seguridad muestra alertas activas que levantan las características de seguridad. Si no hay alertas en el resumen de seguridad de un repositorio, las vulnerabilidades de seguridad no detectadas o los errores de código podrían aún existir.
