---
title: Ver registros de subidas
intro: Los administradores de sitio pueden ver una lista de operaciones de subida de git para cualquier repositorio en la empresa.
redirect_from:
  - /enterprise/admin/articles/viewing-push-logs
  - /enterprise/admin/installation/viewing-push-logs
  - /enterprise/admin/user-management/viewing-push-logs
  - /admin/user-management/viewing-push-logs
  - /admin/user-management/monitoring-activity-in-your-enterprise/viewing-push-logs
versions:
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Auditing
  - Enterprise
  - Git
  - Logging
ms.openlocfilehash: c759d380b7cbc54918e87ed354c8264bc533c31b
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145116473'
---
Las entradas de registro de subida muestran:

- Quién inició la subida
- Si fue un empuje forzado o no
- La rama a la que alguien subió
- El protocolo utilizado para subir
- La dirección IP inicial
- El cliente Git utilizado para subir
- Los hashes SHA de antes y después de la operación

## Ver registros de subida de un repositorio

1. Inicia sesión en {% data variables.product.prodname_ghe_server %} como administrador de sitio.
1. Navegar a un repositorio.
1. En la esquina superior derecha de la página del repositorio, haz clic en {% octicon "rocket" aria-label="The rocket ship" %}.
    ![Icono de cohete para acceder a la configuración del administrador del sitio](/assets/images/enterprise/site-admin-settings/access-new-settings.png) {% data reusables.enterprise_site_admin_settings.security-tab %}
4. En la barra lateral de la izquierda, haga clic en **Push Log**.
![Pestaña del registro de inserciones](/assets/images/enterprise/site-admin-settings/push-log-tab.png)

{% ifversion ghes %}
## Ver registros de subida de un repositorio en la línea de comando

{% data reusables.enterprise_installation.ssh-into-instance %}
1. En el repositorio Git adecuado, abre el archivo de registro de auditoría:
  ```shell
  ghe-repo <em>owner</em>/<em>repository</em> -c "cat audit_log"
  ```
{% endif %}
