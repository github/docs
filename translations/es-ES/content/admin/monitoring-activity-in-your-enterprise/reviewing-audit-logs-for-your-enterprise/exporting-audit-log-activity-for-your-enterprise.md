---
title: Exportación de la actividad del registro de auditoría de su empresa
intro: Puedes exportar los datos de eventos de auditoría y Git a un archivo para su análisis sin conexión.
shortTitle: Export audit logs
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
ms.openlocfilehash: 208e086fa93c89879357d340aa459b3d40824383
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '147060742'
---
## Acerca de las exportaciones del registro de auditoría y los datos de eventos de Git

Para exportar el registro de auditoría, descargue un archivo JSON o CSV desde su cuenta de Enterprise en {% data variables.product.product_name %}. Al exportar eventos de registro de auditoría, puede consultar uno o varios de estos calificadores compatibles para filtrar los eventos de registro específicos que desee exportar. Para obtener más información sobre los calificadores de búsqueda, consulte "[Búsqueda basada en la acción realizada](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed)".

Para exportar los datos de eventos de Git, descargue un archivo JSON desde el registro de auditoría de la empresa. A diferencia de los datos de registro de auditoría, no puede consultar eventos de Git específicos para filtrar y exportar en la interfaz de usuario del registro de auditoría. 

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

Como alternativa a la exportación de eventos de registro, puede usar la API para recuperar eventos de registro de auditoría o configurar {% data variables.product.product_name %} para transmitir los datos de auditoría a medida que se registran los eventos. Para obtener más información, consulte "[Uso de la API de registro de auditoría para la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)" y "[Transmisión del registro de auditoría de la empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".

## Exportación de datos de registro de auditoría

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Para exportar solo los resultados filtrados, también puede buscar usando uno o varios calificadores o filtros de registro admitidos.
2. Seleccione el menú desplegable {% octicon "download" aria-label="The Download icon" %} **Export** y elija el formato de archivo (JSON o CSV) para exportar eventos de registro.

    ![Botón Exportar](/assets/images/help/organizations/org-audit-log-export.png)

## Exportación de datos de eventos de Git

También puede exportar los datos de eventos de Git por intervalo de fechas.

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.audit-log-tab %}
1. Seleccione el menú desplegable {% octicon "download" aria-label="The Download icon" %} **Export Git Events** y elija un intervalo de fechas para exportar eventos de registro.

    ![Botón Export Git events](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. Haga clic en {% octicon "file-zip" aria-label="The File-zip icon" %} **Download Results** para descargar el archivo.
1. Los datos se exportan como un archivo JSON comprimido. Para extraer los datos JSON, descomprima el archivo mediante un comando o cliente de la utilidad de archivo. Por ejemplo:

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
