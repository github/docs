---
title: Crear una GitHub App
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: bca6b800f8ea6042e4cbcdb95bd39b56f61433c5
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146179091'
---
{% ifversion fpt or ghec %}Para obtener información sobre cómo usar los manifiestos de las aplicaciones de GitHub, que permiten a los usuarios crear aplicaciones preconfiguradas de GitHub, consulte "[Creación de aplicaciones de GitHub a partir de un manifiesto](/apps/building-github-apps/creating-github-apps-from-a-manifest/)". {% endif %}

{% ifversion fpt or ghec %} {% note %}

  **Nota:** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.apps.settings-step %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.github_apps %}
1. Haga clic en **New GitHub App** (Nueva aplicación GitHub).
![Botón para crear una nueva aplicación de GitHub](/assets/images/github-apps/github_apps_new.png)
1. E "Nombre dela GitHub App", teclea el nombre de tu app.
![Campo para el nombre de la aplicación de GitHub](/assets/images/github-apps/github_apps_app_name.png)

  Pónle un nombre claro y breve a tu app. Tu app no puede tener el mismo nombre que una cuenta existente de GitHub, a menos de que sea tu propio nombre de usuario u organización. Una versión simplificada del nombre de tu aplicación se mostrará en la interface de usuario cuando tu integración tome alguna acción.

1. Opcionalmente, en "Descripción", teclea la descripción de tu app que verán los usuarios.
![Campo para agregar una descripción de la aplicación de GitHub](/assets/images/github-apps/github_apps_description.png)
1. Teclea la URL completa para el sitio web de tu app en "URL de la página principal".
![Campo para la URL de la página principal de la aplicación de GitHub](/assets/images/github-apps/github_apps_homepage_url.png) {% ifversion fpt or ghes or ghec %}
1. En "URL de rellamado", teclea la URL completa a la cual se redirigirá a los usuarios después de que autoricen la instalación. Esta URL se utiliza si tu app necesita identificar y autorizar solicitudes de usuario a servidor.

  Puede usar la opción **Add callback URL** (Agregar URL de devolución de llamada) para proporcionar direcciones URL de devolución de llamada adicionales, hasta un máximo de 10.

  ![Botón para agregar una URL de devolución de llamada y campo para introducirla](/assets/images/github-apps/github_apps_callback_url_multiple.png) {% else %}
1. En "URL de rellamado para la autorización del usuario", teclea la URL completa a la cual se redireccionará después de que un usuario autorice una instalación. Esta URL se utiliza si tu app necesita identificar y autorizar solicitudes de usuario a servidor.
![Campo para la URL de devolución de llamada para la autorización del usuario de la aplicación de GitHub](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
1. Predeterminadamente, para mejorar la seguridad de tu app, ésta utilizará un token de autorización de usuario con una vida útil limitada. Para elegir no utilizar estos tokens de usuario, debes deseleccionar la opción "Limitar la vida útil de los tokens de autorización de usuario". Para más información sobre cómo configurar un flujo de token de actualización y sobre las ventajas de expirar los tokens de usuario, consulte "[Actualización de tokens de acceso de usuario a servidor](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)".
  ![Opción para expirar los tokens de usuario durante la configuración de las aplicaciones de GitHub](/assets/images/github-apps/expire-user-tokens-selection.png)
1. Si la aplicación autoriza a los usuarios mediante el flujo de OAuth, puede seleccionar **Request user authorization (OAuth) during installation** (Solicitar la autorización del usuario [OAuth] durante la instalación) para permitir que los usuarios autoricen la aplicación al instalarla, lo que elimina un paso. Si seleccionas esta opción, la "URL de configuración" dejará de estar disponible y se redirigirá a los usuarios a tu "URL de rellamado para autorización del usuario" después de que instalen la app. Para más información, vea "[Autorización de usuarios durante la instalación](/apps/installing-github-apps/#authorizing-users-during-installation)".
![Solicitud de la autorización del usuario durante la instalación](/assets/images/github-apps/github_apps_request_auth_upon_install.png){% ifversion device-flow-is-opt-in %}
1. Si la aplicación de GitHub va a usar el flujo de dispositivos para identificar y autorizar usuarios, haga clic en **Enable Device Flow** (Habilitar flujo de dispositivos). Para obtener más información sobre el flujo de dispositivos, vea "[Autorización de aplicaciones de OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)".
  ![Captura de pantalla en la que se muestra el campo para habilitar el flujo de dispositivos](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
1. Si se requiere hacer ajustes adicionales después de la instalación, agrega una "URL de configuración" para redireccionar a los usuarios después de que instalen tu app.
![Campo para configurar la URL de la aplicación de GitHub](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **Nota:** Al seleccionar **Request user authorization (OAuth) during installation** (Solicitar la autorización del usuario [OAuth] durante la instalación) en el paso anterior, este campo deja de estar disponible y los usuarios serán redirigidos a la URL de devolución de llamada de autorización del usuario después de instalar la aplicación.

  {% endnote %}

1. En "URL del Webhook", teclea la URL a la cual los eventos harán POST. Cada app recibe su propio webhook, el cual te notificará cada que se instale o modifique dicha app, así como sobre cualquier otor evento al cual se suscriba.
![Campo para la URL del webhook de la aplicación de GitHub](/assets/images/github-apps/github_apps_webhook_url.png)

1. Opcionalmente, en "Secreto del Webhook", teclea un token secreto opcional que se utilizará para asegurar tus webhooks.
![Campo para agregar un token secreto para el webhook](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **Nota:** Se recomienda encarecidamente establecer un token secreto. Para más información, vea "[Protección de los webhooks](/webhooks/securing/)".

  {% endnote %}

1. En "Permisos", elige aquellos permisos que solicitará tu app. Para cada tipo de permiso, use el menú desplegable y haga clic en **Read-only** (Solo lectura), **Read & write** (Lectura y escritura) o **No access** (Sin acceso).
![Diferentes permisos para la aplicación de GitHub](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
1. En "Suscribirse a los eventos", elige aquellos que quieras que reciba tu app.
1. Para elegir dónde se puede instalar la aplicación, seleccione **Only on this account** (Solo en esta cuenta) o **Any account** (En cualquier cuenta). Para obtener más información sobre las opciones de instalación, consulte "[Configuración de una aplicación de GitHub como pública o privada](/apps/managing-github-apps/making-a-github-app-public-or-private/)".
![Opciones de instalación de la aplicación de GitHub](/assets/images/github-apps/github_apps_installation_options.png)
1. Haga clic en **Create GitHub App** (Crear aplicación de GitHub).
![Botón para crear la aplicación de GitHub](/assets/images/github-apps/github_apps_create_github_app.png)
