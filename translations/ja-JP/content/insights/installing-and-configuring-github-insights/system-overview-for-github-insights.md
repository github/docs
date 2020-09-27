---
title: GitHub Insightsのシステム概要
intro: '{{ site.data.variables.product.prodname_insights }}は、{{ site.data.variables.product.prodname_enterprise }}とインターフェースするスタンドアローンアプリケーションです。'
product: '{{ site.data.reusables.gated-features.github-insights }}'
redirect_from:
  - /github/installing-and-configuring-github-insights/system-overview-for-github-insights
versions:
  enterprise-server: '*'
---

### {{ site.data.variables.product.prodname_insights }}を動作させるための必要条件

{{ site.data.variables.product.prodname_insights }}は、サポートされているバージョンの{{ site.data.variables.product.prodname_ghe_server }}を必要とします。

{{ site.data.reusables.github-insights.requires-machine }} Debian Buster、Debian Stretch、あるいはUbuntu 16.04+の任意のLTSバージョンをベースOSとする標準タイプのマシンがサポートされます。

{{ site.data.variables.product.prodname_insights }}をプロビジョニングするには、アプリケーションサーバーはDockerを含む特定の依存関係を実行できなければなりません。 {{ site.data.reusables.github-insights.docker-requirements }} 詳しい情報については「[{{ site.data.variables.product.prodname_insights }}のインストール](/insights/installing-and-configuring-github-insights/installing-github-insights#prerequisites)」を参照してください。

アプリケーションサーバーは、最小限の仕様を満たしていなければなりません。

| 仕様    | 最小値   |
| ----- | ----- |
| vCPUs | 16    |
| RAM   | 64GB  |
| ディスク  | 250GB |

{{ site.data.variables.product.prodname_insights }}を使って大量のデータをインポートするなら、より大きな最小値を使うことをおすすめします。 詳しい情報については「[リポジトリの管理](/github/installing-and-configuring-github-insights/managing-repositories#about-import-times)」を参照してください。

### {{ site.data.variables.product.prodname_insights }}のセキュリティと認証

{{ site.data.variables.product.prodname_insights }}はユーザのインフラストラクチャ上で動作し、既存の情報セキュリティのコントロール下で管理されます。 {{ site.data.variables.product.prodname_insights }}は、認証とアクセス権限に{{ site.data.variables.product.prodname_enterprise }}の既存のユーザアカウントを使います。

#### ネットワークのセキュリティ

{{ site.data.variables.product.prodname_insights }}の内部ファイアウォールは、ネットワークアクセスをアプリケーションサーバーのサービスに限定します。 アプリケーションサーバーが機能するのに必要なサービスだけが、ネットワーク経由で利用できます。

{{ site.data.variables.product.prodname_insights }}は、インバウンド及びアウトバウンドで以下のポートがオープンになっていなければなりません。

| ポート | サービス       | プロトコル |
| --- | ---------- | ----- |
| 22  | SSH USER   | TCP   |
| 80  | HTTP USER  | TCP   |
| 443 | HTTPS USER | TCP   |

#### 認証とアクセス権限

{{ site.data.variables.product.prodname_insights }}の認証は、{{ site.data.variables.product.prodname_enterprise }}を通じて処理されます。 インストールの際に{{ site.data.variables.product.prodname_github_app }}が作成され、これによって{{ site.data.variables.product.prodname_insights }}はユーザを認証できるようになります。 {{ site.data.variables.product.prodname_github_app }}は、ユーザ及びアプリケションの権限のスコープ内での{{ site.data.variables.product.prodname_enterprise }}とのやりとりにも使われます。

{{ site.data.reusables.github-insights.permissions-levels }}

{{ site.data.variables.product.prodname_insights }}内のデータアクセスは、各ユーザの{{ site.data.variables.product.prodname_enterprise }}におけるデータアクセスに従って制限されます。 ユーザは、{{ site.data.variables.product.prodname_enterprise }}でアクセスできないリポジトリに関する{{ site.data.variables.product.prodname_insights }}内のデータを見ることはできません。

### {{ site.data.variables.product.prodname_insights }}のアーキテクチャ

![システムアーキテクチャ](/assets/images/help/insights/github-isights-system-diagram.png)
