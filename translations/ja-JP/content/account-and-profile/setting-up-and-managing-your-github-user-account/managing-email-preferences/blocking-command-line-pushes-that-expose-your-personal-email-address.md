---
title: 個人のメールアドレスを公開するコマンドラインのプッシュのブロック
intro: Web ベースの操作をする際にメールアドレスをプライベートに保つよう選択したなら、個人のメールアドレスを公開してしまうかもしれないコマンドラインのプッシュをブロックするように選択することもできます。
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/blocking-command-line-pushes-that-expose-your-personal-email-address
  - /github/setting-up-and-managing-your-github-user-account/managing-email-preferences/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  fpt: '*'
  ghec: '*'
topics:
  - Accounts
  - Notifications
shortTitle: Block push with personal email
---

コミットをコマンドラインからプッシュする際には、[Git で設定した](/articles/setting-your-commit-email-address)メールアドレスがコミットに関連付けられます。 If you enable this setting, each time you push to GitHub, we’ll check the most recent commit. If the author email on that commit is a private email on your GitHub account, we will block the push and warn you about exposing your private email.

{% data reusables.user-settings.about-commit-email-addresses %}

{% data reusables.user-settings.access_settings %}
{% data reusables.user-settings.emails %}
{% data reusables.user-settings.keeping_your_email_address_private %}
4. コマンドラインからプッシュするコミットでメールアドレスをプライベートに保つには、[**Block command line pushes that expose my email**] (メールを公開してしまうコマンドラインプッシュのブロック) を選択します。 ![メールを公開してしまうコマンドラインプッシュをブロックする選択肢](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

## 参考リンク

- [コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)
