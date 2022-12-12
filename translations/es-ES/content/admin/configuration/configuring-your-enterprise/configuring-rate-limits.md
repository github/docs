---
title: Configuración de los límites de frecuencia
intro: 'Puedes configurar límites de tasa para {% data variables.product.prodname_ghe_server %} usando la {% data variables.enterprise.management_console %}.'
redirect_from:
  - /enterprise/admin/installation/configuring-rate-limits
  - /enterprise/admin/configuration/configuring-rate-limits
  - /admin/configuration/configuring-rate-limits
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Infrastructure
  - Performance
ms.openlocfilehash: 2a90093f833639fa247acc7292d9897728043005
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148107553'
---
## Habilitación de límites de frecuencia para {% data variables.product.prodname_enterprise_api %}

Si se habilitan límites de frecuencia en las {% data variables.product.prodname_enterprise_api %}, se puede impedir el uso excesivo de recursos por parte de usuarios individuales o sin autenticación. Para más información, vea "[Recursos en la API REST](/rest/overview/resources-in-the-rest-api#rate-limiting)".

{% ifversion ghes %} Puede excluir una lista de usuarios de los límites de frecuencia de API mediante la utilidad `ghe-config` en el shell administrativo. Para más información, vea "[Utilidades de línea de comandos](/enterprise/admin/configuration/command-line-utilities#ghe-config)".
{% endif %}

{% note %}

**Nota:** En {% data variables.enterprise.management_console %} se indica el período de tiempo (por minuto o por hora) de cada límite de frecuencia.

{% endnote %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. En "Limitación de frecuencia", seleccione **Habilitar limitación de frecuencia de API HTTP**.
![Casilla para habilitar la limitación de frecuencia de API](/assets/images/enterprise/management-console/api-rate-limits-checkbox.png)
3. Escribe los límites para las solicitudes autenticadas y no autenticadas para cada API o acepta los límites predeterminados que aparecen completados.
{% data reusables.enterprise_management_console.save-settings %}

{% ifversion enterprise-authentication-rate-limits %}
## Configuración de límites de frecuencia para la autenticación en la {% data variables.enterprise.management_console %}

Puedes configurar el tiempo de bloqueo y los límites de intentos de inicio de sesión para la {% data variables.enterprise.management_console %}. Si un usuario supera el límite de intentos de inicio de sesión, la {% data variables.enterprise.management_console %} permanecerá bloqueada durante el tiempo de bloqueo establecido. {% data reusables.enterprise_management_console.unlocking-management-console-with-shell %}


{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. En "Limitación de frecuencia de intentos de inicio de sesión", configura el tiempo de bloqueo y el límite de frecuencia de intentos de inicio de sesión, o bien acepta la configuración predeterminada que ya está rellenada.
![Campos para configurar el tiempo de bloqueo y el límite de frecuencia de intentos de inicio de sesión](/assets/images/enterprise/management-console/login-attempt-rate-limiting.png) {% data reusables.enterprise_management_console.save-settings %}

{% endif %}
## Habilitar los límites de tasa secundarios

Si se establecen límites de frecuencia secundarios, se protege el nivel general de servicio en {% data variables.location.product_location %}.

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %} {% ifversion ghes %}
2. En "Limitación de frecuencia", seleccione **Habilitar limitación de frecuencia secundaria**.
   ![Casilla para habilitar la limitación de frecuencia secundaria](/assets/images/enterprise/management-console/secondary-rate-limits-checkbox.png) {% else %}
2. En "Limitación de frecuencia", seleccione **Habilitar limitación de frecuencia de abuso**.
    ![Casilla para habilitar la limitación de frecuencia de abuso](/assets/images/enterprise/management-console/abuse-rate-limits-checkbox.png) {% endif %}
3. Escribe límites para las solicitudes totales, límite de CPU y límite de CPU para búsquedas, o acepta los límites predeterminados que aparecen completados.
{% data reusables.enterprise_management_console.save-settings %}

## Habilitación de los límites de frecuencia para Git

Si un miembro del personal de {% data variables.product.company_short %} lo ha recomendado, puedes aplicar límites de frecuencia de Git por red de repositorios o por identificador de usuario. Los límites de tasa de Git se expresan en operaciones simultáneas por minuto y se adaptan en función de la carga de CPU actual.

{% warning %}

**Advertencia**: Te recomendamos que dejes esta configuración deshabilitada, a menos que lo recomiende directamente un miembro del personal de {% data variables.product.company_short %}. Las operaciones de Git rara vez son el principal impulsor del uso de CPU y RAM. Si se habilita esta característica, las operaciones de Git podrían ser más propensas a errores en condiciones de carga elevada, pero no se aborda la causa subyacente de esas condiciones.

{% endwarning %}

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. En "Limitación de frecuencia", seleccione **Habilitar limitación de frecuencia de Git**.
![Casilla para habilitar la limitación de frecuencia de Git](/assets/images/enterprise/management-console/git-rate-limits-checkbox.png)
3. Escribe los límites para cada red de repositorios o ID de usuario.
  ![Campos para los límites de red de repositorio e identificador de usuario](/assets/images/enterprise/management-console/example-git-rate-limits.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ghes > 3.4 %}

## Configuración de límites de frecuencia para {% data variables.product.prodname_actions %}

Puedes aplicar un límite de frecuencia a las ejecuciones de flujo de trabajo de {% data variables.product.prodname_actions %}. Para obtener más información acerca de {% data variables.product.prodname_actions %}, consulta "[Acerca de los datos {% data variables.product.prodname_actions %} para empresas](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/about-github-actions-for-enterprises)".

### Acerca de los límites de frecuencia para {% data variables.product.prodname_actions %}

Tu instancia {% data variables.product.product_name %} asigna cada trabajo de flujo de trabajo {% data variables.product.prodname_actions %} a un ejecutor. Si la instancia no puede asignar inmediatamente un trabajo a un ejecutor disponible, el trabajo esperará en una cola hasta que un ejecutor esté disponible. Si {% data variables.product.prodname_actions %} experimenta una carga elevada de forma sostenida, la cola puede realizar copias de seguridad y el rendimiento de {% data variables.location.product_location %} podría empeorar.

Para evitar esta degradación del rendimiento, puedes configurar un límite de frecuencia para {% data variables.product.prodname_actions %}. Este límite de frecuencia se expresa en ejecuciones de trabajos por minuto. {% data variables.product.product_name %} calcula y aplica el límite de frecuencia para la suma total de todas las ejecuciones de trabajo en la instancia. Si las ejecuciones superan el límite de frecuencia, las ejecuciones adicionales darán un error en lugar de entrar en la cola. El siguiente error aparecerá en las anotaciones de la ejecución.

> Has superado el límite de frecuencia de las solicitudes de ejecución de flujo de trabajo. Espera antes de reintentar la ejecución.

Un límite de frecuencia adecuado protege {% data variables.location.product_location %} frente al uso anómalo de {% data variables.product.prodname_actions %} sin interferir con las operaciones diarias. El umbral exacto depende de los recursos disponibles de la instancia y del perfil de carga general. Para obtener más información sobre los requisitos de hardware para {% data variables.product.prodname_actions %}, consulta "[Introducción a {% data variables.product.prodname_actions %} para {% data variables.product.product_name %}](/admin/github-actions/getting-started-with-github-actions-for-your-enterprise/getting-started-with-github-actions-for-github-enterprise-server#review-hardware-requirements)."

De forma predeterminada, el límite de frecuencia para {% data variables.product.prodname_actions %} está deshabilitado. Dado que {% data variables.product.product_name %} puede controlar picos temporales de uso sin degradación del rendimiento, este límite de frecuencia está pensado para protegerse frente a una carga elevada sostenida. Se recomienda dejar deshabilitado el límite de frecuencia a menos que estés experimentando problemas de rendimiento. En algunos casos, {% data variables.contact.github_support %} puede recomendar que habilites un límite de frecuencia para {% data variables.product.prodname_actions %}. 

### Habilitación o deshabilitación de los límites de frecuencia para {% data variables.product.prodname_actions %}

{% data reusables.enterprise_installation.ssh-into-instance %}
1. Para habilitar y configurar el límite de frecuencia, ejecuta los dos comandos siguientes, reemplazando **RUNS-PER-MINUTE** por el valor de su elección.

   ```shell
   ghe-config actions-rate-limiting.enabled true
   ghe-config actions-rate-limiting.queue-runs-per-minute RUNS-PER-MINUTE
   ```
1. Para deshabilitar el límite de frecuencia después de habilitarlo, ejecuta el siguiente comando.

   ```
   ghe-config actions-rate-limiting.enabled false
   ```
1. Para aplicar la configuración, ejecuta el siguiente comando.

   ```
   ghe-config-apply
   ```
1. Espera que se complete la fase de configuración.

{% endif %}
