---
title: Actividad de auditoría en tu empresa
shortTitle: Actividad de auditoría
intro: 'Puedes auditar la actividad de los {% data variables.product.prodname_managed_users %} en tu empresa, viendo la información sobre qué acciones se llevaron a cabo, mediante qué usuarios y cuándo.'
permissions: Enterprise owners can access the audit log.
product: '{% data reusables.gated-features.emus %}'
versions:
  fpt: '*'
topics:
  - Accounts
  - Enterprise
---

## Acerca de la bitácora de auditoría

La bitácora de auditoría permite que los propietarios de empresas revisar o exportar rápidamente las acciones que realizaron tanto los propietarios y los miembros de la empresa. Cada entrada de la bitácora de auditoría muestra información del evento.

- La organización en la que se realizó una acción
- El usuario que realizó la acción
- En qué repositorio se realizó una acción
- La acción que se realizó
- En qué país se realizó la acción
- La fecha y hora en que se produjo la acción

## Acceder al registro de auditoría

También puedes acceder a la bitácora de auditoría de tu empresa desde la API de REST. Para obtener más información, consulta la sección "[Administración de GitHub Enterprise](/rest/reference/enterprise-admin#get-the-audit-log-for-an-enterprise)" en la documentación de la API.

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.audit-log-tab %}
1. Opcionalmente, sobre la lista de eventos, selecciona el menú desplegable de **Exportar Eventos de Git** o de **Exportar** para elegir las opciones de exportación de eventos de la bitácora de auditoría. ![Menús desplegables de "Exportar Eventos de Git" y "Exportar" para la bitácora de auditoría de la empresa](/assets/images/help/enterprises/audit-log-export-drop-down-menus.png)
