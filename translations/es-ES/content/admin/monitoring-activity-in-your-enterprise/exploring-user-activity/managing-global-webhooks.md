---
title: Administrar webhooks globales
shortTitle: Manage global webhooks
intro: Puedes configurar webhooks globales para notificar a los servidores web externos cuándo ocurren los eventos dentro de tu empresa.
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /admin/user-management/monitoring-activity-in-your-enterprise/managing-global-webhooks
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
ms.openlocfilehash: 751a6dc55b9d1aded22a8225f4bf7d058aa32b77
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/11/2022
ms.locfileid: '145120225'
---
## Acerca de los webhooks locales

Puedes utilizar webhooks globales para notificar a un servidor web externo cuando ocurren los eventos dentro de tu empresa. Puedes configurar el servidor para que reciba la carga útil del webhook, luego ejecutar una aplicación o código que monitoree, responda a o requiera reglas para la administración de usuarios y organizaciones para tu empresa. Para más información, vea "[Webhooks](/developers/webhooks-and-events/webhooks)".

Por ejemplo, puedes configurar a {% data variables.product.product_location %} para que envíe un webhook cuando alguien crea, borra o modifica un repositorio u organización dentro de tu empresa. Puedes configurar el servidor para que realice una tarea automáticamente después de recibir el webhook.

![Listado de webhooks globales](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Agregar un webhook local

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Haga clic en **Agregar webhook**.
  ![Botón Agregar webhook en la página Webhooks del centro de administración](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Escribe la URL donde quisieras recibir las cargas.
  ![Campo para escribir una URL de carga](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Opcionalmente, use el menú desplegable **Tipo de contenido** y haga clic en un formato de carga.
  ![Menú desplegable con las opciones de tipo de contenido](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Opcionalmente, en el campo **Secreto**, escriba una cadena que se usará como clave `secret`.
  ![Campo para escribir una cadena que usar como clave secreta](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Opcionalmente, si la URL de la carga es HTTPS y no quiere que {% data variables.product.prodname_ghe_server %} compruebe los certificados SSL cuando entregue las cargas, seleccione **deshabilitar la comprobación SSL**. Lea la información sobre la comprobación SSL y, después, haga clic en **I understand my webhooks may not be secure**.
  ![Casilla de verificación para deshabilitar la comprobación SSL](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Advertencia:** La comprobación SSL ayuda a garantizar que las cargas de enlace se entreguen de forma segura. No es recomendable desactivar la verificación SSL.

  {% endwarning %}
10. Decide si te gustaría que este webhook se active para cada evento o para aquellos seleccionados.
  ![Botones de radio con opciones para recibir cargas para cada evento o eventos seleccionados](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Para cada evento, seleccione **Send me everything**.
    - Para elegir eventos concretos, seleccione **Let me select individual events**.
11. Si eliges seleccionar eventos individuales, selecciona los eventos que activarán el webhook.
      {% ifversion ghec %} ![Casillas para eventos de webhook globales individuales](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png) {% elsif ghes or ghae %} ![Checkboxes for individual global webhook events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png) {% endif %}
12. Confirme que la casilla **Activo** está activada.
  ![Casilla Activo seleccionada](/assets/images/help/business-accounts/webhook-active.png)
13. Haga clic en **Agregar webhook**.

## Editar un webhook global

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Junto al webhook que quiera editar, haga clic en **Editar**.
  ![Botón Editar junto a un webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Actualiza los parámetros del webhook.
7. Haga clic en **Update Webhook**.

## Eliminar un webhook global

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. Junto al webhook que quiera eliminar, haga clic en **Delete**.
  ![Botón Delete junto a un webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Lea la información sobre cómo eliminar un webhook y, después, haga clic en **Yes, delete webhook**.
  ![Casilla emergente con información de advertencia y botón para confirmar la eliminación del webhook](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## Visualizar respuestas y entregas recientes

{% data reusables.enterprise-accounts.access-enterprise %} {% data reusables.enterprise-accounts.settings-tab %} {% data reusables.enterprise-accounts.hooks-tab %}
5. En la lista de webhooks, haz clic en el webhook del que quieres ver las entregas.
  ![Lista de webhooks con vínculos para visualizar cada webhook](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. En "Entregas recientes", haz clic en una entrega para ver los detalles.
  ![Lista de entregas recientes de webhooks con vínculos para ver los detalles](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
