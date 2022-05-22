---
title: Criar um aplicativo OAuth
intro: '{% data reusables.shortdesc.creating_oauth_apps %}'
redirect_from:
  - /apps/building-integrations/setting-up-and-registering-oauth-apps/registering-oauth-apps/
  - /apps/building-oauth-apps/creating-an-oauth-app
  - /developers/apps/creating-an-oauth-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - OAuth Apps
---
{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **Observação:** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
4. Clique em **Novo aplicativo OAuth**. ![Botão para criar um novo aplicativo OAuth](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **Observação:** Se você não criou um aplicativo antes, este botão informará: **Registre um novo aplicativo**.

  {% endnote %}
6. Em "Nome do aplicativo", digite o nome do seu aplicativo. ![Campo para o nome do seu aplicativo](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **Aviso:**  Use apenas informações em seu aplicativo OAuth que você considera públicas. Ao criar um aplicativo OAuth, evite o uso de dados confidenciais, como, por exemplo, URLs internas.

  {% endwarning %}

7. Em "URL da página inicial", digite a URL completa do site do seu aplicativo. ![Campo para a URL da página inicial de seu aplicativo](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. Opcionalmente, em "Descrição do aplicativo", digite uma descrição do seu aplicativo que os usuários irão ver. ![Campo para uma descrição do seu aplicativo](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. Em "URL de retorno de chamada de autorização", digite a URL de retorno de chamada do seu aplicativo. ![Campo para a URL de retorno de chamada de autorização do seu aplicativo](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
   {% note %}

   **Observação:** Os aplicativos OAuth não podem ter várias URLs de retorno de chamada, diferente de {% data variables.product.prodname_github_apps %}.

   {% endnote %}
{% endif %}
10. Clique em **Register application** (Registrar aplicativo). ![Botão para registrar um aplicativo](/assets/images/oauth-apps/oauth_apps_register_application.png)
