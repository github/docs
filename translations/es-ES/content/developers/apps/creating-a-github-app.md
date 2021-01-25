---
title: Crear una GitHub App
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration/
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps/
  - /apps/building-github-apps/creating-a-github-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
---

{% if currentVersion == "free-pro-team@latest" %}Para aprender cómo utilizar los manifiestos de las GitHub Apps, los cuales le permiten a las personas crear GitHub Apps preconfiguradas, consulta la sección "[Crear GitHub Apps desde un manifiesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)."{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **Nota:** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. Da clic en **GitHub App Nueva**. ![Botón para crear una GitHub App nueva](/assets/images/github-apps/github_apps_new.png)
5. E "Nombre dela GitHub App", teclea el nombre de tu app. ![Campo para nombrar tu GitHub App](/assets/images/github-apps/github_apps_app_name.png)

  Pónle un nombre claro y breve a tu app. Tu app no puede tener el mismo nombre que un usuario de GitHub, a menos de que sea tu propio nombre de usuario u organización. Una versión simplificada del nombre de tu aplicación se mostrará en la interface de usuario cuando tu integración tome alguna acción.

6. Opcionalmente, en "Descripción", teclea la descripción de tu app que verán los usuarios. ![Campo para agregar una descripción de tu GitHub App](/assets/images/github-apps/github_apps_description.png)
7. En "URL de la página principal", teclea la URL completa del sitio web de tu app. ![Campo para la URL de la página de inicio de tu GitHub App](/assets/images/github-apps/github_apps_homepage_url.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
8. En "URL de rellamado", teclea la URL completa a la cual se redirigirá a los usuarios después de que autoricen la instalación. Esta URL se utiliza si tu app necesita identificar y autorizar las solicitudes de usuario a servidor.

  Puedes utilizar la opción de **Agregar una URL de rellamado** para proporcionar las URL de rellamado adicionales, con un máximo de 10 de ellas.

  ![Botón para 'Agregar una URL de rellamado' y campo para ingresar la URL de rellamado](/assets/images/github-apps/github_apps_callback_url_multiple.png)
{% else %}
8. En "URL de rellamado para la autorización del usuario", teclea la URL completa a la cual se redireccionará después de que un usuario autorice una instalación. Esta URL se utiliza si tu app necesita identificar y autorizar las solicitudes de usuario a servidor. ![Campo para la URL de rellamado para la autorización del usuario de tu GitHub App](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
9. Predeterminadamente, para mejorar la seguridad de tu app, ésta utilizará un token de autorización de usuario con una vida útil limitada. Para elegir no utilizar estos tokens de usuario, debes deseleccionar la opción "Limitar la vida útil de los tokens de autorización de usuario". Para conocer más acerca de configurar un flujo de rehabilitación de tokens y acerca de los beeficios de que éstos tenga una vida útil limitada, consulta la sección "[Rehabilitar los tokens de acceso de usuario a servidor](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)". ![Opción para unirse a los tokens de usuario con caducidad durante la configuración de las GitHub Apps](/assets/images/github-apps/expire-user-tokens-selection.png)
{% endif %}
9. Si tu app autoriza a los usuarios que utilizan el flujo de OAuth, puedes seleccionar la opción **Solicitar la autorización del usuario (OAuth) durante la instalación** para permitir que las personas den autorización a la app cuando la instalen, lo cual te ahorra un paso. Si seleccionas esta opción, la "URL de configuración" dejará de estar disponible y se redirigirá a los usuarios a tu "URL de rellamado para autorización del usuario" después de que instalen la app. Consulta la sección "[Autorizar a los usuarios durante la instalación](/apps/installing-github-apps/#authorizing-users-during-installation)" para obtener más información. ![Solicitar una autorización de usuario durante la instalación](/assets/images/github-apps/github_apps_request_auth_upon_install.png)
10. Si se requiere hacer ajustes adicionales después de la instalación, agrega una "URL de configuración" para redireccionar a los usuarios después de que instalen tu app. ![Campo para configurar la URL de tu GitHub App ](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **Nota:** Cuando seleccionas **Solicitar la autorización del usuario (OAuth) durante la instalación** en el paso anterior, este campo dejará de estar disponible y se redirigirá a los usuarios a tu "URL de rellamado para autorización del usuario" después de que instalen la app.

  {% endnote %}

11. En "URL del Webhook", teclea la URL a la cual los eventos harán POST. Cada app recibe su propio webhook, el cual te notificará cada que se instale o modifique dicha app, así como sobre cualquier otor evento al cual se suscriba. ![Campo para la URL del webhook de tu GitHub App](/assets/images/github-apps/github_apps_webhook_url.png)

12. Opcionalmente, en "Secreto del Webhook", teclea un token secreto opcional que se utilizará para asegurar tus webhooks. ![Campo para agregar un token secreto para tu Webhook](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **Nota:** Te recomendamos ampliamente que configures un token secreto. Para obtener más información, consulta la sección "[Asegurar tus webhooks](/webhooks/securing/)".

  {% endnote %}

13. En "Permisos", elige aquellos permisos que solicitará tu app. Para cada tipo de permiso, utiliza el menú desplegable, y da clic en **Solo lectura**, **Lectura& escritura**, o **Sin acceso**. ![Varios permisos para tu GitHub App](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
14. En "Suscribirse a los eventos", elige si quieres suscribir a tu app a los eventos de **Etiquetas**, **Públicos**, **Repositorios**, o **Observar**. ![Opciones de suscripción a los eventos para tu GitHub App](/assets/images/github-apps/github_apps_subscribe_to_events.png)
15. Para elegir si la app se podrá instalar, selecciona ya sea **Únicamente en esta cuenta** o **Cualquier cuenta**. Para obtener más información sobre las opciones de instalación, selecciona "[Convertir una GitHub App en pública o privada](/apps/managing-github-apps/making-a-github-app-public-or-private/)". ![Opciones de instalación para tu GitHub App](/assets/images/github-apps/github_apps_installation_options.png)
16. Da clic en **Crear GitHub App**. ![Botón para crear tu GitHub App](/assets/images/github-apps/github_apps_create_github_app.png)
