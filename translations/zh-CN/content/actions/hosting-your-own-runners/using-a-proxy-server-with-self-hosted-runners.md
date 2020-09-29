---
title: 将代理服务器与自托管运行器一起使用
intro: '您可以配置自托管运行器使用代理服务器与 {% data variables.product.product_name %} 通信。'
redirect_from:
  - /actions/automating-your-workflow-with-github-actions/using-a-proxy-server-with-self-hosted-runners
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 使用环境变量配置代理服务器

如果需要一个自托管运行器来通过代理服务器通信，则自托管运行器应用程序使用在以下环境变量中设置的代理配置：

* `http:_proxy`：HTTPS 流量的代理 URL。 如果需要，您也可以包括基本验证凭据。 例如：
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `http_proxy`：HTTP 流量的代理 URL。 如果需要，您也可以包括基本验证凭据。 例如：
  * `http://proxy.local`
  * `http://192.168.1.1:8080`
  * `http://username:password@proxy.local`
* `no_proxy`：逗号分隔的主机列表不应使用代理。 `no_proxy` 中只允许使用主机名，不能使用 IP 地址。 例如：
  * `example.com`
  * `example.com,myserver.local:443,example.org`

当自托管运行器应用程序启动时，会读取代理环境变量，因此您必须在配置或启动自托管运行器应用程序之前设置环境变量。 如果您的代理配置更改，必须重新启动自托管运行器应用程序。

在 Windows 机器上，代理环境变量名称不区分大小写。 在 Linux 和 macOS 机器上，建议环境变量全部小写。 如果您在 Linux 或 macOS 上同时有小写和大写的环境变量， 例如，`https://clus_proxy` 和 `HTTPS_PROXY`，自托管运行器应用程序将使用小写环境变量。

### 使用 .env 文件设置代理配置

如果设置环境变量不可行，您可以在自托管运行器应用程序目录中名为 _.env_ 的文件中设置代理配置变量。 例如，如果您想要将运行器应用程序配置为系统帐户下的服务，这可能是必需的。 当运行器应用程序启动时，它会读取代理 _.env_ 中为代理配置设置的变量。

示例 _.env_ 代理配置如下所示：

```
https_proxy=http://proxy.local:8080
no_proxy=example.com,myserver.local:443
```

### 设置 Docker 容器的代理配置

如果您在工作流程中使用 Docker 容器操作或服务容器，则除了设置上述环境变量外，可能还需要配置 Docker来使用代理服务器。

有关所需 Docker 配置的信息，请参阅 Docker 文档中的“[配置 Docker 以使用代理服务器](https://docs.docker.com/network/proxy/)”。
