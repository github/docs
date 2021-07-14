---
title: GitHub App を作成する
intro: '{% data reusables.shortdesc.creating_github_apps %}'
redirect_from:
  - /early-access/integrations/creating-an-integration/
  - /apps/building-integrations/setting-up-and-registering-github-apps/registering-github-apps/
  - /apps/building-github-apps/creating-a-github-app
  - /developers/apps/creating-a-github-app
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% if currentVersion == "free-pro-team@latest" %}構成済みの GitHub App を作成できる GitHub App Manifest の使い方については、「[マニフェストから GitHub App を作成する](/apps/building-github-apps/creating-github-apps-from-a-manifest/)」を参照してください。{% endif %}

{% if currentVersion == "free-pro-team@latest" %}
{% note %}

  **ノート：** {% data reusables.apps.maximum-github-apps-allowed %}

{% endnote %}
{% endif %}

{% data reusables.apps.settings-step %}
{% data reusables.user-settings.developer_settings %}
{% data reusables.user-settings.github_apps %}
1. [**New GitHub App**] をクリックします。 ![新しい GitHub App を作成するボタン](/assets/images/github-apps/github_apps_new.png)
1. [GitHub App name] に、アプリケーションの名前を入力します。 ![GitHub App の名前フィールド](/assets/images/github-apps/github_apps_app_name.png)

  アプリケーションには簡潔で明快な名前を付けましょう。 Your app cannot have the same name as an existing GitHub account, unless it is your own user or organization name. インテグレーションが動作すると、ユーザインターフェース上にアプリケーション名のスラッグが表示されます。

1. 必要に応じて、ユーザーに表示されるアプリケーションの説明を [Description] に入力します。 ![GitHub App の説明フィールド](/assets/images/github-apps/github_apps_description.png)
1. [Homepage URL] に、アプリケーションのウェブサイトの完全な URL を入力します。 ![GitHub App のホームページ URL フィールド](/assets/images/github-apps/github_apps_homepage_url.png)
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@3.0" %}
1. [Callback URL] に、ユーザがインストールを認可した後にリダイレクトされる URL を完全な形で入力します。 この URL は、アプリケーションがユーザからサーバへのリクエストを識別して承認する必要がある場合に使用されます。

  [**Add callback URL**] を使用して、コールバック URL を最大 10 個追加できます。

  ![[Add callback URL] のボタンと コールバック URL のフィールド](/assets/images/github-apps/github_apps_callback_url_multiple.png)
{% else %}
1. [User authorization callback URL] に、ユーザーがインストールを認可した後にリダイレクトされる URL を完全な形で入力します。 この URL は、アプリケーションがユーザからサーバへのリクエストを識別して承認する必要がある場合に使用されます。 ![GitHub App のユーザ認可コールバック URL フィールド](/assets/images/github-apps/github_apps_user_authorization.png)

{% endif %}
{% if currentVersion == "free-pro-team@latest" or currentVersion ver_gt "enterprise-server@2.21" or currentVersion == "github-ae@latest" %}
1. デフォルトでは、アプリケーションのセキュリティを高めるため、アプリケーションは期限付きのユーザ認可トークンを使用します。 期限付きのユーザトークンの使用をオプトアウトするには、[Expire user authorization tokens] の選択を解除する必要があります。 リフレッシュトークンフローの設定と、期限付きユーザトークンの利点に関する詳細については、「[ユーザからサーバーに対するアクセストークンをリフレッシュする](/apps/building-github-apps/refreshing-user-to-server-access-tokens/)」を参照してください。 ![GitHub App のセットアップ中に期限付きユーザトークンをオプトインするオプション](/assets/images/github-apps/expire-user-tokens-selection.png)
{% endif %}
1. アプリケーションが OAuth フローを使用してユーザを認可する場合、[**Request user authorization (OAuth) during installation**] を選択して、ユーザーかアプリをインストール時に認可するようにできます。 このオプションを選択した場合、[Setup URL] が利用できなくなり、アプリケーションのインストール後にユーザはあなたが設定した [User authorization callback URL] にリダイレクトされます。 詳しい情報については「[インストール中にユーザを認可する](/apps/installing-github-apps/#authorizing-users-during-installation)」を参照してください。 ![インストール時にユーザの認可を要求する](/assets/images/github-apps/github_apps_request_auth_upon_install.png)
1. インストール後に追加の設定が必要な場合、[Setup URL] を追加して、アプリケーションをインストールした後にユーザをリダイレクトします。 ![GitHub App のセットアップ URL フィールド ](/assets/images/github-apps/github_apps_setup_url.png)

  {% note %}

  **注釈:** 前のステップで [**Request user authorization (OAuth) during installation**] を選択した場合、このフィールドは利用できなくなり、アプリケーションのインストール後にユーザは [User authorization callback URL] にリダイレクトされます。

  {% endnote %}

1. [Webhook URL] に、イベントが POST する URL を入力します。 各アプリケーションは、アプリケーションがインストールまたは変更されたり、アプリケーションがサブスクライブしているその他のイベントが発生したりするたびに、アプリケーションで設定した webhook を受信します。 ![GitHub App の webhook URL フィールド](/assets/images/github-apps/github_apps_webhook_url.png)

1. 必要に応じて、webhook を保護するための、オプションのシークレットトークンを [Webhook Secret] に入力します。 ![webhook にシークレットトークンを追加するフィールド](/assets/images/github-apps/github_apps_webhook_secret.png)

  {% note %}

  **注釈:** シークレットトークンは、設定することを強くお勧めします。 詳しい情報については「[webhookをセキュアにする](/webhooks/securing/)」を参照してください。

  {% endnote %}

1. [Permissions] で、アプリケーションが要求する権限を選択します。 権限の各タイプで、ドロップダウンメニューを使用して [**Read-only**]、[**Read & write**]、または[**No access**] をクリックします。 ![GitHub App のさまざまな権限](/assets/images/github-apps/github_apps_new_permissions_post2dot13.png)
1. In "Subscribe to events", choose the events you want your app to receive.
1. アプリケーションをインストールする場所を、[**Only on this account**] (このアカウントのみ) と [**Any account**] (すべてのアカウント) から選びます。 これらのオプションに関する詳しい情報については、「[GitHub App をパブリックまたはプライベートにする](/apps/managing-github-apps/making-a-github-app-public-or-private/)」を参照してください。 ![GitHub App のインストールオプション](/assets/images/github-apps/github_apps_installation_options.png)
1. [**Create GitHub App**] をクリックします。 ![GitHub App を作成するボタン](/assets/images/github-apps/github_apps_create_github_app.png)
