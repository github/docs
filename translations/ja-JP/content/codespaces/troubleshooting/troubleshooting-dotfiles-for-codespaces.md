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

1. ドットファイルリポジトリがパブリックであることを確認します。 codespace で使用するシークレットまたは機密データがある場合は、プライベートドットファイルの代わりに[Codespace シークレット](/codespaces/managing-your-codespaces/managing-encrypted-secrets-for-your-codespaces)を使用します。
2. Enable dotfiles by selecting **Automatically install dotfiles** in [your personal Codespaces settings](https://github.com/settings/codespaces).

   ![The 'Automatically install dotfiles' option](/assets/images/help/codespaces/automatically-install-dotfiles.png)

3. `/workspaces/.codespaces/.persistedshare/dotfiles` をチェックして、ドットファイルがクローンされたかどうかを確認します。
   - If your dotfiles were cloned, try manually re-running your install script to verify that it is executable.
   - If your dotfiles were not cloned, check `/workspaces/.codespaces/.persistedshare/EnvironmentLog.txt` to see if there was a problem cloning them.
4. 考えられる Issue については、`/workspaces/.codespaces/.persistedshare/creation.log` を確認します。 For more information, see [Creation logs](/codespaces/troubleshooting/codespaces-logs#creation-logs).

If the configuration from your dotfiles is correctly picked up, but part of the configuration is incompatible with codespaces, use the `$CODESPACES` environment variable to add conditional logic for codespace-specific configuration settings.
