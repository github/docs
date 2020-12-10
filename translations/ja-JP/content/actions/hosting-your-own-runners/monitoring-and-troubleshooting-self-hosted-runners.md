---
title: セルフホストランナーのモニタリングとトラブルシューティング
intro: セルフホストランナーをモニターして、その活動を見て、一般的な問題を診断できます。
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data variables.product.prodname_actions %} の支払いを管理する
{% data variables.product.prodname_dotcom %}は、macOSランナーのホストに[MacStadium](https://www.macstadium.com/)を使用しています。

### {{ site.data.variables.product.prodname_dotcom }}を使ったセルフホストランナーのステータスのチェック

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

{% data reusables.github-actions.self-hosted-runner-navigate-repo-and-org %}
{% data reusables.organizations.settings-sidebar-actions %}
1. "Self-hosted runners（セルフホストランナー）"の下で、ランナーの名前、ラベル、ステータスを含む、登録されたランナーのリストを見ることができます。

    ![ランナーのリスト](/assets/images/help/settings/actions-runner-list.png)

    ステータスは以下のいずれかです。

    * **Idle**: ランナーは{% data variables.product.product_name %}に接続されており、ジョブを実行する準備ができています。
    * **Active**: ランナーは現在ジョブを実行しています。
    * **Offline**: ランナーは{% data variables.product.product_name %}に接続されていません。 これは、マシンがオフラインになっているか、マシン上でセルフホストランナーアプリケーションが動作していないか、セルフホストランナーアプリケーションが{% data variables.product.product_name %}と通信できていないかです。


### セルフホストランナーアプリケーションのログファイルのレビュー

セルフホストランナーアプリケーションのステータスと、そのアクティビティをモニタリングできます。 ログファイルは`_diag`ディレクトリに保存されており、アプリケーションが起動されるたびに新しいログが生成されます。 ファイル名は*Runner_*で始まり、その後にアプリケーションが起動された時刻のUTCタイムスタンプが続きます。

ワークフロージョブの実行に関する詳細なログについては、*Worker_*ファイルについて述べた次のセクションを参照してください。

### ジョブのログファイルのレビュー

セルフホストランナーアプリケーションは、処理するジョブごとに詳細なログファイルを生成します。 これらのファイルは`_diag`ディレクトリに保存され、ファイル名は*Worker_*で始まります。

{% linux %}

### journalctlを使ってのセルフホストランナーアプリケーションのチェック

サービスを利用してアプリケーションを実行しているLinuxベースのセルフホストランナーでは、リアルタイムのアクティビティをモニターするのに`journalctl`が使えます。 デフォルトのsystemdベースのサービスは、以下の命名規則を使います。 `actions.runner.<org>-<repo>.<runnerName>.service` この名前は80文字を超える場合には切り捨てられるので、サービス名を見つける方法としては_.service_ファイルをチェックするのが良いでしょう。 例:

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

`journalctl`を使って、セルフホストランナーのリアルタイムアクティビティをモニターできます。

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

この出力例では、`runner01`が起動し、`testAction`という名前をジョブを受信し、結果のステータスを表示していることがわかります。

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

systemdの設定を見るには、サービスファイルを以下で見つけることができます。 `/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service` セルフホストランナーアプリケーションサービスをカスタマイズしたい場合、このファイルを直接修正しないでください。 「[セルフホストランナーアプリケーションのサービスとしての構成](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)」に述べられている指示に従ってください。

{% endlinux %}

{% mac %}

### launchdを使ってのセルフホストランナーアプリケーションのチェック

サービスとしてアプリケーションを実行しているmacOSベースのセルフホストランナーでは、リアルタイムのアクティビティをモニターするのに`launchctl`が使えます。 デフォルトのlaunchdベースのサービスは、以下の命名規則を使います。 `actions.runner.<org>-<repo>.<runnerName>` この名前は80文字を超える場合には切り捨てられるので、サービス名を見つける方法としてはランナーのディレクトリ内にある_.service_ファイルをチェックするのが良いでしょう。

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

`svc.sh`スクリプトは`launchctl`を使ってアプリケーションが動作しているかをチェックします。 例:

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

結果の出力には、プロセスIDとアプリケーションのlaunchdサービスの名前が含まれます。

launchdの設定を見るには、サービスファイルを以下で見つけることができます。 `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service` セルフホストランナーアプリケーションサービスをカスタマイズしたい場合、このファイルを直接修正しないでください。 「[セルフホストランナーアプリケーションのサービスとしての構成](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)」に述べられている指示に従ってください。

{% endmac %}


{% windows %}

### PowerShellを使ってのセルフホストランナーアプリケーションのチェック

サービスとしてアプリケーションを実行しているWindowsベースのセルフホストランナーでは、リアルタイムのアクティビティをモニターするのにPowerShellが使えます。 サービスは`GitHub Actions Runner (<org>-<repo>.<runnerName>)`という命名規則を使います。 ランナーのディレクトリ内にある_.service_ファイルを調べても、サービスの名前を見つけることができます。

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

Windowsの_サービス_アプリケーション（`services.msc`）でも、ランナーのステータスを見ることができます。 PowerShellを使ってサービスが動作しているかをチェックできます。

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

PowerShellを使ってセルフホストランナーの最近のアクティビティをチェックすることができます。 この出力例では、アプリケーションが起動し、`testAction`という名前をジョブを受信し、結果のステータスを表示していることがわかります。

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

### 自動アップデートプロセスのモニタリング

セルフホストランナーは、特定のバージョンのしきい値を下回るとジョブを処理できなくなるため、定期的に自動更新プロセスを確認することをお勧めします。 セルフホストランナーアプリケーションは自動的に更新されますが、このプロセスにはオペレーティングシステムやその他のソフトウェアの更新は含まれません。これらの更新を個別に管理する必要があります。

更新のアクティビティは、*Runner_*ログファイルで見ることができます。 例:

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

加えて、さらなる情報が`_diag`ディレクトリにある_SelfUpdate_ログファイルにあります。

{% linux %}

### セルフホストランナー内のコンテナのトラブルシューティング

#### Dockerがインストールされていることを確認

ジョブがコンテナを必要とするなら、セルフホストランナーはLinuxベースで、Dockerがインストールされていなければなりません。 セルフホストランナーにDockerがインストールされており、サービスが動作中であることを確認してください。

サービスのステータスの確認には、`systemctl`が使えます。

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

#### Dockerの権限の確認

ジョブが次のエラーで失敗するなら、

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

セルフホストランナーのサービスアカウントがDockerサービスを使う権限を持っているかを確認してください。 systemdの中のセルフホストランナーの設定を調べれば。このアカウントは特定できます。 例:

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}
