---
title: Acceder al tablero del monitor
intro: '{% data variables.product.prodname_ghe_server %} incluye un tablero de monitoreo en la web que muestra los datos históricos sobre tu aparato {% data variables.product.prodname_ghe_server %}, como la CPU y el uso del almacenamiento, los tiempos de respuesta de la aplicación y de la autenticación y la salud general del sistema.'
redirect_from:
  - /enterprise/admin/installation/accessing-the-monitor-dashboard
  - /enterprise/admin/enterprise-management/accessing-the-monitor-dashboard
  - /admin/enterprise-management/accessing-the-monitor-dashboard
versions:
  ghes: '*'
type: how_to
topics:
  - Enterprise
  - Fundamentals
  - Infrastructure
  - Monitoring
  - Performance
shortTitle: Access the monitor dashboard
ms.openlocfilehash: b529369813635a8cafe5f7c7ac6fc04af39001f5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146332372'
---
## Acceder al tablero del monitor

{% data reusables.enterprise_site_admin_settings.access-settings %} {% data reusables.enterprise_site_admin_settings.management-console %}
2. En la parte superior de la página, haga clic en **Supervisión**.
![El vínculo Panel de supervisión](/assets/images/enterprise/management-console/monitor-dash-link.png)

## Solucionar problemas de la asignación de los recursos comunes en su aparato

{% note %}

**Nota**: Como el sondeo periódico de {% data variables.product.product_location %} con integración continua (CI) o servidores de compilación puede provocar un ataque por denegación de servicio que genere problemas, es recomendable usar webhooks para insertar las actualizaciones. Para más información, vea "[Acerca de los webhooks](/enterprise/user/articles/about-webhooks/)".

{% endnote %}

Utiliza el tablero del monitor para mantenerse informado sobre la salud del recurso de su aparato y tomar decisiones sobre cómo corregir los problemas de alto uso.  

| Problema | Posible(s) causa(s) | Recomendaciones |
| -------- | ----------------- | --------------- |
| Uso elevado de CPU | Conexión a la VM desde otros servicios o programas que se ejecutan en el mismo host | De ser posible, vuelve a configurar los otros servicios o programas para utilizar menos recursos de la CPU. Para aumentar el total de recursos de CPU para la máquina virtual, vea "[Aumento de los recursos de CPU o memoria](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)". |
| Uso de memoria alto | Conexión a la VM desde otros servicios o programas que se ejecutan en el mismo host | De ser posible, vuelve a configurar otros servicios o programas para utilizar menos memoria. Para aumentar la memoria disponible total para la máquina virtual, vea "[Aumento de los recursos de CPU o memoria](/enterprise/admin/guides/installation/increasing-cpu-or-memory-resources/)". |
| Baja disponibilidad de espacio en el disco | Binarios grandes o archivos de registro que consumen espacio del disco | De ser posible, aloje los binarios grandes en un servidor separado y comprima o archive los archivos de registro. Si es necesario, aumente el espacio en disco en la máquina virtual; para ello, siga los pasos de la plataforma en "[Aumento de la capacidad de almacenamiento](/enterprise/admin/guides/installation/increasing-storage-capacity/)". |
| Tiempos de respuesta más altos que lo común | Los suelen causar alguna de las propuestas anteriores | Identifica y corrige las propuestas subyacentes. Si los tiempos de respuesta siguen altos, contáctate con {% data variables.contact.contact_ent_support %}. |
| Índices de error elevados | Propuestas de software  | Contáctate con {% data variables.contact.contact_ent_support %} e incluye tu paquete de soporte. Para más información, vea "[Suministro de datos al soporte técnico de {% data variables.product.prodname_enterprise %}](/enterprise/{{ currentVersion}}/admin/guides/enterprise-support/providing-data-to-github-support#creating-and-sharing-support-bundles)". |
