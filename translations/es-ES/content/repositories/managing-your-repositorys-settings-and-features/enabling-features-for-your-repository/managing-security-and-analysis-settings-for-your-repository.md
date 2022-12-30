---
title: Administración de la configuración de seguridad y análisis para el repositorio
intro: 'Puedes controlar las características que dan seguridad y analizan tu código en tu proyecto dentro de {% data variables.product.prodname_dotcom %}.'
permissions: People with admin permissions to a repository can manage security and analysis settings for the repository.
redirect_from:
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization-s-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organizations-repositories
  - /articles/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/managing-security-vulnerabilities/managing-alerts-for-vulnerable-dependencies-in-your-organization
  - /github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository
  - /github/administering-a-repository/managing-repository-settings/managing-security-and-analysis-settings-for-your-repository
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Alerts
  - Advanced Security
  - Dependency graph
  - Secret scanning
  - Repositories
shortTitle: Security & analysis
ms.openlocfilehash: 4373c92b6b4e12f56bb26869090955824662b841
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148110058'
---
{% ifversion fpt or ghec %}
## Habilitar o inhabilitar las características de análisis y seguridad para los repositorios públicos

Puedes administrar un subconjunto de características de análisis y seguridad para los repositorios públicos. Otras características se encuentran habilitadas permanentemente, incluyendo la gráfica de dependencias y el escaneo de secretos.

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. En "Seguridad y análisis de código", a la derecha de la característica, haga clic en **Deshabilitar** o **Habilitar**.
  ![Botón "Habilitar" o "Deshabilitar" para las características de "Configurar seguridad y análisis" en un repositorio público](/assets/images/help/repository/security-and-analysis-disable-or-enable-public.png) {% endif %}

## Habilitación o deshabilitación de las características de seguridad y análisis{% ifversion fpt or ghec %} para repositorios privados{% endif %}

Puedes administrar las características de seguridad y análisis para tu repositorio{% ifversion fpt or ghec %}privado o interno {% endif %}.{% ifversion ghes or ghec %} Si tu organización pertenece a una empresa que tiene una licencia para {% data variables.product.prodname_GH_advanced_security %}, entonces tendrás opciones adicionales disponibles. {% data reusables.advanced-security.more-info-ghas %} {% elsif fpt %} Las organizaciones que usan {% data variables.product.prodname_ghe_cloud %} con {% data variables.product.prodname_advanced_security %} disponen de opciones adicionales. Para más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest//repositories/managing-your-repositorys-settings-and-features/enabling-features-for-your-repository/managing-security-and-analysis-settings-for-your-repository#enabling-or-disabling-security-and-analysis-features-for-private-repositories).
{% endif %}

{% data reusables.security.security-and-analysis-features-enable-read-only %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %} {% ifversion fpt or ghes or ghec %}
4. En "Seguridad y análisis de código", a la derecha de la característica, haga clic en **Deshabilitar** o **Habilitar**. {% ifversion not fpt %}El control de "{% data variables.product.prodname_GH_advanced_security %}" está deshabilitado si la empresa no tiene licencias disponibles para {% data variables.product.prodname_advanced_security %}.{% endif %}{% ifversion fpt %} ![Captura de pantalla del botón "Habilitar" o "Deshabilitar" para las características de "Configurar seguridad y análisis"](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png){% elsif ghec %} ![Captura de pantalla del botón "Habilitar" o "Deshabilitar" para las características de "Configurar seguridad y análisis"](/assets/images/help/repository/security-and-analysis-disable-or-enable-ghec-private.png){% elsif ghes > 3.6 or ghae > 3.6 %}<!--Insert screenshot for GHES 3.7 when available-->
  ![Captura de pantalla del botón "Habilitar" o "Deshabilitar" para las características de "Configurar seguridad y análisis"](/assets/images/enterprise/3.3/repository/security-and-analysis-disable-or-enable-ghes.png){% endif %}
  
  {% ifversion not fpt %} {% note %}

  **Nota:** Si deshabilita la revisión de dependencias de {% data variables.product.prodname_GH_advanced_security %}, {% ifversion ghec %}, se deshabilitan {% endif %}{% data variables.product.prodname_secret_scanning %} y {% data variables.product.prodname_code_scanning %}. Cualquier flujo de trabajo, cargas de SARIF o llamados de la API para el {% data variables.product.prodname_code_scanning %} fallarán.
  {% endnote %}{% endif %}

  {% endif %}

  {% ifversion ghae %}
4. En "Seguridad y análisis de código", a la derecha de la característica, haga clic en **Deshabilitar** o **Habilitar**. Antes de que puedas habilitar el "{% data variables.product.prodname_secret_scanning %}" para tu repositorio, puede que necesites habilitar la {% data variables.product.prodname_GH_advanced_security %}.
   ![Habilitación o deshabilitación de {% data variables.product.prodname_GH_advanced_security %} o {% data variables.product.prodname_secret_scanning %} para el repositorio](/assets/images/enterprise/github-ae/repository/enable-ghas-secret-scanning-ghae.png) {% endif %}

## Concesión de acceso a alertas de seguridad

Las alertas de seguridad de un repositorio son visibles para las personas con acceso administrativo al mismo y, cuando este le pertenece a una organización, también para los propietarios de esta. Puedes otorgar acceso a las alertas a equipos y personas adicionales.

{% note %}

Los propietarios de las organizaciones y administradores de repositorio solo pueden otorgar acceso para visualizar alertas de seguridad, tales como alertas del {% data variables.product.prodname_secret_scanning %}, para las personas o equipos que tienen acceso de escritura en el repositorio.

{% endnote %}

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Debajo de "Acceso a las alertas", en el campo de búsqueda, comienza a teclear el nombre de la persona o equipo que quieres encontrar y luego da clic en su nombre dentro de la lista de coincidencias.
   {% ifversion fpt or ghec or ghes %} ![Campo de búsqueda para conceder acceso a las alertas de seguridad a personas y equipos](/assets/images/help/repository/security-and-analysis-security-alerts-person-or-team-search.png) {% endif %}
   
   {% ifversion ghae %} ![Campo de búsqueda para conceder acceso a las alertas de seguridad a personas y equipos](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-person-or-team-search-ghae.png) {% endif %}
   
5. Haga clic en **Guardar cambios**.
   {% ifversion fpt or ghes or ghec %} ![Botón "Guardar cambios" para los cambios en la configuración de alertas de seguridad](/assets/images/help/repository/security-and-analysis-security-alerts-save-changes.png) {% endif %}
   
   {% ifversion ghae %} ![Botón "Guardar cambios" para los cambios en la configuración de alertas de seguridad](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-save-changes-ghae.png) {% endif %}

## Eliminar el acceso a las alertas de seguridad

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
4. Debajo de "Acceso a las alertas", a la derecha de la persona o equipo para el cual quieres eliminar el acceso, haz clic en {% octicon "x" aria-label="X symbol" %}.
   {% ifversion fpt or ghec or ghes %}  
   ![Botón "x" a fin de eliminar el acceso de un usuario a las alertas de seguridad para tu repositorio](/assets/images/help/repository/security-and-analysis-security-alerts-username-x.png) {% endif %}
   
   {% ifversion ghae %} ![Botón "x" para eliminar el acceso de un usuario a las alertas de seguridad para tu repositorio](/assets/images/enterprise/github-ae/repository/security-and-analysis-security-alerts-username-x-ghae.png) {% endif %}
  5. Haga clic en **Guardar cambios**.

## Información adicional

- "[Protección del repositorio](/code-security/getting-started/securing-your-repository)"
- "[Administración de la configuración de seguridad y análisis de la organización](/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization)"
