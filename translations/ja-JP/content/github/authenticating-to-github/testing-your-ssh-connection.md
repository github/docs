---
title: SSH 接続をテストする
intro: 'SSH キーをセットアップして {% data variables.product.product_name %} のアカウントに追加した後、接続をテストします。'
redirect_from:
  - /articles/testing-your-ssh-connection
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - ssh
---

SSH 接続をテストする前に、次のことを済ませておく必要があります:
- [既存の SSH キーの確認](/articles/checking-for-existing-ssh-keys)
- [新しい SSH キーを作成する](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
- [GitHub アカウントに新しい SSH キーを追加する](/articles/adding-a-new-ssh-key-to-your-github-account)

接続をテストするとき、先立って作成した SSH キーパスフレーズのパスワードを使ってこのアクションを認証する必要があります。 SSH キーのパスフレーズの利用の詳しい情報については、「[SSH キーのパスフレーズを使う](/articles/working-with-ssh-key-passphrases)」を参照してください。

{% data reusables.command_line.open_the_multi_os_terminal %}
2. 以下を入力します。
  ```shell
  $ ssh -T git@{% data variables.command_line.codeblock %}
  # {% data variables.product.product_name %} に ssh を試行する
  ```

  以下のような警告が表示される場合があります:

  ```shell
  > The authenticity of host '{% data variables.command_line.codeblock %} (IP ADDRESS)' can't be established.
  > RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
  > Are you sure you want to continue connecting (yes/no)?
  ```

3. 表示されるメッセージのフィンガープリントが {% if currentVersion == "free-pro-team@latest" %}[{% data variables.product.prodname_dotcom %} の RSA パブリックキーのフィンガープリント](/github/authenticating-to-github/githubs-ssh-key-fingerprints){% else %} Enterprise のパブリックキーのフィンガープリント{% endif %} に一致するかどうかを確認します。 一致する場合は、`yes` と入力します。
  ```shell
  > Hi <em>username</em>! You've successfully authenticated, but GitHub does not
  > provide shell access.
  ```

  {% linux %}

  以下のようなエラーメッセージが表示される場合があります:
  ```shell
  ...
  Agent admitted failure to sign using the key.
  debug1: No more authentication methods to try.
  Permission denied (publickey).
  ```

  これは、特定の Linux ディストリビューションで生じる既知の問題です。 詳細は「[Error: Agent admitted failure to sign](/articles/error-agent-admitted-failure-to-sign)」を参照してください。

  {% endlinux %}

4. 出力されたメッセージに、あなたのユーザ名が含まれていることを確認します。 「permission denied」メッセージを受け取った場合、「[Error: Permission denied (publickey)](/articles/error-permission-denied-publickey)」を参照してください。
