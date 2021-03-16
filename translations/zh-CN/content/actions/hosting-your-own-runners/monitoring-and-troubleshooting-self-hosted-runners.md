---
title: 自托管运行器的监控和故障排除
intro: 您可以监控自托管运行器，查看它们的活动并诊断常见问题。
redirect_from:
  - /actions/hosting-your-own-runners/checking-the-status-of-self-hosted-runners
  - /github/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
  - /actions/automating-your-workflow-with-github-actions/checking-the-status-of-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
type: 'tutorial'
defaultPlatform: linux
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 使用 {{ site.data.variables.product.prodname_dotcom }} 检查自托管运行器的状态

{% data reusables.github-actions.self-hosted-runner-management-permissions-required %}

{% data reusables.github-actions.self-hosted-runner-navigate-repo-and-org %}
{% data reusables.organizations.settings-sidebar-actions %}
1. 在“Self-hosted runners（自托管运行器）”下，您可以查看已注册的运行器列表，包括运行器的名称、标签和状态。

    ![运行器列表](/assets/images/help/settings/actions-runner-list.png)

    可以是以下状态之一：

    * **空闲**：运行器已连接到 {% data variables.product.product_name %} 并准备执行作业。
    * **活动**：运行器正在执行作业。
    * **脱机**：运行器未连接到 {% data variables.product.product_name %}。 这可能是因为机器处于离线状态，自托管运行器应用程序未在机器上运行，或者自托管运行器应用程序无法与 {% data variables.product.product_name %} 通信。


### 查阅自托管运行应用程序日志文件

您可以监控自托管运行器应用程序的状态及其活动。 日志文件保存在 `_diag` 目录中，每次启动应用程序都会生成一个新的日志文件。 文件名开头为 *Runner_*，后接应用程序启动时的 UTC 时间戳。

有关工作流程作业执行的详细日志，请参阅描述 *Worker_* 文件的下一节。

### 查看作业日志文件

自托管的运行器应用程序为它处理的每个作业创建详细的日志文件。 这些文件存储在 `_dig` 目录中，文件名以 *Worker_* 开头。

{% linux %}

### 使用 journalctl 检查自托管的运行器应用程序服务

对于使用服务运行应用程序的 Linux 自托管运行器，您可以使用 `journalctl` 来监控其实时活动。 基于系统的默认服务使用以下命名约定：`actions.runner.<org>-<repo>.<runnerName>.service`。 此名称在超过 80 个字符时将被截断，因此查找服务名称的首选方式是检查 _.service_ 文件。 例如：

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

您可以使用 `journalctl` 来监控自托管运行器的实时活动：

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

在这个示例输出中，您可以看到，`runner01` 启动，收到一个名为 `testAction` 的作业，然后显示结果状态：

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

要查看系统配置，您可以在下面查找服务文件：`/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`。 如果您想要自定义自托管的运行器应用程序服务，不要直接修改此文件。 请按照“[将自托管运行器应用程序配置为服务](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)”中所述的说明操作。

{% endlinux %}

{% mac %}

### 使用 launchd 检查自托管的运行器应用程序服务

对于将应用程序运行为服务的 macOS 自托管运行器，您可以使用 `launchctl` 来监控其实时活动。 基于 launchctl 的默认服务使用以下命名约定：`actions.runner.<org>-<repo>.<runnerName>`。 此名称在超过 80 个字符时将被截断，因此查找服务名称的首选方式是检查运行器目录中的 _.service_ 文件。

```shell
% cat ~/actions-runner/.service
/Users/exampleUsername/Library/LaunchAgents/actions.runner.octo-org-octo-repo.runner01.plist
```

`svc.sh` 脚本使用 `launchctl` 来检查应用程序是否正在运行。 例如：

```shell
$ ./svc.sh status
status actions.runner.example.runner01:
/Users/exampleUsername/Library/LaunchAgents/actions.runner.example.runner01.plist
Started:
379 0 actions.runner.example.runner01
```

生成的输出包括进程 ID 和应用程序 launchd 服务的名称。

要查看 launchd 配置，您可以在下面查找服务文件： `/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`。 如果您想要自定义自托管的运行器应用程序服务，不要直接修改此文件。 请按照“[将自托管运行器应用程序配置为服务](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)”中所述的说明操作。

{% endmac %}


{% windows %}

### 使用 PowerShell 检查自托管的运行器应用程序服务

对于将应用程序运行为服务的 Windows 自托管运行器，您可以使用 PowerShell 来监控其实时活动。 服务使用命名约定 `GitHub Actions Runner (<org>-<repo>.<runnerName>)`。 您也可以通过在运行器目录中检查 _.service_ 文件来查找服务的名称：

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

您可以在 Windows _Services_ 应用程序 (`services.msc`) 中查看运行器的状态。 您也可以使用 PowerShell 来检查服务是否在运行：

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

您可以使用 PowerShell 来检查自托管运行器的近期活动。 在这个示例输出中，您可以看到，应用程序启动，收到一个名为 `testAction` 的作业，然后显示结果状态：

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

### 监控自动更新过程

建议定期检查自动更新过程，因为如果自托管的运行器低于某个版本阈值，将会无法处理作业。 自托管的运行器应用程序自动更新本身，但请注意，此过程不包括对操作系统或其他软件的任何更新；您需要单独管理这些更新。

您可以在 *Runner_* 日志文件中查看更新活动。 例如：

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

此外，您也可以在 `_diag` 目录下的 _SelfUpdate_ 日志文件查找更多信息。

{% linux %}

### 自行托管运行器中的容器故障排除

#### 检查 Docker 是否安装

如果您的作业需要容器，则自托管的运行器必须基于 Linux，并且需要安装 Docker。 检查自托管运行器是否安装 Docker，以及服务是否正在运行。

您可以使用 `systemctl` 来检查服务状态：

```shell
$ sudo systemctl is-active docker.service
active
```

如果 Docker 未安装，则依赖的操作将因以下错误而失败：

```shell
[2020-02-13 16:56:10Z INFO DockerCommandManager] Which: 'docker'
[2020-02-13 16:56:10Z INFO DockerCommandManager] Not found.
[2020-02-13 16:56:10Z ERR  StepsRunner] Caught exception from step: System.IO.FileNotFoundException: File not found: 'docker'
```

#### 检查 Docker 权限

如果作业失败，出现以下错误：

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

检查自托管运行器的服务帐户是否有使用 Docker 服务的权限。 您可以通过检查 systemd 中的自托管运行器配置来识别此帐户。 例如：

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}
