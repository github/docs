---
title: 代码空间疑难解答
intro: 使用本指南帮助您解决代码空间的常见问题。
redirect_from:
  - /github/developing-online-with-github-codespaces/troubleshooting-your-codespace
  - /github/developing-online-with-codespaces/troubleshooting-your-codespace
  - /codespaces/working-with-your-codespace/troubleshooting-your-codespace
versions:
  free-pro-team: '*'
type: reference
topics:
  - Codespaces
---

{% data reusables.codespaces.release-stage %}

### 已知限制

{% data reusables.codespaces.beta-functionality-limited %}

{% data reusables.codespaces.unsupported-repos %}

### {% data variables.product.prodname_vscode %} 故障排除

在 [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) 仓库中使用**议题**来检查已知议题或记录有关 {% data variables.product.prodname_vscode %} 体验的议题。


### 配置故障排除

{% data reusables.codespaces.recovery-mode %}

```
由于容器错误，这个代码空间正在恢复模式中运行。
```

查看创建日志，根据需要更新配置，并在命令面板中运行 **Codespaces: Rebuild Container** 以重试。 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)”。

### dotfiles 故障排除

- 确保您的 dotfiles 仓库是公开的。 如果您的代码空间中有密钥或敏感数据，请使用[代码空间密钥](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)，而不是私人 dotfiles。
- 检查 `/workspaces/.codespaces/.persistedshare/dotfiles`，查看您的 dotfiles 是否被克隆。
  - 如果您的 dotfiles 被克隆，请尝试手动重新运行安装脚本以验证其可执行性。
  - 如果您的 dotfiles 未被克隆，请检查 `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` 是否存在克隆问题。
- 检查 `/workspaces/.codespaces/.persistedshare/creation.log` 是否有可能的问题。 或者，您可以通过导航到命令面板并输入 **Codespaces: View Creation Log** 来查看 `creation.log`。


### 浏览器故障排除

如果在使用非基于 Chromium 的浏览器时遇到问题，请尝试切换到基于 Chromium 的浏览器，或在 `microsoft/vscode` 仓库中搜索标有您的浏览器名称（如 [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) 或 [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari)）的议题，检查浏览器的已知问题。

如果您在使用基于 Chromium 的浏览器时遇到问题，您可以在e [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) 仓库中检查是否遇到 {% data variables.product.prodname_vscode %} 的另一个已知问题。

### 容器存储故障排除

创建代码空间时，存储量是有限的，随着时间的推移，可能需要释放空间。 尝试以下任何项以释放存储空间。

- 使用 `sudo apt autoremove` 删除不再使用的包
- 使用 `sudo apt clean` 清理 apt 缓存
- 删除不需要的文件，如构件和日志 (这些文件与项目的依存度很高)
- 查看代码空间中排名前 10 的大文件：`sudo find / -printf '%s %p\n'| sort -nr | head -10`

更具破坏性的选项：
- 使用 `docker system prune`（如果要删除所有映像，请追加 `-a`；如果要删除所有卷，请追加 `--volumes`）删除不使用的 Docker 映像、网络和容器
- 从工作树中删除不跟踪的文件：`git clear-i`

### 联系我们

如果仍需帮助，请联系我们。 更多信息请参阅“[关于 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#contacting-us-about-codespaces)”。
