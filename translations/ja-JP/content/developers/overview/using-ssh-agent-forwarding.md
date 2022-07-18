---
title: SSHエージェント転送の利用
intro: サーバーへのデプロイを簡単にするために、SSHエージェント転送をセットアップして、安全にローカルのSSHキーを使うことができます。
redirect_from:
  - /guides/using-ssh-agent-forwarding
  - /v3/guides/using-ssh-agent-forwarding
  - /articles/using-ssh-agent-forwarding
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - API
shortTitle: SSHエージェントのフォワーディング
---



SSHエージェント転送を使って、サーバーへのデプロイをシンプルにすることができます。  そうすることで、キー（パスフレーズなしの！）をサーバー上に残さずに、ローカルのSSHキーを使用できます。

{% data variables.product.product_name %}とやりとりするためのSSHキーをセットアップ済みなら、`ssh-agent`には慣れていることでしょう。 これは、バックグラウンドで実行され、キーをメモリにロードした状態にし続けるので、キーを使うたびにパスフレーズを入力する必要がなくなります。 便利なのは、ローカルの`ssh-agent`がサーバー上で動作しているかのように、サーバーからローカルの`ssh-agent`にアクセスさせられることです。 これは、友人のコンピュータをあなたが使えるように、友人のパスワードを友人に入力してもらうように頼むようなものです。

SSHエージェント転送に関するさらに詳細な説明については、[Steve Friedl's Tech Tips guide][tech-tips]をご覧ください。

## SSHエージェント転送のセットアップ

SSHキーがセットアップされており、動作していることを確認してください。 まだ確認ができていないなら、[SSHキーの生成ガイド][generating-keys]を利用できます。

ローカルのキーが動作しているかは、ターミナルで`ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}`と入力すればテストできます。

```shell
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# SSHでgithubに入る
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide
> shell access.
```

いいスタートを切ることができました。 サーバーへのエージェント転送ができるよう、SSHをセットアップしましょう。

1. 好きなテキストエディタで`~/.ssh/config`にあるファイルを開いてください。 もしこのファイルがなかったなら、ターミナルで`touch ~/.ssh/config`と入力すれば作成できます。

2. `example.com`のところを使用するサーバーのドメイン名もしくはIPで置き換えて、以下のテキストをこのファイルに入力してください。
   
        Host example.com
          ForwardAgent yes

{% warning %}

**警告:** すべてのSSH接続のこの設定を適用するために、`Host *`のようなワイルドカードを使いたくなるかもしれません。 これはローカルのSSHキーをSSHで入る*すべての*サーバーと共有することになるので、実際には良い考えではありません。 キーに直接アクセスされることはないかもしれませんが、接続が確立されている間はそれらのキーが*あなたのかわりに*使われるかもしれません。 **追加するサーバーは、信用でき、エージェント転送で使おうとしているサーバーのみにすべきです。**

{% endwarning %}

## SSHエージェント転送のテスト

エージェント転送がサーバーで動作しているかをテストするには、サーバーにSSHで入ってもう一度`ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}`と実行してみてください。  すべてうまくいっているなら、ローカルでやった場合と同じプロンプトが返ってくるでしょう。

ローカルのキーが使われているか確信が持てない場合は、サーバー上で`SSH_AUTH_SOCK`変数を調べてみることもできます。

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/ssh-4hNGMk8AZX/agent.79453
```

この変数が設定されていないなら、エージェント転送は動作していないということです。

```shell
$ echo "$SSH_AUTH_SOCK"
# SSH_AUTH_SOCK変数の出力
> <em>[No output]</em>
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# SSHでgithubに入る
> Permission denied (publickey).
```

## SSHエージェント転送のトラブルシューティング

以下は、SSHエージェント転送のトラブルシューティングの際に注意すべきことです。

### コードをのチェックアウトにはSSH URLを使わなければならない

SSH転送はHTTP(s) URLでは動作せず、SSH URLでのみ動作します。 サーバー上の`.git/config`ファイルを調べて、URLが以下のようなSSHスタイルのURLになっていることを確認してください。

```shell
[remote "origin"]
  url = git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}:<em>yourAccount</em>/<em>yourProject</em>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

### SSHキーはローカルで動作していなければならない

エージェント転送を通じてキーを動作させるには、まずキーがローカルで動作していなければなりません。 SSHキーをローカルでセットアップするには、[SSHキーの生成ガイド][generating-keys]が役に立つでしょう。

### システムがSSHエージェント転送を許可していなければならない

システム設定でSSHエージェント転送が許可されていないことがあります。 システム設定ファイルが使われているかは、ターミナルで以下のコマンドを入力してみればチェックできます。

```shell
$ ssh -v <em>example.com</em>
# Connect to example.com with verbose debug output
> OpenSSH_5.6p1, OpenSSL 0.9.8r 8 Feb 2011</span>
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

上の例では、`~/.ssh/config`というファイルがまずロードされ、それから`/etc/ssh_config`が読まれます。  以下のコマンドを実行すれば、そのファイルが設定を上書きしているかを調べることができます。

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

この例では、`/etc/ssh_config`ファイルが`ForwardAgent no`と具体的に指定しており、これはエージェント転送をブロックするやり方です。 この行をファイルから削除すれば、エージェント転送は改めて動作するようになります。

### サーバーはインバウンド接続でSSHエージェント転送を許可していなければならない

エージェント転送は、サーバーでブロックされているかもしれません。 エージェント転送が許可されているかは、サーバーにSSHで入り、`sshd_config`を実行してみれば確認できます。 このコマンドからの出力で、`AllowAgentForwarding`が設定されていることが示されていなければなりません。

### ローカルの`ssh-agent`が動作していなければならない

ほとんどのコンピュータでは、オペレーティングシステムは自動的に`ssh-agent`を起動してくれます。  しかし、Windowsではこれを手動で行わなければなりません。 [Git Bashを開いたときに`ssh-agent`を起動する方法のガイド][autolaunch-ssh-agent]があります。

コンピュータで`ssh-agent`が動作しているかを確認するには、ターミナルで以下のコマンドを入力してください。

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

### キーが`ssh-agent`から利用可能でなければならない

`ssh-agent`からキーが見えるかは、以下のコマンドを実行すれば確認できます。

```shell
ssh-add -L
```

このコマンドが識別情報が利用できないと言ってきたなら、キーを追加しなければなりません。

```shell
$ ssh-add <em>yourkey</em>
```

{% tip %}

macOSでは、再起動時に`ssh-agent`が起動し直されると、キーは「忘れられて」しまいます。 ただし、以下のコマンドでキーチェーンにSSHキーをインポートできます。

```shell
$ ssh-add -K <em>yourkey</em>
```

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
