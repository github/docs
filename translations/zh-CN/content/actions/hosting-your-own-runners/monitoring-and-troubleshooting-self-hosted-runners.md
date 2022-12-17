---
title: 对自托管运行程序进行监视和故障排除
intro: 您可以监控自托管运行器，查看它们的活动并诊断常见问题。
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
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '147065632'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 检查自托管运行器的状态

{% data reusables.actions.self-hosted-runner-management-permissions-required %}

{% data reusables.actions.self-hosted-runner-navigate-repo-and-org %} {% data reusables.organizations.settings-sidebar-actions-runners %}
1. 在“运行器”下，可以查看已注册运行器的列表，包括运行器的名称、标签和状态。

    状态可以是下列其中一项：

    * 空闲：运行器已连接到 {% data variables.product.product_name %}，并已准备好执行作业。
    * 活动：运行器当前正在执行作业。
    * 脱机：运行器未连接到 {% data variables.product.product_name %}。 这可能是因为机器处于离线状态，自托管运行器应用程序未在机器上运行，或者自托管运行器应用程序无法与 {% data variables.product.product_name %} 通信。

## 网络连接疑难解答

### 检查自托管运行器网络连接

可以结合使用自托管运行器应用程序的 `run` 脚本与 `--check` 参数，以检查自托管运行器是否可以访问 {% data variables.product.product_location %} 上所有必需的网络服务。

除了 `--check` 外，还必须为脚本提供两个参数：

* `--url`，其中包含指向 {% data variables.product.company_short %} 存储库、组织或企业的 URL。 例如，`--url https://github.com/octo-org/octo-repo`。
* `--pat`，其中包含必须具有 `workflow` 作用域的个人访问令牌的值。 例如，`--pat ghp_abcd1234`。 有关详细信息，请参阅“[创建个人访问令牌](/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)”。

例如：

{% mac %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endmac %} {% linux %}

{% data reusables.actions.self-hosted-runner-check-mac-linux %}

{% endlinux %} {% windows %}

```shell
run.cmd --check --url <em>https://github.com/octo-org/octo-repo</em> --pat <em>ghp_abcd1234</em>
```

{% endwindows %}

该脚本测试每项服务，并为每项服务输出 `PASS` 或 `FAIL`。 如有任何失败的检查，您可以在日志文件中看到更多关于问题的详细信息。 日志文件位于安装了运行器应用程序的 `_diag` 目录中，每个检查的日志文件的路径显示在脚本的控制台输出中。

如有任何失败的检查，您也应该验证您自己托管的运行器是否符合所有通信要求。 有关详细信息，请参阅[关于自承载运行器](/actions/hosting-your-own-runners/about-self-hosted-runners#communication-requirements)。

### 禁用 TLS 证书验证
{% ifversion ghes %} 默认情况下，自托管运行器应用程序验证 {% data variables.product.product_name %} 的 TLS 证书。  如果您的 {% data variables.product.product_name %} 具有自签名证书或内部颁发的证书，则出于测试目的，您可能希望禁用 TLS 证书验证。
{% else %} 默认情况下，自托管运行器应用程序验证 {% data variables.product.product_name %} 的 TLS 证书。  如果遇到网络问题，您可能希望禁用 TLS 证书验证以进行测试。
{% endif %}

若要在自托管运行器应用程序中禁用 TLS 证书验证，请在配置和运行自托管运行器应用程序之前将 `GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY` 环境变量设置为 `1`。

```shell
export GITHUB_ACTIONS_RUNNER_TLS_NO_VERIFY=1
./config.sh --url <em>https://github.com/octo-org/octo-repo</em> --token
./run.sh
```

{% warning %}

警告：不建议禁用 TLS 验证，因为 TLS 在自托管运行器应用程序和 {% data variables.product.product_name %} 之间提供了隐私和数据完整性。 我们建议您在自托管运行器的操作系统证书存储中安装 {% data variables.product.product_name %} 证书。 有关如何安装 {% data variables.product.product_name %} 证书的指导，请咨询您的操作系统供应商。

{% endwarning %}

## 查阅自托管运行应用程序日志文件

您可以监控自托管运行器应用程序的状态及其活动。 日志文件保存在你安装运行器应用程序的 `_diag` 目录中，每次启动应用程序时都会生成新的日志。 文件名开头为 Runner_，后接应用程序启动时的 UTC 时间戳。

有关工作流作业执行的详细日志，请参阅介绍 Worker_ 文件的下一节。

## 查看作业日志文件

自托管的运行器应用程序为它处理的每个作业创建详细的日志文件。 这些文件存储在安装运行器应用程序的 `_diag` 目录中，文件名以 Worker_ 开头。

{% linux %}

## 使用 journalctl 检查自托管的运行器应用程序服务

对于使用服务运行应用程序的 Linux 自托管运行器，可以使用 `journalctl` 来监视其实时活动。 基于系统的默认服务使用以下命名约定：`actions.runner.<org>-<repo>.<runnerName>.service`。 此名称在超过 80 个字符时将被截断，因此查找服务名称的首选方式是检查 .service 文件。 例如：

```shell
$ cat ~/actions-runner/.service
actions.runner.octo-org-octo-repo.runner01.service
```

如果因为服务安装在其他地方而失败，您可以在运行服务列表中找到服务名称。 例如，在大多数 Linux 系统上，可以使用 `systemctl` 命令：

```shell
$ systemctl --type=service | grep actions.runner
actions.runner.octo-org-octo-repo.hostname.service loaded active running GitHub Actions Runner (octo-org-octo-repo.hostname)
```

可使用 `journalctl` 监视自托管运行器的实时活动：

```shell
$ sudo journalctl -u actions.runner.octo-org-octo-repo.runner01.service -f
```

在此示例输出中，可以看到 `runner01` 启动，接收名为 `testAction` 的作业，然后显示结果状态：

```shell
Feb 11 14:57:07 runner01 runsvc.sh[962]: Starting Runner listener with startup type: service
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started listener process
Feb 11 14:57:07 runner01 runsvc.sh[962]: Started running service
Feb 11 14:57:16 runner01 runsvc.sh[962]: √ Connected to GitHub
Feb 11 14:57:17 runner01 runsvc.sh[962]: 2020-02-11 14:57:17Z: Listening for Jobs
Feb 11 16:06:54 runner01 runsvc.sh[962]: 2020-02-11 16:06:54Z: Running job: testAction
Feb 11 16:07:10 runner01 runsvc.sh[962]: 2020-02-11 16:07:10Z: Job testAction completed with result: Succeeded
```

若要查看 `systemd` 配置，可在此处找到服务文件：`/etc/systemd/system/actions.runner.<org>-<repo>.<runnerName>.service`。
如果您想要自定义自托管的运行器应用程序服务，不要直接修改此文件。 按照“[将自托管运行器应用程序配置为服务](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service)”中所述的说明进行操作。

{% endlinux %}

{% mac %}

## 使用 `launchd` 检查自托管运行器应用程序服务

对于将应用程序作为服务运行的 macOS 自托管运行器，可以使用 `launchctl` 来监视其实时活动。 基于 launchd 的默认服务使用以下命名约定：`actions.runner.<org>-<repo>.<runnerName>`。 此名称在超过 80 个字符时将被截断，因此查找服务名称的首选方式是检查运行器目录中的 .service 文件：

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

生成的输出包括进程 ID 和应用程序的 `launchd` 服务的名称。

若要查看 `launchd` 配置，可在此处找到服务文件：`/Users/exampleUsername/Library/LaunchAgents/actions.runner.<repoName>.<runnerName>.service`。
如果您想要自定义自托管的运行器应用程序服务，不要直接修改此文件。 按照“[将自托管运行器应用程序配置为服务](/actions/hosting-your-own-runners/configuring-the-self-hosted-runner-application-as-a-service#customizing-the-self-hosted-runner-service-1)”中所述的说明进行操作。

{% endmac %}

{% windows %}

## 使用 PowerShell 检查自托管的运行器应用程序服务

对于将应用程序运行为服务的 Windows 自托管运行器，您可以使用 PowerShell 来监控其实时活动。 服务使用命名约定 `GitHub Actions Runner (<org>-<repo>.<runnerName>)`。 还可以通过检查运行器目录中的 .service 文件来查找服务的名称：

```shell
PS C:\actions-runner> Get-Content .service
actions.runner.octo-org-octo-repo.runner01.service
```

可以在 Windows 服务应用程序 (`services.msc`) 中查看运行器的状态。 您也可以使用 PowerShell 来检查服务是否在运行：

```shell
PS C:\actions-runner> Get-Service "actions.runner.octo-org-octo-repo.runner01.service" | Select-Object Name, Status
Name                                                  Status
----                                                  ------
actions.runner.octo-org-octo-repo.runner01.service    Running
```

您可以使用 PowerShell 来检查自托管运行器的近期活动。 在此示例输出中，可以看到应用程序启动，接收名为 `testAction` 的作业，然后显示结果状态：

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

## 监控自动更新过程

建议定期检查自动更新过程，因为如果自托管的运行器低于某个版本阈值，将会无法处理作业。 自托管的运行器应用程序自动更新本身，但请注意，此过程不包括对操作系统或其他软件的任何更新；您需要单独管理这些更新。

可以在 Runner_ 日志文件中查看更新活动。 例如：

```shell
[Feb 12 12:37:07 INFO SelfUpdater] An update is available.
```

此外，还可以在位于安装了运行器应用程序的 `_diag` 目录中的 SelfUpdate 日志文件中找到详细信息。

{% linux %}

## 自行托管运行器中的容器故障排除

### 检查 Docker 是否安装

如果您的作业需要容器，则自托管的运行器必须基于 Linux，并且需要安装 Docker。 检查自托管运行器是否安装 Docker，以及服务是否正在运行。

可以使用 `systemctl` 检查服务状态：

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

### 检查 Docker 权限

如果作业失败，出现以下错误：

```shell
dial unix /var/run/docker.sock: connect: permission denied
```

检查自托管运行器的服务帐户是否有使用 Docker 服务的权限。 可以通过检查 `systemd` 中的自托管运行器的配置来识别此帐户。 例如：

```shell
$ sudo systemctl show -p User actions.runner.octo-org-octo-repo.runner01.service
User=runner-user
```

{% endlinux %}

{% ifversion ghes %}
## 解析在 {% data variables.product.product_location %} 升级后处于脱机状态的运行器

{% data reusables.actions.upgrade-runners-before-upgrade-ghes %} 

如果运行器出于此原因处于脱机状态，请手动更新运行器。 有关详细信息，请参阅操作/运行器存储库中[最新版本](https://github.com/actions/runner/releases/latest)的安装说明。
{% endif %}
