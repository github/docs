---
title: 個人のメールアドレスを公開するコマンドラインのプッシュのブロック
intro: Web ベースの操作をする際にメールアドレスをプライベートに保つよう選択したなら、個人のメールアドレスを公開してしまうかもしれないコマンドラインのプッシュをブロックするように選択することもできます。
redirect_from:
  - /articles/blocking-command-line-pushes-that-expose-your-personal-email-address
versions:
  free-pro-team: '*'
topics:
  - Accounts
  - Notifications
---

コミットをコマンドラインからプッシュする際には、[Git で設定した](/articles/setting-your-commit-email-address)メールアドレスがコミットに関連付けられます。 この設定により、コマンドライン上で個人のメールアドレスを使用してコミットをプッシュすることがブロックされます。

{% data reusables.user_settings.about-commit-email-addresses %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.emails %}
{% data reusables.user_settings.keeping_your_email_address_private %}
4. コマンドラインからプッシュするコミットでメールアドレスをプライベートに保つには、[**Block command line pushes that expose my email**] (メールを公開してしまうコマンドラインプッシュのブロック) を選択します。 ![メールを公開してしまうコマンドラインプッシュをブロックする選択肢](/assets/images/help/settings/email_privacy_block_command_line_pushes.png)

### 参考リンク

- [コミットメールアドレスを設定する](/articles/setting-your-commit-email-address)
