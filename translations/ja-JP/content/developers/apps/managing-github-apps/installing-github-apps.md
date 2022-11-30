---
title: GitHub Appのインストール
intro: 'アプリがパブリックの場合、誰でも{% ifversion fpt or ghec %} {% data variables.product.prodname_marketplace %} または{% endif %}インストール URL を使用して、リポジトリにアプリをインストールできます。 アプリケーションがプライベートの場合は、あなたが所有するリポジトリにそのアプリケーションをインストールできるのはあなただけです。'
redirect_from:
  - /apps/installing-github-apps
  - /developers/apps/installing-github-apps
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - GitHub Apps
ms.openlocfilehash: 4244e1e4aacbcc5f7e0f16092df9823ce5832f0a
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145089879'
---
{% note %}

**注:** {% data variables.product.prodname_github_app %}は、誰かがアプリケーションを選択したリポジトリにだけインストールした場合でも、アプリケーションが作成するすべてのリポジトリにアクセスできます。

{% endnote %}

## プライベートなGitHub Appのリポジトリへのインストール

プライベートなGitHub Appを作成した場合、自分のOrganizationあるいはユーザリポジトリにそれをインストールできます。 詳細については、「[非公開インストール フロー](/apps/managing-github-apps/making-a-github-app-public-or-private/#private-installation-flow)」を参照してください。

1. [[GitHub アプリの設定] ページ](https://github.com/settings/apps)で、アプリを選択します。
2. 左側のサイドバーで、 **[アプリのインストール]** をクリックします。
3. 適切なリポジトリを含む組織または個人アカウントの横にある **[インストール]** をクリックします。
4. すべてのリポジトリ、もしくは選択したリポジトリにアプリケーションをインストールしてください。
![アプリケーションのインストール権限](/assets/images/install_permissions.png)
5. インストールが終わると、選択したアカウントでアプリケーションの設定オプションが表示されます。 ここで変更をすることも、あるいは先のステップを繰り返して他のアカウントへアプリケーションをインストールすることもできます。

{% ifversion fpt or ghec %}
## GitHub Marketplaceでのアプリケーションの提供

[{% data variables.product.prodname_marketplace %}](https://github.com/marketplace) では有料あるいは無料バージョンのアプリケーションを提供でき、ユーザがアプリケーションについて検索したり表示したりできます。 {% data variables.product.prodname_marketplace %}は注文が完了すると、自動的にGitHub Appをインストールします。

{% data variables.product.prodname_marketplace %}上でのアプリケーションのリストに関してさらに学ぶには、「[GitHub Marketplaceの利用を始める](/marketplace/getting-started/)」を参照してください。

ユーザーが {% data variables.product.prodname_marketplace %} からアプリをインストールする方法の詳細については、「[GitHub Marketplace でのアプリの購入とインストール](/articles/purchasing-and-installing-apps-in-github-marketplace)」を参照してください。

{% endif %}

## ユーザがパブリックなアプリケーションをリポジトリにインストールできるようにする

アプリケーションのホームページのような場所にインストールURLを提供して、パブリックなアプリケーションをユーザがインストールできるようにすることができます。 そして、GitHub上のランディングページからアプリケーションのホームページを指すようにできます。

 OAuth AppからGitHub Appに移行しているなら、GitHub Appをインストールする際にリポジトリとアカウントを事前選択するよう、クエリパラメータを利用できます。 詳細については、「[OAuth アプリを GitHub Apps に移行する](/apps/migrating-oauth-apps-to-github-apps/)」を参照してください。

以下のステップでは、[{% data variables.product.prodname_github_app %} が作成](/apps/building-github-apps/)されていることを前提としています。

1. [[GitHub アプリの設定] ページ](https://github.com/settings/apps)で、他のユーザーがインストールできるように構成するパブリックなアプリを選択します。
2. [ホームページの URL] にアプリケーションのホームページの URL を入力し、 **[変更を保存]** をクリックしてください。
![ホームページ URL](/assets/images/github-apps/github_apps_homepageURL.png)
3. GitHubは、アプリケーションの「ホームページURL」へのリンクを含むアプリケーションのためのランディングページを提供します。 GitHub上のランディングページにアクセスするには、「Public link（公開リンク）」からURLをコピーし、ブラウザに貼り付けてください。
![パブリック リンク](/assets/images/github-apps/github_apps_public_link.png)
4. アプリのインストール URL を含むアプリのホーム ページを作成します`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new`。

## インストール中のユーザの認可

認可のプロセスは、アプリケーションのインストール中に完了させることでシンプルにできます。 そのためには、GitHub 上でアプリケーションを作成もしくは変更する際に **[インストール中にユーザの認可 (OAuth) をリクエスト]** を選択してください。 詳細については、「[GitHub アプリの作成](/apps/building-github-apps/creating-a-github-app/)」を参照してください。

誰かがアプリケーションをインストールしたら、そのユーザのアクセストークンを取得する必要があります。 詳細については、「[サイト上のユーザーを特定する](/apps/building-github-apps/identifying-and-authorizing-users-for-github-apps/#identifying-users-on-your-site)」の手順 2 と 3 を参照してください。
## インストール中のアプリケーションの状態の保持

アプリケーションのインストール URL に`state` パラメーターを提供して、アプリケーション ページの状態を保持し、インストールや認可、GitHub App の更新を受け付けた後にその状態に戻れるようにできます。 たとえば、`state` を使ってインストールをユーザーあるいはアカウントと関連付けることができます。

状態を保持するには、インストールURLに追加します。

`{% data variables.product.oauth_host_code %}/apps/<app name>/installations/new?state=AB12t`
