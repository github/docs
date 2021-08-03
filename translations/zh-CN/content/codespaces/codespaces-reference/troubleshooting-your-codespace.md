---
title: 代码空间疑难解答
intro: Use this guide to help you troubleshoot common issues with your codespace.
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

### Known Limitations

{% data reusables.codespaces.beta-functionality-limited %}

{% data reusables.codespaces.unsupported-repos %}

### {% data variables.product.prodname_vscode %} troubleshooting

Use **Issues** in the [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) repository to check for known issues or to log issues about the {% data variables.product.prodname_vscode %} experience.


### Configuration troubleshooting

{% data reusables.codespaces.recovery-mode %}

```
由于容器错误，这个代码空间正在恢复模式中运行。
```

Review the creation logs, update the configuration as needed, and run **Codespaces: Rebuild Container** in the command palette to retry. 更多信息请参阅“[为项目配置 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/configuring-codespaces-for-your-project#apply-changes-to-your-configuration)”。

### dotfiles troubleshooting

- Make sure your dotfiles repository is public. If you have secrets or sensitive data you want to use in your codespace, use [Codespace secrets](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) instead of private dotfiles.
- Check `/workspaces/.codespaces/.persistedshare/dotfiles` to see if your dotfiles were cloned.
  - If your dotfiles were cloned, try manually re-running your install script to verify it's executable.
  - If your dotfiles weren't cloned, check `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` to see if there was a problem cloning them.
- Check `/workspaces/.codespaces/.persistedshare/creation.log` for possible issues. Alternatively, you can view the `creation.log` by navigating to the command palette and entering **Codespaces: View Creation Log**.


### Browser troubleshooting

如果在使用非基于 Chromium 的浏览器时遇到问题，请尝试切换到基于 Chromium 的浏览器，或在 `microsoft/vscode` 仓库中搜索标有您的浏览器名称（如 [`firefox`](https://github.com/microsoft/vscode/issues?q=is%3Aissue+is%3Aopen+label%3Afirefox) 或 [`safari`](https://github.com/Microsoft/vscode/issues?q=is%3Aopen+is%3Aissue+label%3Asafari)）的议题，检查浏览器的已知问题。

如果您在使用基于 Chromium 的浏览器时遇到问题，您可以在e [`microsoft/vscode`](https://github.com/microsoft/vscode/issues) 仓库中检查是否遇到 {% data variables.product.prodname_vscode %} 的另一个已知问题。

### Container storage troubleshooting

When you create a codespace, it has a finite amount of storage and over time it may be necessary for you to free up space. Try any of the following items to free up storage space.

- Remove packages that are no longer by using `sudo apt autoremove`
- Clean the apt cache by using `sudo apt clean`
- Delete unneeded files like build artifacts and logs (these are very project-dependent)
- See the top 10 largest files in the codespace: `sudo find / -printf '%s %p\n'| sort -nr | head -10`

More destructive options:
- Remove unused Docker images, networks, and containers by using `docker system prune` (append `-a` if you want to remove all images, and `--volumes` if you want to remove all volumes)
- Remove untracked files from working tree: `git clean -i`

### 联系我们

如果仍需帮助，请联系我们。 更多信息请参阅“[关于 {% data variables.product.prodname_codespaces %}](/github/developing-online-with-codespaces/about-codespaces#contacting-us-about-codespaces)”。
