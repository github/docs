---
title: GitHub Insightsのインストール
intro: '{% data variables.product.prodname_insights %}をインストールし、そのスタンドアローンアプリケーションを{% data variables.product.prodname_ghe_server %}に接続できます。'
product: '{% data reusables.gated-features.github-insights %}'
redirect_from:
  - /github/installing-and-configuring-github-insights/installing-github-insights
permissions: '`github/insights-releases`リポジトリに読み取り権限を持ち、アプリケーションサーバーに管理アクセスできる{% data variables.product.prodname_enterprise %}のOrganizationのオーナーは、{% data variables.product.prodname_insights %}をインストールできます。'
versions:
  enterprise-server: '*'
---

### 必要な環境

- {% data variables.product.prodname_insights %}を含む{% data variables.product.prodname_enterprise %}のライセンスファイルを持っていなければなりません。 {% data variables.product.prodname_insights %}の購入後、更新されたライセンスファイルを[{% data variables.product.prodname_enterprise %} Webポータル](https://enterprise.github.com/download)でダウンロードできます。
- {% data reusables.github-insights.requires-machine %} 詳しい情報については「[{% data variables.product.prodname_insights %}のシステム概要](/github/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)」を参照してください。
- アプリケーションサーバーに依存関係をインストールしなければなりません。
  - [Docker](https://docs.docker.com/install/) 1.13.0+
  - [Docker Compose](https://docs.docker.com/compose/install/) v1.17.0+
  - [netcat](http://netcat.sourceforge.net/), available via apt for [Debian](https://packages.debian.org/search?keywords=netcat) and [Ubuntu](https://packages.ubuntu.com/search?keywords=netcat&searchon=names)

  {% note %}

  **ノート：** {% data reusables.github-insights.docker-requirements %}

  {% endnote %}

### {% data variables.product.prodname_github_app %}の作成

{% data variables.product.prodname_insights %}を{% data variables.product.prodname_enterprise %}に接続するには、{% data variables.product.prodname_enterprise %}上のOrganization内に{% data variables.product.prodname_github_app %}を作成しなければなりません。 インテグレーションが動作すると、{% data variables.product.prodname_enterprise %}上にアプリケーションのスラッグバージョンの名前が表示されます。

{% data reusables.enterprise_site_admin_settings.sign-in %}
2. に接続したいOrganizationにアクセスしてください。
{% data variables.product.prodname_insights %}.
{% data reusables.organizations.org_settings %}
{% data reusables.organizations.github-apps-settings-sidebar %}
5. **New {% data variables.product.prodname_github_app %}（新規{% data variables.product.prodname_github_app %}）**をクリックしてください。 ![新規GitHub Appボタン](/assets/images/help/apps/github_apps_new.png)
6. "{% data variables.product.prodname_github_app %} name（{% data variables.product.prodname_github_app %}名）"の下で、アプリケーションの名前を入力してください。 アプリケーションの名前は、その名前があなた自身のユーザ名やOrganization名でないかぎり、既存のユーザやOrganizationと同じ名前になってはいけません。 ![GitHub App名フィールド](/assets/images/help/apps/github_apps_app_name.png)
7. "Homepage URL（ホームページのURL）"の下に、{% data variables.product.prodname_insights %}のアプリケーションサーバーのURLを入力してください。 詳しい情報については「[{% data variables.product.prodname_insights %}のシステム概要](/insights/installing-and-configuring-github-insights/system-overview-for-github-insights#requirements-for-running-github-insights)」を参照してください。 ![ホームページのURLフィールド](/assets/images/help/apps/github_apps_homepage_url.png)
8. ""User authorization callback URL（ユーザ認証のコールバックURL）"の下で、以下の`<application-server-url>`をアプリケーションサーバーのURLで置き換えて入力してください。
   ```
   <application-server-url>/public/applogin
   ```
   ![ユーザ認可のコールバックフィールド](/assets/images/help/apps/github_apps_user_authorization.png)
9. "Setup URL（セットアップURL）"の下で、`<application-server-url>/public/setup`と入力してください。 ![セットアップURLフィールド](/assets/images/help/apps/github-apps-setup-url.png)
9. "Webhook URL"の下で、 `<application-server-url>/webhooks`と入力してください。 ![webhookのURLフィールド](/assets/images/help/apps/github_apps_webhook_url.png)
10. "Webhook secret（Webhookのシークレット）"の下で、シークレットを入力し、後に参照するためにそのシークレットを記録しておいてください。 ![Webhookのシークレットフィールド](/assets/images/help/apps/github_apps_webhook_secret.png)
11. "Permissions（権限）"の下で、ドロップダウンメニューを使ってアプリケーションに以下の権限を設定してください。
    - リポジトリ:
      - Contents: **Read-only**
      - Metadata: **Read-only**
      - Pull requests: **Read-only**
      - Pull requests: **Read-only**
    - Organization:
      - Members: **Read-only**
      - Projects: **Read-only**

  ![権限ドロップダウンメニュー](/assets/images/help/apps/github_apps_new_permissions_post2dot13.png)
12. "Subscribe to events（イベントのサブスクライブ）"の下で、以下を選択してください。
    - Member
    - プルリクエスト
    - Push
    - Repository
    - Team ![イベントへのサブスクライブチェックボックス](/assets/images/help/apps/github_apps_subscribe_to_events_pr_push_repository.png)

13. {% data variables.product.product_location %}内の任意のユーザあるいはOrganizationからのデータに{% data variables.product.prodname_github_app %}がアクセスできるようにするために、"Where can this {% data variables.product.prodname_github_app %} be installed?（この{% data variables.product.prodname_github_app %}はどこにインストールできますか？）"の下で、**Any account（任意のアカウント）**を選択してください。 ![任意のアカウントへのアクセスを有効化するラジオボタン](/assets/images/help/apps/github_apps_installation_options_any_account.png)
14. **Create {% data variables.product.prodname_github_app %}（{% data variables.product.prodname_github_app %}の作成）**をクリックしてください。 ![GitHub Appの作成ボタン](/assets/images/help/apps/github_apps_create_github_app.png)
15. アプリケーションの設定をレビューしてください。
16. "Private keys（秘密鍵）"の下で、**Generate a private key（秘密鍵の生成）**をクリックしてください。 ![秘密鍵の生成ボタン](/assets/images/help/apps/generate-private-key.png)
17. 生成されたPEMファイルを、後で使うために保存してください。
18. アプリケーションに関する以下の情報を、後で参照できるよう記録しておいてください。
    - App ID（アプリケーションID）
    - Client ID（クライアントID）
    - Client secret（クライアントシークレット）
    - Private key（秘密鍵）
    - Webhook secret（Webhookシークレット）

### {% data variables.product.prodname_insights %}のインストール

{% data reusables.github-insights.download-latest-release %}
{% data reusables.github-insights.install-script %}
{% data reusables.github-insights.run-script %}

### {% data variables.product.prodname_insights %} を設定する

{% data variables.product.prodname_ghe_server %}に接続するよう{% data variables.product.prodname_insights %}を設定するには、以前のステップで記録した情報が必要になります。

1. ブラウザで`<application-server-url>/setup`にアクセスしてください。
{% data reusables.github-insights.enterprise-api-url %}
{% data reusables.github-insights.insights-license %}
{% data reusables.github-insights.app-id %}
{% data reusables.github-insights.client-id %}
{% data reusables.github-insights.client-secret %}
{% data reusables.github-insights.private-key %}
{% data reusables.github-insights.webhook-secret %}
{% data reusables.github-insights.skip-ssl %}
11. **Submit（サブミット）**をクリックしてください。
12. **Log in with {% data variables.product.prodname_dotcom %}（{% data variables.product.prodname_dotcom %}でログイン）**をクリックしてください。
13. {% data variables.product.prodname_github_app %}を認可して{% data variables.product.prodname_insights %}にアクセスするには、** Authorize {% data variables.product.prodname_github_app %}（{% data variables.product.prodname_github_app %}を認可）**をクリックしてください。

### 参考リンク

- [リポジトリの管理](/insights/installing-and-configuring-github-insights/managing-repositories)
- <a href="/github/site-policy/github-insights-and-data-protection-for-your-organization" class="dotcom-only">{% data variables.product.prodname_insights %}とOrganizationのデータ保護</a>
