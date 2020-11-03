---
title: 自己ホストランナーについて
intro: '独自のランナーをホストして、{% data variables.product.prodname_actions %}ワークフロー中でジョブの実行に使われる環境をカスタマイズできます。'
redirect_from:
  - /github/automating-your-workflow-with-github-actions/about-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/about-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### 自己ホストランナーについて

{% data reusables.github-actions.self-hosted-runner-description %} セルフホストランナーは、物理、仮想、コンテナ内、オンプレミス、クラウド内のいずれでも可能です。

管理階層のさまざまなレベルでセルフホストランナーを追加できます。
- リポジトリレベルのランナーは、単一のリポジトリ専用です。
- Organization レベルのランナーは、Organization 内の複数のリポジトリのジョブを処理できます。
- Enterprise レベルのランナーは、Enterprise アカウントの複数の Organization に割り当てることができます。

ランナーマシンは、{% data variables.product.prodname_actions %}のセルフホストランナーアプリケーションを使って{% data variables.product.product_name %}に接続します。 {% data reusables.github-actions.runner-app-open-source %} 新しいバージョンがリリースされると、ランナーアプリケーションはランナーにジョブが割り当てられた時、あるいはジョブが割り当てられなかったなら、リリースから一週間以内に、自動的に自分をアップデートします。

{% data reusables.github-actions.self-hosted-runner-auto-removal %}

セルフホストランナーのインストールと利用に関する詳しい情報については「[セルフホストランナーの追加](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)」及び「[ワークフロー内でのセルフホストランナーの利用](/github/automating-your-workflow-with-github-actions/using-self-hosted-runners-in-a-workflow)」を参照してください。

### {% data variables.product.prodname_dotcom %}ホストランナーとセルフホストランナーの違い

{% data variables.product.prodname_dotcom %}ホストランナーは、ワークフローを素早くシンプルに実行する方法を提供しますが、セルフホストランナーはユーザのカスタム環境内でワークフローを実行する、設定の幅が広い方法です。

**{% data variables.product.prodname_dotcom %}ホストランナーは：**
- オペレーティングシステム、プリインストールされたパッケージとツール、セルフホストランナーアプリケーションの自動アップデートを受信します。
- {% data variables.product.prodname_dotcom %}によって管理及びメンテナンスされます。
- ジョブの実行のたびにクリーンなインスタンスを提供します。
- {% data variables.product.prodname_dotcom %}プランの無料の分を使います。無料の分を超えると、分単位のレートが適用されます。

**セルフホストランナーは：**
- セルフホストランナーアプリケーションのみ、自動アップデートを受信します。 オペレーティングシステムとその他のソフトウェアのアップデートはあなたがしなければなりません。
- すでに支払いをしているクラウドサービスあるいはローカルマシンを利用できます。
- 利用するハードウェア、オペレーティングシステム、ソフトウェア、セキュリティ上の要求に合わせてカスタマイズできます。
- ジョブの実行のたびにクリーンなインスタンスを保持する必要がありません。
- {% data variables.product.prodname_actions %}と合わせて無料で利用できますが、ランナーマシンのメンテナンスコストはあなたが受け持ちます。

### セルフホストランナーマシンに対する要求

以下の要求を満たしていれば、いかなるマシンもセルフホストランナーとして利用できます。

* マシン上にセルフホストランナーアプリケーションをあなたがインストールして実行できること。 詳しい情報については「[セルフホストランナーでサポートされるオペレーティングシステム](#supported-operating-systems-for-self-hosted-runners)」を参照してください。
* そのマシンが{% data variables.product.prodname_actions %}と通信できる。 詳しい情報については「[セルフホストランナーと{% data variables.product.prodname_dotcom %}の通信](#communication-between-self-hosted-runners-and-github)」を参照してください。
* そのマシンが、実行しようとしている種類のワークフローに対して十分なハードウェアリソースを持っていること。 セルフホストランナーアプリケーションそのものは、最小限のリソースしか必要としません。
* Dockerコンテナアクションあるいはサービスコンテナを使うワークフローを実行したいなら、Linuxのマシンを使い、Dockerがインストールされていなければなりません。

### 使用制限

セルフホストランナーを使用する場合、{% data variables.product.prodname_actions %} の使用にはいくつかの制限があります。 これらの制限は変更されることがあります。

{% data reusables.github-actions.usage-workflow-run-time %}
- **ジョブキュー時間** - セルフホストランナーの各ジョブは、最大24時間キューイングできます。 この制限内にセルフホストランナーがジョブの実行を開始しなければ、ジョブは終了させられ、完了に失敗します。
{% data reusables.github-actions.usage-api-requests %}
- **ジョブマトリックス** - {% data reusables.github-actions.usage-matrix-limits %}

### セルフホストランナーをサポートするオペレーティングシステム

セルフホストランナーアプリケーション用には、以下のオペレーティングシステムがサポートされています。

#### Linux

- Red Hat Enterprise Linux 7
- CentOS 7
- Oracle Linux 7
- Fedora 29以降
- Debian 9以降
- Ubuntu 16.04以降
- Linux Mint 18以降
- openSUSE 15以降
- SUSE Enterprise Linux (SLES) 12 SP2以降

#### Windows

- Windows 7 64-bit
- Windows 8.1 64-bit
- Windows 10 64-bit
- Windows 10 64-bit
- Windows Server 2016 64-bit
- Windows Server 2019 64-bit

#### MacOS

- macOS 10.13 (High Sierra)以降

{% if enterpriseServerVersions contains currentVersion %}

### セルフホストランナーと{% data variables.product.prodname_dotcom %}との通信

そのマシンが{% data variables.product.prodname_actions %}と通信できる。 詳しい情報については「[セルフホストランナーと{% data variables.product.prodname_dotcom %}の通信](#communication-between-self-hosted-runners-and-github)」を参照してください。

{% endif %}

### セルフホストランナーと{% data variables.product.product_name %}との通信

The self-hosted runner polls {% data variables.product.prodname_dotcom %} to retrieve application updates and to check if any jobs are queued for processing. The self-hosted runner uses a HTTPS _long poll_ that opens a connection to {% data variables.product.prodname_dotcom %} for 50 seconds, and if no response is received, it then times out and creates a new long poll. アプリケーションは、{% data variables.product.prodname_actions %}ジョブを受け付けて実行するためにマシン上で動作していなければなりません。

{% if currentVersion == "free-pro-team@latest" %}

下記の {% data variables.product.prodname_dotcom %} の URL と通信するための適切なネットワークアクセスがマシンにあることを確認する必要があります。

```
github.com
api.github.com
*.actions.githubusercontent.com
```

{% data variables.product.prodname_dotcom %} OrganizationあるいはEnterpriseアカウントでIPアドレス許可リストを使うなら、セルフホストランナーのIPアドレスを許可リストに追加しなければなりません。 詳しい情報については「[Organizationの許可IPアドレスの管理](/github/setting-up-and-managing-organizations-and-teams/managing-allowed-ip-addresses-for-your-organization#using-github-actions-with-an-ip-allow-list)」あるいは「[Enterpriseアカウントでのセキュリティ設定の適用](/github/setting-up-and-managing-your-enterprise/enforcing-security-settings-in-your-enterprise-account#using-github-actions-with-an-ip-allow-list)」を参照してください。

{% else %}

マシンには、{% data variables.product.product_location %}と通信するための適切なネットワークアクセスを持たせなければなりません。

{% endif %}

セルフホストランナーは、プロキシサーバーと合わせて使うこともできます。 詳しい情報については「[セルフホストランナーと合わせてプロキシサーバーを使う](/actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners)」を参照してください。

### パブリックリポジトリでのセルフホストランナーのセキュリティ

{% data reusables.github-actions.self-hosted-runner-security %}

それぞれの{% data variables.product.prodname_dotcom %}ホストランナーは常にクリーンな隔離された仮想マシンになり、ジョブの実行が終わると破棄されるので、{% data variables.product.prodname_dotcom %}ホストランナーではこれは問題にはなりません。

あなたのセルフホストランナー上で実行される信頼できないワークフローは、あなたのマシンやネットワーク環境に大きなセキュリティリスクをもたらします。これは特に、マシンがジョブにまたがって環境を保持する場合に当てはまります。 リスクには以下のようなものがあります。

* マシン上での悪意あるプログラムの実行
* マシンのランナーのサンドボックスからの脱却
* マシンのネットワーク環境へのアクセスの露出
* 望まないもしくは危険なデータのマシン上への保存
