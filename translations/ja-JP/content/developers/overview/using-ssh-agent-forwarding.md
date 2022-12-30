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
shortTitle: SSH agent forwarding
ms.openlocfilehash: ca827e1fc70288acc2da5c3a28ecfd71ece4a504
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145996258'
---
SSHエージェント転送を使って、サーバーへのデプロイをシンプルにすることができます。  そうすることで、キー（パスフレーズなしの！）をサーバー上に残さずに、ローカルのSSHキーを使用できます。

{% data variables.product.product_name %} とやりとりするための SSH キーを設定している場合は、おそらく `ssh-agent` をよく知っていることでしょう。 これは、バックグラウンドで実行され、キーをメモリにロードした状態にし続けるので、キーを使うたびにパスフレーズを入力する必要がなくなります。 便利なのは、それらがサーバー上で既に動作しているかのように、サーバーからローカルの `ssh-agent` にアクセスさせることを選択できることです。 これは、友人のコンピュータをあなたが使えるように、友人のパスワードを友人に入力してもらうように頼むようなものです。

SSH エージェント転送の詳細については、[Steve Friedl の Tech ヒント ガイド][tech-tips]を参照してください。

## SSHエージェント転送のセットアップ

SSHキーがセットアップされており、動作していることを確認してください。 まだの場合は、[SSH キーの生成に関するガイド][generating-keys]を使用できます。

ターミナルに `ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` を入力して、ローカル キーが機能することをテストできます。

```shell
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Attempt to SSH in to github
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not provide
> shell access.
```

いいスタートを切ることができました。 サーバーへのエージェント転送ができるよう、SSHをセットアップしましょう。

1. 任意のテキスト エディターを使用して、`~/.ssh/config` でファイルを開きます。 このファイルが存在しない場合は、ターミナルで `touch ~/.ssh/config` と入力して作成できます。

2. ファイルに次のテキストを入力し、`example.com` をサーバーのドメイン名または IP に置き換えます。

        Host example.com
          ForwardAgent yes

{% warning %}

**警告:** この設定をすべての SSH 接続に適用するように、`Host *` のようなワイルドカードを使用したくなる場合があります。 これはローカルの SSH キーを SSH 接続で入る *すべての* サーバーと共有することになるので、実際には良い考えではありません。 キーに直接アクセスされることはないかもしれませんが、接続が確立されている間は *あなたと同じように* それらのキーが使われるかもしれません。 **追加するサーバーは、信用でき、エージェント転送で使おうとしているサーバーのみにする必要があります。**

{% endwarning %}

## SSHエージェント転送のテスト

そのエージェント転送がサーバーで動作していることをテストするには、サーバーに SSH 接続し、`ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}` をもう一度実行します。  すべてうまくいっているなら、ローカルでやった場合と同じプロンプトが返ってくるでしょう。

ローカル キーが使用されているかどうかわからない場合は、サーバー上の `SSH_AUTH_SOCK` 変数を調べることもできます。

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/ssh-4hNGMk8AZX/agent.79453
```

この変数が設定されていないなら、エージェント転送は動作していないということです。

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> <em>[No output]</em>
$ ssh -T git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}
# Try to SSH to github
> Permission denied (publickey).
```

## SSHエージェント転送のトラブルシューティング

以下は、SSHエージェント転送のトラブルシューティングの際に注意すべきことです。

### コードをのチェックアウトにはSSH URLを使わなければならない

SSH転送はHTTP(s) URLでは動作せず、SSH URLでのみ動作します。 サーバー上の `.git/config` ファイルを確認し、URL が次のような SSH スタイルの URL であることを確認します。

```shell
[remote "origin"]
  url = git@{% ifversion ghes or ghae %}hostname{% else %}github.com{% endif %}:<em>yourAccount</em>/<em>yourProject</em>.git
  fetch = +refs/heads/*:refs/remotes/origin/*
```

### SSHキーはローカルで動作していなければならない

エージェント転送を通じてキーを動作させるには、まずキーがローカルで動作していなければなりません。 [SSH キーの生成に関するガイド][generating-keys]は、SSH キーをローカルに設定するのに役立ちます。

### システムがSSHエージェント転送を許可していなければならない

システム設定でSSHエージェント転送が許可されていないことがあります。 システム設定ファイルが使われているかは、ターミナルで以下のコマンドを入力してみればチェックできます。

```shell
$ ssh -v <em>example.com</em>
# Connect to example.com with verbose debug output
> OpenSSH_8.1p1, LibreSSL 2.7.3</span>
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Applying options for example.com
> debug1: Reading configuration data /etc/ssh_config
> debug1: Applying options for *
$ exit
# Returns to your local command prompt
```

上記の例では、最初にファイル `~/.ssh/config` が読み込まれ、次に `/etc/ssh_config` が読み取られます。  以下のコマンドを実行すれば、そのファイルが設定を上書きしているかを調べることができます。

```shell
$ cat /etc/ssh_config
# Print out the /etc/ssh_config file
> Host *
>   SendEnv LANG LC_*
>   ForwardAgent no
```

この例の `/etc/ssh_config` ファイルでは、エージェントの転送をブロックする方法として、特に `ForwardAgent no` を記述しています。 この行をファイルから削除すれば、エージェント転送は改めて動作するようになります。

### サーバーはインバウンド接続でSSHエージェント転送を許可していなければならない

エージェント転送は、サーバーでブロックされているかもしれません。 サーバーへの SSH 接続および `sshd_config` の実行により、エージェント転送が許可されていることを確認できます。 このコマンドの出力は、`AllowAgentForwarding` が設定されていることを示している必要があります。

### ローカルの `ssh-agent` が実行されている必要がある

ほとんどのコンピューターでは、オペレーティング システムによって自動的に `ssh-agent` が起動されます。  しかし、Windowsではこれを手動で行わなければなりません。 [Git Bash を開くたびに `ssh-agent` を開始する方法に関するガイドがあります][autolaunch-ssh-agent]。

コンピューターで `ssh-agent` が実行されていることを確認するには、ターミナルで次のコマンドを入力します。

```shell
$ echo "$SSH_AUTH_SOCK"
# Print out the SSH_AUTH_SOCK variable
> /tmp/launch-kNSlgU/Listeners
```

### `ssh-agent` がキーを使用できる必要があります。

キーが `ssh-agent` から見えることを確認するには、次のコマンドを実行します。

```shell
ssh-add -L
```

このコマンドが識別情報が利用できないと言ってきたなら、キーを追加しなければなりません。

```shell
$ ssh-add <em>yourkey</em>
```

{% tip %}

macOS では、`ssh-agent` がリブート中に再起動されると、このキーを "忘れます"。 ただし、以下のコマンドでキーチェーンにSSHキーをインポートできます。

```shell
$ ssh-add -K <em>yourkey</em>
```

{% endtip %}

[tech-tips]: http://www.unixwiz.net/techtips/ssh-agent-forwarding.html
[generating-keys]: /articles/generating-ssh-keys
[ssh-passphrases]: /ssh-key-passphrases/
[autolaunch-ssh-agent]: /github/authenticating-to-github/working-with-ssh-key-passphrases#auto-launching-ssh-agent-on-git-for-windows
