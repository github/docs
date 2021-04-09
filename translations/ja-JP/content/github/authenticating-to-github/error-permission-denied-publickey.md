---
title: 'Error: Permission denied (publickey)'
intro: '「Permission denied」エラーは、サーバーが接続を却下したことを示します。 原因はいくつか考えられますが、最も一般的な例を説明します。'
redirect_from:
  - /articles/error-permission-denied-publickey
versions:
  free-pro-team: '*'
  enterprise-server: '*'
  github-ae: '*'
topics:
  - ssh
---

### `sudo` コマンドを Git で使用すべきか

`sudo` コマンドは Git で使用するべきではありません。 `sudo` を使用しなければならない*特別な理由*がある場合は、各コマンドで使用するようにしてください (その時点で、シェルを root として取得するために `su` を使用するほうがおそらくベターです)。 `sudo` なしで [SSH キー](/articles/generating-an-ssh-key)を使用し、`sudo git push` などのコマンドの使用を試す場合は、生成したのと同じキーを使用しないでしょう。

### 正しいサーバーに接続していることを確認する

キーボードで入力するというのは骨の折れる作業です。 入力内容に注意を払ってください。「githib.com」や「guthub.com」に接続することはできません。 一部の場合、企業ネットワークによって DNS レコードの解決の問題も発生します。

正しいドメインに接続していることを確かめるには、以下のコマンドを入力します:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_5.6p1, OpenSSL 0.9.8r 8 Feb 2011
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} [IP ADDRESS] port 22.
```

{% if currentVersion == "free-pro-team@latest" %}設定を[HTTPS を介した SSH](/articles/using-ssh-over-the-https-port)を使用するようオーバーライドしていない限り、{% endif %}接続はポート 22で行われるはずです。

### 常に「git」ユーザを使用する

リモート URL 向けを含むすべての接続は、「git」ユーザとして行われる必要があります。 {% data variables.product.product_name %} のユーザ名で接続しようとすると、失敗します:

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
接続が失敗し、{% data variables.product.product_name %}のユーザ名でリモート URL を使用している場合は、[「git」ユーザを使用するようリモート URL を変更](/github/getting-started-with-github/managing-remote-repositories)できます。

以下を入力して接続を確認します:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

### 使用中のキーを持っていることを確認する

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. プライベートキーを生成し SSH に読み込ませていることを確認します。 {% if currentVersion ver_lt "enterprise-server@3.0" %}OpenSSH 6.7 以前を使用している場合:
  ```shell
  # バックグラウンドで ssh-agent を起動する
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 以降を使用している場合:
  ```shell
  # バックグラウンドでssh-agentを起動する
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  # バックグラウンドで ssh-agent を起動する
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA) {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. プライベートキーを生成し SSH に読み込ませていることを確認します。 {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 以降を使用している場合:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. プライベートキーを生成し SSH に読み込ませていることを確認します。 {% if currentVersion ver_lt "enterprise-server@3.0" %}If you're using OpenSSH 6.7 or older:
  ```shell
  # バックグラウンドで ssh-agent を起動する
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 以降を使用している場合:
  ```shell
  # バックグラウンドでssh-agentを起動する
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>you</em>/.ssh/id_rsa (RSA) 何もプリントされない場合は、<a href="/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent">新しい SSH キーを生成</a>して {% data variables.product.product_name %}と関連付ける必要があります。

{% tip %}

**Tip**: On most systems the default private keys (`~/.ssh/id_rsa` and `~/.ssh/identity`) are automatically added to the SSH authentication agent. プライベートキーを生成し SSH に読み込ませていることを確認します。

<code>git@{% data variables.command_line.backticks %}</code> への接続を試して、キーが使用されていることを確認することもできます。
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_rsa
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
```
 への接続を試して、キーが使用されていることを確認することもできます。
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa-cert type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa type -1
> debug1: identity file /Users/<em>you</em>/.ssh/id_dsa-cert type -1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_rsa
> debug1: Trying private key: /Users/<em>you</em>/.ssh/id_dsa
> debug1: No more authentication methods to try.
> Permission denied (publickey).
</code>

この例では、SSH が使用するキーはありませんでした。 「identity file」行の最後の「-1」は、SSH が使用するファイルを見つけることができなかったことを示します。 その後、「Trying private key」の行でもファイルが見つからなかったことが示されています。 ファイルが存在する場合は、これらの行はそれぞれ「1」と「Offering public key」になります。

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
> debug1: identity file /Users/<em>you</em>/.ssh/id_rsa type 1
> ...
> debug1: Authentications that can continue: publickey
> debug1: Next authentication method: publickey
> debug1: Offering RSA public key: /Users/<em>you</em>/.ssh/id_rsa
```

### 公開鍵がアカウントに添付されていることを確認する

公開鍵を {% data variables.product.product_name %} に提供して、安全な接続を確立する必要があります。

{% mac %}

1. ターミナルを開きます。
2. バックグラウンドで SSH エージェントを開始します。
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. 自分の公開鍵のフィンガープリントを見つけてメモします。 {% if currentVersion ver_lt "enterprise-server@3.0" %}OpenSSH 6.7 以前を使用している場合:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 以降を使用している場合:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. SSH キーのリストを、<code>ssh-add</code> コマンドの出力と比較します。
{% data variables.product.product_name %} の SSH キーのリスト コマンドラインを開きます。
2. バックグラウンドで SSH エージェントを開始します。
  $ ssh-agent -s
  > Agent pid 59566
  ```
 コマンドの出力と比較します。
{% data variables.product.product_name %} の SSH キーのリスト コマンドラインを開きます。
2. バックグラウンドで SSH エージェントを開始します。
  $ ssh-agent -s
  > Agent pid 59566
</code>
3. 自分の公開鍵のフィンガープリントを見つけてメモします。 {% if currentVersion ver_lt "enterprise-server@3.0" %}OpenSSH 6.7 以前を使用している場合:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 以降を使用している場合:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  {% else %}
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```{% endif %}

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. SSH キーのリストを、<code>ssh-add</code> コマンドの出力と比較します。
{% data variables.product.product_name %} の SSH キーのリスト ターミナルを開きます。
2. バックグラウンドで SSH エージェントを開始します。
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
 コマンドの出力と比較します。
{% data variables.product.product_name %} の SSH キーのリスト ターミナルを開きます。
2. バックグラウンドで SSH エージェントを開始します。
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
</code>
3. 自分の公開鍵のフィンガープリントを見つけてメモします。 OpenSSH 6.7 より前のバージョンを使用している場合:
  ```shell
  $ ssh-add -l
  > 2048 <em>a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

  OpenSSH 6.8 以降を使用している場合:
  ```shell
  $ ssh-add -l -E md5
  > 2048 <em>MD5:a0:dd:42:3c:5a:9d:e4:2a:21:52:4e:78:07:6e:c8:4d</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user_settings.access_settings %}
{% data reusables.user_settings.ssh %}
6. SSH キーのリストを、`ssh-add` コマンドの出力と比較します。 ![{% data variables.product.product_name %} の SSH キーのリスト](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

{% data variables.product.product_name %} で公開鍵が見つからない場合は、[{% data variables.product.product_name %} に SSH キーを追加](/articles/adding-a-new-ssh-key-to-your-github-account)してコンピュータと関連付ける必要があります。

{% warning %}

**警告**: 見慣れない SSH キーが {% data variables.product.product_name %} で見つかった場合は、すぐにそれを削除し、さらに支援が必要な場合は {% data variables.contact.contact_support %} に問い合わせてください。 確認できない公開鍵は、潜在的なセキュリティ上の問題を示している可能性があります。 詳細は「[SSH キーをレビューする](/articles/reviewing-your-ssh-keys)」を参照してください。

{% endwarning %}
