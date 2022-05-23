---
title: 代码空间生命周期
intro: '您可以在 {% data variables.product.prodname_codespaces %} 环境中进行开发，并在整个代码空间生命周期中维护数据。'
versions:
  fpt: '*'
  ghec: '*'
type: overview
topics:
  - Codespaces
  - Developer
product: '{% data reusables.gated-features.codespaces %}'
---

## 关于代码空间的生命周期

代码空间的生命周期从创建代码空间时开始，到删除代码空间时结束。 您可以断开连接并重新连接到活动代码空间，而不会影响其正在运行的进程。 您可以停止并重新启动代码空间，而不会丢失对项目所做的更改。

## 创建代码空间

当您要处理项目时，可以选择创建新代码空间或打开现有代码空间。 您可能希望每次在 {% data variables.product.prodname_codespaces %} 中开发时，都希望从项目的分支创建新的代码空间，或者为功能保留长时间运行的代码空间。

如果选择在每次处理项目时都创建新的代码空间，则应定期推送更改，以便任何新提交都位于 {% data variables.product.prodname_dotcom %} 上。 一次最多可以有 10 个代码空间。 当您有了 10 个代码空间后，如要创建新代码空间，必须先删除一个代码空间。 更多信息请参阅“[创建代码空间](/codespaces/developing-in-codespaces/creating-a-codespace)”。

如果选择对项目使用长时间运行的代码空间，则每次开始在代码空间中工作时，都应从存储库的默认分支中提取代码空间，以便您的环境具有最新的提交。 此工作流程与在本地计算机上处理项目时非常相似。

{% data reusables.codespaces.prebuilds-crossreference %}

## 在代码空间中保存更改

当您通过 Web 连接到代码空间时，将自动为 Web 编辑器启用自动保存，并配置为在延迟后保存更改。 当您通过桌面上运行的 {% data variables.product.prodname_vscode %} 连接到代码空间时，必须启用自动保存。 更多信息请参阅 {% data variables.product.prodname_vscode %} 文档中的[保存/自动保存](https://code.visualstudio.com/docs/editor/codebasics#_save-auto-save) 。

如果要将更改保存在代码空间文件系统上的 git 存储库中，请提交这些更改并将其推送到远程分支。

如果您有未保存的更改，编辑器将在退出之前提示您保存这些更改。

## 代码空间超时

如果使代码空间在没有交互的情况下保持运行状态，或者退出代码空间而不显式停止它，则代码空间将在一段时间不活动后超时并停止运行。 默认情况下，代码空间将在处于非活动状态 30 分钟后超时，但您可以自定义所创建的新代码空间的超时期限的持续时间。 有关为代码空间设置默认超时期限的详细信息，请参阅“[为代码空间设置超时期限](/codespaces/customizing-your-codespace/setting-your-timeout-period-for-codespaces)”。 有关停止代码空间的详细信息，请参阅“[停止代码空间](#stopping-a-codespace)”。

当代码空间超时时，将保留上次保存更改时的数据。 更多信息请参阅“[在代码空间中保存更改](#saving-changes-in-a-codespace)”。

## 重建代码空间

您可以重新构建代码空间以还原干净状态，就像创建新代码空间一样。 对于大多数使用，可以创建新的代码空间作为重新构建代码空间的替代方法。 你最有可能重新构建代码空间来实施对开发容器的更改。 重新构建代码空间时，将清除所有 Docker 容器、映像、卷和缓存，然后重新构建代码空间。

如果需要在重新构建过程中保留任何此类数据，则可以在容器中的所需位置创建指向持久性目录的符号链接 (symlink)。 例如，在 `.devcontainer` 目录中，可以创建在重新构建过程中会保留的 `config` 目录。 然后，您可以将 `config` 目录及其内容作为 `postCreateCommand` 在 `devcontainer.json` 文件进行符号链接。

```json  
{
    "image": "mcr.microsoft.com/vscode/devcontainers/base:alpine",
    "postCreateCommand": ".devcontainer/postCreate.sh"
}
```

在下面的示例 `postCreate.sh` 文件中，`config` 目录的内容以符号链接到主目录。

```bash
#!/bin/bash
ln -sf $PWD/.devcontainer/config $HOME/config && set +x
```

## 停止代码空间

您可以随时停止代码空间。 停止代码空间时，将停止所有正在运行的进程并清除终端历史记录。 下次启动代码空间时，代码空间中的任何已保存更改仍将可用。 如果未明确停止代码空间，它将继续运行，直到它因非活动而超时。 更多信息请参阅“[代码空间超时](#codespaces-timeouts)”。

只有运行的代码空间才会产生 CPU 费用；停止的代码空间仅产生存储成本。

您可能希望停止并重新启动代码空间以对其应用更改。 例如，如果更改用于代码空间的计算机类型，则需要停止并重新启动它才能使更改生效。 您还可以停止代码空间，并在遇到错误或意外情况时选择重新启动或删除它。 更多信息请参阅“[暂停或停止代码空间](/codespaces/codespaces-reference/using-the-command-palette-in-codespaces#suspending-or-stopping-a-codespace)”。

## 删除代码空间

您可以为特定任务创建代码空间，然后在将更改推送到远程分支后安全地删除该代码空间。

如果您尝试删除包含未填充 git 提交的代码空间，编辑器将通知您有尚未推送到远程分支的更改。 您可以推送任何所需的更改，然后删除代码空间，或继续删除代码空间和任何未提交的更改。 还可以将代码导出到新分支，而无需创建新的代码空间。 更多信息请参阅“[将更改导出到分支](/codespaces/troubleshooting/exporting-changes-to-a-branch)”。

您将需要支付所有代码空间的存储费用。 删除代码空间后，将不再向您收费。

有关删除代码空间的详细信息，请参阅“[删除代码空间](/codespaces/developing-in-codespaces/deleting-a-codespace)”。

## 使用代码空间时丢失连接

{% data variables.product.prodname_codespaces %} 是一个基于云的开发环境，需要连接互联网。 如果您在代码空间中工作时失去互联网连接，您将无法访问代码空间。 但是，任何未提交的更改将保存。 当您再次接入互联网时，可以按离开时完全相同的状态连接到代码空间。 如果您的互联网连接不稳定，则应经常提交并推送更改。

如果您知道自己经常脱机工作，则可以使用扩展名为 ["{% data variables.product.prodname_vscode %} Remote - Containers"](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) 的 `devcontainer.json` 文件，以构建并附加到存储库的本地开发容器。 更多信息请参阅 {% data variables.product.prodname_vscode %} 文档中的[在容器内开发](https://code.visualstudio.com/docs/remote/containers)。
