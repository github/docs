---
title: Configuración del registro de auditoría de la empresa
intro: Puedes configurar las opciones del registro de auditoría de la empresa.
shortTitle: Configure audit logs
permissions: Enterprise owners can configure the audit log.
versions:
  feature: audit-data-retention-tab
type: how_to
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: f624607d5729d32d836efedf1fa355a96489a175
ms.sourcegitcommit: f638d569cd4f0dd6d0fb967818267992c0499110
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 10/25/2022
ms.locfileid: '148106569'
---
## Acerca de la configuración del registro de auditoría

Puedes configurar un período de retención para los datos del registro de auditoría y ver los detalles del almacenamiento de índices.

{% ifversion enable-git-events %} Después de configurar un período de retención, puedes habilitar o deshabilitar que los eventos relacionados con Git aparezcan en el registro de auditoría.
{% endif %}

## Configuración de un período de retención para los datos del registro de auditoría

Puedes configurar un período de retención de los datos del registro de auditoría de {% data variables.location.product_location %}. Los datos que superen el período que configures se quitarán permanentemente del disco.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. En "Configurar la configuración de retención del registro de auditoría", selecciona el menú desplegable y haz clic en un período de retención.

   ![Captura de pantalla del menú desplegable para la configuración de retención del registro de auditoría](/assets/images/help/enterprises/audit-log-retention-dropdown.png)
1. Haga clic en **Save**(Guardar).

{% ifversion enable-git-events %}
## Administración de eventos de Git en el registro de auditoría

Puedes habilitar o deshabilitar eventos relacionados con Git, como `git.clone` y `git.push`, para que aparezcan en el registro de auditoría. Para obtener una lista de los eventos de Git, consulta "[Eventos de registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/audit-log-events-for-your-enterprise#git-category-actions)".

Si habilitas los eventos de Git, debido al gran número que se registran, se recomienda supervisar el almacenamiento de archivos de la instancia y revisar las configuraciones de alerta relacionadas. Para más información, consulta "[Supervisión del almacenamiento](/admin/enterprise-management/monitoring-your-appliance/recommended-alert-thresholds#monitoring-storage)".

Para poder habilitar eventos de Git en el registro de auditoría, debes configurar un período de retención para los datos del registro de auditoría distinto a "infinito". Para más información, consulta "[Configuración de un período de retención para los datos del registro de auditoría](#configuring-a-retention-period-for-audit-log-data)".

{% data reusables.audit_log.git-events-not-in-search-results %}

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %} {% data reusables.audit_log.audit-data-retention-tab %}
1. En "Participación en eventos de Git", selecciona o anula la selección de **Habilitar eventos de Git en el registro de auditoría**.

   ![Captura de pantalla de la casilla para habilitar eventos de Git en el registro de auditoría](/assets/images/help/enterprises/enable-git-events-checkbox.png)
1. Haga clic en **Save**(Guardar).

{% endif %}
