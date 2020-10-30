---
title: 'エラー: Bad file number'
intro: このエラーは通常、サーバーに接続できなかったことを示します。 よくある原因はファイアウォールとプロキシサーバーです。
redirect_from:
  - /articles/error-bad-file-number
versions:
  free-pro-team: '*'
  enterprise-server: '*'
---

リモート Git コマンドや SSH の実行時に、接続がタイムアウトする場合があります:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_5.8p1, OpenSSL 1.0.0d 8 Feb 2011
> debug1: Connecting to {% data variables.command_line.codeblock %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Bad file number
```

### 問題の解決

#### HTTPS を使用する

最もシンプルな解決策は、単に SSH を一切回避することです。 多くのファイアウォールやプロキシでは、HTTPS トラフィックを問題なく許可しています。 これを活かすには、使用している[リモート URL](/articles/which-remote-url-should-i-use) を変更します。

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>reponame</em>.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

#### 別のネットワークからテストする

ファイアウォールのない別のネットワークにコンピュータを接続できる場合は、{% data variables.product.product_name %} への SSH 接続をテストしてみることができます。 想定通りにすべてが機能する場合は、ネットワーク管理者に問い合わせし、ファイアウォール設定で {% data variables.product.product_name %} への SSH 接続が成功するように許可するよう、サポートしてもらってください。

{% if currentVersion == "free-pro-team@latest" %}

#### HTTPS ポートを介して SSH を使用する

HTTPS を使用せず、ファイアウォール管理者が SSH 接続を許可しなかった場合は、[HTTPS ポートを介した SSH](/articles/using-ssh-over-the-https-port) の使用を試すことができます。

{% endif %}

{% if currentVersion == "free-pro-team@latest" %}

### 参考リンク

- [接続の問題のトラブルシューティング](/articles/troubleshooting-connectivity-problems)

{% endif %}
