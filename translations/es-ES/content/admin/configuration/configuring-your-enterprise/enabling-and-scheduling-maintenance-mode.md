---
title: Habilitar y programar el modo de mantenimiento
intro: 'Algunos procedimientos de mantenimiento estándar, como actualizar {% data variables.product.product_location %} o restaurar copias de seguridad, requieren que la instancia se desconecte para que se pueda usar normalmente.'
redirect_from:
  - /enterprise/admin/maintenance-mode
  - /enterprise/admin/categories/maintenance-mode
  - /enterprise/admin/articles/maintenance-mode
  - /enterprise/admin/articles/enabling-maintenance-mode
  - /enterprise/admin/articles/disabling-maintenance-mode
  - /enterprise/admin/guides/installation/maintenance-mode
  - /enterprise/admin/installation/enabling-and-scheduling-maintenance-mode
  - /enterprise/admin/configuration/enabling-and-scheduling-maintenance-mode
  - /admin/configuration/enabling-and-scheduling-maintenance-mode
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Maintenance
  - Upgrades
shortTitle: Configure maintenance mode
ms.openlocfilehash: 45ac412b1ae13e69d710c4dd93072143f6ffa502
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146331772'
---
## Acerca del modo de mantenimiento

Para algunos tipos de operaciones es necesario desconectar {% data variables.product.product_location %} y ponerlo en modo de mantenimiento:
- Actualizar a una versión nueva de tu {% data variables.product.prodname_ghe_server %}
- Aumentar los recursos de CPU, memoria o almacenamiento asignados a la máquina virtual
- Migrar datos desde una máquina virtual a otra
- Restaurar datos desde una instantánea de {% data variables.product.prodname_enterprise_backup_utilities %}
- Solucionar ciertos tipos de problemas críticos de solicitud

Recomendamos que programe una ventana de mantenimiento para, al menos, los siguientes 30 minutos para darle a los usuarios tiempo para prepararse. Cuando está programada una ventana de mantenimiento, todos los usuarios verán un mensaje emergente al acceder al sitio.



![Mensaje emergente para el usuario final acerca del mantenimiento programado](/assets/images/enterprise/maintenance/maintenance-scheduled.png)

Cuando la instancia está en modo de mantenimiento, se rechazan todos los accesos HTTP y Git. Las operaciones de extracción, clonación y subida de Git también se rechazan con un mensaje de error que indica que temporalmente el sitio no se encuentra disponible. En configuraciones de alta disponibilidad, la replicación de Git se pausará. No se ejecutarán los jobs de las Github Actions. Al visitar el sitio desde un navegador aparece una página de mantenimiento.

![La pantalla de presentación del modo de mantenimiento](/assets/images/enterprise/maintenance/maintenance-mode-maintenance-page.png)

{% ifversion ip-exception-list %}

Puedes realizar la validación inicial de la operación de mantenimiento configurando una lista de excepciones IP para permitir el acceso a {% data variables.product.product_location %} solo desde las direcciones IP y los intervalos proporcionados. Los intentos de acceder a {% data variables.product.product_location %} desde direcciones IP no especificadas en la lista de excepciones IP recibirán una respuesta coherente con las enviadas cuando la instancia esté en modo de mantenimiento. 

{% endif %}

## Habilitar el modo de mantenimiento de inmediato o programar una ventana de mantenimiento para más tarde

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. En la parte superior de {% data variables.enterprise.management_console %}, haga clic en **Mantenimiento**.
  ![Pestaña Mantenimiento](/assets/images/enterprise/management-console/maintenance-tab.png)
3. En "Habilitar y Programar", decide si habilitas el modo de mantenimiento de inmediato o programas una ventana de mantenimiento para otro momento.
    - Para habilitar el modo de mantenimiento de inmediato, use el menú desplegable y haga clic en **ahora**.
    ![Menú desplegable con la opción para habilitar el modo de mantenimiento ahora seleccionada](/assets/images/enterprise/maintenance/enable-maintenance-mode-now.png)
    - Para programar una ventana de mantenimiento para otro momento, usa el menú desplegable y haz clic en un horario de inicio.
    ![Menú desplegable con la opción para programar una ventana de mantenimiento en dos horas seleccionada](/assets/images/enterprise/maintenance/schedule-maintenance-mode-two-hours.png)
4. Seleccione **Habilitar modo de mantenimiento**.
  ![Casilla para habilitar o programar el modo de mantenimiento](/assets/images/enterprise/maintenance/enable-maintenance-mode-checkbox.png) {% data reusables.enterprise_management_console.save-settings %}

{% ifversion ip-exception-list %}

## Validación de cambios en modo de mantenimiento mediante la lista de excepciones IP

La lista de excepciones IP proporciona acceso controlado y restringido a {% data variables.product.product_location %}, lo que es ideal para la validación inicial del estado del servidor después de una operación de mantenimiento. Una vez habilitado, {% data variables.product.product_location %} se quitará del modo de mantenimiento y solo estará disponible para las direcciones IP configuradas. La casilla del modo de mantenimiento se actualizará para reflejar el cambio en el estado.

Si vuelves a habilitar el modo de mantenimiento, la lista de excepciones IP se deshabilitará y {% data variables.product.product_location %} volverá al modo de mantenimiento. Si solo deshabilitas la lista de excepciones IP, {% data variables.product.product_location %} volverá a la operación normal.

También puedes usar una utilidad de línea de comandos para configurar la lista de excepciones de IP. Para más información, vea "[Utilidades de línea de comandos](/admin/configuration/configuring-your-enterprise/command-line-utilities#ghe-maintenance)" y "[Acceso al shell administrativo (SSH)](/admin/configuration/configuring-your-enterprise/accessing-the-administrative-shell-ssh)".

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
1. En la parte superior de {% data variables.enterprise.management_console %}, haz clic en **Mantenimiento** y confirma que el modo de mantenimiento ya está habilitado.
  ![Pestaña Mantenimiento](/assets/images/enterprise/management-console/maintenance-tab.png)
1. Selecciona **Habilitar lista de excepciones IP**.
 ![Casilla para habilitar la lista de excepciones IP](/assets/images/enterprise/maintenance/enable-ip-exception-list.png)
1. En el cuadro de texto, escribe una lista válida de direcciones IP o bloques CIDR separados por espacios a los que se debe permitir el acceso a {% data variables.product.product_location %}.
 ![campo completado para direcciones IP](/assets/images/enterprise/maintenance/ip-exception-list-ip-addresses.png)
1. Haga clic en **Save**(Guardar).
![después de que se haya guardado la lista de excepciones de IP](/assets/images/enterprise/maintenance/ip-exception-save.png)

{% endif %}

## Programar el modo de mantenimiento con {% data variables.product.prodname_enterprise_api %}

Puedes programar el mantenimiento para horarios o días diferentes con {% data variables.product.prodname_enterprise_api %}. Para más información, vea "[Consola de administración](/enterprise/user/rest/reference/enterprise-admin#enable-or-disable-maintenance-mode)".

## Habilitar o inhabilitar el modo de mantenimiento para todos los nodos en una agrupación

Con la utilidad `ghe-cluster-maintenance`, puede establecer o anular el modo de mantenimiento para cada nodo de un clúster.

```shell
$ ghe-cluster-maintenance -h
# Shows options
$ ghe-cluster-maintenance -q
# Queries the current mode
$ ghe-cluster-maintenance -s
# Sets maintenance mode
$ ghe-cluster-maintenance -u
# Unsets maintenance mode
```
