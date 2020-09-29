---
title: Personalizar mensajes de usuario en tu instancia
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
intro: 'Puedes crear mensajes personalizados {% if currentVersion ver_gt "enterprise-server@2.15" %} que los usuarios verán en las páginas de inicio y de cierre de sesión {% else %}un mensaje personalizado que los usuarios verán en la página de inicio de sesión {% endif %}.'
versions:
  enterprise-server: '*'
---

Puedes usar Markdown para dar formato al mensaje. Para obtener más información, consulta "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/)."

{% note %}

**Nota:** Si usas SAML para la autenticación, tu proveedor de identidad presenta la página de inicio de sesión y no es personalizable a través de {% data variables.product.prodname_ghe_server %}.

{% endnote %}

### Crear un mensaje de inicio de sesión personalizado

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. En la "Página de inicio de sesión", haz clic en **Agregar mensaje** o **Editar mensaje**. ![Botón Editar mensaje](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. En **Mensaje de inicio de sesión**, escribe el mensaje que quisieras que vean los usuarios. ![Mensaje de inicio](/assets/images/enterprise/site-admin-settings/sign-in-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Botón Vista previa](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Revisar el mensaje presentado. ![Mensaje de inicio presentado](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

### Crear un mensaje de cierre de sesión personalizado

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. En la "Página de cierre de sesión", haz clic en **Agregar mensaje** o **Editar mensaje**. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. En **Mensaje de cierre de sesión**, escribe el mensaje que quieras que vean los usuarios. ![Mensaje de inicio encabezado de autent de dos factores](/assets/images/enterprise/site-admin-settings/sign-out-message.png)
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Botón Vista previa](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Revisar el mensaje presentado. ![Mensaje de salida presentado](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}

{% if currentVersion ver_gt "enterprise-server@2.21" %}
### Creating a global announcement banner

You can set a global announcement banner to be displayed to all users at the top of every page.

You can also set an announcement banner in the administrative shell using a command line utility. For more information, see "[Command-line utilities](/enterprise/admin/configuration/command-line-utilities#ghe-announce)."

{% data reusables.enterprise_site_admin_settings.access-settings %}
{% data reusables.enterprise_site_admin_settings.business %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. En la "Página de cierre de sesión", haz clic en **Agregar mensaje** o **Editar mensaje**. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Under "Announcement", in the text field, type the announcement you want displayed in a banner. ![Text field to enter announcement](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Optionally, under "Expires on", use the calendar drop-down menu, and select an expiration date. ![Calendar drop-down menu to choose expiration date](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
1. En la "Página de inicio de sesión", haz clic en **Agregar mensaje** o **Editar mensaje**. ![Botón Vista previa](/assets/images/enterprise/site-admin-settings/preview-announcement-button.png)
1. Haz clic en **Guardar cambios**. ![Botón Editar mensaje](/assets/images/enterprise/site-admin-settings/save-announcement-button.png)
{% endif %}
