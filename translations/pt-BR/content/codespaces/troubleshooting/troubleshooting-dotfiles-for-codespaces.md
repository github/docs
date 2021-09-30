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

1. Certifique-se de que seu repositório dotfiles seja público. Se você tem segredos ou dados confidenciais que você deseja usar em seu código, use [segredos de codespaces ](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces) em vez dos dotfiles privados.
2. Verifique `/workspaces/.codespaces/.persistedshare/dotfiles` para ver se seus dotfiles foram clonados.
    - If your dotfiles were cloned, try manually re-running your install script to verify that it is executable.
    - If your dotfiles were not cloned, check `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` to see if there was a problem cloning them.
3. Verifique `/workspaces/.codespaces/.persistedshare/creation.log` com relação a possíveis problemas. For more information, see [Creation logs](/codespaces/troubleshooting/codespaces-logs#creation-logs).

If the configuration from your dotfiles is correctly picked up, but part of the configuration is incompatible with codespaces, use the `$CODESPACES` environment variable to add conditional logic for codespace-specific configuration settings.
