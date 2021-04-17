---
title: Crear una App de OAuth
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps/
  - /apps/building-oauth-apps/creating-an-oauth-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - oauth apps
---

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **Nota:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
4. Da clic en **Nueva App de OAuth**. ![Botón para crear una app de OAuth nueva](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **Nota:** si es la primera vez que creas una app, este botón dirá **Registrar una aplicación nueva**.

  {% endnote %}
6. Teclea el nombre de tu app en "Nombre de la aplicación". ![Campo para el nombre de tu app](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **Advertencia** Utiliza solo la información que consideres pública en tu App de OAuth. Evita utilizar datos sensibles, tales como URL internas, cuando crees una App de OAuth.

  {% endwarning %}

7. En "URL de la página principal", teclea la URL completa del sitio web de tu app. ![Campo para la URL de la página principal de tu app](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. Opcionalmente, en "Descripción de la aplicación", teclea una descripción de tu app para que los usuarios la vean. ![Campo para la descripción de tu app](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. Teclea la URL de rellamado de tu app en "URL de rellamado para autorización". ![Campo para la URL de rellamado de autorización de tu app](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   {% note %}

   **Nota:** Las apps de OAuth no puede tener URL de rellamado múltiples, a diferencia de las {% data variables.product.prodname_github_apps %}.

   {% endnote %}
{% endif %}
10. Haz clic en **Register application** (Registrar aplicación). ![Botón para registrar una aplicación](/assets/images/oauth-apps/oauth_apps_register_application.png)
