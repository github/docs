---
title: 使用 GitHub Task Runner
intro: '您可以将 {% data variables.product.prodname_dotcom %} Task Runner 用作 CI/CD 集成系统，作为已关闭的早期使用计划的一部分。 {% data variables.product.product_name %} Task Runner 允许您根据仓库中的配置文件从 {% data variables.product.prodname_github_app %} 自动构建、测试和部署代码。'
hidden: true
redirect_from:
  - /enterprise/admin/articles/using-github-task-runner
versions:
  enterprise-server: '*'
---


{% note %}

**注：**在请求访问 {% data variables.product.prodname_dotcom %} Task Runner 前，您必须在 `EARLY ACCESS LINK` 中阅读并接受我们适用于 {% data variables.product.product_location_enterprise %} 的早期使用计划免责声明和责任限制。 此文档受这些条款管辖。

{% endnote %}

### 本文内容
- [关于 {% data variables.product.prodname_dotcom %} Task Runner](#about-github-task-runner)
- [下载 {% data variables.product.prodname_dotcom %} Task Runner 二进制文件](#downloading-the-github-task-runner-binary)
- [在您的设备上创建 {% data variables.product.prodname_dotcom %} Task Runner {% data variables.product.prodname_github_app %}](#creating-the-github-task-runner-github-app-on-your-appliance)
- [安装 {% data variables.product.prodname_dotcom %} Task Runner 应用程序](#installing-the-github-task-runner-app)
- [为项目运行任务](#running-tasks-for-a-project)

### 关于 {% data variables.product.prodname_dotcom %} Task Runner

{% data variables.product.product_name %} Task Runner 负责运行由 Dispatcher 排队的任务，Dispatcher 是一个处理 web 挂钩推送事件和排队任务的独立服务。

尽管 Dispatcher 已随 {% data variables.product.product_location_enterprise %} 提供，但您必须在设备上手动安装 {% data variables.product.product_name %} Task Runner。 要设置 {% data variables.product.product_name %} Task Runner，您必须下载 Runner 二进制文件，在设备上创建一个 {% data variables.product.prodname_github_app %}，并设置服务器以与 Dispatcher 交互。

### 下载 {% data variables.product.prodname_dotcom %} Task Runner 二进制文件

您的 {% data variables.product.product_location_enterprise %} 上必须具有 {% data variables.product.product_name %} Task Runner 应用程序二进制文件。 要下载所选平台的二进制文件，请访问 `https://HOSTNAME/_dispatcher/downloads/`，将 `hostname` 替换为 {% data variables.product.product_location_enterprise %} 主机名或 IP 地址：

使用 `chmod` 命令更改在命令行上使用 {% data variables.product.product_name %} Task Runner 的权限。

{% mac %}

```shell
$ chmod +x task-runner_darwin_amd64
```

{% endmac %}

{% windows %}

```shell
$ move task-runner_windows_amd64 task-runner_windows_amd64.exe
```

{% endwindows %}

{% linux %}

```shell
$ chmod +x task-runner_linux_amd64
```

{% endlinux %}

### 在您的设备上创建 {% data variables.product.prodname_dotcom %} Task Runner {% data variables.product.prodname_github_app %}

1. 在当前目录中创建 `.task-runner.yaml` 配置文件。 您可以使用 `--config` 标志将文件移动到不同目录。

```shell
task-runner 设置
```

2. 输入 {% data variables.product.product_location_enterprise %} 的主机名。
3. 输入使用专门权限配置的个人访问令牌。 更多信息请参阅[为命令行创建个人访问令牌](/articles/creating-a-personal-access-token-for-the-command-line/)。 如果您正在为您的帐户创建 {% data variables.product.prodname_github_app %}，则可以使用 `user` 权限；或者，如果您正在为组织创建 {% data variables.product.prodname_github_app %}，则可以使用 `admin:org` 权限。
4. 为 {% data variables.product.prodname_github_app %} 输入一个名称，例如 `Octocat Task Runner`。
5. 如果您正在为组织创建 {% data variables.product.prodname_github_app %}，则输入组织的名称。
6. 启动 Task Runner。

```shell
task-runner 启动
```

### 安装 {% data variables.product.prodname_dotcom %} Task Runner 应用程序

1. 在任一页面的右上角，单击您的个人资料照片，然后单击 Settings。 ![用户栏中的 Settings 图标](/assets/images/help/images/userbar-account-settings.png)
2. 在左侧边栏中，单击 **Developer settings**。 ![Developer settings 部分](/assets/images/help/images/developer_settings.png)
3. 在左侧边栏中，单击 **{% data variables.product.prodname_dotcom %} Apps**。 ![GitHub Apps 部分](/assets/images/help/images/github_apps.png)
4. 单击您想要安装的应用程序。
5. 在左侧边栏中，单击 **Public page**。 ![Public page 部分](/assets/images/help/images/public-page-tab.png)
6. 单击 **Install**。 ![GitHub 应用程序公共页面上的 Install 按钮](/assets/images/help/images/install-runner-public-page.png)
7. 选择 **Only select repositories** 并键入要安装 {% data variables.product.prodname_dotcom %} Task Runner 的仓库名称。 ![选择要安装到的仓库](/assets/images/help/images/repositories-install-task-runner.png)
8. 单击 **Install**。 ![GitHub 应用程序安装页面上的 Install 按钮](/assets/images/help/images/install-runner-installation-page.png)
9. 导航到安装应用程序的仓库。
10. 创建一个 `github/tasks.gf` 文件，类似于：

  ```
task "my task" {
command = "command-to-run"
runnerType = "Shell"
env =  {
  FOO="bar",
  BAR="baz"
}
}
  ```
12. 打开拉取请求以将文件添加到仓库。
13. 推送更改以查看 CI 任务是否已运行。

### 为项目运行任务

创建拉取请求后，{% data variables.product.prodname_github_app %} 会将事件推送到 Dispatcher，其中任务会排队发送到 {% data variables.product.prodname_dotcom %} Task Runner。 {% data variables.product.prodname_dotcom %} Task Runner 首先接收和执行任务，然后将它们报告给 Dispatcher，之后 Dispatcher 将使用结果更新拉取请求。

![拉取请求 CI 测试结果](/assets/images/help/images/task-results.png)
