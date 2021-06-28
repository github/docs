---
title: Personalizar los mensajes de usuario para tu empresa
shortTitle: Customizing user messages
redirect_from:
  - /enterprise/admin/user-management/creating-a-custom-sign-in-message/
  - /enterprise/admin/user-management/customizing-user-messages-on-your-instance
  - /admin/user-management/customizing-user-messages-on-your-instance
intro: 'Puedes crear mensajes personalizados que los usuarios verán en {% data variables.product.product_location %}.'
versions:
  enterprise-server: '*'
  github-ae: '*'
type: how_to
topics:
  - Enterprise
  - Maintenance
---

### Acerca de los mensajes de usuario

Hay varios tipos de mensajes de usuario.
- Los mensajes que aparecen en la {% if enterpriseServerVersions contains currentVersion %}página de ingreso o de {% endif %}salida{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
- Mensajes obligatorios, los cuales aparecen una vez en una ventana emergente que debe descartarse{% endif %}{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
- Letreros de anuncio, los cuales aparecen en la parte superior de cada página{% endif %}

{% if enterpriseServerVersions contains currentVersion %}
{% note %}

**Nota:** Si usas SAML para la autenticación, tu proveedor de identidad presenta la página de inicio de sesión y no es personalizable a través de {% data variables.product.prodname_ghe_server %}.

{% endnote %}

Puedes usar Markdown para dar formato al mensaje. Para obtener más información, consulta "[Acerca de la escritura y el formato en {% data variables.product.prodname_dotcom %}](/articles/about-writing-and-formatting-on-github/)."

### Crear un mensaje de inicio de sesión personalizado

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
5. {% if currentVersion ver_gt "enterprise-server@2.22" %}A la derecha de{% else %}Debajo de{% endif %} "Página de inicio de sesión", da clic en **Agregar mensaje** o **Editar mensaje**. ![{% if currentVersion ver_gt "enterprise-server@2.22" %}Botón de mensaje de Agregar{% else %}Editar{% endif %}](/assets/images/enterprise/site-admin-settings/edit-message.png)
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
5. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}A la derecha de{% else %}Debajo de{% endif %} "Página de salida", da clic en **Agregar mensaje** o **Editar mensaje**. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/sign-out-add-message-button.png)
6. En **Mensaje de cierre de sesión**, escribe el mensaje que quieras que vean los usuarios. ![Sign two_factor_auth_header message](/assets/images/enterprise/site-admin-settings/sign-out-message.png){% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
{% data reusables.enterprise_site_admin_settings.message-preview-save %}{% else %}
{% data reusables.enterprise_site_admin_settings.click-preview %}
  ![Botón Vista previa](/assets/images/enterprise/site-admin-settings/sign-out-message-preview-button.png)
8. Revisar el mensaje presentado. ![Mensaje de salida presentado](/assets/images/enterprise/site-admin-settings/sign-out-message-rendered.png)
{% data reusables.enterprise_site_admin_settings.save-changes %}{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}
### Crear un mensaje obligatorio

Puedes crear un mensaje obligatorio que {% data variables.product.product_name %} mostrará a todos los usuarios la primera vez que inicien sesión después de que guardaste el mensaje. El mensaje aparece en una ventana emergente que el usuario deberá descartar antes de poder utilizar {% data variables.product.product_location %}.

Los mensajes obligatorios tienen varios usos.

- Proporcinar información de integración para los empleados nuevos
- Decir a los usuarios cómo obtener ayuda con {% data variables.product.product_location %}
- Garantizar que todos los usuarios lean tus condiciones de servicio para utilizar {% data variables.product.product_location %}

Si incluyes cajas de verificación con lenguaje de marcado en el mensaje, todas ellas deberán seleccionarse antes de que el usuario pueda descartar el mensaje. Por ejemplo, si incluyes tus condiciones de servicio en el mensaje obligatorio, puede que necesites que cada usuario seleccione una casilla para confirmar que leyó dichas condiciones.

Cada vez que un usuario vea un mensaje obligatorio, se crea un evento de bitácora de auditoría. El evento incluye la versión del mensaje que vio el usuario. Para obtener más información, consulta la sección "[Acciones auditadas](/admin/user-management/audited-actions)".

{% note %}

**Nota:** Si cambias el mensaje obligatorio de {% data variables.product.product_location %}, los usuarios que ya lo hayan reconocido no verán el mensaje nuevo.

{% endnote %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. A la derecha de "Mensaje obligatorio", da clic en **Agregar mensaje**. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/add-mandatory-message-button.png)
1. Debajo de "Mensaje obligatorio", en la casilla de texto, teclea tu mensaje. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/mandatory-message-text-box.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}

{% endif %}

{% if currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
### Crear un letrero de anuncio global

Puedes configurar un letrero de anuncio global para que se muestre a todos los usuarios en la parte superior de cada página.

{% if currentVersion == "github-ae@latest" or currentVersion ver_gt "enterprise-server@2.22" %}
También puedes configurar un letrero de anuncio
{% if enterpriseServerVersions contains currentVersion %} en el shell administrativo utilizando una utilidad de línea de comandos o{% endif %} utilizando la API. Para obtener más información, consulta las secciones {% if enterpriseServerVersions contains currentVersion %}"[Utilidades de la línea de comandos](/enterprise/admin/configuration/command-line-utilities#ghe-announce)" y {% endif %}"[Administración de {% data variables.product.prodname_enterprise %}](/rest/reference/enterprise-admin#announcements)".
{% else %}

También puedes configurar un letrero de anuncio en el shell administrativo utilizando una utilidad de línea de comandos. Para obtener más información, consulta la sección "[Utilidades de línea de comandos](/enterprise/admin/configuration/command-line-utilities#ghe-announce)".

{% endif %}

{% data reusables.enterprise-accounts.access-enterprise %}
{% data reusables.enterprise-accounts.settings-tab %}
{% data reusables.enterprise-accounts.messages-tab %}
1. {% if currentVersion ver_gt "enterprise-server@2.22" or currentVersion == "github-ae@latest" %}A la derecha de{% else %}Debajo de {% endif %} "Anuncio", da clic en **Agregar anuncio**. ![Botón Agregar mensaje](/assets/images/enterprise/site-admin-settings/add-announcement-button.png)
1. Debajo de "Anuncio", en el campo de texto, teclea el anuncio que quieras mostrar en un letrero. ![Campo de texto para ingresar el anuncio](/assets/images/enterprise/site-admin-settings/announcement-text-field.png)
1. Opcionalmente, debajo de "Vence en", selecciona el menú desplegable de calendario y da clic en la fecha de vencimiento. ![Menú desplegable de calendario para elegir una fecha de vencimiento](/assets/images/enterprise/site-admin-settings/expiration-drop-down.png)
{% data reusables.enterprise_site_admin_settings.message-preview-save %}
{% endif %}
