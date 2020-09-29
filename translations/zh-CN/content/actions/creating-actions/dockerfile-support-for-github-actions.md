---
title: Dockerfile 对 GitHub 操作的支持
shortTitle: Docker
intro: 为 Docker 容器创建 `Dockerfile` 时， 您应该知道一些 Docker 指令如何与 GitHub 操作及操作的元数据文件交互。
product: '{% data reusables.gated-features.actions %}'
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  free-pro-team: '*'
  enterprise-server: '>=2.22'
---

{% data reusables.actions.enterprise-beta %}
{% data reusables.actions.enterprise-github-hosted-runners %}

### 关于 Dockerfile 指令

`Dockerfile` 包含定义 Docker 容器内容和启动行为的指令和参数。 有关 Docker 支持的指令的更多信息，请参阅 Docker 文档中的“[Dockerfile 引用](https://docs.docker.com/engine/reference/builder/)”。

### Dockerfile 指令和覆盖

某些 Docker 指令与 GitHub 操作交互，操作的元数据文件可以覆盖某些 Docker 指令。 确保您熟悉 Dockerfile 如何与 {% data variables.product.prodname_actions %} 交互以防止任何意外行为。

#### USER

Docker 操作必须由默认 Docker 用户 (root) 运行。 不要在 `Dockerfile` 中使用 `USER` 指令，因为您无法访问 `GITHUB_WORKSPACE`。 更多信息请参阅“[使用环境变量](/actions/configuring-and-managing-workflows/using-environment-variables)”和 Docker 文档中的 [USER 引用](https://docs.docker.com/engine/reference/builder/#user)。

#### FROM

`Dockerfile` 中的第一个指令必须是 `FROM`，它将选择 Docker 基础映像。 更多信息请参阅 Docker 文件中的 [FROM 引用](https://docs.docker.com/engine/reference/builder/#from)。

在设置 `FROM` 参数时，下面是一些最佳做法：

- 建议使用正式的 Docker 映像。 例如 `python` 或 `ruby`。
- 使用版本标记（如果有），最好使用主要版本。 例如，使用 `node:10` 而不使用 `node:latest`。
- 建议使用基于 [Debian](https://www.debian.org/) 操作系统的 Docker 映像。

#### WORKDIR

{% data variables.product.product_name %} 在 `GITHUB_WORKSPACE` 环境变量中设置工作目录路径。 建议不要在 `Dockerfile` 中使用 `WORKDIR` 指令。 在执行操作之前，{% data variables.product.product_name %} 将在 Docker 映像中位于该位置的任何项目上安装 `GITHUB_WORKSPACE` 目录，并将 `GITHUB_WORKSPACE` 设置为工作目录。 更多信息请参阅“[使用环境变量](/actions/configuring-and-managing-workflows/using-environment-variables)”和 Docker 文档中的 [WORKDIR 引用](https://docs.docker.com/engine/reference/builder/#workdir)。

#### ENTRYPOINT

如果在操作的元数据文件中定义 `entrypoint`，它将覆盖 `Dockerfile` 中定义的 `ENTRYPOINT`。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)”。

Docker `ENTRYPOINT` 指令有 _shell_ 形式和 _exec_ 形式。 Docker `ENTRYPOINT` 文档建议使用 _exec_ 形式的 `ENTRYPOINT` 指令。 有关 _exec_ 和 _shell_ 形式的更多信息，请参阅 Docker 文档中的 [ENTRYPOINT 参考](https://docs.docker.com/engine/reference/builder/#entrypoint)。

如果您配置容器使用 _exec_ 形式的 `ENTRYPOINT` 指令，在操作元数据文件中配置的 `args` 不会在命令 shell 中运行。 如果操作的 `args` 包含环境变量，不会替换该变量。 例如，使用以下 _exec_ 格式将不会打印存储在 `$GITHUB_SHA` 中的值， 但会打印 `"$GITHUB_SHA"`。

```
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 如果要替代变量，则可使用 _shell_ 形式或直接执行 shell。 例如，使用以下 _exec_ 格式可以执行 shell 来打印存储在 `GITHUB_SHA` 环境变量中的值。

```
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 要将操作元数据文件中定义的 `args` 提供到在 `ENTRYPOINT` 中使用 _exec_ 形式的 Docker 容器，建议创建一个可从 `ENTRYPOINT` 指令调用、名为 `entrypoint.sh` 的 shell 脚本。

##### 示例 *Dockerfile*
``` 
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up 
ENTRYPOINT ["/entrypoint.sh"]
```

##### 示例 *entrypoint.sh* 文件

使用上面的 Dockerfile 示例，{% data variables.product.product_name %} 会将在操作元数据文件中配置的 `args` 作为参数发送到 `entrypoint.sh`。 在 `entrypoint.sh` 文件顶部添加 `#!/bin/sh` [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))，明确使用系统的 [POSIX](https://en.wikipedia.org/wiki/POSIX) 标准 shell。

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually 
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

您的代码必须是可执行的。 在用于工作流程之前，确保 `entrypoint.sh` 文件有 `execute` 权限。 您可以使用此命令从终端修改权限：
  ``` sh
  chmod +x entrypoint.sh    
  ```

当 `ENTRYPOINT` shell 脚本不可执行时，您将收到一个类似于以下内容的错误：

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

#### CMD

如果在操作的元数据文件中定义 `args`，`args` 将覆盖 `Dockerfile` 中指定的 `CMD` 指令。 更多信息请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)”。

如果在 `Dockerfile` 中使用 `CMD`，请遵循以下指导方针：

{% data reusables.github-actions.dockerfile-guidelines %}

### 支持的 Linux 功能

{% data variables.product.prodname_actions %} 支持 Docker 所支持的默认 Linux 功能。 无法添加或删除功能。 有关 Docker 支持的默认 Linux 功能的更多信息，请参阅 Docker 文档中的“[运行时权限和 Linux 功能](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)”。 要详细了解 Linux 功能，请在 Linux 手册页中查看[Linux 功能概述](http://man7.org/linux/man-pages/man7/capabilities.7.html)。
