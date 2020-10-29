---
title: GitHub App を作成する
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration/
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps/
  - /apps/building-github-apps/creating-a-github-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

{% if currentVersion == "free-pro-team@latest" %}事前設定された GitHub App を作成できる GitHub App Manifest の使い方については、「[マニフェストから GitHub App を作成する](/apps/building-github-apps/creating-github-apps-from-a-manifest/)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **ノート：** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
4. [**New GitHub App**] をクリックします。 ![新しい GitHub App を作成するボタン](/assets/images/github-apps/github_apps_new.png)
5. [GitHub App name] に、アプリケーションの名前を入力します。 ![GitHub App の名前フィールド](/assets/images/github-apps/github_apps_app_name.png)

  Give your app a clear and succinct name. Your app cannot have the same name as an existing GitHub user, unless it is your own user or organization name. A slugged version of your app's name will be shown in the user interface when your integration takes an action.

6. 必要に応じて、ユーザーに表示されるアプリケーションの説明を [Description] に入力します。 ![GitHub App の説明フィールド](/assets/images/github-apps/github_apps_description.png)
7. [Homepage URL] に、アプリケーションのウェブサイトの完全な URL を入力します。 ![GitHub App のホームページ URL フィールド](/assets/images/github-apps/github_apps_homepage_url.png)
8. [User authorization callback URL] に、ユーザーがインストールを認可した後にリダイレクトされる URL を完全な形で入力します。 This URL is used if your app needs to identify and authorize user-to-server requests. ![GitHub App のユーザ認可コールバック URL フィールド](/assets/images/github-apps/github_apps_user_authorization.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" %}
9. デフォルトでは、アプリケーションのセキュリティを高めるため、アプリケーションは期限付きのユーザ認可トークンを使用します。 期限付きのユーザトークンの使用をオプトアウトするには、[Expire user authorization tokens] の選択を解除する必要があります。 リフレッシュトークンフローの設定と、期限付きユーザトークンの利点に関する詳細については、「[ユーザからサーバーに対するアクセストークンをリフレッシュする](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)」を参照してください。 ![GitHub App のセットアップ中に期限付きユーザトークンをオプトインするオプション](/assets/images/github-apps/expire-user-tokens-selection.png)
{% endif %}
9. アプリケーションが OAuth フローを使用してユーザを認可する場合、[**Request user authorization (OAuth) during installation**] を選択して、ユーザーかアプリをインストール時に認可するようにできます。 このオプションを選択した場合、[Setup URL] が利用できなくなり、アプリケーションのインストール後にユーザはあなたが設定した [User authorization callback URL] にリダイレクトされます。 詳しい情報については「[インストール中にユーザを認可する](/apps/installing-github-apps/#authorizing-users-during-installation)」を参照してください。 ![インストール時にユーザの認可を要求する](/assets/images/github-apps/github_apps_request_auth_upon_install.png)
10. インストール後に追加の設定が必要な場合、[Setup URL] を追加して、アプリケーションをインストールした後にユーザをリダイレクトします。 ![GitHub App のセットアップ URL フィールド ](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **注釈:** 前のステップで [**Request user authorization (OAuth) during installation**] を選択した場合、このフィールドは利用できなくなり、アプリケーションのインストール後にユーザは [User authorization callback URL] にリダイレクトされます。

  {% endnote %}

11. [Webhook URL] に、イベントが POST する URL を入力します。 各アプリケーションは、アプリケーションがインストールまたは変更されたり、アプリケーションがサブスクライブしているその他のイベントが発生したりするたびに、アプリケーションで設定した webhook を受信します。 ![GitHub App の webhook URL フィールド](/assets/images/github-apps/github_apps_webhook_url.png)

12. 必要に応じて、webhook を保護するための、オプションのシークレットトークンを [Webhook Secret] に入力します。 ![webhook にシークレットトークンを追加するフィールド](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **注釈:** シークレットトークンは、設定することを強くお勧めします。 詳しい情報については「[webhookをセキュアにする](/webhooks/securing/)」を参照してください。

  {% endnote %}

13. [Permissions] で、アプリケーションが要求する権限を選択します。 権限の各タイプで、ドロップダウンメニューを使用して [**Read-only**]、[**Read & write**]、または[**No access**] をクリックします。 ![GitHub App のさまざまな権限](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
14. [Subscribe to events] で、アプリケーションが [**Label**]、[**Public**]、 [**Repository**]、[**Watch**] イベントにサブスクライブするかどうかを選択します。 ![GitHub App のイベントオプションにサブスクライブする](/assets/images/github-apps/github_apps_subscribe_to_events.png)
15. アプリケーションをインストールする場所を、[**Only on this account**] (このアカウントのみ) と [**Any account**] (すべてのアカウント) から選びます。 これらのオプションに関する詳しい情報については、「[GitHub App をパブリックまたはプライベートにする](/apps/managing-github-apps/making-a-github-app-public-or-private/)」を参照してください。 ![GitHub App のインストールオプション](/assets/images/github-apps/github_apps_installation_options.png)
16. [**Create GitHub App**] をクリックします。 ![GitHub App を作成するボタン](/assets/images/github-apps/github_apps_create_github_app.png)
