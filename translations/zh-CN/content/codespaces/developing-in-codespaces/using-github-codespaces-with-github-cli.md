---
title: 将 GitHub Codespaces 与 GitHub CLI 配合使用
shortTitle: GitHub CLI
intro: '可以使用 {% data variables.product.product_name %} 命令行界面 `gh` 直接从命令行使用 {% data variables.product.prodname_github_codespaces %}。'
miniTocMaxHeadingLevel: 3
versions:
  fpt: '*'
  ghec: '*'
type: how_to
topics:
  - Codespaces
  - CLI
  - Developer
redirect_from:
  - /codespaces/developing-in-codespaces/using-codespaces-with-github-cli
ms.openlocfilehash: e9a268273e0a6d85a17a795f593e7bd3a7885718
ms.sourcegitcommit: 0a6e3eee6eea9b1e445aea1e4461d64cf6b63218
ms.translationtype: HT
ms.contentlocale: zh-CN
ms.lasthandoff: 11/14/2022
ms.locfileid: '148163495'
---
## 关于 {% data variables.product.prodname_cli %} 

{% data reusables.cli.about-cli %} 有关详细信息，请参阅“[关于 {% data variables.product.prodname_cli %}](/github-cli/github-cli/about-github-cli)。”

可以在 {% data variables.product.prodname_cli %} 中使用 {% data variables.product.prodname_github_codespaces %} 执行以下操作：
  - [列出所有代码空间](#list-all-of-your-codespaces)
  - [创建新的代码空间](#create-a-new-codespace)
  - [停止 codespace](#stop-a-codespace)
  - [删除 codespace](#delete-a-codespace)
  - [重命名 codespace](#rename-a-codespace)
  - [通过 SSH 连接到 codespace](#ssh-into-a-codespace)
  - [在 {% data variables.product.prodname_vscode %} 中打开 codespace](#open-a-codespace-in--data-variablesproductprodname_vscode-)
  - [在 JupyterLab 中打开 codespace](#open-a-codespace-in-jupyterlab)
  - [将文件复制到代码空间/从代码空间复制文件](#copy-a-file-tofrom-a-codespace)
  - [修改 codespace 中的端口](#modify-ports-in-a-codespace)
  - [访问 codespace 日志](#access-codespace-logs)
  - [访问远程资源](#access-remote-resources)
  - [更改 codespace 的计算机类型](#change-the-machine-type-of-a-codespace)

## 安装 {% data variables.product.prodname_cli %}

{% data reusables.cli.cli-installation %}
 
## 使用 {% data variables.product.prodname_cli %}

如果尚未执行此操作，请运行 `gh auth login` 对 {% data variables.product.prodname_dotcom %} 帐户进行身份验证。 

若要使用 `gh` 处理 {% data variables.product.prodname_github_codespaces %}，请键入 `gh codespace SUBCOMMAND` 或其别名 `gh cs SUBCOMMAND`。

作为可用于处理 {% data variables.product.prodname_github_codespaces %} 的一系列命令的示例，您可以： 

* 列出当前 codespace，检查是否有特定存储库的 codespace：<br>
  `gh codespace list`
* 为所需的存储库分支创建新的 codespace：<br>
  `gh codespace create -r github/docs -b main`
* 通过 SSH 连接到新的 codespace：<br>
  `gh codespace ssh -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`
* 将端口转发到本地计算机：<br>
  `gh codespace ports forward 8000:8000 -c octocat-literate-space-parakeet-7gwrqp9q9jcx4vq`

## {% data variables.product.prodname_github_codespaces %} 的 `gh` 命令

以下各节给出了每个可用操作的示例命令。

有关 {% data variables.product.prodname_github_codespaces %} 的 `gh` 命令的完整参考，包括每个命令的所有可用选项的详细信息，请参阅 {% data variables.product.prodname_cli %} 联机帮助以了解“[gh codespace](https://cli.github.com/manual/gh_codespace)”。 或者，在命令行上，使用 `gh codespace --help` 获取常规帮助，或者使用 `gh codespace SUBCOMMAND --help` 获取特定子命令的帮助。

{% note %}

注意：与许多命令一起使用的 `-c CODESPACE_NAME` 标志是可选的。 如果省略它，则会显示一个代码空间列表供您选择。

{% endnote %}

### 列出所有代码空间

```shell
gh codespace list
```

该列表包含每个 codespace 的唯一名称，可在其他 `gh codespace` 命令中使用。

codespace 分支名称末尾的星号表示该 codespace 中存在未提交或未推送的更改。

### 创建新的代码空间

```shell
gh codespace create -r OWNER/REPO_NAME [-b BRANCH]
```

有关详细信息，请参阅“[为存储库创建 codespace](/codespaces/developing-in-codespaces/creating-a-codespace-for-a-repository)”。

### 停止代码空间

```shell
gh codespace stop -c CODESPACE-NAME
```

有关详细信息，请参阅“深入了解 [{% data variables.product.prodname_github_codespaces %}](/codespaces/getting-started/deep-dive#closing-or-stopping-your-codespace)”。

### 删除代码空间

```shell
gh codespace delete -c CODESPACE-NAME
```

有关详细信息，请参阅“[删除 codespace](/codespaces/developing-in-codespaces/deleting-a-codespace)”。

### 重命名 codespace

```shell
gh codespace edit -c CODESPACE-NAME -d DISPLAY-NAME
```

有关详细信息，请参阅“[重命名 codespace](/codespaces/customizing-your-codespace/renaming-a-codespace)”。

### SSH 到代码空间

要在远程代码空间计算机上运行命令，请从终端通过 SSH 进入代码空间。

```shell
gh codespace ssh -c CODESPACE-NAME
```

{% note %}

注意：{% data reusables.codespaces.ssh-server-installed %}

<br>有关 `devcontainer.json` 文件和默认容器映像的详细信息，请参阅“[开发容器简介](/codespaces/setting-up-your-project-for-codespaces/introduction-to-dev-containers)”。

{% endnote %}

{% data variables.product.prodname_github_codespaces %} 在创建时将 GitHub SSH 密钥复制到代码空间中，以获得无缝的身份验证体验。 系统可能会要求您输入 SSH 密钥的密码，之后您将收到来自远程代码空间计算机的命令提示。

如果没有 SSH 密钥，请按照“[生成新的 SSH 密钥并将其添加到 ssh-agent](/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)”中的说明进行操作。

### 在 {% data variables.product.prodname_vscode %} 中打开代码空间

```shell
gh codespace code -c CODESPACE-NAME
```

必须在本地计算机上安装 {% data variables.product.prodname_vscode_shortname %}。 有关详细信息，请参阅“[在 {% data variables.product.prodname_vscode %} 中使用 {% data variables.product.prodname_github_codespaces %}](/codespaces/developing-in-codespaces/using-github-codespaces-in-visual-studio-code)”。

### 在 JupyterLab 中打开 codespace

```shell
gh codespace jupyter -c CODESPACE-NAME
```

{% data reusables.codespaces.jupyterlab-installed-in-codespace %}

### 将文件复制到代码空间/从代码空间复制文件

```shell
gh codespace cp [-r] SOURCE(S) DESTINATION
```

使用文件或目录名称上的前缀 `remote:` 来指示它位于 codespace 上。 与 UNIX `cp` 命令一样，第一个参数指定源，最后一个参数指定目标。 如果目标是目录，则可以指定多个来源。 如果任何源是目录，请使用 `-r`（递归）标志。

代码空间上文件和目录的位置相对于远程用户的主目录。

#### 示例

* 将文件从本地计算机复制到 codespace 的 `$HOME` 目录：

   `gh codespace cp myfile.txt remote:`

* 将文件复制到代码空间中检出存储库的目录：

   `gh codespace cp myfile.txt remote:/workspaces/REPOSITORY-NAME`

* 将文件从代码空间复制到本地计算机上的当前目录：

   `gh codespace cp remote:myfile.txt .`

* 将三个本地文件复制到 codespace 的 `$HOME/temp` 目录：

   `gh codespace cp a1.txt a2.txt a3.txt remote:temp`

* 将三个文件从代码空间复制到本地计算机上的当前工作目录：

   `gh codespace cp remote:a1.txt remote:a2.txt remote:a3.txt .`

* 将本地目录复制到 codespace 的 `$HOME` 目录：

   `gh codespace cp -r mydir remote:`

* 将目录从代码空间复制到本地计算机，更改目录名称：

   `gh codespace cp -r remote:mydir mydir-localcopy`

有关 `gh codespace cp` 命令的详细信息，包括可以使用的其他标志，请参阅 [{% data variables.product.prodname_cli %} 手册](https://cli.github.com/manual/gh_codespace_cp)。

### 修改代码空间中的端口

您可以将代码空间上的端口转发到本地端口。 只要进程正在运行，端口就会保持转发状态。 若要停止转发端口，请按 <kbd>Control</kbd>+<kbd>C</kbd>。

```shell
gh codespace ports forward CODESPACE-PORT_NAME:LOCAL-PORT-NAME -c CODESPACE-NAME
```

若要查看转发端口的详细信息，请输入 `gh codespace ports` 并选择一个 codespace。

您可以设置转发端口的可见性。 {% data reusables.codespaces.port-visibility-settings %}

```shell
gh codespace ports visibility CODESPACE-PORT:private|org|public -c CODESPACE-NAME
```

您可以使用一个命令设置多个端口的可见性。 例如：

```shell
gh codespace ports visibility 80:private 3000:public 3306:org -c CODESPACE-NAME
```

有关详细信息，请参阅“[在 codespace 中转发端口](/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace)。”

### 访问代码空间日志

您可以查看代码空间的创建日志。 输入此命令后，系统将要求您输入 SSH 密钥的密码。

```shell
gh codespace logs -c CODESPACE-NAME
```

有关创建日志的详细信息，请参阅“[{% data variables.product.prodname_github_codespaces %} 日志](/codespaces/troubleshooting/github-codespaces-logs#creation-logs)”。

### 访问远程资源 
可以使用 {% data variables.product.prodname_cli %} 扩展在 codespace 和本地计算机之间创建网桥，以便 codespace 可以访问可从计算机访问的任何远程资源。 有关使用扩展的详细信息，请参阅“[使用 {% data variables.product.prodname_cli %} 访问远程资源](https://github.com/github/gh-net#codespaces-network-bridge)”。

{% note %}

注意：{% data variables.product.prodname_cli %} 扩展目前为 beta 版本，可能会有变动。 

{% endnote %}

### 更改 codespace 的计算机类型

```shell
gh codespace edit -m MACHINE-TYPE-NAME
```

有关详细信息，请参阅“[更改 codespace 的计算机类型](/codespaces/customizing-your-codespace/changing-the-machine-type-for-your-codespace)”的“{% data variables.product.prodname_cli %}”选项卡。
