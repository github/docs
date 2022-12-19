---
title: GitHub ホステッド ランナーの概要
shortTitle: About GitHub-hosted runners
intro: '{% data variables.product.prodname_dotcom %} では、ワークフローを実行するためのホストされた仮想マシンを提供します。 仮想マシンには、{% data variables.product.prodname_actions %} で使用できるツール、パッケージ、および設定の環境が含まれています。'
redirect_from:
  - /articles/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-actions
  - /github/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/virtual-environments-for-github-hosted-runners
  - /actions/reference/virtual-environments-for-github-hosted-runners
  - /actions/reference/software-installed-on-github-hosted-runners
  - /actions/reference/specifications-for-github-hosted-runners
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghes: '*'
  ghec: '*'
ms.openlocfilehash: f44c5bcf8c6cc9c48a2910d2a0d371087debd158
ms.sourcegitcommit: 1668466c58f50415e8c4d3ad932d697f79fc87c7
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 11/22/2022
ms.locfileid: '148180686'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## {% data variables.product.prodname_dotcom %} ホステッド ランナーの概要

ランナーは、{% data variables.product.prodname_actions %} ワークフローでジョブを実行するマシンです。 たとえば、ランナーはリポジトリをローカルにクローンし、テスト ソフトウェアをインストールしてから、コードを評価するコマンドを実行できます。 

{% data variables.product.prodname_dotcom %} は、ジョブの実行に使用できるランナーを提供します。または、[独自のランナーをホスト](/actions/hosting-your-own-runners/about-self-hosted-runners)することもできます。 各 {% data variables.product.prodname_dotcom %} ホステッド ランナーは、ランナー アプリケーションとその他のツールがプレインストールされた {% data variables.product.prodname_dotcom %} によってホストされる新しい仮想マシン (VM) であり、Ubuntu Linux、Windows、または macOS オペレーティング システムで使用できます。 {% data variables.product.prodname_dotcom %}ホストランナーを使用すると、マシンのメンテナンスとアップグレードが自動的に行われます。

{% ifversion not ghes %}

## {% data variables.product.prodname_dotcom %} ホステッド ランナーの使用

{% data variables.product.prodname_dotcom %} ホステッド ランナーを使用するには、ジョブを作成し、`runs-on` を使用してジョブを処理するランナーの種類を指定します (例: `ubuntu-latest`、`windows-latest`、または `macos-latest`)。 ランナーの種類の完全な一覧については、「[サポートされているランナーとハードウェア リソース](/actions/using-github-hosted-runners/about-github-hosted-runners#supported-runners-and-hardware-resources)」を参照してください。

ジョブが開始されると、{% data variables.product.prodname_dotcom %} によって、そのジョブの新しい VM が自動的にプロビジョニングされます。 ジョブ中のすべてのステップは VM で実行されるため、ランナーのファイルシステムを使用して、そのジョブにおけるステップで情報を共有することができます。 ワークフローは、VM で直接実行することも、Docker コンテナーで実行することもできます。 ジョブが完了すると、VM は自動的に使用停止になります。

次のダイアグラムは、2 つの異なる {% data variables.product.prodname_dotcom %} ホステッド ランナーでワークフロー内の 2 つのジョブがどのように実行されるかを示しています。 

![2 つのランナーが個別のジョブを処理する](/assets/images/help/images/overview-github-hosted-runner.png)

次のワークフロー例には、`Run-npm-on-Ubuntu` および `Run-PSScriptAnalyzer-on-Windows` という名前のついた 2 つのジョブがあります。 このワークフローがトリガーされると、{% data variables.product.prodname_dotcom %} ではジョブごとに新しい仮想マシンをプロビジョニングします。 

- `Run-npm-on-Ubuntu` という名前のジョブは Linux VM で実行されます。これは、ジョブの `runs-on:` で `ubuntu-latest` が指定されているためです。 
- `Run-PSScriptAnalyzer-on-Windows` という名前のジョブは Windows VM で実行されます。これは、ジョブの `runs-on:` で `windows-latest` が指定されているためです。 

```yaml{:copy}
name: Run commands on different operating systems
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  Run-npm-on-Ubuntu:
    name: Run npm on Ubuntu
    runs-on: ubuntu-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - uses: {% data reusables.actions.action-setup-node %}
        with:
          node-version: '14'
      - run: npm help

  Run-PSScriptAnalyzer-on-Windows:
    name: Run PSScriptAnalyzer on Windows
    runs-on: windows-latest
    steps:
      - uses: {% data reusables.actions.action-checkout %}
      - name: Install PSScriptAnalyzer module
        shell: pwsh
        run: |
          Set-PSRepository PSGallery -InstallationPolicy Trusted
          Install-Module PSScriptAnalyzer -ErrorAction Stop
      - name: Get list of rules
        shell: pwsh
        run: |
          Get-ScriptAnalyzerRule
```

ジョブの実行中、ログと出力は {% data variables.product.prodname_dotcom %} UI で表示できます。

![アクション UI でのジョブ出力](/assets/images/help/repository/actions-runner-output.png)

{% data reusables.actions.runner-app-open-source %}

## サポートされているランナーとハードウェアリソース

{% ifversion actions-hosted-runners %}

{% note %}

**メモ**: {% data variables.product.prodname_dotcom %} には、より大きな構成で使うことができる {% data variables.actions.hosted_runner %} も用意されています。 詳しくは、「[{% data variables.actions.hosted_runner %} のマシン スペック](/actions/using-github-hosted-runners/using-larger-runners#machine-specs-for-larger-runners)」をご覧ください。  

{% endnote %} {% endif %}

Windows および Linux 仮想マシンのハードウェア仕様:
- 2 コア CPU (x86_64)
- 7 GB の RAM
- 14 GB の SSD 領域

macOS 仮想マシンのハードウェア仕様:
- 3 コア CPU (x86_64)
- 14 GB の RAM
- 14 GB の SSD 領域

{% data reusables.actions.supported-github-runners %}

ワークフローログには、ジョブの実行に使用されたランナーが一覧表示されます。 詳細については、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」を参照してください。

## サポートされているソフトウェア

{% data variables.product.prodname_dotcom %} ホストランナーに含まれているソフトウェアツールは毎週更新されます。 更新プロセスには数日かかり、`main` ブランチのプレインストール済みソフトウェアのリストは、デプロイ全体が終了した後で更新されます。

### プレインストール済みソフトウェア

ワークフローログには、正確なランナーにプレインストールされているツールへのリンクが含まれています。 ワークフローのログでこの情報を見つけるには、`Set up job` セクションを展開します。 そのセクションの下で、`Runner Image` セクションを展開します。 `Included Software` の後のリンクで、ワークフローを実行したランナーにプレインストールされているツールが示されています。
![インストールされているソフトウェアのリンク](/assets/images/actions-runner-installed-software-link.png) 詳しくは、「[ワークフロー実行の履歴を表示する](/actions/managing-workflow-runs/viewing-workflow-run-history)」をご覧ください。

各ランナーのオペレーティング システム用に含まれるすべてのツールの一覧については、以下のリンクをご覧ください。

* [Ubuntu 22.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md)
* [Ubuntu 20.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2004-Readme.md)
* [Ubuntu 18.04 LTS](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu1804-Readme.md) (非推奨)
* [Windows Server 2022](https://github.com/actions/runner-images/blob/main/images/win/Windows2022-Readme.md)
* [Windows Server 2019](https://github.com/actions/runner-images/blob/main/images/win/Windows2019-Readme.md)
* [macOS 12](https://github.com/actions/runner-images/blob/main/images/macos/macos-12-Readme.md)
* [macOS 11](https://github.com/actions/runner-images/blob/main/images/macos/macos-11-Readme.md)
* [macOS 10.15](https://github.com/actions/runner-images/blob/main/images/macos/macos-10.15-Readme.md)

{% data variables.product.prodname_dotcom %}ホストランナーには、オペレーティングシステムのデフォルトの組み込みツールに加え、上のリファレンスのリスト内のパッケージにが含まれています。 たとえば、Ubuntu と macOS のランナーには、他の既定のツールと共に `grep`、`find`、`which` が含まれます。 

### プレインストール済みソフトウェアを使用する

アクションを使用して、ランナーにインストールされているソフトウェアと対話することをお勧めします。 この方法には、いくつかの利点があります。
- アクションでは通常、バージョンの選択、引数を渡す機能、パラメータなどの機能が提供されています
- これにより、ソフトウェアの更新に関係なく、ワークフローで使用されるツールのバージョンが同じままになります

要求したいツールがある場合は、[actions/virtual-environments](https://github.com/actions/runner-images) で issue を開いてください。 このリポジトリには、ランナーに関するすべての主要なソフトウェア更新に関するお知らせも含まれています。

### 追加ソフトウェアをインストールする

{% data variables.product.prodname_dotcom %} ホステッド ランナーに追加のソフトウェアをインストールできます。 詳しくは、「[GitHub ホステッド ランナーのカスタマイズ](/actions/using-github-hosted-runners/customizing-github-hosted-runners)」をご覧ください。

## {% data variables.product.prodname_dotcom %} ホステッド ランナーによって使用されるクラウド ホスト

{% data variables.product.prodname_dotcom %} は、Microsoft Azure の `Standard_DS2_v2` 仮想マシン上で {% data variables.product.prodname_actions %} ランナー アプリケーションがインストールされた Linux および Windows ランナーをホストします。 {% data variables.product.prodname_dotcom %}ホストランナーアプリケーションは、Azure Pipelines Agentのフォークです。 インバウンドのICMPパケットはすべてのAzure仮想マシンでブロックされるので、pingやtracerouteコマンドは動作しないでしょう。 `Standard_DS2_v2` リソースについて詳しくは、Microsoft Azure ドキュメントの「[Dv2 および DSv2 シリーズ](https://docs.microsoft.com/azure/virtual-machines/dv2-dsv2-series#dsv2-series)」をご覧ください。

{% data variables.product.prodname_dotcom %}は、{% data variables.product.prodname_dotcom %}自身macOS Cloud内でmacOSランナーをホストします。

## ワークフローの継続性

{% data reusables.actions.runner-workflow-continuity %}

さらに、ワークフロー実行が正常にキューに入れられても、45 分以内に {% data variables.product.prodname_dotcom %} ホステッド ランナーによって処理されない場合、キューのワークフロー実行は破棄されます。

## 管理者特権

Linux と macOS のどちらの仮想マシンでも、パスワードレスの `sudo` が実行されます。 現在のユーザーより高い特権が必要なコマンドやインストール ツールを実行する必要がある場合は、パスワードを入力する必要なく、`sudo` を使うことができます。 詳しくは、[Sudo のマニュアル](https://www.sudo.ws/man/1.8.27/sudo.man.html)をご覧ください。

Windowsの仮想マシンは、ユーザアカウント制御（UAC）が無効化されて管理者として動作するように設定されています。 詳しくは、Windows のドキュメントの「[ユーザー アカウントの制御のしくみ](https://docs.microsoft.com/windows/security/identity-protection/user-account-control/how-user-account-control-works)」をご覧ください。

## IP アドレス

{% note %}

**注:** {% data variables.product.prodname_dotcom %} の Organization または Enterprise アカウントで IP アドレスの許可リストを使っている場合は、{% data variables.product.prodname_dotcom %} ホステッド ランナーを使用できず、代わりにセルフホステッド ランナーを使う必要があります。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners)に関する記述をご覧ください。

{% endnote %}

{% data variables.product.prodname_actions %} で {% data variables.product.prodname_dotcom %} ホステッド ランナーに使われる IP アドレス範囲のリストを取得するには、{% data variables.product.prodname_dotcom %} REST API を使用できます。 詳しくは、"[GitHub メタ情報の取得](/rest/reference/meta#get-github-meta-information)" エンドポイントの応答で `actions` キーをご覧ください。

Windows及びUbuntuのランナーはAzureでホストされており、そのためAzureのデータセンターと同じIPアドレスの範囲を持ちます。 macOSランナーは{% data variables.product.prodname_dotcom %}独自のmacOSクラウドでホストされます。

{% data variables.product.prodname_dotcom %} ホステッド ランナーには非常に多くの IP アドレス範囲があるため、内部リソースの許可リストとしてこれらを使うことはお勧めしません。

このAPIが返す{% data variables.product.prodname_actions %}のIPアドレスのリストは、週に1回更新されます。 

## ファイル システム

{% data variables.product.prodname_dotcom %}は、仮想マシン上の特定のディレクトリでアクションとシェルコマンドを実行します。 仮想マシン上のファイルパスは静的なものではありません。 `home`、`workspace`、`workflow` ディレクトリのファイル パスを作成するには、{% data variables.product.prodname_dotcom %} で提供される環境変数を使います。

| ディレクトリ | 環境変数 | 説明 |
|-----------|----------------------|-------------|
| `home` | `HOME` | ユーザ関連のデータが含まれます。 たとえば、このディレクトリにはログイン試行からの認証情報を含めることができます。 |
| `workspace` | `GITHUB_WORKSPACE` | アクションとシェルコマンドはこのディレクトリで実行されます。 このディレクトリの内容は、アクションによって変更することができ、後続のアクションでアクセスできます。 |
| `workflow/event.json` | `GITHUB_EVENT_PATH` | ワークフローをトリガーした Webhook イベントの `POST` ペイロード。 {% data variables.product.prodname_dotcom %}は、アクションを実行してアクション間でファイルの内容を隔離するたびにこれを書き換えます。

ワークフローごとに {% data variables.product.prodname_dotcom %} によって作成される環境変数の一覧については、[環境変数の使用](/github/automating-your-workflow-with-github-actions/using-environment-variables)に関する記事をご覧ください。

### Dockerコンテナのファイルシステム

Docker コンテナーで実行されるアクションには、`/github` パスの下に静的なディレクトリがあります。 ただし、Dockerコンテナ内のファイルパスを構築するには、デフォルトの環境変数を使用することを強くお勧めします。

{% data variables.product.prodname_dotcom %} では、`/github` パス プレフィックスが予約されており、アクション用に 3 つのディレクトリが作成されます。

- `/github/home`
- `/github/workspace` - {% data reusables.repositories.action-root-user-required %}
- `/github/workflow`

## 参考資料
- [{% data variables.product.prodname_actions %} の支払いを管理する](/billing/managing-billing-for-github-actions)
- マトリックス戦略を使用して、複数のイメージでジョブを実行できます。 詳しくは、「[ジョブにマトリックスを使用する](/actions/using-jobs/using-a-matrix-for-your-jobs)」をご覧ください。

{% endif %}
