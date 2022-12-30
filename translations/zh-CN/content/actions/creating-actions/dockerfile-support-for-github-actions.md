---
title: Dockerfile 对 GitHub Actions 的支持
shortTitle: Dockerfile support
intro: 为 Docker 容器创建 `Dockerfile` 时，你应该知道一些 Docker 指令如何与 GitHub Actions 及操作的元数据文件交互。
redirect_from:
  - /actions/building-actions/dockerfile-support-for-github-actions
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
type: reference
ms.openlocfilehash: 6e061e479f4988398cbdc92114e387a3055734af
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 09/05/2022
ms.locfileid: '145084707'
---
{% data reusables.actions.enterprise-beta %} {% data reusables.actions.enterprise-github-hosted-runners %}

## 关于 Dockerfile 指令

`Dockerfile` 包含用于定义 Docker 容器内容和启动行为的指令和参数。 有关 Docker 支持的指令的详细信息，请参阅 Docker 文档中的“[Dockerfile 参考](https://docs.docker.com/engine/reference/builder/)”。

## Dockerfile 指令和覆盖

某些 Docker 指令与 GitHub Actions 交互，操作的元数据文件可以覆盖某些 Docker 指令。 确保您熟悉 Dockerfile 如何与 {% data variables.product.prodname_actions %} 交互以防止任何意外行为。

### USER

Docker 操作必须由默认 Docker 用户 (root) 运行。 不要在 `Dockerfile` 中使用 `USER` 指令，因为你将无法访问 `GITHUB_WORKSPACE`。 有关详细信息，请参阅 Docker 文档中的“[使用环境变量](/actions/configuring-and-managing-workflows/using-environment-variables)”和 [USER 参考](https://docs.docker.com/engine/reference/builder/#user)。

### FROM

`Dockerfile` 中的第一条指令必须为 `FROM`，该指令用于选择 Docker 基础映像。 有关详细信息，请参阅 Docker 文档中的 [FROM 参考](https://docs.docker.com/engine/reference/builder/#from)。

以下是设置 `FROM` 参数时的一些最佳做法：

- 建议使用正式的 Docker 映像。 例如，`python` 或 `ruby`。
- 使用版本标记（如果有），最好使用主要版本。 例如，请使用 `node:10` 而不是 `node:latest`。
- 建议使用基于 [Debian](https://www.debian.org/) 操作系统的 Docker 映像。

### WORKDIR

{% data variables.product.product_name %} 在 `GITHUB_WORKSPACE` 环境变量中设置工作目录路径。 建议不要在 `Dockerfile` 中使用 `WORKDIR` 指令。 在操作执行之前，{% data variables.product.product_name %} 将在 Docker 映像中位于该位置的任何项目上安装 `GITHUB_WORKSPACE` 目录，并将 `GITHUB_WORKSPACE` 设置为工作目录。 有关详细信息，请参阅 Docker 文档中的“[使用环境变量](/actions/configuring-and-managing-workflows/using-environment-variables)”和 [WORKDIR 参考](https://docs.docker.com/engine/reference/builder/#workdir)。

### ENTRYPOINT

如果在操作的元数据文件中定义 `entrypoint`，它将替代 `Dockerfile` 中定义的 `ENTRYPOINT`。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions/#runsentrypoint)”。

Docker `ENTRYPOINT` 指令具有 shell 形式和 exec 形式 。 Docker `ENTRYPOINT` 文档建议使用 `ENTRYPOINT` 指令的 exec 形式。 有关 exec 和 shell 形式的详细信息，请参阅 Docker 文档中的 [ENTRYPOINT 参考](https://docs.docker.com/engine/reference/builder/#entrypoint) 。

不应使用 `WORKDIR` 在 Dockerfile 中指定入口点。 而应使用绝对路径。 有关详细信息，请参阅 [WORKDIR](#workdir)。

如果将容器配置为使用 `ENTRYPOINT` 指令的 exec 形式，则在操作的元数据文件中配置的 `args` 将不会在命令 shell 中运行。 如果操作的 `args` 包含环境变量，则不会替换该变量。 例如，使用以下 exec 格式将不会打印存储在 `$GITHUB_SHA` 中的值，而是会打印 `"$GITHUB_SHA"`。

```dockerfile
ENTRYPOINT ["echo $GITHUB_SHA"]
```

 如果需要变量替换，则可以使用 shell 形式或直接执行 shell。 例如，如果使用以下 exec 格式，可执行 shell 以打印存储在 `GITHUB_SHA` 环境变量中的值。

```dockerfile
ENTRYPOINT ["sh", "-c", "echo $GITHUB_SHA"]
```

 若要将操作的元数据文件中定义的 `args` 提供给使用 `ENTRYPOINT` 中的 exec 形式的 Docker 容器，建议创建一个名为 `entrypoint.sh` 的 shell 脚本，该脚本可通过 `ENTRYPOINT` 指令调用：

#### 示例 Dockerfile

```dockerfile
# Container image that runs your code
FROM debian:9.5-slim

# Copies your code file from your action repository to the filesystem path `/` of the container
COPY entrypoint.sh /entrypoint.sh

# Executes `entrypoint.sh` when the Docker container starts up
ENTRYPOINT ["/entrypoint.sh"]
```

#### 示例 entrypoint.sh 文件

使用上面的示例 Dockerfile，{% data variables.product.product_name %} 会将在操作的元数据文件中配置的 `args` 以参数形式发送给 `entrypoint.sh`。 在 `entrypoint.sh` 文件的顶部添加 `#!/bin/sh` [shebang](https://en.wikipedia.org/wiki/Shebang_(Unix))，以显式地使用系统的与 [POSIX](https://en.wikipedia.org/wiki/POSIX) 兼容的 shell。

``` sh
#!/bin/sh

# `$*` expands the `args` supplied in an `array` individually
# or splits `args` in a string separated by whitespace.
sh -c "echo $*"
```

您的代码必须是可执行的。 在工作流中使用 `entrypoint.sh` 文件之前，请确保该文件具有 `execute` 权限。 您可以使用此命令从终端修改权限：
  ``` sh
  chmod +x entrypoint.sh
  ```

当 `ENTRYPOINT` shell 脚本不可执行时，你将收到如下所示的错误：

``` sh
Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"/entrypoint.sh\": permission denied": unknown
```

### CMD

如果在操作的元数据文件中定义 `args`，`args` 将替代 `Dockerfile` 中指定的 `CMD` 指令。 有关详细信息，请参阅“[{% data variables.product.prodname_actions %} 的元数据语法](/actions/creating-actions/metadata-syntax-for-github-actions#runsargs)”。

如果在 `Dockerfile` 中使用 `CMD`，请遵循以下准则：

{% data reusables.actions.dockerfile-guidelines %}

## 支持的 Linux 功能

{% data variables.product.prodname_actions %} 支持 Docker 所支持的默认 Linux 功能。 无法添加或删除功能。 有关 Docker 支持的默认 Linux 功能的详细信息，请参阅 Docker 文档中的“[运行时权限和 Linux 功能](https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities)”。 若要详细了解 Linux 功能，请参阅 Linux 手册页中的“[Linux 功能概述](http://man7.org/linux/man-pages/man7/capabilities.7.html)”。
