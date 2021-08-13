---
title: Troubleshooting dotfiles for Codespaces
intro: Troubleshooting steps for common dotfiles issues.
product: '{% data reusables.gated-features.codespaces %}'
versions:
  fpt: '*'
type: reference
topics:
  - Codespaces
shortTitle: Dotfiles
---

If your codespace fails to pick up configuration settings from dotfiles, you should work through the following debugging steps.

1. Make sure your dotfiles repository is public. If you have secrets or sensitive data you want to use in your codespace, use [Codespace secrets](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) instead of private dotfiles.
2. Check `/workspaces/.codespaces/.persistedshare/dotfiles` to see if your dotfiles were cloned.
    - If your dotfiles were cloned, try manually re-running your install script to verify that it is executable.
    - If your dotfiles were not cloned, check `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` to see if there was a problem cloning them.
3. Check `/workspaces/.codespaces/.persistedshare/creation.log` for possible issues. For more information, see [Creation logs](/codespaces/troubleshooting/codespaces-logs#creation-logs).

If the configuration from your dotfiles is correctly picked up, but part of the configuration is incompatible with codespaces, use the `$CODESPACES` environment variable to add conditional logic for codespace-specific configuration settings.