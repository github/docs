---
title: OAuthアプリの作成
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
---

{% ifversion fpt or ghec %}
{% note %}

  **ノート：** {% data reusables.apps.maximum-oauth-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.oauth_apps %}
4. [**New OAuth App**] をクリックします。 ![新しい OAuth App を作成するボタン](/assets/images/oauth-apps/oauth_apps_new_app.png)

  {% note %}

  **注釈:** アプリをまだ作成したことがない場合、このボタンに [**Register a new application**] と表示されます。

  {% endnote %}
6. [Application name] に、アプリケーションの名前を入力します。 ![アプリケーションの名前フィールド](/assets/images/oauth-apps/oauth_apps_application_name.png)

  {% warning %}

  **警告:** 公にしてよいと思われる OAuth App の情報のみを使用します。 OAuth App を作成する場合、内部 URL などの機密データを使用することは避けてください。

  {% endwarning %}

7. [Homepage URL] に、アプリケーションのウェブサイトの完全な URL を入力します。 ![アプリケーションのホームページ URL フィールド](/assets/images/oauth-apps/oauth_apps_homepage_url.png)
8. 必要に応じて、ユーザーに表示されるアプリケーションの説明を [Application description] に入力します。 ![アプリケーションの説明フィールド](/assets/images/oauth-apps/oauth_apps_application_description.png)
9. [Authorization callback URL] に、アプリケーションのコールバック URL を入力します。 ![アプリケーションの認可コールバック URL フィールド](/assets/images/oauth-apps/oauth_apps_authorization_callback_url.png)
{% ifversion fpt or ghes or ghec %}
   {% note %}

   **注釈:** {% data variables.product.prodname_github_apps %} と異なり、OAuth App は複数のコールバック URL を持つことはできません。

   {% endnote %}
{% endif %}{% ifversion device-flow-is-opt-in %}
1. If your OAuth App will use the device flow to identify and authorize users, click **Enable Device Flow**. For more information about the device flow, see "[Authorizing OAuth Apps](/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow)." ![Screenshot showing field for enabling device flow](/assets/images/oauth-apps/enable-device-flow.png){% endif %}
2.  **Register application** をクリックする。 ![アプリケーションを登録するボタン](/assets/images/oauth-apps/oauth_apps_register_application.png)
