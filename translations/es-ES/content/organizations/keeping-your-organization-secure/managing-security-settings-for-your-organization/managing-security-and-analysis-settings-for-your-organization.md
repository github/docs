---
title: Administrar la configuración de seguridad y análisis de su organización
intro: 'Puedes controlar las características que aseguran y analizan el código en los proyectos de tu organización en {% data variables.product.prodname_dotcom %}.'
permissions: Organization owners can manage security and analysis settings for repositories in the organization.
redirect_from:
  - /github/setting-up-and-managing-organizations-and-teams/managing-secret-scanning-for-your-organization
  - /github/setting-up-and-managing-organizations-and-teams/managing-security-and-analysis-settings-for-your-organization
  - /organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - Organizations
  - Teams
shortTitle: Manage security & analysis
ms.openlocfilehash: 35e34f15b46987eea7bc732313b69ecd4e6396fa
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107705'
---
## Acerca de la administración de los parámetros de seguridad y análisis

{% data variables.product.prodname_dotcom %} puede ayudarte a asegurar los repositorios en tu organización. Puedes administrar las características de seguridad y de análisis para todos los repositorios existentes que los miembros creen en tu organización. {% ifversion ghec %}Si tiene una licencia para {% data variables.product.prodname_GH_advanced_security %}, también puede administrar el acceso a estas características. {% data reusables.advanced-security.more-info-ghas %}{% endif %}{% ifversion fpt %}Las organizaciones que utilizan {% data variables.product.prodname_ghe_cloud %} con una licencia de {% data variables.product.prodname_GH_advanced_security %} también pueden administrar el acceso a estas características. Para más información, vea la [documentación de {% data variables.product.prodname_ghe_cloud %}](/enterprise-cloud@latest/organizations/keeping-your-organization-secure/managing-security-and-analysis-settings-for-your-organization).{% endif %}

{% data reusables.security.some-security-and-analysis-features-are-enabled-by-default %} {% data reusables.security.security-and-analysis-features-enable-read-only %}

## Mostrar la configuración de seguridad y de análisis

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}

La página que se muestra te permite habilitar o inhabilitar todas las características de seguridad y de análisis para los repositorios de tu organización.

{% ifversion ghec %}Si la organización pertenece a una empresa que tiene una licencia para {% data variables.product.prodname_GH_advanced_security %}, la página también contendrá opciones para habilitar y deshabilitar las características de {% data variables.product.prodname_advanced_security %}. Cualquier repositorio que utilice {% data variables.product.prodname_GH_advanced_security %} se listará en la parte inferior de la página.{% endif %}

{% ifversion ghes %}Si tiene una licencia para {% data variables.product.prodname_GH_advanced_security %}, la página también contendrá opciones para habilitar y deshabilitar las características de {% data variables.product.prodname_advanced_security %}. Cualquier repositorio que utilice {% data variables.product.prodname_GH_advanced_security %} se listará en la parte inferior de la página.{% endif %}

{% ifversion ghae %}La página también contendrá opciones para habilitar y deshabilitar las características de {% data variables.product.prodname_advanced_security %}. Cualquier repositorio que utilice {% data variables.product.prodname_GH_advanced_security %} se listará en la parte inferior de la página.{% endif %}

## Habilitación o deshabilitación de una característica para todos los repositorios existentes

Puedes habilitar o inhabilitar las características para todos los repositorios. {% ifversion fpt or ghec %}El impacto de los cambios en los repositorios de la organización se determina en función de su visibilidad:

- **Gráfico de dependencias**: los cambios solo afectan a repositorios privados porque la característica siempre está habilitada para los repositorios públicos.
- **{% data variables.product.prodname_dependabot_alerts %}** : los cambios afectan a todos los repositorios.
- **{% data variables.product.prodname_dependabot_security_updates %}** : los cambios afectan a todos los repositorios.
{%- ifversion ghec %}
- **{% data variables.product.prodname_GH_advanced_security %}** : los cambios solo afectan a los repositorios privados, ya que la {% data variables.product.prodname_GH_advanced_security %} y las características relacionadas siempre están habilitadas para los repositorios públicos.
- **{% data variables.product.prodname_secret_scanning_caps %}** : los cambios afectan a los repositorios en los que también se habilita {% data variables.product.prodname_GH_advanced_security %}. Esta opción controla si {% data variables.product.prodname_secret_scanning_GHAS %} está habilitado o no. {% data variables.product.prodname_secret_scanning_partner_caps %} siempre se ejecuta en todos los repositorios públicos.
{% endif %}

{% endif %}

{% data reusables.advanced-security.note-org-enable-uses-seats %}

{% ifversion ghes or ghec or ghae %} {% note %}

**Nota**: Si se produce un error con el mensaje indica "GitHub Advanced Security no se puede habilitar debido a una configuración de directiva para la organización", ponte en contacto con el administrador de la empresa y pídele que cambie la directiva de GitHub Advanced Security para la empresa. Para obtener más información, consulta "[Aplicación de directivas para Advanced Security en la empresa](/admin/policies/enforcing-policies-for-your-enterprise/enforcing-policies-for-code-security-and-analysis-for-your-enterprise)".
{% endnote %} {% endif %}

1. Vaya a la configuración de seguridad y análisis de su organización. Para más información, vea "[Representación de la configuración de seguridad y análisis](#displaying-the-security-and-analysis-settings)".
2. En "Seguridad y análisis de código", a la derecha de la característica, haga clic en **Deshabilitar todo** o **Habilitar todo**. {% ifversion ghes or ghec %}El control de "{% data variables.product.prodname_GH_advanced_security %}" está deshabilitado si no tienes puestos disponibles en la licencia de {% data variables.product.prodname_GH_advanced_security %}.{% endif %} {% ifversion fpt %} ![Botón "Habilitar todo" o "Deshabilitar todo" para "Configurar características de seguridad y análisis"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-fpt.png) {% endif %} {% ifversion ghec %} ![Botón "Habilitar todo" o "Deshabilitar todo" para "Configurar características de seguridad y análisis"](/assets/images/help/organizations/security-and-analysis-disable-or-enable-all-ghas-ghec.png) {% endif %} {% ifversion ghes %} ![Botón "Habilitar todo" o "Deshabilitar todo" para "Configurar características de seguridad y análisis"](/assets/images/enterprise/3.3/organizations/security-and-analysis-disable-or-enable-all-ghas.png) {% endif %}
   
   
   {% ifversion ghae %} ![Botón "Habilitar todo" o "Deshabilitar todo" para las características "Configurar seguridad y análisis"](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. Opcionalmente, habilita la característica predeterminada para los repositorios nuevos en tu organización.
   {% ifversion fpt or ghec %} ![Opción "Habilitar de forma predeterminada" para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-by-default-in-modal.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. Haga clic en **Deshabilitar CARACTERÍSTICA** o **Habilitar CARACTERÍSTICA** a fin de deshabilitar o habilitar la característica para todos los repositorios de la organización.
   {% ifversion fpt or ghec %} ![Botón para deshabilitar o habilitar la característica](/assets/images/help/organizations/security-and-analysis-enable-dependency-graph.png) {% endif %}
   
   {% endif %} {% ifversion ghae or ghes %}
5. Haga clic en **Habilitar/Deshabilitar todo** o **Habilitar/Deshabilitar para repositorios aptos** para confirmar el cambio.
   ![Botón para habilitar la característica para todos los repositorios aptos de la organización](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-secret-scanning-existing-repos-ghae.png) {% endif %}

   {% data reusables.security.displayed-information %}

## Habilitar o inhabilitar una característica automáticamente cuando se agregan repositorios nuevos

1. Vaya a la configuración de seguridad y análisis de su organización. Para más información, vea "[Representación de la configuración de seguridad y análisis](#displaying-the-security-and-analysis-settings)".
2. En "Seguridad y análisis de código", a la derecha de la característica, habilite o deshabilite la característica de forma predeterminada para los repositorios nuevos{% ifversion fpt or ghec %}, o todos los repositorios privados nuevos,{% endif %} en la organización.
   {% ifversion fpt or ghec %} ![Captura de pantalla de la casilla para habilitar una característica para los repositorios nuevos](/assets/images/help/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %} {% ifversion ghes %} ![Captura de pantalla de la casilla para habilitar una característica para los repositorios nuevos](/assets/images/enterprise/3.3/organizations/security-and-analysis-enable-or-disable-feature-checkbox.png) {% endif %}
   
   {% ifversion ghae %} ![Captura de pantalla de la casilla para habilitar una característica para los repositorios nuevos](/assets/images/enterprise/github-ae/organizations/security-and-analysis-enable-or-disable-secret-scanning-checkbox-ghae.png) {% endif %}

{% ifversion fpt or ghec or ghes %}

## Permitir que el {% data variables.product.prodname_dependabot %} acceda a las dependencias privadas

El {% data variables.product.prodname_dependabot %} puede verificar si hay referencias obsoletas de las dependencias en un proyecto y generar automáticamente una solicitud de cambios para actualizarlas. Para hacerlo, el {% data variables.product.prodname_dependabot %} debe tener acceso a todos los archivos de dependencia que sean el objetivo. Habitualmente, las actualizaciones de versión fallarán si una o más dependencias son inaccesibles. Para más información, vea "[Acerca de las actualizaciones de versiones de {% data variables.product.prodname_dependabot %}](/github/administering-a-repository/about-dependabot-version-updates)".

Predeterminadamente, el {% data variables.product.prodname_dependabot %} no puede actualizar las dependencias que se ubican en los repositorios o en los registros de paquetes privados. Sin embargo, si una dependencia se encuentra en un repositorio privado de {% data variables.product.prodname_dotcom %} dentro de la misma organización que el proyecto que la utiliza, puedes permitir al {% data variables.product.prodname_dependabot %} actualizar la versión exitosamente si le otorgas acceso al repositorio en el que se hospeda.

Si tu código depende de paquetes en un registro privado, puedes permitir que el {% data variables.product.prodname_dependabot %} actualice las versiones de estas dependencias si configuras esto a nivel del repositorio. Para ello, agregue los detalles de autenticación al archivo _dependabot.yml_ del repositorio. Para más información, vea "[Opciones de configuración para el archivo dependabot.yml](/github/administering-a-repository/configuration-options-for-dependency-updates#configuration-options-for-private-registries)".

Para permitir que el {% data variables.product.prodname_dependabot %} acceda a un repositorio privado de {% data variables.product.prodname_dotcom %}:

1. Vaya a la configuración de seguridad y análisis de su organización. Para más información, vea "[Representación de la configuración de seguridad y análisis](#displaying-the-security-and-analysis-settings)".
1. En "Acceso a repositorios privados de {% data variables.product.prodname_dependabot %}", haga clic en **Agregar repositorios privados** o **Agregar repositorios internos y privados**.
   ![Botón para agregar repositorios](/assets/images/help/organizations/dependabot-private-repository-access.png)
1. Comience a escribir el nombre del repositorio que desee permitir.
   ![Campo de búsqueda de repositorios con el menú desplegable Filtrado](/assets/images/help/organizations/dependabot-private-repo-choose.png)
1. Haga clic en el repositorio que desee permitir.

1. Opcionalmente, para eliminar un repositorio de la lista, a la derecha de este, haz clic en {% octicon "x" aria-label="The X icon" %}.
   ![Botón "X" para quitar un repositorio](/assets/images/help/organizations/dependabot-private-repository-list.png) {% endif %}

{% ifversion ghes or ghec %}

## Eliminar el acceso a {% data variables.product.prodname_GH_advanced_security %} desde los repositorios individuales de una organización

Puede administrar el acceso a las características de {% data variables.product.prodname_GH_advanced_security %} de un repositorio desde su pestaña "Configuración". Para más información, vea "[Administración de la configuración de seguridad y análisis del repositorio](/github/administering-a-repository/managing-security-and-analysis-settings-for-your-repository)". Sin embargo, también puedes inhabilitar las características de la {% data variables.product.prodname_GH_advanced_security %} para un reositorio desde la pestaña de "Configuración" de la organización.

1. Vaya a la configuración de seguridad y análisis de su organización. Para más información, vea "[Representación de la configuración de seguridad y análisis](#displaying-the-security-and-analysis-settings)".
1. Para encontrar una lista de todos los repositorios de tu organización que tengan habilitada la {% data variables.product.prodname_GH_advanced_security %}, desplázate hasta la sección "repositorios con {% data variables.product.prodname_GH_advanced_security %}".
  ![Sección de repositorios de {% data variables.product.prodname_GH_advanced_security %}](/assets/images/help/organizations/settings-security-analysis-ghas-repos-list.png) En la tabla se muestra el número de responsables de confirmación únicos para cada repositorio. Esta es la cantidad de plazas que puedes liberar en tus licencias si eliminas el acceso a {% data variables.product.prodname_GH_advanced_security %}. Para más información, vea "[Acerca de la facturación de {% data variables.product.prodname_GH_advanced_security %}](/billing/managing-billing-for-github-advanced-security/about-billing-for-github-advanced-security)".
1. Para eliminar el acceso a la {% data variables.product.prodname_GH_advanced_security %} desde un repositorio y liberar plazas que utilice cualquier confirmante y que son únicas en ese repositorio, haz clic en el {% octicon "x" aria-label="X symbol" %} adyacente.
1. En el cuadro de diálogo de confirmación, haga clic en **Quitar repositorio** para quitar el acceso a las características de {% data variables.product.prodname_GH_advanced_security %}.

{% note %}

**Nota:** Si quita el acceso a {% data variables.product.prodname_GH_advanced_security %} de un repositorio, tendrá que comunicárselo al equipo de desarrollo afectado para que sepan que este cambio se ha realizado de forma explícita. Esto garantiza que no pierdan tiempo en depurar las ejecuciones fallidas del escaneo de código.

{% endnote %}

{% endif %}

## Información adicional

- "[Protección del repositorio](/code-security/getting-started/securing-your-repository)"{% ifversion not fpt %}
- "[Acerca del examen de secretos](/github/administering-a-repository/about-secret-scanning)"{% endif %}{% ifversion not ghae %}
- "[Acerca del gráfico de dependencias](/github/visualizing-repository-data-with-graphs/about-the-dependency-graph)"{% endif %}
- "[Acerca de la seguridad de la cadena de suministro](/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security)"
