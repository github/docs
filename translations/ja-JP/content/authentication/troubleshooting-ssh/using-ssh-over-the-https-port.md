---
title: HTTPS ポートを介して SSH を使用する
intro: '時々、ファイアウォールは SSH 接続を完全に許可することを拒否します。  [HTTPS cloning with credential caching] (/github/getting-started-with-github/caching-your-github-credentials-in-git) を使用できない場合は、HTTPS ポートを介して作成された SSH 接続を使用してクローンを試みることができます。  ほとんどのファイアウォールルールでこれを許可する必要がありますが、プロキシサーバーが干渉する可能性があります。'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
---

{% tip %}

**{% data variables.product.prodname_ghe_server %} ユーザ**: HTTPS ポートを介した SSH 経由での {% data variables.product.prodname_ghe_server %} へのアクセスは現在サポートされていません。

{% endtip %}

HTTPS ポート経由の SSH が可能かどうかをテストするには、次の SSH コマンドを実行します:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

うまく機能すれば、素晴らしいことです。 そうでない場合は、[トラブルシューティングガイドに従ってください](/articles/error-permission-denied-publickey)。

## HTTPS を介した SSH 接続を有効化する

If you are able to SSH into `git@ssh.{% data variables.command_line.backticks %}` over port 443, you can override your SSH settings to force any connection to {% data variables.product.product_location %} to run through that server and port.

ssh 設定でこれを設定するには、`~/.ssh/config` のファイルを編集して、このセクションを追加してください:

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

もう一度 {% data variables.product.product_location %} に接続することでこれが機能するかテストできます:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```
