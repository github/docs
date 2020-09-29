---
title: Administrar webhooks globales
intro: 'Los administradores del sitio pueden ver, agregar, editar y eliminar webhooks globales para realizar un seguimiento de los eventos en el nivel de instancia.'
redirect_from:
  - /enterprise/admin/user-management/about-global-webhooks
  - /enterprise/admin/user-management/managing-global-webhooks
versions:
  enterprise-server: '*'
---

### Acerca de los webhooks locales

Puedes utilizar los webhooks globales para controlar, responder o aplicar reglas automáticamente para la administración de usuarios y de organizaciones en tu instancia. Por ejemplo, puedes configurar tus webhooks para ejecutar lo siguiente:
- Se crea o se elimina una cuenta de usuario.
- Se crea o se borra una organización
- Se agrega o se elimina un colaborador desde un repositorio.
- Se bifurca un repositorio

![Listado de webhooks globales](/assets/images/enterprise/site-admin-settings/list-of-global-webhooks.png)

{% data reusables.enterprise_user_management.manage-global-webhooks-api %}


### Agregar un webhook local

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Haz clic en **Add webhook** (Agregar webhook). ![Botón Agregar webhook en la página webhooks en el centro de administración](/assets/images/enterprise/site-admin-settings/add-global-webhook-button.png)
6. Escribe la URL donde quisieras recibir las cargas. ![Campo para escribir una URL de carga](/assets/images/enterprise/site-admin-settings/add-global-webhook-payload-url.png)
7. Opcionalmente, usa el menú desplegable **Tipo de contenido** y haz clic en un formato de carga. ![Menú desplegable que detalla las opciones de tipo de contenido](/assets/images/enterprise/site-admin-settings/add-global-webhook-content-type-dropdown.png)
8. Opcionalmente, en el campo **Secreto**, escribe una cadena para usar como una clave `secret`. ![Campo para escribir una cadena para usar como clave secreta](/assets/images/enterprise/site-admin-settings/add-global-webhook-secret.png)
9. Opcionalmente, si no quieres que {% data variables.product.prodname_ghe_server %} verifique los certificados SSL cuando se entregan las cargas, haz clic en **Desactivar la verificación SSL**. Lee la información sobre verificación SSL, luego haz clic en **Entiendo que mis webhooks pueden no ser seguros**. ![Botón para desactivar la verificación SSL](/assets/images/enterprise/site-admin-settings/add-global-webhook-disable-ssl-button.png)

  {% warning %}

  **Advertencia:** La verificación SSL ayuda a garantizar que las cargas de enganche se entreguen de forma segura. No es recomendable desactivar la verificación SSL.

  {% endwarning %}
10. Decide si quieres que esta webhook se dispare para cada evento o para eventos seleccionados: ![Botones de selección con opciones para recibir cargas para cada evento o eventos seleccionados](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-events.png)
    - Para cada evento, selecciona **Enviarme todo**.
    - Para elegir eventos específicos, selecciona **Dejarme seleccionar eventos individuales**.
11. Si eliges seleccionar eventos individuales, selecciona si se disparará este webhook para una actividad de usuario o de organización. ![Casillas de verificación para eventos de usuario y de organización](/assets/images/enterprise/site-admin-settings/add-global-webhook-select-individual-events.png)
12. Confirma que la casilla de verificación **Activo** esté seleccionada (se selecciona por defecto). ![Casilla de verificación Activo seleccionada](/assets/images/enterprise/site-admin-settings/add-global-webhook-active-checkbox.png)
13. Haz clic en **Add webhook** (Agregar webhook).

### Editar un webhook global

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Al lado del webhook que quieres editar, haz clic en **Editar**. ![Botón Editar al lado de una webhook](/assets/images/enterprise/site-admin-settings/edit-global-webhook-button.png)
6. Actualiza los parámetros del webhook.
7. Haz clic en **Actualizar webhook**.

### Eliminar un webhook global

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. Al lado del webhook que quieres eliminar, haz clic en **Eliminar**. ![Botón Eliminar al lado de una webhook](/assets/images/enterprise/site-admin-settings/delete-global-webhook-button.png)
6. Lee la información sobre cómo eliminar un webhook, luego haz clic en **Sí, eliminar webhook**. ![Casilla emergente con información de advertencia y botón para confirmar la eliminación del webhook](/assets/images/enterprise/site-admin-settings/confirm-delete-global-webhook.png)

### Visualizar respuestas y entregas recientes

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.hooks-tab %}
5. En la lista de webhooks, haz clic en el webhook del que quieres ver las entregas. ![Lista de webhooks con los enlaces para visualizar cada webhook](/assets/images/enterprise/site-admin-settings/click-global-webhook.png)
6. En "Entregas recientes", haz clic en una entrega para ver los detalles. ![Lista de entregas recientes de webhooks con los enlaces para visualizar los detalles](/assets/images/enterprise/site-admin-settings/global-webhooks-recent-deliveries.png)
