---
title: GitHub Appのインストール
intro: 'When your app is public, anyone can use {% if currentVersion == "free-pro-team@latest" %} the {% data variables.product.prodname_marketplace %} or {% endif %}an installation URL to install the app on their repository. When your app is private, only you can install the app on repositories that you own.'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - GitHub Apps
---

{% note %}

**ノート:** {% data variables.product.prodname_github_app %}は、誰かがアプリケーションを選択したリポジトリにだけインストールした場合でも、アプリケーションが作成するすべてのリポジトリにアクセスできます。

{% endnote %}

### プライベートなGitHub Appのリポジトリへのインストール

プライベートなGitHub Appを作成した場合、自分のOrganizationあるいはユーザリポジトリにそれをインストールできます。 詳しい情報については「[プライベートインストールのフロー](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)」を参照してください。

1. [GitHub Appsの設定ページ](https://github.com/settings/apps)から、アプリケーションを選択してください。
2. 左のサイドバーで、**Install App（アプリケーションのインストール）**をクリックしてください。
3. 適切なリポジトリを含むOrganizationもしくはユーザアカウントの隣の** Install（インストール）**をクリックしてください。
4. すべてのリポジトリ、もしくは選択したリポジトリにアプリケーションをインストールしてください。 ![アプリケーションのインストール権限](/assets/images/install_permissions.png)
5. インストールが終わると、選択したアカウントでアプリケーションの設定オプションが表示されます。 ここで変更をすることも、あるいは先のステップを繰り返して他のアカウントへアプリケーションをインストールすることもできます。

{% if currentVersion == "free-pro-team@latest" %}
### GitHub Marketplaceでのアプリケーションの提供

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace)では有料あるいは無料バージョンのアプリケーションを提供でき、ユーザがアプリケーションについて検索したり表示したりできます。 {% data variables.product.prodname_marketplace %}は注文が完了すると、自動的にGitHub Appをインストールします。

{% data variables.product.prodname_marketplace %}上でのアプリケーションのリストに関してさらに学ぶには、「[GitHub Marketplaceの利用を始める](/marketplace/getting-started/)」を参照してください。

{% data variables.product.prodname_marketplace %}からユーザがアプリケーションをインストールする方法の詳細については、「[GitHub Marketplaceでのアプリケーションの購入とインストール](/articles/purchasing-and-installing-apps-in-github-marketplace)」を参照してください。

{% endif %}

### ユーザがパブリックなアプリケーションをリポジトリにインストールできるようにする

アプリケーションのホームページのような場所にインストールURLを提供して、パブリックなアプリケーションをユーザがインストールできるようにすることができます。 そして、GitHub上のランディングページからアプリケーションのホームページを指すようにできます。

 OAuth AppからGitHub Appに移行しているなら、GitHub Appをインストールする際にリポジトリとアカウントを事前選択するよう、クエリパラメータを利用できます。 詳細については「[OAuth AppからGitHub Appへの移行](/apps/migrating-oauth-apps-to-github-apps/)」を参照してください。

以下のステップでは、[{% data variables.product.prodname_github_app %}を構築](/apps/building-github-apps/)済みであるものとしています。

1. [GitHub Appの設定ページ](https://github.com/settings/apps)から、他のユーザがインストールできるように設定したいパブリックなアプリケーションを選択してください。
2. "Homepage URL（ホームページのURL）"にアプリケーションのホームページのURLを入力し、**Save changes（変更を保存）**をクリックしてください。 ![ホームページのURL](/assets/images/github-apps/github_apps_homepageURL.png)
3. GitHubは、アプリケーションの「ホームページURL」へのリンクを含むアプリケーションのためのランディングページを提供します。 GitHub上のランディングページにアクセスするには、「Public link（公開リンク）」からURLをコピーし、ブラウザに貼り付けてください。 ![公開リンク](/assets/images/github-apps/github_apps_public_link.png)
4. `{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`というアプリケーションのインストールURLを含む、アプリケーションのためのホームページを作成してください。

### インストール中のユーザの認可

認可のプロセスは、アプリケーションのインストール中に完了させることでシンプルにできます。 そのためには、GitHub上でアプリケーションを作成もしくは変更する際に**Request user authorization (OAuth) during installation（インストール中にユーザの認可（OAuth）をリクエスト）**を選択してください。 詳細については「[GitHub Appの作成](/apps/building-github-apps/creating-a-github-app/)を参照してください。

誰かがアプリケーションをインストールしたら、そのユーザのアクセストークンを取得する必要があります。 詳細については「[サイトでのユーザの特定](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)」のステップ2と3を参照してください。
### インストール中のアプリケーションの状態の保持

アプリケーションのインストールURLに`state`パラメータを提供して、アプリケーションページの状態を保持して、インストールや認可、GitHub Appの更新を受け付けた後にその状態に戻れるようにできます。 たとえば、`state`を使ってインストールをユーザあるいはアカウントと関連づけることができます。

状態を保持するには、インストールURLに追加します。

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
