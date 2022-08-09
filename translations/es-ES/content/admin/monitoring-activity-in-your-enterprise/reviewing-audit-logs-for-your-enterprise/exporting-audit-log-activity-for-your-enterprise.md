---
title: Exportar la actividad de la bitácora de auditoría para tu empresa
intro: Puedes exportar los datos de eventos de Git y de auditoría a un archivo para su análisis sin conexión.
shortTitle: Exportar bitácoras de auditoría
permissions: Enterprise owners can export the audit log.
miniTocMaxHeadingLevel: 3
versions:
  ghec: '*'
type: tutorial
topics:
  - Auditing
  - Enterprise
  - Logging
---

## Acerca de las exportaciones de los datos de eventos de Git y de bitácoras de auditoría

Puedes exportar la bitácora de auditoría si descargas un archivo JSON o CSV de tu empresa en {% data variables.product.product_name %}. Cuando exportas eventos de bitácoras de auditoría, puedes hacer consultas por uno o más de estos calificadores compatibles para filtrar por eventos de bitácora específicos para exportar. Para obtener más información sobre los calificadores de búsqueda, consulta la sección "[Búsqueda con base en la acción realizada](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/searching-the-audit-log-for-your-enterprise#search-based-on-the-action-performed)".

Puedes exportar datos de eventos de Git si descargas un archivo JSON desde la bitácora de auditoría de tu empresa. A diferencia de los datos de bitácora de auditoría, no puedes consultar los eventos específicos de Git para filtrarlos y exportarlos en la interfaz de usuario de la bitácora de auditoría.

{% data reusables.audit_log.git-events-export-limited %}

{% data reusables.audit_log.exported-log-keys-and-values %}

Como alternativa para exportar los eventos de bitácora, puedes utilizar la API para recuperar los eventos de bitácora de auditoría o configurar a {% data variables.product.product_name %} para transmitir datos de auditoría conforme se registren los eventos. Para obtener más información, consulta las secciones "[Utilizar la API de bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/using-the-audit-log-api-for-your-enterprise)" y "[Transmitir la bitácora de auditoría para tu empresa](/admin/monitoring-activity-in-your-enterprise/reviewing-audit-logs-for-your-enterprise/streaming-the-audit-log-for-your-enterprise)".

## Exportar datos de bitácora de auditoría

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Opcionalmente, para solo exportar los resultados filtrados, busca por uno o mas de los calificadores o filtros de bitácora compatibles.
2. Selecciona {% octicon "download" aria-label="The Download icon" %} el menú desplegable de **Exportar** y elige el formato de archivo (JSON o CSV) para exportar eventos de bitácora.

    ![Botón de exportar](/assets/images/help/organizations/org-audit-log-export.png)

## Exportar los datos de eventos de Git

También puedes exportar datos de eventos de Git por rango de fechas.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Selecciona el {% octicon "download" aria-label="The Download icon" %} menú desplegable de **Exportar eventos de Git** y elige un rango de fechas de las cuales quieras exportar las bitácoras.

    ![Botón de exportar eventos de Git](/assets/images/help/organizations/org-audit-log-export-git-events.png)
1. Haz clic en {% octicon "file-zip" aria-label="The File-zip icon" %} **Descargar resultados** para descargar el archivo.
1. Se exportarán los datos como un archivo JSON comprimido. Para extraer los datos de JSON, descomprime el archivo utilizando un comando o cliente de utilidad de archivo. Por ejemplo:

    ```
    gunzip export-avocado-corp-1642896556.json.gz
    ```
