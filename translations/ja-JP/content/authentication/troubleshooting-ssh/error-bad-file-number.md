---
title: 'エラー: Bad file number'
intro: このエラーは通常、サーバーに接続できなかったことを示します。 よくある原因はファイアウォールとプロキシサーバーです。
redirect_from:
  - /articles/error-bad-file-number
  - /github/authenticating-to-github/error-bad-file-number
  - /github/authenticating-to-github/troubleshooting-ssh/error-bad-file-number
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
ms.openlocfilehash: db2a47ad6029790cdbf9f0212087acc659326941
ms.sourcegitcommit: fb047f9450b41b24afc43d9512a5db2a2b750a2a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/11/2022
ms.locfileid: '145088218'
---
リモート Git コマンドや SSH の実行時に、接続がタイムアウトする場合があります:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Connecting to {% data variables.command_line.codeblock %} [207.97.227.239] port 22.
> debug1: connect to address 207.97.227.239 port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Connection timed out
> ssh: connect to host {% data variables.command_line.codeblock %} port 22: Bad file number
```

## 問題の解決

### HTTPS を使用する

最もシンプルな解決策は、単に SSH を一切回避することです。 多くのファイアウォールやプロキシでは、HTTPS トラフィックを問題なく許可しています。 これを活用するには、使用中の[リモート URL](/github/getting-started-with-github/about-remote-repositories) を変更します。

```shell
$ git clone https://{% data variables.command_line.codeblock %}/<em>username</em>/<em>reponame</em>.git
> Cloning into 'reponame'...
> remote: Counting objects: 84, done.
> remote: Compressing objects: 100% (45/45), done.
> remote: Total 84 (delta 43), reused 78 (delta 37)
> Unpacking objects: 100% (84/84), done.
```

### 別のネットワークからテストする

ファイアウォールのない別のネットワークにコンピュータを接続できる場合は、{% data variables.product.product_name %} への SSH 接続をテストしてみることができます。 想定通りにすべてが機能する場合は、ネットワーク管理者に問い合わせし、ファイアウォール設定で {% data variables.product.product_name %} への SSH 接続が成功するように許可するよう、サポートしてもらってください。

{% ifversion fpt or ghec %}

### HTTPS ポートを介して SSH を使用する

HTTPS を使用することができず、ファイアウォール管理者が SSH 接続を許可しない場合は、代わりに [HTTPS ポートを介して SSH を使用](/articles/using-ssh-over-the-https-port)します。

{% endif %}

{% ifversion fpt or ghec %}

## 参考資料

- 「[Troubleshooting connectivity problems](/articles/troubleshooting-connectivity-problems)」 (接続問題のトラブルシューティング)

{% endif %}
