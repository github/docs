---
title: セルフホストランナーのモニタリングとトラブルシューティング
intro: セルフホストランナーをモニターして、その活動を見て、一般的な問題を診断できます。
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
shortTitle: Monitor & troubleshoot
ms.openlocfilehash: 57ca9cad51c1936171fcadd73497cf313dd86dd7
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/10/2022
ms.locfileid: '147065635'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## セルフホストランナーのステータスのチェック

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

{% data reusables.actions.self-hosted-runner-navigate-repo-and-org %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. [Runners]\(ランナー\) の下で、ランナーの名前、ラベル、状態など、登録済みランナーの一覧を確認できます。

    状態は、次のいずれかになります。

    * **アイドル**: ランナーは {% data variables.product.product_name %} に接続されており、ジョブを実行する準備ができています。
    * **アクティブ**: ランナーでは現在、ジョブが実行されています。
    * **オフライン**: ランナーは {% data variables.product.product_name %} に接続されていません。 これは、マシンがオフラインになっているか、マシン上でセルフホストランナーアプリケーションが動作していないか、セルフホストランナーアプリケーションが{% data variables.product.product_name %}と通信できていないかです。

## ネットワーク接続のトラブルシューティング

### セルフホステッド ランナー ネットワーク接続の確認

セルフホステッド ランナー アプリケーションの `run` スクリプトと `--check` パラメーターを使用して、セルフホステッド ランナーが {% data variables.product.product_location %} で必要なすべてのネットワーク サービスにアクセスできることを確認できます。

`--check` に加え、スクリプトには次の 2 つの引数を指定する必要があります。

* {% data variables.product.company_short %} リポジトリ、Organization、または Enterprise への URL を示す `--url`。 たとえば、`--url https://github.com/octo-org/octo-repo` のようにします。
* `--pat` スコープを持つ必要がある個人用アクセス トークンの値を示す `workflow`。 たとえば、`--pat ghp_abcd1234` のようにします。 詳細については、[個人アクセス トークンの作成](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)に関する記事を参照してください。

次に例を示します。

{% mac %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endmac %} {% linux %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endlinux %} {% windows %}

```shell
run.cmd --check --url <em>https://github.com/octo-org/octo-repo</em> --pat <em>ghp_abcd1234</em>
```

{% endwindows %}

このスクリプトでは各サービスをテストし、それぞれの `PASS` または `FAIL` を出力します。 いずれかのチェックに失敗した場合は、そのチェックのログ ファイルで問題の詳細を確認できます。 ログ ファイルはランナー アプリケーションをインストールした `_diag` ディレクトリに配置され、各チェックのログ ファイルのパスがスクリプトのコンソール出力に表示されます。

いずれかのチェックに失敗した場合は、セルフホステッド ランナー マシンがすべての通信要件を満たしていることを確認する必要もあります。 詳細については、[セルフホステッド ランナー](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-requirements)に関する記述をご覧ください。

### TLS 証明書の検証の無効化
{% ifversion ghes %} 既定では、セルフホステッド ランナー アプリケーションにより、{% data variables.product.product_name %} の TLS 証明書が検証されます。  {% data variables.product.product_name %} に自己署名または内部発行証明書がある場合は、テスト目的で TLS 証明書の検証を無効にすることができます。
{% else %} 既定では、セルフホステッド ランナー アプリケーションにより、{% data variables.product.product_name %} の TLS 証明書が検証されます。  ネットワークの問題が発生した場合は、テスト目的で TLS 証明書の検証を無効にすることができます。
{% endif %}

セルフホステッド ランナー アプリケーションで TLS 認定の検証を無効にするには、セルフホステッド ランナー アプリケーションを構成して実行する前に、`GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY` 環境変数を `1` に設定します。

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url <em>https://github.com/octo-org/octo-repo</em> --token
./run.sh
```

{% warning %}

**警告**: TLS ではセルフホステッド ランナー アプリケーションと {% data variables.product.product_name %} の間にプライバシーとデータの整合性が提供されるため、TLS 検証を無効にすることはお勧めしません。 セルフホステッド ランナーのオペレーティング システム証明書ストアに {% data variables.product.product_name %} 証明書をインストールすることをお勧めします。 {% data variables.product.product_name %} 証明書をインストールする方法のガイダンスについては、オペレーティング システム ベンダーにお問い合わせください。

{% endwarning %}

## セルフホストランナーアプリケーションのログファイルのレビュー

セルフホストランナーアプリケーションのステータスと、そのアクティビティをモニタリングできます。 ログ ファイルはランナー アプリケーションをインストールした `_diag` ディレクトリに保持され、アプリケーションが起動されるたびに新しいログが生成されます。 ファイル名は *Runner_* で始まり、その後にアプリケーションが起動された時刻の UTC タイムスタンプが続きます。

ワークフロー ジョブの実行に関する詳細なログについては、*Worker_* ファイルについて説明する次のセクションを参照してください。

## ジョブのログファイルのレビュー

セルフホストランナーアプリケーションは、処理するジョブごとに詳細なログファイルを生成します。 これらのファイルは、ランナー アプリケーションをインストールした `_diag` ディレクトリに格納され、ファイル名は *Worker_* で始まります。

{% linux %}

## journalctlを使ってのセルフホストランナーアプリケーションのチェック

サービスを利用してアプリケーションを実行している Linux ベースのセルフホステッド ランナーでは、リアルタイムのアクティビティを監視するのに `journalctl` を使用できます。 既定の systemd ベースのサービスでは、`actions.runner.<org>-<repo>.<runnerName>.service` の名前付け規則が使用されます。 この名前は 80 文字を超える場合には切り捨てられるので、サービス名を見つける方法として、 _.service_ ファイルを確認することをお勧めします。 次に例を示します。

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

サービスが別の場所にインストールされているためにこれが失敗した場合は、実行中のサービスの一覧でサービス名を見つけることができます。 たとえば、ほとんどの Linux システムでは、次の `systemctl` コマンドを使用できます。

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

セルフホステッド ランナーのリアルタイム アクティビティを監視するために `journalctl` を使用できます。

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

この出力例では、`runner01` が起動し、`testAction` という名前のジョブを受信し、結果の状態を表示していることがわかります。

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

`systemd` 構成を表示するために、`/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service` でサービス ファイルを見つけることができます。
セルフホストランナーアプリケーションサービスをカスタマイズしたい場合、このファイルを直接修正しないでください。 「[セルフホスト ランナー アプリケーションをサービスとして設定する](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)」で説明されている手順に従ってください。

{% endlinux %}

{% mac %}

## `launchd` を使用してセルフホステッド ランナー アプリケーション サービスを確認する

サービスとしてアプリケーションを実行している macOS ベースのセルフホステッド ランナーでは、リアルタイムのアクティビティを監視するのに `launchctl` を使用できます。 既定の launchd ベースのサービスでは、`actions.runner.<org>-<repo>.<runnerName>` の名前付け規則が使用されます。 この名前は 80 文字を超える場合には切り捨てられるので、サービス名を見つける方法として、ランナー ディレクトリにある _.service_ ファイルを確認することをお勧めします。

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

`svc.sh` スクリプトでは、アプリケーションが実行されているかどうかを確認するために `launchctl` が使用されます。 次に例を示します。

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

結果の出力には、プロセス ID とアプリケーションの `launchd` サービスの名前が含まれます。

`launchd` 構成を表示するために、`/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service` でサービス ファイルを見つけることができます。
セルフホストランナーアプリケーションサービスをカスタマイズしたい場合、このファイルを直接修正しないでください。 「[セルフホスト ランナー アプリケーションをサービスとして設定する](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)」で説明されている手順に従ってください。

{% endmac %}

{% windows %}

## PowerShellを使ってのセルフホストランナーアプリケーションのチェック

サービスとしてアプリケーションを実行しているWindowsベースのセルフホストランナーでは、リアルタイムのアクティビティをモニターするのにPowerShellが使えます。 サービスでは `GitHub Actions Runner (<org>-<repo>.<runnerName>)` の名前付け規則が使用されます。 ランナー ディレクトリの _.service_ ファイルを確認することで、サービスの名前を見つけることもできます。

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Windows _Services_ アプリケーション (`services.msc`) でランナーの状態を表示できます。 PowerShellを使ってサービスが動作しているかをチェックできます。

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

PowerShellを使ってセルフホストランナーの最近のアクティビティをチェックすることができます。 この出力例では、アプリケーションが起動し、`testAction` という名前のジョブを受信し、結果の状態を表示していることがわかります。

```shell
PS C:\actions-runner> Get-EventLog -LogName Application -Source ActionsRunnerService

   Index Time          EntryType   Source                 InstanceID Message
   ----- ----          ---------   ------                 ---------- -------
     136 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:48Z: Job Greeting completed with result: Succeeded
     135 Mar 17 13:45  Information ActionsRunnerService          100 2020-03-17 13:45:34Z: Running job: testAction
     134 Mar 17 13:41  Information ActionsRunnerService          100 2020-03-17 13:41:54Z: Listening for Jobs
     133 Mar 17 13:41  Information ActionsRunnerService          100 û Connected to GitHub
     132 Mar 17 13:41  Information ActionsRunnerService            0 Service started successfully.
     131 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner listener
     130 Mar 17 13:41  Information ActionsRunnerService          100 Starting Actions Runner Service
     129 Mar 17 13:41  Information ActionsRunnerService          100 create event log trace source for actions-runner service
```

{% endwindows %}

## 自動アップデートプロセスのモニタリング

セルフホストランナーは、特定のバージョンのしきい値を下回るとジョブを処理できなくなるため、定期的に自動更新プロセスを確認することをお勧めします。 セルフホストランナーアプリケーションは自動的に更新されますが、このプロセスにはオペレーティングシステムやその他のソフトウェアの更新は含まれません。これらの更新を個別に管理する必要があります。

更新アクティビティは *Runner_* ログ ファイルで表示できます。 次に例を示します。

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

さらに、ランナー アプリケーションをインストールした `_diag` ディレクトリにある _SelfUpdate_ ログ ファイルで詳細情報を見つけることができます。

{% linux %}

## セルフホストランナー内のコンテナのトラブルシューティング

### Dockerがインストールされていることを確認

ジョブがコンテナを必要とするなら、セルフホストランナーはLinuxベースで、Dockerがインストールされていなければなりません。 セルフホストランナーにDockerがインストールされており、サービスが動作中であることを確認してください。

サービスの状態を確認するために、`systemctl` を使用できます。

```shell
$ sudo systemctl is-active docker.service
active
```

Dockerがインストールされていないなら、Dockerに依存するアクションは以下のエラーで失敗します。

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

### Dockerの権限の確認

ジョブが次のエラーで失敗するなら、

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

セルフホストランナーのサービスアカウントがDockerサービスを使う権限を持っているかを確認してください。 `systemd` のセルフホステッド ランナーの構成を確認することで、このアカウントを特定できます。 次に例を示します。

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}

{% ifversion ghes %}
## {% data variables.product.product_location %} のアップグレード後にオフラインになっているランナーの解決

{% data reusables.actions.upgrade-runners-before-upgrade-ghes %} 

次の理由でランナーがオフラインの場合は、ランナーを手動で更新します。 詳細については、アクション/ランナー リポジトリの[最新リリース](https://github.com/actions/runner/releases/latest)にあるインストール手順を参照してください。
{% endif %}
