---
title: Configuración de la sincronización de la hora
intro: '{% data variables.product.prodname_ghe_server %} sincroniza automáticamente el reloj conectándose con los servidores NTP. Puedes establecer los servidores NTP que se utilicen para sincronizar el reloj o puedes usar los servidores NTP predeterminados.'
redirect_from:
  - /enterprise/admin/articles/adjusting-the-clock
  - /enterprise/admin/articles/configuring-time-zone-and-ntp-settings
  - /enterprise/admin/articles/setting-ntp-servers
  - /enterprise/admin/categories/time
  - /enterprise/admin/installation/configuring-time-synchronization
  - /enterprise/admin/configuration/configuring-time-synchronization
  - /admin/configuration/configuring-time-synchronization
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Networking
shortTitle: Configure time settings
ms.openlocfilehash: 34ab851e50467a06eb0003d32306d1cd26e9a2d8
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145112834'
---
## Cambiar los servidores NTP predeterminados

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. En la barra lateral de la izquierda, haga clic en **Time**.
    ![El botón Time en la barra lateral de {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/sidebar-time.png)
3. En "Servidor NTP principal", escribe el nombre del host del servidor NTP principal. En "Servidor NTP secundario", escribe el nombre del host del servidor NTP secundario.
    ![Los campos de los servidores NTP principal y secundario en la {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/ntp-servers.png)
4. En la parte inferior de la página, haga clic en **Save settings**.
    ![El botón Save en la {% data variables.enterprise.management_console %}](/assets/images/enterprise/management-console/save-settings.png)
5. Espera que se complete la fase de configuración.

## Corregir un desface de tiempo prolongado

El protocolo NTP corrige permanentemente las pequeñas discrepancias de sincronización de hora. Puedes usar el shell administrativo para sincronizar la hora de inmediato.

{% note %}

**Notas:**
 - No puedes modificar la zona horaria universal coordinada (UTC).
 - Debes evitar que tu hipervisor trate de configurar el reloj de la máquina virtual. Para obtener más información, consulta la documentación proporcionada por el proveedor de virtualización.

{% endnote %}

- Use el comando `chronyc` para sincronizar el servidor con el servidor NTP configurado. Por ejemplo:

```shell
$ sudo chronyc -a makestep
```
