---
title: About GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %}は、ワークフローを実行するためのホストされた仮想マシンを提供します。 仮想マシンには、{% data variables.product.prodname_actions %}で使用できるツール、パッケージ、および設定の環境が含まれています。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### {% data variables.product.prodname_dotcom %}ホストランナーについて

{% data variables.product.prodname_dotcom %}ホストランナーは{% data variables.product.prodname_actions %}ランナーアプリケーションがインストールされた、{% data variables.product.prodname_dotcom %}がホストする仮想マシンです。 {% data variables.product.prodname_dotcom %}は、Linux、Windows、macOSのランナーを提供します。

{% data variables.product.prodname_dotcom %}ホストランナーを使用すると、マシンのメンテナンスとアップグレードが自動的に行われます。 ワークフローは、仮想マシンで直接実行することも、Dockerコンテナで実行することもできます。

ワークフローのジョブごとにランナーの種類を指定できます。 ワークフローの各ジョブは、仮想マシンの新しいインスタンスで実行されます。 ジョブ実行のステップはすべて、仮想マシンの同じインスタンスで実行されるため、そのジョブのアクションはファイルシステムを使用して情報を共有できます。

{% data reusables.github-actions.runner-app-open-source %}

#### {% data variables.product.prodname_dotcom %}ホストランナーのクラウドホスト

{% data variables.product.prodname_dotcom %}は、Microsoft AzureのStandard_DS2_v2仮想マシン上で{% data variables.product.prodname_actions %}ランナーアプリケーションがインストールされたLinux及びWindowsランナーをホストします。 {% data variables.product.prodname_dotcom %}ホストランナーアプリケーションは、Azure Pipelines Agentのフォークです。 インバウンドのICMPパケットはすべてのAzure仮想マシンでブロックされるので、pingやtracerouteコマンドは動作しないでしょう。 Standard_DS2_v2マシンのリソースに関する詳しい情報については、Microsoft Azureドキュメンテーションの「[Dv2 and DSv2シリーズ](https://docs.microsoft.com/ja-jp/azure/virtual-machines/dv2-dsv2-series#dsv2-series)」を参照してください。

{% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_dotcom %}自身macOS Cloud内でmacOSランナーをホストします。

#### Workflow continuity for {% data variables.product.prodname_dotcom %}-hosted runners

{% data reusables.github-actions.runner-workflow-continuity %}

In addition, if the workflow run has been successfully queued, but has not been processed by a {% data variables.product.prodname_dotcom %}-hosted runner within 45 minutes, then the queued workflow run is discarded.

#### {% data variables.product.prodname_dotcom %}ホストランナーの管理権限

LinuxおよびmacOSの仮想環境は、パスワード不要の`sudo`により動作します。 現在のユーザが持っているよりも高い権限が求められるコマンドやインストールツールを実行する必要がある場合は、パスワードを入力する必要なく、`sudo`を使うことができます。 詳しい情報については、「[Sudo Manual](https://www.sudo.ws/man/1.8.27/sudo.man.html)」を参照してください。

Windowsの仮想マシンは、ユーザアカウント制御（UAC）が無効化されて管理者として動作するように設定されています。 詳しい情報については、Windowsのドキュメンテーションの「[ユーザー アカウント制御のしくみ](https://docs.microsoft.com/ja-jp/windows/security/identity-protection/user-account-control/how-user-account-control-works)」を参照してください。

### サポートされているランナーとハードウェアリソース

Windows および Linux 仮想マシンのハードウェア仕様:
- 2コアCPU
- 7 GBのRAMメモリー
- 14 GBのSSDディスク容量

macOS 仮想マシンのハードウェア仕様:
- 3コアCPU
- 14 GBのRAMメモリー
- 14 GBのSSDディスク容量

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.macos-runner-preview %}

ワークフローログには、ジョブの実行に使用されたランナーが一覧表示されます。 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

### サポートされているソフトウェア

{% data variables.product.prodname_dotcom %} ホストランナーに含まれているソフトウェアツールは毎週更新されます。 The update process takes several days, and the list of preinstalled software on the `main` branch is updated after the whole deployment ends.
#### Preinstalled software

ワークフローログには、正確なランナーにプレインストールされているツールへのリンクが含まれています。 ワークフローログでこの情報を見つけるには、[`Set up job`] セクションを展開します。 そのセクションの下で、[`Virtual Environment`] セクションを展開します。 `Included Software` に続くリンクは、ワークフローを実行したランナーにプレインストールされているツールを示しています。 ![Installed software link](/assets/images/actions-runner-installed-software-link.png) 詳しい情報については、「[ワークフローの実行履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

For the overall list of included tools for each runner operating system, see the links below:

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2016-Readme.md)
* [macOS 11.0](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11.0-Readme.md)
* [macOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md)

{% data variables.product.prodname_dotcom %}ホストランナーには、オペレーティングシステムのデフォルトの組み込みツールに加え、上のリファレンスのリスト内のパッケージにが含まれています。 たとえば、Ubuntu及びmacOSのランナーには、`grep`、`find`、`which`やその他のデフォルトのツールが含まれています。

#### Using preinstalled software

アクションを使用して、ランナーにインストールされているソフトウェアと対話することをお勧めします。 このアプローチにはいくつかのメリットがあります。
- アクションでは通常、バージョンの選択、引数を渡す機能、パラメータなどの機能が提供されています
- これにより、ソフトウェアの更新に関係なく、ワークフローで使用されるツールのバージョンが同じままになります

リクエストしたいツールがある場合、[actions/virtual-environments](https://github.com/actions/virtual-environments) で Issue を開いてください。 このリポジトリには、ランナーに関するすべての主要なソフトウェア更新に関するお知らせも含まれています。

#### Installing additional software

You can install additional software on {% data variables.product.prodname_dotcom %}-hosted runners. For more information, see "[Customizing GitHub-hosted runners](/actions/using-github-hosted-runners/customizing-github-hosted-runners)".

### IP アドレス

{% note %}

**ノート:** {% data variables.product.prodname_dotcom %}のOrganizationもしくはEnterpriseアカウントでIPアドレスの許可リストを使っているなら、{% data variables.product.prodname_dotcom %}ホストランナーは利用できず、代わりにセルフホストランナーを使わなければなりません。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。

{% endnote %}

Windows及びUbuntuのランナーはAzureでホストされており、そのためAzureのデータセンターと同じIPアドレスの範囲を持ちます。 macOSランナーは{% data variables.product.prodname_dotcom %}独自のmacOSクラウドでホストされます。

{% data variables.product.prodname_dotcom %}ホストランナーに{% data variables.product.prodname_actions %}が使うIPアドレスの範囲のリストを取得するには、{% data variables.product.prodname_dotcom %}のREST APIが利用できます。 詳しい情報については「[GitHubメタ情報の取得](/rest/reference/meta#get-github-meta-information)」エンドポイントのレスポンス中の`actions`キーを参照してください。 内部リソースへの未認可のアクセスを防ぐために許可リストが必要な場合には、このIPアドレスのリストを利用できます。

このAPIが返す{% data variables.product.prodname_actions %}のIPアドレスのリストは、週に1回更新されます。

### ファイルシステム

{% data variables.product.prodname_dotcom %}は、仮想マシン上の特定のディレクトリでアクションとシェルコマンドを実行します。 仮想マシン上のファイルパスは静的なものではありません。 `home`、`workspace`、`workflow` ディレクトリのファイルパスを構築するには、{% data variables.product.prodname_dotcom %}が提供している環境変数を使用してください。

| ディレクトリ                | 環境変数                | 説明                                                                                                                                |
| --------------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `home`                | `HOME`              | ユーザ関連のデータが含まれます。 たとえば、このディレクトリにはログイン試行からの認証情報を含めることができます。                                                                         |
| `workspace`           | `GITHUB_WORKSPACE`  | アクションとシェルコマンドはこのディレクトリで実行されます。 このディレクトリの内容は、アクションによって変更することができ、後続のアクションでアクセスできます。                                                 |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | ワークフローをトリガーしたwebhookイベントの`POST`ペイロード。 {% data variables.product.prodname_dotcom %}は、アクションを実行するたびにアクション間でファイルの内容を隔離するためにこれを書き換えます。 |

各ワークフローに対して{% data variables.product.prodname_dotcom %}が作成する環境変数のリストについては、「[環境変数の利用](/github/automating-your-workflow-with-github-actions/using-environment-variables)」を参照してください。

#### Dockerコンテナのファイルシステム

Dockerコンテナで実行されるアクションには、 `/github`パスの下に静的なディレクトリがあります。 ただし、Dockerコンテナ内のファイルパスを構築するには、デフォルトの環境変数を使用することを強くお勧めします。

{% data variables.product.prodname_dotcom %}は、`/github`パス接頭辞を予約し、アクションのために3つのディレクトリを作成します。

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

{% if currentVersion == "free-pro-team@latest" %}

### 参考リンク
- 「[{% data variables.product.prodname_actions %} の支払いを管理する](/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)」

{% endif %}
