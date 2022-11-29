---
title: Crear una App de OAuth
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - OAuth Apps
ms.openlocfilehash: 0bde9fbadc2005a67ecfc561b21cae48f768975e
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: es-ES
ms.lasthandoff: 09/05/2022
ms.locfileid: '146180347'
---
{% ifversion fpt or ghec %} {% note %}

  **Nota:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %} {% endif %}

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.developer_settings %} {% data reusables.user-settings.oauth_apps %}
4. Haga clic en **New OAuth App** (Nueva aplicación de OAuth).
![Botón para crear una nueva aplicación de OAuth](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **Nota:** Si no ha creado una aplicación antes, este botón dirá **Register a new application** (Registrar una nueva aplicación).

  {% endnote %}
6. Teclea el nombre de tu app en "Nombre de la aplicación".
![Campo para el nombre de la aplicación](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **Advertencia:** Use solo la información de la aplicación de OAuth que considere pública. Evita utilizar datos sensibles, tales como URL internas, cuando crees una App de OAuth.

  {% endwarning %}

7. Teclea la URL completa para el sitio web de tu app en "URL de la página principal".
![Campo para la dirección URL de la página principal de la aplicación](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. Opcionalmente, en "Descripción de la aplicación", teclea una descripción de tu app para que los usuarios la vean.
![Campo de descripción de la aplicación](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. Teclea la URL de rellamado de tu app en "URL de rellamado para autorización".
![Campo para la URL de devolución de llamada de autorización de la aplicación](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png) {% ifversion fpt or ghes or ghec %} {% note %}

   **Nota:** Las aplicaciones de OAuth no pueden tener varias direcciones URL de devolución de llamada, a diferencia de {% data variables.product.prodname_github_apps %}.

   {% endnote %} {% endif %}{% ifversion device-flow-is-opt-in %}
1. Si la aplicación de OAuth va a usar el flujo de dispositivos para identificar y autorizar usuarios, haga clic en **Enable Device Flow** (Habilitar flujo de dispositivos). Para obtener más información sobre el flujo de dispositivos, vea "[Autorización de aplicaciones de OAuth](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)".
  ![Captura de pantalla en la que se muestra el campo para habilitar el flujo de dispositivos](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
2.  Haga clic en **Register application** (Registrar aplicación).
![Botón para registrar una aplicación](/assets/images/oauth-apps/oauth_apps_register_application.png)
