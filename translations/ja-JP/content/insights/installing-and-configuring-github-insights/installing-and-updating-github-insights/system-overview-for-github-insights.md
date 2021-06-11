---
title: GitHub Insightsのシステム概要
intro: '{% data variables.product.prodname_insights %}は、{% data variables.product.prodname_enterprise %}とインターフェースするスタンドアローンアプリケーションです。'
redirect_from:
  - /github/installing-and-configuring-github-insights/system-overview-for-github-insights
  - /insights/installing-and-configuring-github-insights/system-overview-for-github-insights
versions:
  enterprise-server: '*'
---

### {% data variables.product.prodname_insights %}を動作させるための必要条件

{% data variables.product.prodname_insights %}は、サポートされているバージョンの{% data variables.product.prodname_ghe_server %}を必要とします。

{% data reusables.github-insights.requires-machine %} Debian Buster、Debian Stretch、あるいはUbuntu 16.04+の任意のLTSバージョンをベースOSとする標準タイプのマシンがサポートされます。

{% data variables.product.prodname_insights %}をプロビジョニングするには、アプリケーションサーバーはDockerを含む特定の依存関係を実行できなければなりません。 {% data reusables.github-insights.docker-requirements %} 詳しい情報については「[{% data variables.product.prodname_insights %}のインストール](/insights/installing-and-configuring-github-insights/installing-github-insights#prerequisites)」を参照してください。

アプリケーションサーバーは、最小限の仕様を満たしていなければなりません。

| 仕様    | 最小値   |
| ----- | ----- |
| vCPUs | 16    |
| RAM   | 64GB  |
| ディスク  | 250GB |

{% data variables.product.prodname_insights %}を使って大量のデータをインポートするなら、より大きな最小値を使うことをおすすめします。 詳しい情報については「[リポジトリの管理](/github/installing-and-configuring-github-insights/managing-repositories#about-import-times)」を参照してください。

### {% data variables.product.prodname_insights %}のセキュリティと認証

{% data variables.product.prodname_insights %}はユーザのインフラストラクチャ上で動作し、既存の情報セキュリティのコントロール下で管理されます。 {% data variables.product.prodname_insights %}は、認証とアクセス権限に{% data variables.product.prodname_enterprise %}の既存のユーザアカウントを使います。

#### ネットワークのセキュリティ

{% data variables.product.prodname_insights %}の内部ファイアウォールは、ネットワークアクセスをアプリケーションサーバーのサービスに限定します。 アプリケーションサーバーが機能するのに必要なサービスだけが、ネットワーク経由で利用できます。

{% data variables.product.prodname_insights %}は、インバウンド及びアウトバウンドで以下のポートがオープンになっていなければなりません。

| ポート | サービス       | プロトコル |
| --- | ---------- | ----- |
| 22  | SSH USER   | TCP   |
| 80  | HTTP USER  | TCP   |
| 443 | HTTPS USER | TCP   |

#### 認証とアクセス権限

{% data variables.product.prodname_insights %}の認証は、{% data variables.product.prodname_enterprise %}を通じて処理されます。 インストールの際に{% data variables.product.prodname_github_app %}が作成され、これによって{% data variables.product.prodname_insights %}はユーザを認証できるようになります。 {% data variables.product.prodname_github_app %}は、ユーザ及びアプリケションの権限のスコープ内での{% data variables.product.prodname_enterprise %}とのやりとりにも使われます。

{% data reusables.github-insights.permissions-levels %}

{% data variables.product.prodname_insights %}内のデータアクセスは、各ユーザの{% data variables.product.prodname_enterprise %}におけるデータアクセスに従って制限されます。 ユーザは、{% data variables.product.prodname_enterprise %}でアクセスできないリポジトリに関する{% data variables.product.prodname_insights %}内のデータを見ることはできません。

### {% data variables.product.prodname_insights %}のアーキテクチャ

![システムアーキテクチャ](/assets/images/help/insights/github-isights-system-diagram.png)
