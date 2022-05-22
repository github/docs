---
title: Administrar webhooks globales
shortTitle: Manage global webhooks
intro: You can configure global webhooks to notify external web servers when events occur within your enterprise.
permissions: Enterprise owners can manage global webhooks for an enterprise account.
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-global-webhooks
  - /admin/user-management/managing-users-in-your-enterprise/managing-global-webhooks
  - /github/setting-up-and-managing-your-enterprise/managing-organizations-in-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /articles/configuring-webhooks-for-organization-events-in-your-business-account/
  - /articles/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise-account/configuring-webhooks-for-organization-events-in-your-enterprise-account
  - /github/setting-up-and-managing-your-enterprise/configuring-webhooks-for-organization-events-in-your-enterprise-account
versions:
  ghec: '*'
  ghes: '*'
  ghae: '*'
type: how_to
topics:
  - Enterprise
  - Webhooks
---

## Acerca de los webhooks locales

You can use global webhooks to notify an external web server when events occur within your enterprise. You can configure the server to receive the webhook's payload, then run an application or code that monitors, responds to, or enforces rules for user and organization management for your enterprise. Para obtener más información, consulta la sección "[webhooks](/developers/webhooks-and-events/webhooks)".

For example, you can configure {% data variables.product.product_location %} to send a webhook when someone creates, deletes, or modifies a repository or organization within your enterprise. You can configure the server to automatically perform a task after receiving the webhook.

![Listado de webhooks globales](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}

## Agregar un webhook local

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Haz clic en **Add webhook** (Agregar webhook). ![Botón Agregar webhook en la página webhooks en el centro de administración](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Escribe la URL donde quisieras recibir las cargas. ![Campo para escribir una URL de carga](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Opcionalmente, usa el menú desplegable **Tipo de contenido** y haz clic en un formato de carga. ![Menú desplegable que detalla las opciones de tipo de contenido](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Opcionalmente, en el campo **Secreto**, escribe una cadena para usar como una clave `secret`. ![Campo para escribir una cadena para usar como clave secreta](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Optionally, if your payload URL is HTTPS and you would not like {% data variables.product.prodname_ghe_server %} to verify SSL certificates when delivering payloads, select **Disable SSL verification**. Lee la información sobre verificación SSL, luego haz clic en **Entiendo que mis webhooks pueden no ser seguros**. ![Checkbox for disabling SSL verification](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Advertencia:** La verificación SSL ayuda a garantizar que las cargas de enganche se entreguen de forma segura. No es recomendable desactivar la verificación SSL.

  {% endwarning %}
10. Decide if you'd like this webhook to trigger for every event or for selected events. ![Botones de selección con opciones para recibir cargas para cada evento o eventos seleccionados](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Para cada evento, selecciona **Enviarme todo**.
    - Para elegir eventos específicos, selecciona **Dejarme seleccionar eventos individuales**.
11. If you chose to select individual events, select the events that will trigger the webhook.
      {% ifversion ghec %}
      ![Checkboxes for individual global webhook events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
      {% elsif ghes or ghae %}
      ![Checkboxes for individual global webhook events](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events-ghes-and-ae.png)
      {% endif %}
12. Confirm that the **Active** checkbox is selected. ![Casilla de verificación Activo seleccionada](/assets/images/help/business-accounts/webhook-active.png)
13. Haz clic en **Add webhook** (Agregar webhook).

## Editar un webhook global

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Al lado del webhook que quieres editar, haz clic en **Editar**. ![Botón Editar al lado de una webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Actualiza los parámetros del webhook.
7. Haz clic en **Actualizar webhook**.

## Eliminar un webhook global

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Al lado del webhook que quieres eliminar, haz clic en **Eliminar**. ![Botón Eliminar al lado de una webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Lee la información sobre cómo eliminar un webhook, luego haz clic en **Sí, eliminar webhook**. ![Casilla emergente con información de advertencia y botón para confirmar la eliminación del webhook](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

## Visualizar respuestas y entregas recientes

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. En la lista de webhooks, haz clic en el webhook del que quieres ver las entregas. ![Lista de webhooks con los enlaces para visualizar cada webhook](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. En "Entregas recientes", haz clic en una entrega para ver los detalles. ![Lista de entregas recientes de webhooks con los enlaces para visualizar los detalles](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
