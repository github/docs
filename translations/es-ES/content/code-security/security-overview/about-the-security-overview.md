---
title: Acerca de la información general sobre seguridad
intro: 'Puedes ver, filtrar y clasificar las alertas de seguridad para los repositorios que pertenezcan a tu organización o equipo en las páginas de información general sobre seguridad.'
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
shortTitle: About the security overview
ms.openlocfilehash: 0e634bafbb699d27588312b57084b557a3c82ca1
ms.sourcegitcommit: fdc4466e89467a7b13239e26c6042dc1428946b6
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163756'
---
{% ifversion ghes < 3.5 or ghae %} {% data reusables.security-overview.beta %} {% endif %}

## Acerca de la información general sobre seguridad

{% data reusables.security-overview.about-the-security-overview %} {% ifversion fpt %}Para obtener más información, consulta [la documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/code-security/security-overview/about-the-security-overview).{% endif %}

{% ifversion ghec or ghes or ghae %} La información general sobre seguridad muestra qué características de seguridad están habilitadas para los repositorios y consolidan las alertas de cada característica. 

- Se muestra la información de riesgo y cobertura de las características y alertas de {% data variables.product.prodname_dependabot %} para todos los repositorios. 
- La información de riesgo y cobertura de las características de {% data variables.product.prodname_GH_advanced_security %}, como {% data variables.product.prodname_code_scanning %} y {% data variables.product.prodname_secret_scanning %}, solo se muestra para empresas que usan {% data variables.product.prodname_GH_advanced_security %}.

Para más información, consulta "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/about-alerts-for-vulnerable-dependencies#dependabot-alerts-for-vulnerable-dependencies)" y "[Acerca de {% data variables.product.prodname_GH_advanced_security %}](/get-started/learning-about-github/about-github-advanced-security)".

## Acerca de filtrar y clasificar las alertas

La información general de seguridad proporciona una manera eficaz de comprender la seguridad de un grupo de repositorios. Las vistas son interactivas con filtros que permiten profundizar en los datos agregados e identificar los orígenes de alto riesgo o baja cobertura de características. A medida que se aplican varios filtros para centrarse en áreas de interés más restringidas, los datos de la vista cambian para reflejar su selección. Para obtener más información, consulta "[Filtrado de alertas en la información general de seguridad](/code-security/security-overview/filtering-alerts-in-the-security-overview)."

{% ifversion security-overview-alert-views %} También hay vistas dedicadas para cada tipo de alerta de seguridad que puedes usar para limitar el análisis a un conjunto específico de alertas y, a continuación, restringir aún más los resultados con un intervalo de filtros específicos para cada vista. Por ejemplo, en la vista de alertas {% data variables.product.prodname_secret_scanning %}, puedes usar el filtro `Secret type` para ver solo las alertas {% data variables.product.prodname_secret_scanning %} de un secreto en particular, como {% data variables.product.pat_generic %} de GitHub.
{% endif %}

{% note %}

**Nota:** La información general sobre seguridad muestra alertas activas que generan las características de seguridad. Si no hay alertas en el resumen de seguridad de un repositorio, las vulnerabilidades de seguridad no detectadas o los errores de código podrían aún existir.

{% endnote %}

## Acerca del resumen de seguridad a nivel organizacional

{% data reusables.security-overview.beta-org-risk-coverage %}

Puedes encontrar la información general sobre seguridad en la pestaña **Seguridad** de cualquier organización que pertenezca a una empresa. Cada vista muestra los datos agregados en los que puede explorar en profundidad, a medida que agregas cada filtro, los datos se actualizan para reflejar los repositorios o alertas que has seleccionado.

El equipo de seguridad de aplicaciones de tu compañía puede utilizar las diferentes vistas tanto para los análisis específicos como para los generales del estado de seguridad de tu organización. {% ifversion security-overview-org-risk-coverage %}Por ejemplo, el equipo puede usar la página "Cobertura de seguridad" para supervisar la adopción de características en toda la organización o por un equipo específico a medida que implementes {% data variables.product.prodname_GH_advanced_security %}, o bien usa la página "Riesgo de seguridad" para identificar repositorios con más de cinco alertas de {% data variables.product.prodname_secret_scanning %}. {% else %} Por ejemplo, pueden usar la página de información general para supervisar la adopción de características por la organización o por un equipo específico a medida que implementes {% data variables.product.prodname_GH_advanced_security %} en la empresa, o para revisar todas las alertas de un tipo específico y un nivel de gravedad en todos los repositorios de la organización. {% endif %}

Los propietarios y administradores de seguridad de las organizaciones tienen acceso a la información general sobre seguridad de estas. {% ifversion ghec or ghes > 3.6 or ghae > 3.6 %}Los miembros de la organización pueden también acceder a la información general de seguridad a nivel de organización para ver los resultados de los repositorios en los que tienen privilegios de administrador o se les ha concedido acceso a las alertas de seguridad. Para más información sobre cómo administrar el acceso a alertas de seguridad, consulta "[Administración de la configuración de seguridad y análisis para el repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)". {% endif %}

{% ifversion security-overview-org-risk-coverage %}
### Vista de Riesgo de seguridad

En esta vista se muestran los datos sobre los repositorios afectados por diferentes tipos de alertas de seguridad. 

- Usa las listas desplegables **Tipo** y **Equipos** para agregar filtros de grupo y tipo de repositorio.
- Haz clic en **Abrir alertas** o **Repositorios afectados** para mostrar solo los repositorios con un tipo específico de alerta de seguridad.

Además, al hacer clic en el cuadro de búsqueda, se muestra una lista del conjunto completo de filtros disponibles.

![Captura de pantalla de la vista Riesgo de seguridad para una organización](/assets/images/help/security-overview/security-risk-view.png)

### Vista Cobertura de seguridad

En esta vista se muestran los datos sobre qué repositorios usan características de seguridad. 

- Usa las listas desplegables **Tipo** y **Equipos** para agregar filtros de grupo y tipo de repositorio.
- Haz clic en **Alertas habilitadas** y otras características enumeradas en el encabezado para ver solo los repositorios con esas características habilitadas.
- Cambia cualquier filtro `FEATURE:enabled` a `FEATURE:not-enabled` en el cuadro de búsqueda para ver los repositorios que no han habilitado una característica.
- Para cualquier repositorio, haz clic en los puntos suspensivos ( **...** ) y, después, en **Configuración de seguridad** para habilitar características adicionales.

Además, al hacer clic en el cuadro de búsqueda, se muestra una lista del conjunto completo de filtros disponibles.

![Captura de pantalla de la vista Cobertura de seguridad para una organización](/assets/images/help/security-overview/security-coverage-view.png)

{% else %}

### Descripción de la información general de seguridad principal

![Captura de pantalla de la información general de seguridad](/assets/images/help/security-overview/security-overview-org-legacy.png)

Para cada repositorio en el resumen de seguridad, verás iconos de cada tipo de característica de seguridad y cuántas alertas hay para cada tipo. Si una característica de seguridad no está habilitada para un repositorio, el icono de esa característica aparecerá atenuado. Además, se calcula una puntuación de riesgo para cada repositorio en función de su análisis de código, Dependabot y las alertas de análisis de secretos. Esta puntuación se encuentra en beta y debe utilizarse con cuidado. Su algoritmo y enfoque está sujeto a cambios.

![Los iconos en el resumen de seguridad](/assets/images/help/security-overview/security-overview-icons.png)

| Icono | Significado |
| -------- | -------- |
| {% octicon "code-square" aria-label="Code scanning alerts" %} | Alertas de {% data variables.product.prodname_code_scanning_capc %}. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_code_scanning %}](/code-security/secure-coding/about-code-scanning)". |
| {% octicon "key" aria-label="Secret scanning alerts" %} | Alertas de {% data variables.product.prodname_secret_scanning_caps %}. Para obtener más información, consulta "[Acerca de {% data variables.product.prodname_secret_scanning %}](/code-security/secret-security/about-secret-scanning)". |
| {% octicon "hubot" aria-label="Dependabot alerts" %} | {% data variables.product.prodname_dependabot_alerts %}. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/supply-chain-security/about-alerts-for-vulnerable-dependencies)". |
| {% octicon "check" aria-label="Check" %} | La característica de seguridad se habilitó pero no levanta alertas en este repositorio. |
| {% octicon "x" aria-label="x" %} | La característica de seguridad no es compatible con este repositorio. |

{% endif %}

{% ifversion ghec or ghes > 3.4 or ghae > 3.4 %}
## Acerca del resumen de seguridad a nivel empresarial

Puedes encontrar la información general de seguridad en la pestaña **Seguridad del código** de tu empresa. Cada información general muestra información de seguridad agregada y específica del repositorio para tu empresa. Puedes ver los repositorios que pertenecen a tu empresa que tienen alertas de seguridad, todas las alertas de seguridad o alertas de seguridad específicas de características de toda la empresa.

Los propietarios de la empresa solo pueden ver alertas para las organizaciones de las que son propietarios o administradores de seguridad.{% ifversion ghec or ghes > 3.5 or ghae > 3.5 %} Los propietarios de empresas pueden unirse a una organización como propietario de la organización para ver todas sus alertas en la información general de seguridad de nivel empresarial. Para más información, consulta "[Administración del rol en una organización que pertenece a la empresa](/admin/user-management/managing-organizations-in-your-enterprise/managing-your-role-in-an-organization-owned-by-your-enterprise)".{% endif %}

Los propietarios de organizaciones y administradores de seguridad para las organizaciones de una empresa tienen acceso a la información general de seguridad a nivel empresarial. Pueden ver los repositorios y alertas de las organizaciones a las cuales tienen acceso completo.
{% endif %}

{% ifversion ghes < 3.7 or ghae < 3.7 %}
## Acerca del resumen de seguridad a nivel de equipo

Puedes encontrar la información general sobre seguridad en la pestaña **Seguridad** de cualquier equipo de una organización que pertenezca a una empresa.

A nivel de equipo, el resumen de seguridad muestra la información de seguridad específica del repositorio para aquellos en los que el equipo tenga privilegios de administración. Para obtener más información, consulta "[Administración del acceso de equipo a un repositorio de la organización](/organizations/managing-access-to-your-organizations-repositories/managing-team-access-to-an-organization-repository)".
{% endif %}

## Información adicional

- "[Protección del repositorio](/code-security/getting-started/securing-your-repository)"
- "[Protección de la organización](/code-security/getting-started/securing-your-organization)"
- "[Introducción a la adopción de GitHub Advanced Security a escala](/code-security/adopting-github-advanced-security-at-scale/introduction-to-adopting-github-advanced-security-at-scale)" {% endif %}
