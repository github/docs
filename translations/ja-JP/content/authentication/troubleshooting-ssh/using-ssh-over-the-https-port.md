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
ms.openlocfilehash: 24a56147129e68c674eaf8dc733a203e2b03348a
ms.sourcegitcommit: 8c8d8598beeaa4f83b3f30cb160a5288fdb4ef9a
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 12/02/2022
ms.locfileid: '148190323'
---
{% tip %}

**{% data variables.product.prodname_ghe_server %} ユーザー**: HTTPS ポートを介した SSH 経由での {% data variables.product.prodname_ghe_server %} へのアクセスは現在サポートされていません。

{% endtip %}

HTTPS ポート経由の SSH が可能かどうかをテストするには、次の SSH コマンドを実行します:

```shell
$ ssh -T -p 443 git@ssh.github.com
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

{% note %}

**注**: ポート 443 のホスト名は、`{% data variables.command_line.backticks %}` ではなく `ssh.{% data variables.command_line.backticks %}` です。

{% endnote %}

うまく機能すれば、素晴らしいことです。 そうでない場合は、[トラブルシューティング ガイドに従って](/articles/error-permission-denied-publickey)ください。

ここで、リポジトリをクローンするには、次のコマンドを実行できます。

```
$ git clone ssh://git@ssh.{% data variables.command_line.codeblock %}:443/YOUR-USERNAME/YOUR-REPOSITORY.git
```

## HTTPS を介した SSH 接続を有効化する

ポート 443 経由で `git@ssh.{% data variables.command_line.backticks %}` に SSH 接続できる場合は、SSH の設定をオーバーライドして、{% data variables.location.product_location %} への接続をそのサーバーとポートを通して実行するように強制できます。

SSH 構成ファイルでこれを設定するには、`~/.ssh/config` でファイルを編集し、次のセクションを追加します。

```
Host {% data variables.command_line.codeblock %}
Hostname ssh.{% data variables.command_line.codeblock %}
Port 443
User git
```

{% data variables.location.product_location %} にもう一度接続することで、これが機能することをテストできます。

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi USERNAME! You've successfully authenticated, but GitHub does not
> provide shell access.
```

## 既知のホストを更新する

ポート 443 に切り替えた後で GitHub を初めて使うときに、`known_hosts` でホストが見つからなかったか、別の名前で見つかったことを示す警告メッセージが、表示されることがあります。

```ShellSession
> The authenticity of host '[ssh.github.com]:443 ([140.82.112.36]:443)' can't be established.
> ED25519 key fingerprint is SHA256:+DiY3wvvV6TuJJhbpZisF/zLDA0zPMSvHdkr4UvCOqU.
> This host key is known by the following other names/addresses:
>     ~/.ssh/known_hosts:32: github.com
> Are you sure you want to continue connecting (yes/no/[fingerprint])?
```

SSH のフィンガープリントが公開されている GitHub のフィンガープリントのいずれかと一致するなら、この質問に "はい" と答えても安全です。 フィンガープリントの一覧については、「[GitHub の SSH キーフィンガープリント](/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints)」をご覧ください。
