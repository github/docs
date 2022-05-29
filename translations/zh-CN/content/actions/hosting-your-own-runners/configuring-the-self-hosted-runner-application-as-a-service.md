---
title: 将自托管的运行应用程序配置为服务
intro: 您可以将自托管的运行器应用程序配置为服务，以在机器启动时自动启动运行器应用程序。
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/configuring-the-self-hosted-runner-application-as-a-service
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: tutorial
defaultPlatform: linux
shortTitle: 启动时运行运行器应用程序
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

{% capture service_first_step %}1. 如果自托管的运行器应用程序正在运行，请停止它。{% endcapture %}
{% capture service_non_windows_intro_shell %}在运行器机器上，在安装了自托管运行器应用程序的目录中打开 shell。 使用以下命令安装和管理自托管的运行器服务。{% endcapture %}
{% capture service_nonwindows_intro %}将自托管的运行器应用程序配置为服务之前，您必须添加运行器到 {% data variables.product.product_name %}。 更多信息请参阅“[添加自托管的运行器](/github/automating-your-workflow-with-github-actions/adding-self-hosted-runners)”。{% endcapture %}
{% capture service_win_name %}actions.runner.*{% endcapture %}


{% linux %}

{{ service_nonwindows_intro }}

对于使用 `systemd` 的 Linux 系统，您可以使用随自托管运行器应用程序分发的 `svc.h` 脚本来安装和管理应用程序即服务。

{{ service_non_windows_intro_shell }}

{% endlinux %}

{% windows %}

{% note %}

**注意：** 在 Windows 上将自托管运行器应用程序配置为服务是应用程序配置过程的一部分。 如果已配置自托管运行器应用程序，但没有选择将其配置为服务，则必须从 {% data variables.product.prodname_dotcom %} 中删除运行器并重新配置应用程序。 当您重新配置应用程序时，选择将应用程序配置为服务的选项。

更多信息请参阅“[删除自托管的运行器](/actions/automating-your-workflow-with-github-actions/removing-self-hosted-runners)”和“[添加自托管的运行器](/actions/automating-your-workflow-with-github-actions/adding-self-hosted-runners)”。

{% endnote %}

您可以在 Windows **Services** 应用程序中管理运行器服务，也可以使用 PowerShell 来运行下面的命令。

{% endwindows %}

{% mac %}

{{ service_nonwindows_intro }}

{{ service_non_windows_intro_shell }}

{% endmac %}

{% linux %}

## 安装服务

{{ service_first_step }}
1. 使用以下命令安装服务：

   ```shell
   sudo ./svc.sh install
   ```

{% endlinux %}
{% mac %}

## 安装服务

{{ service_first_step }}
1. 使用以下命令安装服务：

   ```shell
   ./svc.sh install
   ```
{% endmac %}

该命令采用可选的 `user` 参数，以其他用户身份安装服务。

```shell
./svc.sh install <em>USERNAME</em>
```

## 启动服务

使用以下命令启动服务：

{% linux %}
```shell
sudo ./svc.sh start
```
{% endlinux %}
{% windows %}
```shell
Start-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh start
```
{% endmac %}

## 检查服务状态

使用以下命令检查服务状态：

{% linux %}
```shell
sudo ./svc.sh status
```
{% endlinux %}
{% windows %}
```shell
Get-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh status
```
{% endmac %}

 有关查看自托管运行器状态的更多信息，请参阅“[自托管运行器监控和故障排除](/actions/hosting-your-own-runners/monitoring-and-troubleshooting-self-hosted-runners)”。

## 停止服务

使用以下命令停止服务：

{% linux %}
```shell
sudo ./svc.sh stop
```
{% endlinux %}
{% windows %}
```shell
Stop-Service "{{ service_win_name }}"
```
{% endwindows %}
{% mac %}
```shell
./svc.sh stop
```
{% endmac %}

## 卸载服务

1. 停止正在运行的服务。
1. 使用以下命令卸载服务：

    {% linux %}
    ```shell
    sudo ./svc.sh uninstall
    ```
    {% endlinux %}
    {% windows %}
    ```shell
    Remove-Service "{{ service_win_name }}"
    ```
    {% endwindows %}
    {% mac %}
    ```shell
    ./svc.sh uninstall
    ```
    {% endmac %}


{% linux %}

## 自定义自托管运行器服务

如果您不想使用上述默认 `systemd` 服务配置，您可以创建自定义服务或使用您喜欢的服务机制。 考虑使用 `actions-runner/bin/actions.runner.service.template` 中的 `serviced` 模板作为参考。 如果您使用自定义的服务，必须始终使用 `runsvc.sh` 入口来调用自托管的运行器服务。

{% endlinux %}

{% mac %}

## 自定义自托管运行器服务

如果您不想使用上述默认 launchd 服务配置，您可以创建自定义服务或使用您喜欢的服务机制。 考虑使用 `actions-runner/bin/actions.runner.plist.template` 中的 `plist` 模板作为参考。 如果您使用自定义的服务，必须始终使用 `runsvc.sh` 入口来调用自托管的运行器服务。

{% endmac %}
