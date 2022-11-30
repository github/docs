---
title: 'Error: Permission denied (publickey)'
intro: 「Permission denied」エラーは、サーバーが接続を却下したことを示します。 原因はいくつか考えられますが、最も一般的な例を説明します。
redirect_from:
  - /articles/error-permission-denied-publickey
  - /github/authenticating-to-github/error-permission-denied-publickey
  - /github/authenticating-to-github/troubleshooting-ssh/error-permission-denied-publickey
versions:
  fpt: '*'
  ghes: '*'
  ghae: '*'
  ghec: '*'
topics:
  - SSH
shortTitle: Permission denied (publickey)
ms.openlocfilehash: fdf69ae9777127851e1e0a1e85b5907ebd4a3557
ms.sourcegitcommit: 47bd0e48c7dba1dde49baff60bc1eddc91ab10c5
ms.translationtype: HT
ms.contentlocale: ja-JP
ms.lasthandoff: 09/05/2022
ms.locfileid: '145088211'
---
## `sudo` コマンドまたは管理者特権を Git で使用する必要がありますか?

`sudo` コマンドや管理者特権 (管理者権限など) を Git で使用しないでください。 あなたが使用 *しなければならない* 非常に良い理由`sudo`がある場合は、すべてのコマンドでそれを使用していることを確認してください(おそらくその時点でシェルをルートとして取得するために使用`su`することをお勧めします)。 `sudo` を使用せずに [SSH キーを生成](/articles/generating-an-ssh-key)して、`sudo git push` のようなコマンドを使用しようとすると、生成したものと同じキーは使用されません。

## 正しいサーバーに接続していることを確認する

キーボードで入力するというのは骨の折れる作業です。 入力内容に注意を払ってください。「githib.com」や「guthub.com」に接続することはできません。 一部の場合、企業ネットワークによって DNS レコードの解決の問題も発生します。

正しいドメインに接続していることを確かめるには、以下のコマンドを入力します:

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> OpenSSH_8.1p1, LibreSSL 2.7.3
> debug1: Reading configuration data /Users/<em>you</em>/.ssh/config
> debug1: Reading configuration data /etc/ssh/ssh_config
> debug1: /etc/ssh/ssh_config line 47: Applying options for *
> debug1: Connecting to {% data variables.command_line.codeblock %} port 22.
```

[SSH over HTTPS](/articles/using-ssh-over-the-https-port) を使用するように設定をオーバーライドしない限り、接続はポート 22{% ifversion fpt or ghec %} で行う必要があります{% endif %}。

## 常に「git」ユーザを使用する

リモート URL 向けを含むすべての接続は、「git」ユーザとして行われる必要があります。 {% data variables.product.product_name %} のユーザ名で接続しようとすると、失敗します:

```shell
$ ssh -T <em>GITHUB-USERNAME</em>@{% data variables.command_line.codeblock %}
> Permission denied (publickey).
```
接続が失敗し、{% data variables.product.product_name %} のユーザー名でリモート URL を使用している場合は、["git" ユーザーを使用するようリモート URL を変更](/github/getting-started-with-github/managing-remote-repositories)できます。

以下を入力して接続を確認します:

```shell
$ ssh -T git@{% data variables.command_line.codeblock %}
> Hi <em>username</em>! You've successfully authenticated...
```

## 使用中のキーを持っていることを確認する

{% mac %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. プライベートキーを生成し SSH に読み込ませていることを確認します。 
  ```shell
  # start the ssh-agent in the background
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endmac %}

{% windows %}

{% data reusables.desktop.windows_git_bash %}

1. {% data reusables.desktop.windows_git_bash_turn_on_ssh_agent %}

  {% data reusables.desktop.windows_git_for_windows_turn_on_ssh_agent %}
2. プライベートキーを生成し SSH に読み込ませていることを確認します。 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% endwindows %}

{% linux %}

{% data reusables.command_line.open_the_multi_os_terminal %}
2. プライベートキーを生成し SSH に読み込ませていることを確認します。 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```
  

{% endlinux %}

このコマンドは `ssh-add` 、数字と文字の長い文字列を出力 *する必要があります* 。 何も出力されない場合は、[新しい SSH キーを生成](/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)し、それを {% data variables.product.product_name %} に関連付ける必要があります。

{% tip %}

**ヒント**: ほとんどのシステムでは、既定の秘密キー (`~/.ssh/id_rsa` および `~/.ssh/identity`) が SSH 認証エージェントに自動的に追加されます。 キーを生成するときにファイル名をオーバーライドしない限り、`ssh-add path/to/key` を実行する必要はありません。

{% endtip %}

### 詳細を確認する

`git@{% data variables.command_line.backticks %}` に接続してキーが使用されていることを確認することもできます。

```shell
$ ssh -vT git@{% data variables.command_line.codeblock %}
> ...
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

## 公開鍵がアカウントに添付されていることを確認する

公開鍵を {% data variables.product.product_name %} に提供して、安全な接続を確立する必要があります。

{% mac %}

1. ターミナルを開きます。
2. バックグラウンドで SSH エージェントを開始します。
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
3. 自分の公開鍵のフィンガープリントを見つけてメモします。 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. SSH キーのリストを、`ssh-add` コマンドの出力と比較します。
![{% data variables.product.product_name %} の SSH キーのリスト](/assets/images/help/settings/ssh_key_listing.png)

{% endmac %}

{% windows %}

1. コマンドラインを開きます。
2. バックグラウンドで SSH エージェントを開始します。
  ```shell
  $ ssh-agent -s
  > Agent pid 59566
  ```
3. 自分の公開鍵のフィンガープリントを見つけてメモします。 
  ```shell
  $ ssh-add -l -E sha256
  > 2048 <em>SHA256:274ffWxgaxq/tSINAykStUL7XWyRNcRTlcST1Ei7gBQ</em> /Users/<em>USERNAME</em>/.ssh/id_rsa (RSA)
  ```

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. SSH キーのリストを、`ssh-add` コマンドの出力と比較します。
![{% data variables.product.product_name %} の SSH キーのリスト](/assets/images/help/settings/ssh_key_listing.png)

{% endwindows %}

{% linux %}

1. ターミナルを開きます。
2. バックグラウンドで SSH エージェントを開始します。
  ```shell
  $ eval "$(ssh-agent -s)"
  > Agent pid 59566
  ```
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

{% data reusables.user-settings.access_settings %} {% data reusables.user-settings.ssh %}
6. SSH キーのリストを、`ssh-add` コマンドの出力と比較します。
![{% data variables.product.product_name %} の SSH キーのリスト](/assets/images/help/settings/ssh_key_listing.png)

{% endlinux %}

{% data variables.product.product_name %} で公開キーが見つからない場合は、[{% data variables.product.product_name %} に SSH キーを追加](/articles/adding-a-new-ssh-key-to-your-github-account)してコンピューターと関連付ける必要があります。

{% warning %}

**警告**: 見慣れない SSH キーが {% data variables.product.product_name %} で見つかった場合は、すぐにそれを削除し、さらに支援が必要な場合は {% data variables.contact.contact_support %} に問い合わせてください。 確認できない公開鍵は、潜在的なセキュリティ上の問題を示している可能性があります。 詳細については、「[SSH キーをレビューする](/articles/reviewing-your-ssh-keys)」を参照してください。

{% endwarning %}
