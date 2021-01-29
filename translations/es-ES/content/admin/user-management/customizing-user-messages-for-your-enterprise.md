---
title: Personalizar los mensajes de usuario para tu empresa
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
intro: 'You can create custom messages that users will see on {% data variables.product.product_location %}.'
versions:
  enterprise-server: '*'
  github-ae: '*'
---

### About user messages

There are several types of user messages.
- Messages that appear on the {% if enterpriseServerVersions contains currentVersion %}sign in or {% endif %}sign out page{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- Mandatory messages, which appear once in a pop-up window that must be dismissed{% endif %}{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- Announcement banners, which appear at the top of every page{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% note %}

**Nota:** Si usas SAML para la autenticación, tu proveedor de identidad presenta la página de inicio de sesión y no es personalizable a través de {% data variables.product.prodname_ghe_server %}.

{% endnote %}

Puedes usar Markdown para dar formato al mensaje. Para obtener más información, consulta "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/)."

### Crear un mensaje de inicio de sesión personalizado

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% if currentVersion ver_gt "enterprise-server@2.22" %}To the right of{% else %}Under{% endif %} "Sign in page", click **Add message** or **Edit message**. ![{% if currentVersion ver_gt "enterprise-server@2.22" %}Add{% else %}Edit{% endif %} message button](/assets/images/enterprise/site-admin-settings/edit-message.png)
6. En **Mensaje de inicio de sesión**, escribe el mensaje que quisieras que vean los usuarios. ![Sign in message](/assets/images/enterprise/site-admin-settings/sign-in-message.png){% if currentVersion ver_gt "enterprise-server@2.22" %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Botón Vista previa](/assets/images/enterprise/site-admin-settings/sign-in-message-preview-button.png)
8. Revisar el mensaje presentado. ![Mensaje de inicio presentado](/assets/images/enterprise/site-admin-settings/sign-in-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}
{% endif %}

### Crear un mensaje de cierre de sesión personalizado

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}To the right of{% else %}Under{% endif %} "Sign out page", click **Add message** or **Edit message**. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. En **Mensaje de cierre de sesión**, escribe el mensaje que quieras que vean los usuarios. ![Sign two_factor_auth_header message](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Botón Vista previa](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Revisar el mensaje presentado. ![Mensaje de salida presentado](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Creating a mandatory message

You can create a mandatory message that {% data variables.product.product_name %} will show to all users the first time they sign in after you save the message. The message appears in a pop-up window that the user must dismiss before the user can use {% data variables.product.product_location %}. Mandatory messages have a variety of uses.

- Providing onboarding information for new employees
- Telling users how to get help with {% data variables.product.product_location %}
- Ensuring that all users read your terms of service for using {% data variables.product.product_location %}

If you include Markdown checkboxes in the message, all checkboxes must be selected before the user can dismiss the message. For example, if you include your terms of service in the mandatory message, you can require that each user selects a checkbox to confirm the user has read the terms.

Each time a user sees a mandatory message, an audit log event is created. The event includes the version of the message that the user saw. For more information see "[Audited actions](/admin/user-management/audited-actions)."

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. To the right of "Mandatory message", click **Add message**. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Under "Mandatory message", in the text box, type your message. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### Crear un letrero de anuncio global

Puedes configurar un letrero de anuncio global para que se muestre a todos los usuarios en la parte superior de cada página.

{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
You can also set an announcement banner
{% if enterpriseServerVersions contains currentVersion %} in the administrative shell using a command line utility or{% endif %} using the API. Para obtener más información, consulta las secciones {% if enterpriseServerVersions contains currentVersion %}"[Utilidades de la línea de comandos](/enterprise/admin/configuration/command-line-utilities#ghe-announce)" y {% endif %}"[Administración de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".
{% else %}

También puedes configurar un letrero de anuncio en el shell administrativo utilizando una utilidad de línea de comandos. Para obtener más información, consulta la sección "[Utilidades de línea de comandos](/enterprise/admin/configuration/command-line-utilities#ghe-announce)".

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}To the right of{% else %}Under{% endif %} "Announcement", click **Add announcement**. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Debajo de "Anuncio", en el campo de texto, teclea el anuncio que quieras mostrar en un letrero. ![Campo de texto para ingresar el anuncio](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Optionally, under "Expires on", select the calendar drop-down menu and click an expiration date. ![Menú desplegable de calendario para elegir una fecha de vencimiento](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}
{% endif %}
