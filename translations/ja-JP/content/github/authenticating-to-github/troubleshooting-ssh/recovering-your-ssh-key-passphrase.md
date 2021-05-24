---
title: SSH キーのパスフレーズのリカバリ
intro: SSH キーのパスフレーズをなくした場合、ご使用のオペレーティングシステムによって、リカバリができることもあれば、SSH キーのパスフレーズを新たに生成することが必要なこともあります。
redirect_from:
  - /articles/how-do-i-recover-my-passphrase/
  - /articles/how-do-i-recover-my-ssh-key-passphrase/
  - /articles/recovering-your-ssh-key-passphrase
  - /github/authenticating-to-github/recovering-your-ssh-key-passphrase
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - SSH
---
{% mac %}

[macOS キーチェーンを使用して SSH パスフレーズを設定](/articles/working-with-ssh-key-passphrases#saving-your-passphrase-in-the-keychain)した場合、リカバリできる可能性があります。

1. [Finder] で、**Keychain Access** アプリケーションを検索します。 ![スポットライト検索バー](/assets/images/help/setup/keychain-access.png)
2. [Keychain Access] で、**SSH** を検索します。
3. SSH キーのエントリをダブルクリックして、新しいダイアログボックスを開きます。
4. 左下隅で、[**Show password**] を選択します。 ![キーチェーンアクセスダイアログ](/assets/images/help/setup/keychain_show_password_dialog.png)
5. 管理者パスワードを入力するようプロンプトが表示されます。 [Keychain Access] ダイアログボックスに入力します。
6. パスワードのマスクが解除されます。

{% endmac %}

{% windows %}

SSH キーパスフレーズをなくした場合、リカバリの方法はありません。 [まったく新しく SSH キーペアを生成する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)か [HTTPS クローニングに切り替える](/github/getting-started-with-github/managing-remote-repositories)かして、GitHub パスワードを代替で使用できるようにする必要があります。

{% endwindows %}

{% linux %}

SSH キーパスフレーズをなくした場合、リカバリの方法はありません。 [まったく新しく SSH キーペアを生成する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)か [HTTPS クローニングに切り替える](/github/getting-started-with-github/about-remote-repositories/#cloning-with-https-urls)かして、GitHub パスワードを代替で使用できるようにする必要があります。

{% endlinux %}
