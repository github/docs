---
title: Configuración de alertas de Dependabot
intro: 'Permite que se generen {% data variables.product.prodname_dependabot_alerts %} cuando se encuentre una nueva dependencia vulnerable {% ifversion GH-advisory-db-supports-malware %}o malware {% endif %}en uno de tus repositorios.'
shortTitle: Configure Dependabot alerts
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: how_to
topics:
  - Dependabot
  - Security updates
  - Alerts
  - Dependencies
  - Pull requests
  - Repositories
ms.openlocfilehash: 7844380c395b1ab0c43ba01fa151bf403c6a0349
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146455521'
---
## Acerca de {% data variables.product.prodname_dependabot_alerts %} para dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} y malware{% endif %}

{% data reusables.repositories.a-vulnerability-is %} 

{% data variables.product.prodname_dependabot %} examina el código cuando se agrega una nueva auditoría a {% data variables.product.prodname_advisory_database %} o el grafo de dependencias de los cambios en un repositorio. Cuando se detectan dependencias vulnerables{% ifversion GH-advisory-db-supports-malware %} o malware{% endif %}, se generan {% data variables.product.prodname_dependabot_alerts %}. Para más información, vea "[Acerca de {% data variables.product.prodname_dependabot_alerts %}](/code-security/dependabot/dependabot-alerts/about-dependabot-alerts)".

Puedes habilitar o deshabilitar las {% data variables.product.prodname_dependabot_alerts %} para:
* Tu cuenta personal
* Tu repositorio
* su organización,

## Administración de las {% data variables.product.prodname_dependabot_alerts %} para la cuenta personal

{% ifversion fpt or ghec %}

Puedes habilitar o deshabilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que pertenezcan a tu cuenta personal.

### Habilitación o deshabilitación de las {% data variables.product.prodname_dependabot_alerts %} para repositorios existentes

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. En "Seguridad y análisis de código", a la derecha de las {% data variables.product.prodname_dependabot_alerts %}, haz clic en **Deshabilitar todo** o **Habilitar todo**.
 ![Captura de pantalla de las características de "Configurar seguridad y análisis" con los botones "Habilitar todo" o "Deshabilitar todo" resaltados](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-all.png)
4. Opcionalmente, habilita las {% data variables.product.prodname_dependabot_alerts %} de forma predeterminada para los repositorios que crees.
  ![Captura de pantalla de "Habilitar las alertas de Dependabot" con la casilla "Habilitar de forma predeterminada para nuevos repositorios privados" resaltada](/assets/images/help/dependabot/dependabot-alerts-enable-by-default.png)
5. Haz clic en **Deshabilitar las {% data variables.product.prodname_dependabot_alerts %}** o **Habilitar las {% data variables.product.prodname_dependabot_alerts %}** para deshabilitar o habilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que posees.
  ![Captura de pantalla de "Habilitar las alertas de Dependabot" con el botón "Habilitar las alertas de Dependabot" resaltado](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts.png)

Al habilitar las {% data variables.product.prodname_dependabot_alerts %} para repositorios existentes, los resultados se mostrarán en GitHub en cuestión de minutos.

### Habilitación o deshabilitación de las {% data variables.product.prodname_dependabot_alerts %} para repositorios nuevos

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.security-analysis %}
3. En "Seguridad y análisis de código", a la derecha de {% data variables.product.prodname_dependabot_alerts %}, habilita o deshabilita las {% data variables.product.prodname_dependabot_alerts %} de forma predeterminada para los repositorios que crees.
  ![Captura de pantalla de "Configurar seguridad y análisis" con "Habilitar para todos los nuevos repositorios privados" resaltado](/assets/images/help/dependabot/dependabot-alerts-enable-for-all-new-repositories.png)

{% else %} El propietario de la empresa puede habilitar o deshabilitar las {% data variables.product.prodname_dependabot_alerts %} para los repositorios. Para obtener más información, consulta ["Habilitación de Dependabot para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".

{% endif %}

## Administración de las {% data variables.product.prodname_dependabot_alerts %} para el repositorio

{% ifversion fpt or ghec %}Puedes administrar las {% data variables.product.prodname_dependabot_alerts %} para el repositorio público, privado o interno.

Predeterminadamente, notificamos a las personas con permisos administrativos en los repositorios afectados sobre las {% data variables.product.prodname_dependabot_alerts %} nuevas. {% data variables.product.product_name %} nunca divulga públicamente las dependencias no seguras de un repositorio. También puedes hacer que las {% data variables.product.prodname_dependabot_alerts %} sean visibles para más personas o equipos que trabajen en los repositorios que te pertenecen o para los cuales tienes permisos administrativos.

{% data reusables.security.security-and-analysis-features-enable-read-only %}

### Habilitación o deshabilitación de las {% data variables.product.prodname_dependabot_alerts %} para un repositorio

{% data reusables.repositories.navigate-to-repo %} {% data reusables.repositories.sidebar-settings %} {% data reusables.repositories.navigate-to-code-security-and-analysis %}
1. En "Seguridad y análisis del código", a la derecha de {% data variables.product.prodname_dependabot_alerts %}, haz clic en **Habilitar** para habilitar alertas o en **Deshabilitar** para deshabilitarlas. 
  ![Captura de pantalla de la sección "Seguridad y análisis del código" con el botón para habilitar {% data variables.product.prodname_dependabot_security_updates %}](/assets/images/help/repository/security-and-analysis-disable-or-enable-fpt-private.png) {% endif %}{% ifversion ghes or ghae %}

El propietario de la empresa puede habilitar o deshabilitar las {% data variables.product.prodname_dependabot_alerts %} para el repositorio. Para obtener más información, consulta ["Habilitación de Dependabot para la empresa](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
{% endif %}

## Administración de {% data variables.product.prodname_dependabot_alerts %} para la organización
{% ifversion fpt or ghec %}Puedes habilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios que pertenezcan a tu organización. Los cambios afectan a todos los repositorios.

### Habilitación o deshabilitación de las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios existentes

{% data reusables.profile.access_org %} {% data reusables.profile.org_settings %} {% data reusables.organizations.security-and-analysis %}
2. En "Seguridad y análisis de código", a la derecha de las {% data variables.product.prodname_dependabot_alerts %}, haz clic en **Deshabilitar todo** o **Habilitar todo**. 
   {% ifversion fpt or ghec %} ![Captura de pantalla de las características de "Configurar seguridad y análisis" con el botón "Habilitar todo" o "Deshabilitar todo" resaltado para las alertas de Dependabot](/assets/images/help/dependabot/dependabot-alerts-disable-or-enable-fpt.png) {% endif %} {% ifversion ghae %} ![Botón "Habilitar todo" o "Deshabilitar todo" para las características de "Configurar seguridad y análisis"](/assets/images/enterprise/github-ae/organizations/security-and-analysis-disable-or-enable-all-ghae.png) {% endif %} {% ifversion fpt or ghec %}
3. Opcionalmente, habilita las {% data variables.product.prodname_dependabot_alerts %} de forma predeterminada para los repositorios nuevos de la organización.
   {% ifversion fpt or ghec %} ![Captura de pantalla de la opción "Habilitar de forma predeterminada" para los repositorios nuevos](/assets/images/help/dependabot/dependabot-alerts-enable-by-default-organizations.png) {% endif %}
   
   {% endif %} {% ifversion fpt or ghec %}
4. Haz clic en **Deshabilitar las {% data variables.product.prodname_dependabot_alerts %}** o **Habilitar las {% data variables.product.prodname_dependabot_alerts %}** para deshabilitar o habilitar las {% data variables.product.prodname_dependabot_alerts %} para todos los repositorios de la organización.
   {% ifversion fpt or ghec %} ![Captura de pantalla del cuadro de diálogo modal "Habilitar las alertas de Dependabot" con el botón para deshabilitar o habilitar la característica resaltado](/assets/images/help/dependabot/dependabot-alerts-enable-dependabot-alerts-organizations.png) {% endif %}{% endif %}{% endif %}{% ifversion ghes or ghae %} El propietario de la empresa puede habilitar o deshabilitar las {% data variables.product.prodname_dependabot_alerts %} para la organización. Para obtener más información, consulta "[Acerca de Dependabot para el servidor de GitHub Enterprise](/admin/configuration/configuring-github-connect/enabling-dependabot-for-your-enterprise)".
   {% endif %}
