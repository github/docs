---
title: SSH 接続をテストする
intro: 'SSH キーを設定し、{% ifversion ghae %}{% data variables.product.product_name %}{% else %}{% data variables.product.product_location %}{% endif %} のアカウントに追加した後、接続をテストできます。'
redirect_from:
  - /articles/testing-your-ssh-connection
  - /github/authenticating-to-github/testing-your-ssh-connection
  - /github/authenticating-to-github/connecting-to-github-with-ssh/testing-your-ssh-connection
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Test your SSH connection
ms.openlocfilehash: 7724c5939b319748f270db2f190a6df825b0bb4f
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '146338974'
---
SSH 接続をテストする前に、次のことを済ませておく必要があります:
- [既存の SSH キーを確認する](/articles/checking-for-existing-ssh-keys)
- [新しい SSH キーを生成する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [GitHub アカウントに新しい SSH キーを追加する](/articles/adding-a-new-ssh-key-to-your-github-account)

接続をテストするとき、先立って作成した SSH キーパスフレーズのパスワードを使ってこのアクションを認証する必要があります。 SSH キー パスフレーズの処理について詳しくは、「[SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)」をご覧ください。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 次のように入力します。
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # Attempts to ssh to {% data variables.product.product_name %}
  ```

  以下のような警告が表示される場合があります:

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. 表示されるメッセージのフィンガープリントが、{% ifversion fpt or ghec %}[{% data variables.product.prodname_dotcom %} の公開キー フィンガープリント](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %}Enterprise の公開キー フィンガープリント{% endif %}と一致することを確認します。 その場合は、「`yes`」と入力します。
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  このエラー メッセージが表示されることがあります。
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  これは、特定の Linux ディストリビューションで生じる既知の問題です。 詳しくは、「[エラー: 許可されたエージェントが署名できません](/articles/error-agent-admitted-failure-to-sign)」をご覧ください。

  {% endlinux %}

   {% note %}

   **注:** リモート コマンドはコード 1 で終了します。

   {% endnote %}

4. 出力されたメッセージに、あなたのユーザ名が含まれていることを確認します。 "アクセス許可が拒否された" というメッセージを受け取る場合は、「[エラー: アクセス許可が拒否されました (publickey)](/articles/error-permission-denied-publickey)」をご覧ください。
