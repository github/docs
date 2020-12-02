---
title: GitHub ホストランナーの仕様
intro: '{% data variables.product.prodname_dotcom %}は、ワークフローを実行するためのホストされた仮想マシンを提供します。 仮想マシンには、{% data variables.product.prodname_actions %}で使用できるツール、パッケージ、および設定の環境が含まれています。'
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### {% data variables.product.prodname_dotcom %}ホストランナーについて

{% data variables.product.prodname_dotcom %}ホストランナーは{% data variables.product.prodname_actions %}ランナーアプリケーションがインストールされた、{% data variables.product.prodname_dotcom %}がホストする仮想マシンです。 {% data variables.product.prodname_dotcom %}は、Linux、Windows、macOSのランナーを提供します。

{% data variables.product.prodname_dotcom %}ホストランナーを使用すると、マシンのメンテナンスとアップグレードが自動的に行われます。 ワークフローは、仮想マシンで直接実行することも、Dockerコンテナで実行することもできます。

ワークフローのジョブごとにランナーの種類を指定できます。 ワークフローの各ジョブは、仮想マシンの新しいインスタンスで実行されます。 ジョブ実行のステップはすべて、仮想マシンの同じインスタンスで実行されるため、そのジョブのアクションはファイルシステムを使用して情報を共有できます。

{% data reusables.github-actions.runner-app-open-source %}

#### {% data variables.product.prodname_dotcom %}ホストランナーのクラウドホスト

{% data variables.product.prodname_dotcom %}は、Microsoft AzureのStandard_DS2_v2仮想マシン上で{% data variables.product.prodname_actions %}ランナーアプリケーションがインストールされたLinux及びWindowsランナーをホストします。 {% data variables.product.prodname_dotcom %}ホストランナーアプリケーションは、Azure Pipelines Agentのフォークです。 インバウンドのICMPパケットはすべてのAzure仮想マシンでブロックされるので、pingやtracerouteコマンドは動作しないでしょう。 For more information about the Standard_DS2_v2 machine resources, see "[Dv2 and DSv2-series](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)" in the Microsoft Azure documentation.

{% data variables.product.prodname_dotcom %} hosts macOS runners in {% data variables.product.prodname_dotcom %}'s own macOS Cloud.

#### {% data variables.product.prodname_dotcom %}ホストランナーの管理権限

LinuxおよびmacOSの仮想環境は、パスワード不要の`sudo`により動作します。 現在のユーザが持っているよりも高い権限が求められるコマンドやインストールツールを実行する必要がある場合は、パスワードを入力する必要なく、`sudo`を使うことができます。 詳しい情報については、「[Sudo Manual](https://www.sudo.ws/man/1.8.27/sudo.man.html)」を参照してください。

Windowsの仮想マシンは、ユーザアカウント制御（UAC）が無効化されて管理者として動作するように設定されています。 詳しい情報については、Windowsのドキュメンテーションの「[ユーザー アカウント制御のしくみ](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)」を参照してください。

### サポートされているランナーとハードウェアリソース

各仮想マシンで、同一のハードウェアリソースを使用できます。

- 2コアCPU
- 7 GBのRAMメモリー
- 14 GBのSSDディスク容量

{% data reusables.github-actions.supported-github-runners %}

{% data reusables.github-actions.ubuntu-runner-preview %}
{% data reusables.github-actions.macos-runner-preview %}

ワークフローログには、ジョブの実行に使用されたランナーが一覧表示されます。 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

### サポートされているソフトウェア

{% data variables.product.prodname_dotcom %} ホストランナーに含まれているソフトウェアツールは毎週更新されます。 各ランナーオペレーティングシステム用に含まれるツールの最新のリストについては、以下のリンクを参照してください。

* [Ubuntu 20.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu2004-README.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1804-README.md)
* [Ubuntu 16.04 LTS](https://github.com/actions/virtual-environments/blob/main/images/linux/Ubuntu1604-README.md)
* [Windows Server 2019](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2019-Readme.md)
* [Windows Server 2016](https://github.com/actions/virtual-environments/blob/main/images/win/Windows2016-Readme.md)
* [MacOS 10.15](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-10.15-Readme.md)
* [MacOS 11.0](https://github.com/actions/virtual-environments/blob/main/images/macos/macos-11.0-Readme.md)

{% data reusables.github-actions.ubuntu-runner-preview %}
{% data reusables.github-actions.macos-runner-preview %}

{% data variables.product.prodname_dotcom %}ホストランナーには、オペレーティングシステムのデフォルトの組み込みツールに加え、上のリファレンスのリスト内のパッケージにが含まれています。 たとえば、Ubuntu及びmacOSのランナーには、`grep`、`find`、`which`やその他のデフォルトのツールが含まれています。

ワークフローログには、ランナーにプリインストールされているツールへのリンクが含まれています。 詳しい情報については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

リクエストしたいツールがある場合、[actions/virtual-environments](https://github.com/actions/virtual-environments) で Issue を開いてください。

### IP アドレス

{% note %}

**ノート:** {% data variables.product.prodname_dotcom %}のOrganizationもしくはEnterpriseアカウントでIPアドレスの許可リストを使っているなら、{% data variables.product.prodname_dotcom %}ホストランナーは利用できず、代わりにセルフホストランナーを使わなければなりません。 詳しい情報については「[セルフホストランナーについて](/actions/hosting-your-own-runners/about-self-hosted-runners)」を参照してください。

{% endnote %}

WindowsとUbuntuのランナーはAzureでホストされ、IPアドレスの範囲がAzureデータセンターと同じになります。 現在、すべてのWindows及びUbuntuの{% data variables.product.prodname_dotcom %}ホストランナーは、以下のAzureリージョン内にあります。

- 米国東部(`eastus`)
- 米国東部2 (`eastus2`)
- 米国西部2 (`westus2`)
- 米国中部 (`centralus`)
- 米国中南部(`southcentralus`)

Microsoftは、AzureのIPアドレスの範囲をJSONファイルで毎週更新しています。このファイルは、[Azure IP Ranges and Service Tags - Public Cloud (AzureのIPアドレス範囲とサービスタグ - パブリッククラウド)](https://www.microsoft.com/en-us/download/details.aspx?id=56519)のウェブサイトからダウンロードできます。 内部リソースに対する不正アクセスを防ぐために許可リストが必要な場合には、このIPアドレスの範囲を利用できます。

JSONファイルには、`values`という配列があります。 この配列のうち、たとえば`"AzureCloud.eastus2"`というようなAzureのリージョンの`name`と`id`があるオブジェクトで、サポート対象のIPアドレスが見つかります。

サポート対象のIPアドレスの範囲は、`"addressPrefixes"`オブジェクトにあります。 次に示すのは、JSONファイルを縮めたサンプルです。

```json
{
  "changeNumber": 84,
  "cloud": "Public",
  "values": [
    {
      "name": "AzureCloud.eastus2",
      "id": "AzureCloud.eastus2",
      "properties": {
        "changeNumber": 33,
        "region": "eastus2",
        "platform": "Azure",
        "systemService": "",
        "addressPrefixes": [
          "13.68.0.0/17",
          "13.77.64.0/18",
          "13.104.147.0/25",
          ...
        ]
      }
    }
  ]
}
```

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
