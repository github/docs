---
title: Troubleshooting dotfiles for Codespaces
intro: Troubleshooting steps for common dotfiles issues.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
  ghec: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
---

If your codespace fails to pick up configuration settings from dotfiles, you should work through the following debugging steps.

1. 确保您的 dotfiles 仓库是公开的。 如果您的代码空间中有密钥或敏感数据，请使用[代码空间密钥](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)，而不是私人 dotfiles。
2. 检查 `/workspaces/.codespaces/.persistedshare/dotfiles`，查看您的 dotfiles 是否被克隆。
    - If your dotfiles were cloned, try manually re-running your install script to verify that it is executable.
    - If your dotfiles were not cloned, check `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` to see if there was a problem cloning them.
3. 检查 `/workspaces/.codespaces/.persistedshare/creation.log` 是否有可能的问题。 For more information, see [Creation logs](/codespaces/troubleshooting/codespaces-logs#creation-logs).

If the configuration from your dotfiles is correctly picked up, but part of the configuration is incompatible with codespaces, use the `$CODESPACES` environment variable to add conditional logic for codespace-specific configuration settings.
