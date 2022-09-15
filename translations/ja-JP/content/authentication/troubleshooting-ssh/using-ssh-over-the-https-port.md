---
title: HTTPS ポートを介して SSH を使用する
intro: '時々、ファイアウォールは SSH 接続を完全に許可することを拒否します。  [認証情報キャッシュを使用した HTTPS クローニング](/github/getting-started-with-github/caching-your-github-credentials-in-git) を使用することが選べない場合は、HTTPS ポート経由の SSH 接続を使用してクローンの作成を試みることができます。  ほとんどのファイアウォールルールでこれを許可する必要がありますが、プロキシサーバーが干渉する可能性があります。'
redirect_from:
  - /articles/using-ssh-over-the-https-port
  - /github/authenticating-to-github/using-ssh-over-the-https-port
  - /github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port
versions:
  fpt: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Use SSH over HTTPS port
ms.openlocfilehash: 47bdb96fac65d9432dfc54f671366d1b6c153556
ms.sourcegitcommit: 770ed406ec075528ec9c9695aa4bfdc8c8b25fd3
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '147883402'
---
{% tip %}

**{% data variables.product.prodname_ghe_server %} ユーザー**: HTTPS ポートを介した SSH 経由での {% data variables.product.prodname_ghe_server %} へのアクセスは現在サポートされていません。

{% endtip %}

HTTPS ポート経由の SSH が可能かどうかをテストするには、次の SSH コマンドを実行します:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi <em>username</em>! You've successfully authenticated, but GitHub does not
> provide shell access.
```

うまく機能すれば、素晴らしいことです。 そうでない場合は、[トラブルシューティング ガイドに従って](/articles/error-permission-denied-publickey)ください。

## HTTPS を介した SSH 接続を有効化する

ポート 443 経由で `git@ssh.{% data variables.command_line.backticks %}` に SSH 接続できる場合、SSH 設定をオーバーライドして、{% data variables.product.product_location %} への接続をそのサーバーとポート経由で実行するように強制できます。

SSH 構成ファイルでこれを設定するには、`~/.ssh/config` でファイルを編集し、次のセクションを追加します。

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
